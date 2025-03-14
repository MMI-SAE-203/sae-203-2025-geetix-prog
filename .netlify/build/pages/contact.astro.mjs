import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import { $ as $$Layout, T as Twitter, F as Facebook, I as Instagram } from '../chunks/Layout_C3Rf3ahv.mjs';
import { a as allFestival } from '../chunks/backend_CHWkaQGZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const festi = await allFestival();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto p-4 mt-20"> <div class="flex justify-center text-4xl mt-10 mb-7"> <h1 class="lg:ml-10 font-aclonica uppercase text-2xl lg:text-3xl text-purple">Nous contacter</h1> </div> <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-5/12 mx-auto"> <div class="mb-4"> <label class="block text-purple font-comfortaa text-sm font-bold mb-2" for="name">
Nom
</label> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-purple leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="ton nom"> </div> <div class="mb-4"> <label class="block text-purple font-comfortaa text-sm font-bold mb-2" for="email">
Email
</label> <input class="shadow appearance-none border rounded w-full py-2 px-3 text-purple leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Ton email"> </div> <div class="mb-6"> <label class="block text-purple font-comfortaa text-sm font-bold mb-2" for="message">
Message
</label> <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-purple leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Ton message"></textarea> </div> <div class="flex justify-center"> <button class="bg-purple lg:hover:bg-purple-500 lg:transition text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
Envoyer
</button> </div> </form> <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-5/12 mx-auto"> <h2 class="font-comfortaa pb-7 text-purple text-2xl">Nos coordonnées</h2> <div class="pb-3"> <p class="text-purple font-comfortaa text-lg">Email :</p> <p class="text-purple font-comfortaa text-lg">${festi[0].email}</p> </div> <div class="pb-3"> <p class="text-purple font-comfortaa text-lg">Téléphone :</p> <p class="text-purple font-comfortaa text-lg">${festi[0].tel_num}</p> </div> <div class="pb-3"> <p class="text-purple font-comfortaa text-lg">Adresse :</p> <p class="text-purple font-comfortaa text-lg">${festi[0].adresse}</p> </div> </div> <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:w-5/12 mx-auto"> <h2 class="font-comfortaa pb-7 text-purple text-2xl">Nos réseaux</h2> <div class="flex justify-around gap-4"> <div class="lg:hover:scale-105 transition flex flex-wrap justify-center"> ${renderComponent($$result2, "Twitter", Twitter, { "class": "lg:hover:scale-105 transition w-10 h-10 inline-block" })} <a href="" class="font-comfortaa text-purple text-xs">@Miaullywood_</a> </div> <div class="lg:hover:scale-105 transition flex flex-wrap justify-center"> ${renderComponent($$result2, "Facebook", Facebook, { "class": "w-10 h-10 inline-block" })} <a href="" class="font-comfortaa text-purple text-xs">@Miaullywood</a> </div> <div class="lg:hover:scale-105 transition flex flex-wrap justify-center"> ${renderComponent($$result2, "Instagram", Instagram, { "class": "w-10 h-10 inline-block" })} <a href="" class="font-comfortaa text-purple text-xs">@Miaullywood</a> </div> </div> </div> </div> ` })}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/contact/index.astro", void 0);

const $$file = "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
