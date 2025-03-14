import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C3Rf3ahv.mjs';
import { A as ActeurReaById, F as FilmById } from '../../chunks/backend_CHWkaQGZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const personne = await ActeurReaById(id);
  const film = await FilmById(personne.film_associe);
  if (!personne) {
    return Astro2.redirect("/invite");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": personne.nom }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="flex justify-center font-aclonica text-purple text-3xl mt-30">${personne.prenom} ${personne.nom}</h1> <div class="mb-20 w-5/6 mx-auto"> <div class="mt-10 flex flex-col items-center gap-4 lg:flex-row"> <img class="rounded-2xl w-1/2 lg:w-2/5"${addAttribute(personne.img, "src")}${addAttribute(`Image de ${personne.nom}`, "alt")}> <div class="mt-10 flex flex-col items-center gap-10 lg:items-start"> <div class="text-start flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Biographie :</p> <p class="text-xl font-comfortaa text-brown">${personne.biographie}</p> </div> <div class="text-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Email :</p> <p class="text-xl font-comfortaa text-brown">${personne.email}</p> </div> <div class="text-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Date de projection : </p> <p class="text-xl font-comfortaa text-brown">${personne.role}</p> </div> <div class="text-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Participe dans : </p> <a${addAttribute(`/film/${film.id}`, "href")} class="text-xl font-comfortaa text-pink lg:hover:text-pink-500">${film.titre_film}</a> </div> </div> </div> </div> ` })}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/[id].astro", void 0);

const $$file = "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/[id].astro";
const $$url = "/invite/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$id,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
