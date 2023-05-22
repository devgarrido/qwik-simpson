import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-red-800 bg-brand">The Simpsons App</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "The Simpsons App",
  meta: [
    {
      name: "description",
      content: "Página de inicio de la app The Simpsons Quote",
    },
  ],
};
