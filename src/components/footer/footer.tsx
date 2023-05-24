import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <footer class="bg-brand flex flex-col justify-center items-center text-center py-8 px-5 gap-2 border border-black">
      <div class="text-sm">
        <strong>All Rights Reserved</strong> - Oh Lord Matt Groening - 1989-2023
      </div>
      <small>
        This app was done by{" "}
        <a
          title="Enlace a Github de garrido.pro"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.garrido.pro"
        >
          Antonio Garrido
        </a>
      </small>
    </footer>
  );
});
