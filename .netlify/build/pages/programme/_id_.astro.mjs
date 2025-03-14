import { e as createComponent, f as createAstro, i as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C3Rf3ahv.mjs';
import { f as ActivitesById, A as ActeurReaById } from '../../chunks/backend_CHWkaQGZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const act = await ActivitesById(id);
  const anim = await ActeurReaById(act.animateur);
  if (!act) {
    return Astro2.redirect("/invite");
  }
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": act.titre_act }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="flex justify-center font-aclonica text-purple text-3xl mt-30">${act.titre_act}</h1> <div class="mb-20 w-5/6 mx-auto"> <div class="mt-10 flex flex-col items-center gap-4 lg:flex-row"> <img class="rounded-2xl w-1/2 lg:mr-5 lg:w-2/5"${addAttribute(anim.img, "src")}${addAttribute(`Image de ${anim.nom}`, "alt")}> <div class="mt-10 flex flex-col items-center gap-10 lg:items-start"> <div class="text-start flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Type :</p> <p class="text-xl font-comfortaa text-brown">${act.type}</p> </div> <div class="text-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Date de l'activité:</p> <p class="text-xl font-comfortaa text-brown">${formatDateHeure(act.date)}</p> </div> <div class="text-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Lieu : </p> <p class="text-xl font-comfortaa text-brown">${act.lieu}</p> </div> <div class="text-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Animateur(trice) : </p> <p class="text-xl font-comfortaa text-brown">${anim.prenom} ${anim.nom}</p> </div> <div class="text-center flex flex-col lg:items-start"> <p class="text-2xs font-comfortaa text-brown">Film : </p> <p class="text-xl font-comfortaa text-brown">${anim.prenom} ${anim.nom}</p> </div> </div> </div> </div> ` })}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/programme/[id].astro", void 0);

const $$file = "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/programme/[id].astro";
const $$url = "/programme/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
