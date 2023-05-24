import { component$ } from "@builder.io/qwik";
import { Link, useContent, useLocation } from "@builder.io/qwik-city";
import { Logo } from "../icons/logo";

export default component$(() => {
  const location = useLocation();
  const { menu } = useContent();

  // Extraer las opciones del menu.
  const menuNav = menu?.items?.map((item) => item);

  return (
    <header class="bg-brand w-full border border-black">
      <div class="nav flex flex-col md:flex-row gap-6 w-full justify-between items-center p-5 md:px-20 mx-auto max-w-[1400px]">
        <Link href="/home">
          <Logo classCustom="w-48 h-auto" />
        </Link>
        <ul class="flex gap-8">
          {menuNav
            ? menuNav[0].items?.map((item) => (
                <li key={item.text}>
                  <Link
                    // Ojo con la class, es interesante.
                    class={{
                      "flex scale-100 transition-all hover:scale-125 focus:scale-125":
                        true,
                      "!font-bold": location.url.pathname === item.href,
                    }}
                    href={item.href}
                  >
                    {item.text}
                  </Link>
                </li>
              ))
            : null}
          <li>
            <Link class="btn btn-contrast" href="/">
              Exit
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
});
