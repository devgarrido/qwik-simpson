import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";

import Container from "~/components/container";

export default component$(() => {
  return (
    <Container classCustom="my-8 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8">
      <div class="flex flex-col gap-4 text-center lg:text-left">
        <h1 class="text-xl font-bold lg:text-5xl">
          About The Simpsons Quate App
        </h1>
        <div class="lg:max-w-3xl">
          <p>
            The Simpsons is a beloved animated television show that has been on
            the air since 1989, and it has a massive following of fans who love
            the show's humor, characters, and memorable moments. The show has
            also become a cultural phenomenon, with many of its characters and
            catchphrases becoming part of the popular lexicon.
          </p>
          <p>
            Knowing quotes from The Simpsons can be cool for a few reasons.
            First, it can help you connect with other fans of the show and spark
            conversations about favorite episodes, characters, and jokes.
            Second, many of the show's quotes have become iconic and are often
            referenced in popular culture, so knowing them can make you feel
            more in tune with current trends and references.
          </p>
          <p>
            Furthermore, The Simpsons has often tackled social and political
            issues through satire and parody, making its quotes more than just
            funny one-liners. Being familiar with the show's commentary on
            current events and societal trends can also make you more aware and
            engaged with the world around you.
          </p>
          <p>
            API and images:{" "}
            <a
              title="See the API documentation"
              class="hover:underline focus:underline"
              rel="nofollow noopener"
              href="https://thesimpsonsquoteapi.glitch.me/quotes"
            >
              https://thesimpsonsquoteapi.glitch.me/quotes
            </a>
          </p>
        </div>
      </div>

      <figure class="flex justify-center min-w-min">
        <img
          width={300}
          height="auto"
          class="object-contain"
          src="../img/lisa.png"
          alt="Lisa Simpson"
        />
      </figure>
    </Container>
  );
});

export const head: DocumentHead = {
  title: "About - The Simpsons App",
  meta: [
    {
      name: "description",
      content: "Página de about de la app The Simpsons Quote",
    },
    {
      name: "og:title",
      content: "The Simpsons Quote Application",
    },
    {
      name: "og:description",
      content:
        "Página de about de la aplicación The Simpsons Quote Application",
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
      content:
        "Página de about de la aplicación The Simpsons Quote Application",
    },
    {
      name: "twitter:image",
      content: "https://the-simpsons-qwik.vercel.app/img/thumbnail.png",
    },
  ],
};
