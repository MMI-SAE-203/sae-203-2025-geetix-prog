import { e as createComponent, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C3Rf3ahv.mjs';
import { $ as $$CardPageInvite } from '../chunks/Card_page_invite_DcAzJWgH.mjs';
import { e as ActeurReaSorted } from '../chunks/backend_CHWkaQGZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const invite = await ActeurReaSorted();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-40 mb-15"> <h1 class="lg:ml-10 font-aclonica text-purple ml-3 text-2xl lg:text-3xl">Listes des invités :</h1> <div class="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-20"> ${invite.map((item) => renderTemplate`${renderComponent($$result2, "Card_page_invite", $$CardPageInvite, { ...item })}`)} </div> <div class="items-center flex justify-center"> <a class="bg-purple lg:hover:bg-purple-500 font-comfortaa lg:transition text-white-100 px-2 py-3 rounded-full" href="invite/add">Ajouter un invité</a> </div> <div class="flex justify-center mt-10 gap-10"> <a class="text-purple border border-purple-500 rounded px-4 py-2 hover:bg-purple-500 hover:text-white hover:transition delay-150" href="invite/role/realisateur">Voir les réalisateurs</a> <a class="text-purple border border-purple-500 rounded px-4 py-2 hover:bg-purple-500 hover:text-white hover:transition delay-150" href="invite/role/acteur">Voir les acteurs</a> <a class="text-purple border border-purple-500 rounded px-4 py-2 hover:bg-purple-500 hover:text-white hover:transition delay-150" href="invite/role/animateur">Voir les animateurs</a> </div> </div> ` })}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/index.astro", void 0);

const $$file = "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/index.astro";
const $$url = "/invite";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
