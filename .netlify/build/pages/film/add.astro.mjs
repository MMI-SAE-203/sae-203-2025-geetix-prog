import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C3Rf3ahv.mjs';
import { b as addFilm } from '../../chunks/backend_CHWkaQGZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await addFilm(formData);
    message = response.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-20 flex flex-col items-center justify-center container mx-auto p-4"> <div class="flex justify-center text-4xl mt-10 mb-7"> <h1 class="font-aclonica uppercase text-purple">Ajouter un film</h1> </div> <form action="/film/add" method="POST" enctype="multipart/form-data" class="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"> <div class="mb-4"> <label for="titre_film" class="block font-comfortaa mb-2 text-purple">Nom du film</label> <input type="text" id="titre_film" name="titre_film" placeholder="Nom du film" required class="w-full p-2 border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="affiche_film" class="block font-comfortaa mb-2 text-purple">Affiche du film</label> <input type="file" id="affiche_film" name="affiche_film" accept="image/*" required class="w-full p-2 border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="genre" class="block font-comfortaa mb-2 text-purple">Genre du film</label> <input type="text" id="genre" name="genre" placeholder="Genre du film" class="w-full p-2 border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="liste_acteurs" class="block font-comfortaa mb-2 text-purple">Liste des acteurs</label> <input type="text" id="liste_acteurs" name="liste_acteurs" placeholder="Liste des acteurs" class="w-full p-2 border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="realisateur" class="block font-comfortaa mb-2 text-purple">Réalisateur du film</label> <input type="text" id="realisateur" name="realisateur" placeholder="Realisateur" class="w-full p-2 border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="date_projection" class="block font-comfortaa mb-2 text-purple">Date de projection du film</label> <input type="date" id="date_projection" name="date_projection" placeholder="Date de projection" class="w-full p-2 border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="duree" class="block font-comfortaa mb-2 text-purple">Duree du film</label> <input type="number" id="duree" name="duree" placeholder="Duree" class="w-full p-2 border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="synopsis" class="block font-comfortaa mb-2 text-purple">Synopsis du film</label> <textarea type="text" id="synopsis" name="synopsis" placeholder="Synopsis" class="w-full p-2 border border-gray-300 rounded-md"></textarea> </div> <div class="flex justify-center"> <button type="submit" class="bg-purple lg:hover:bg-purple-500 text-white font-comfortaa py-2 px-4 rounded-full">Ajouter</button> </div> </form> <p class="mt-4 text-pink">${message}</p> </div> ` })}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/film/add.astro", void 0);

const $$file = "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/film/add.astro";
const $$url = "/film/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
