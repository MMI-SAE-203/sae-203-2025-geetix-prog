import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C3Rf3ahv.mjs';
import 'clsx';
import { c as allFilmSorted } from '../chunks/backend_CHWkaQGZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardFilm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardFilm;
  const { ...item } = Astro2.props;
  function formatDateHeure(dateString) {
    const date = new Date(dateString);
    date.setHours(date.getHours() - 2);
    const jourDate = date.toLocaleDateString("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long"
    });
    const heure = date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit"
    });
    return `${jourDate} - ${heure}`;
  }
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto flex flex-col items-center justify-center gap-4 p-4 bg-brown rounded-lg shadow-lg w-64"> <img${addAttribute(item.img, "src")}${addAttribute(item.titre_film, "alt")} class="w-64 h-64 object-cover rounded"> <h2 class="text-s font-comfortaa font-bold text-white-100">${item.titre_film}</h2> <p class="pt-3 text-xs font-comfortaa text-white-100">${formatDateHeure(item.date_projection)}</p> <div> <p class="pt-3 text-xs font-comfortaa text-white-100">De ${item.realisateur}</p> </div> <div class="flex justify-end"> <a${addAttribute(`/film/${item.id}`, "href")} class="text-purple">Voir plus →</a> </div> </div>`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Card_film.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const films = await allFilmSorted();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-40 mb-15"> <h1 class="lg:ml-10 font-aclonica text-purple ml-3 text-2xl lg:text-3xl">Listes des films en compétitions :</h1> <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-20"> ${films.map((item) => renderTemplate`${renderComponent($$result2, "Card_film", $$CardFilm, { ...item })}`)} </div> <div class="items-center flex justify-center"> <a class="bg-purple lg:hover:bg-purple-500 font-comfortaa lg:transition text-white-100 px-2 py-3 rounded-full" href="film/add">Ajouter un film</a> </div> </div> ` })}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/film/index.astro", void 0);

const $$file = "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/film/index.astro";
const $$url = "/film";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
