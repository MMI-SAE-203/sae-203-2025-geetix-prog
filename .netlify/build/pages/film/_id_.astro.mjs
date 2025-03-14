import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, j as Fragment } from '../../chunks/astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C3Rf3ahv.mjs';
import { F as FilmById, A as ActeurReaById } from '../../chunks/backend_CHWkaQGZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const prop = await FilmById(id);
  if (!prop) {
    return Astro2.redirect("/film");
  }
  let invites = [];
  const inviteIds = Array.isArray(prop.invite) ? prop.invite : prop.invite ? [prop.invite] : [];
  const invitePromises = inviteIds.map((inviteId) => ActeurReaById(inviteId));
  const inviteData = await Promise.all(invitePromises);
  invites = inviteData.filter((invite) => invite);
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": prop.titre_film }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="flex justify-center font-aclonica text-purple text-3xl mt-30">${prop.titre_film}</h1> <div class="mb-20 w-5/6 mx-auto"> <div class="mt-10 flex flex-col items-center gap-4 lg:flex-row"> <img class="mr-6 rounded-2xl w-1/2 lg:w-2/5"${addAttribute(prop.imageUrl, "src")}${addAttribute(`Image de ${prop.titre_film}`, "alt")}> <div class="mt-10 flex flex-col items-center gap-10 lg:items-start"> ${prop.bandeannonce && renderTemplate`<div class="mt-6 p-4 rounded-lg"> <iframe class="mt-4 rounded-lg shadow-md w-full h-64 lg:h-50"${addAttribute(prop.bandeannonce.replace("watch?v=", "embed/"), "src")} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> </div>`} <div class="w-9/10 items-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Synopsis : </p> <p class="text-xl font-comfortaa text-brown">${prop.synopsis}</p> </div> <div class="text-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">De :</p> <p class="text-xl font-comfortaa text-brown">${prop.realisateur}</p> </div> <div class="text-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Durée :</p> <p class="text-xl font-comfortaa text-brown">${prop.duree} minutes</p> </div> <div class="text-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Date de projection : </p> <p class="text-xl font-comfortaa text-brown">${formatDateHeure(prop.date_projection)}</p> </div> <div class="text-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Invité${invites.length > 1 ? "s" : ""} : </p> <div> ${invites.length > 0 ? invites.map((invite, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <a${addAttribute(`/invite/${invite.id}`, "href")} class="text-xl font-comfortaa text-pink lg:hover:text-pink-500"> ${invite.prenom} ${invite.nom} </a> ${index < invites.length - 1 && renderTemplate`<span class="text-brown">, </span>`}` })}`) : renderTemplate`<p class="text-xl font-comfortaa text-brown">Aucun invité</p>`} </div> </div> </div> </div> </div> ` })}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/film/[id].astro", void 0);

const $$file = "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/film/[id].astro";
const $$url = "/film/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
