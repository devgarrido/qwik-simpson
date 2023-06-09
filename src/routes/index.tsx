import { component$ } from "@builder.io/qwik";
import { type DocumentHead, Link } from "@builder.io/qwik-city";
import { Logo } from "~/components/icons/logo";

export default component$(() => {
  return (
    <div class="flex flex-col min-h-screen bg-brand text-center p-4 items-center justify-center">
      <Logo classCustom="w-64 sm:w-[35rem]" />
      <h2 class="text-xl my-1 font-medium">
        Discover some of the most amazing Quotes from the Simpsons
      </h2>
      <div class="m-2">
        <strong>DISCLAIMER:</strong> This is an unofficial app (even though it
        look so cool!!!)
      </div>
      <Link class="btn" href="/home">
        Enter App
      </Link>
      <figure class="flex gap-12">
        <img
          width={200}
          height="auto"
          class="object-contain hidden md:block"
          src="./img/bart.png"
          alt="Bart Simpson"
        />
        <img
          width={200}
          height="auto"
          class="object-contain mt-12 hidden md:block"
          src="./img/homer.png"
          alt="Homero Simpson"
        />
        <img
          width={240}
          height="auto"
          class="object-contain mt-10 md:mt-0"
          src="./img/moe.png"
          alt="Maurice Lester Szyslak"
        />
      </figure>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Inicio - The Simpsons App",
  meta: [
    {
      name: "description",
      content: "Página de inicio de la app The Simpsons Quote",
    },
    {
      name: "og:title",
      content: "The Simpsons Quote Application",
    },
    {
      name: "og:description",
      content:
        "Página de inicio de la aplicación The Simpsons Quote Application",
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
        "Página de inicio de la aplicación The Simpsons Quote Application",
    },
    {
      name: "twitter:image",
      content: "https://the-simpsons-qwik.vercel.app/img/thumbnail.png",
    },
  ],
};
