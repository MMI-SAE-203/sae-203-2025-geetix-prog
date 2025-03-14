import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C3Rf3ahv.mjs';
import { d as addInvite } from '../../chunks/backend_CHWkaQGZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await addInvite(formData);
    message = response.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-20 flex flex-col items-center justify-center container mx-auto p-4"> <div class="flex justify-center text-4xl mt-10 mb-7"> <h1 class="font-aclonica uppercase text-purple">Ajouter un invité</h1> </div> <form action="/invite/add" method="POST" enctype="multipart/form-data" class="w-full max-w-lg bg-white p-6 rounded-lg shadow-md"> <div class="mb-4"> <label for="nom" class="block font-comfortaa mb-2 text-purple">Nom de l'invité</label> <input type="text" id="nom" name="nom" placeholder="Nom de l'invite" required class="w-full p-2 border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="prenom" class="block font-comfortaa mb-2 text-purple">Prenom de l'invité</label> <input type="text" id="prenom" name="prenom" placeholder="Prenom de l'invite" required class="w-full p-2 border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="photo" class="block font-comfortaa mb-2 text-purple">Photo de l'invité</label> <input type="file" id="photo" name="photo" accept="image/*" required class="w-full p-2 border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="email" class="block font-comfortaa mb-2 text-purple">Email de l'invité</label> <input type="text" id="email" name="email" placeholder="Email de l'invité" class="w-full p-2 border border-gray-300 rounded-md"> </div> <div class="mb-4"> <label for="biographie" class="block font-comfortaa mb-2 text-purple">Biographie de l'invité</label> <textarea type="text" id="biographie" name="biographie" placeholder="Biographie de l'invité" class="w-full p-2 border border-gray-300 rounded-md"></textarea> </div> <div class="flex justify-center"> <button type="submit" class="bg-purple lg:hover:bg-purple-500 text-white font-comfortaa py-2 px-4 rounded-full">Ajouter</button> </div> </form> <p class="mt-4 text-pink">${message}</p> </div> ` })}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/add.astro", void 0);

const $$file = "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/add.astro";
const $$url = "/invite/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
