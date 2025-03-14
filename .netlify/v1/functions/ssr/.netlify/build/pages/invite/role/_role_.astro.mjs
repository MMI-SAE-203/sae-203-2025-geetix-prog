import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import { g as getInviteByRole } from '../../../chunks/backend_CHWkaQGZ.mjs';
import { $ as $$CardPageInvite } from '../../../chunks/Card_page_invite_DcAzJWgH.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_C3Rf3ahv.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$role = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$role;
  const { role } = Astro2.params;
  const invite = await getInviteByRole(role);
  console.log(invite);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-40 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mb-20"> ${invite.map((invites) => renderTemplate`${renderComponent($$result2, "Cards", $$CardPageInvite, { ...invites })}`)} </div> <div class="flex justify-center mb-10"> <button class="text-purple border border-purple-500 rounded px-4 py-2 hover:bg-purple-500 hover:text-white hover:transition delay-150 lg:cursor-pointer" onclick="history.back()">Retour aux invité</button> </div> ` })}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/role/[role].astro", void 0);

const $$file = "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/role/[role].astro";
const $$url = "/invite/role/[role]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$role,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
