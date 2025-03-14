import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$CardPageInvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardPageInvite;
  const { ...item } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class=" flex flex-wrap gap-2 justify-center mx-auto bg-brown p-4 rounded-lg shadow-lg w-64"> <img${addAttribute(item.img, "src")}${addAttribute(item.nom, "alt")} class="w-64 h-64 object-cover rounded"> <p class="text-white font-comfortaa">${item.prenom} ${item.nom}</p> <a class="text-blue font-comfortaa"${addAttribute(`/invite/${item.id}`, "href")}>En savoir plus</a> </div>`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Card_page_invite.astro", void 0);

export { $$CardPageInvite as $ };
