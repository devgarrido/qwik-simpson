import { component$, useSignal } from "@builder.io/qwik";
import { type DocumentHead, Link, routeLoader$ } from "@builder.io/qwik-city";
import { fetchSimpson } from "~/api/fetchSimpsons";
import Container from "~/components/container";
import { IconQuote } from "~/components/icons/icon-quote";
import type { Character } from "~/types/types";

export const useCharacters = routeLoader$(async () => {
  try {
    return await fetchSimpson();
  } catch (error) {
    console.error(error);
    return [];
  }
});

export default component$(() => {
  const { value: characters } = useCharacters();
  const filteredCharacteres = getDifferentFilteredCharacters(characters);

  const characterSelected = useSignal({});

  // function para filtrar : 1- que miren a la derecha y 2-que no se repitan.
  function getDifferentFilteredCharacters(characters: Character[]) {
    const uniqueCharacters = new Set();
    return characters
      .filter((user: Character) => user.characterDirection === "Right")
      .filter((user: Character) => {
        if (uniqueCharacters.has(user.character)) {
          return false;
        } else {
          uniqueCharacters.add(user.character);
          return true;
        }
      });
  }

  return (
    <Container classCustom="my-8 flex flex-col items-center justify-center gap-8">
      <div class="text-center">
        <h1 class="font-bold text-xl lg:text-5xl">The Simpson Quote App</h1>
        <p class="text-normal font-semibold">
          Click on the quote of your favorite character
        </p>
      </div>
      <ul class="w-full grid list-none grid-cols-[repeat(auto-fit,minmax(160px,1fr))] place-items-center gap-6">
        {filteredCharacteres?.slice(0, 12).map((user: Character) => (
          <li key={user.character}>
            <figure class="overflow-hidden relative">
              <picture class="max-w-[150px] max-h-[150px] flex border border-black bg-brand overflow-hidden">
                <img
                  width={160}
                  height="auto"
                  class="max-w-full object-cover object-top translate-x-4"
                  src={user.image}
                  alt={user.character}
                />
              </picture>
              <button
                onClick$={() => (characterSelected.value = user)}
                class="border border-black bg-white absolute right-0 bottom-[20px] cursor-pointer hover:bg-gray-50"
              >
                <IconQuote classCustom="max-w-[40px] max-h-[40px]" />
              </button>
              <figcaption class="text-sm">{user.character}</figcaption>
            </figure>
            {characterSelected.value == user && (
              <div class="z-10 fixed flex flex-col items-center justify-center inset-0 bg-black bg-opacity-75 transition-opacity">
                <div class="relative pt-20 px-12 pb-12 bg-white max-w-[300px] w-full">
                  <button
                    class="btn btn-contrast absolute top-5 right-5"
                    onClick$={() => (characterSelected.value = {})}
                    aria-label="Close Quote Character"
                  >
                    {" "}
                    X
                  </button>
                  <blockquote class="flex flex-col gap-2">
                    "{user.quote}" <i>{user.character}</i>
                  </blockquote>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      <Link reload class="btn btn-brand">
        New Quotes
      </Link>
    </Container>
  );
});

export const head: DocumentHead = {
  title: "Home - The Simpsons App",
  meta: [
    {
      name: "description",
      content: "Página de home de la app The Simpsons Quote",
    },
    {
      name: "og:title",
      content: "The Simpsons Quote Application",
    },
    {
      name: "og:description",
      content: "Página de home de la aplicación The Simpsons Quote Application",
    },
    {
      name: "og:image",
      content: "https://the-simpsons-qwik.vercel.app/img/thumbnail.png",
    },
    {
      name: "og:url",
      content: "https://the-simpsons-qwik.vercel.app/",
    },
    {
      name: "keywords",
      content:
        "The Simpsons, Simpsons Quote, App Simpsons, Simpsons Qwik Quote",
    },
    {
      name: "author",
      content: "Antonio Garrido",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "The Simpsons Quote Application",
    },
    {
      name: "twitter:description",
      content: "Página de home de la aplicación The Simpsons Quote Application",
    },
    {
      name: "twitter:image",
      content: "https://the-simpsons-qwik.vercel.app/img/thumbnail.png",
    },
  ],
};
