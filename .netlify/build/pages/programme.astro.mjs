import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C3Rf3ahv.mjs';
import 'clsx';
import { h as getActivitiesByDay } from '../chunks/backend_CHWkaQGZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$CardProgramme = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardProgramme;
  const { dayName, activities } = Astro2.props;
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
  return renderTemplate`${maybeRenderHead()}<div class=" group relative mt-10 w-4/5 mx-auto card-container"> <div class="transform transition-transform duration-300 group-hover:scale-101 bg-purple rounded-4xl rounded-tr-4xl p-4 text-center card"> <h2 class="text-3xl capitalize text-blue font-aclonica">${dayName}</h2> <div class="mt-2 "> ${activities.map((activity) => renderTemplate`<div class="py-2 border-b border-purple-300 last:border-0"> <div class="text-start mb-5"> <p class="font-comfortaa  text-white-100">Activité :</p> <p class="font-comfortaa text-white">${activity.titre_act}</p> </div> <div class="text-start mb-5"> <p class="font-comfortaa  text-white-100">Type :</p> <p class="font-comfortaa text-white">${activity.type}</p> </div> <div class="text-start mb-5"> <p class="font-comfortaa  text-white-100">Lieu :</p> <p class="font-comfortaa text-white">${activity.lieu}</p> </div> <div class="text-start mb-5"> <p class="font-comfortaa  text-white-100">Horaire :</p> <p class="font-comfortaa text-white">${formatDateHeure(activity.date)}</p> </div> <div class="text-start mb-5"> <p class="font-comfortaa text-left text-white-100">Description :</p> <p class="font-comfortaa text-white">${activity.description}</p> </div> <div class="flex justify-center text-2xl pb-5"> <a${addAttribute(`/programme/${activity.id}`, "href")} class="text-blue">Voir plus →</a> </div> </div>`)} </div> </div> </div>`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Card_programme.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const activitiesByDay = await getActivitiesByDay();
  const futureActivities = activitiesByDay.filter((dayGroup) => {
    const date = new Date(dayGroup.date);
    const today = /* @__PURE__ */ new Date();
    return date >= today;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-40 mb-15"> <h1 class="lg:ml-10 font-aclonica text-purple ml-3 text-2xl lg:text-3xl">Listes du programme d'activité du festival :</h1> <div class="lg:grid lg:grid-cols-3 lg:w-19/20 lg:mx-auto lg:gap-10"> ${futureActivities.length > 0 ? futureActivities.map((dayGroup) => renderTemplate`${renderComponent($$result2, "Card", $$CardProgramme, { "dayName": dayGroup.dayName, "activities": dayGroup.activities })}`) : renderTemplate`<p class="text-center">
Aucune activité disponible pour le moment.
</p>`} </div> </div> <div class="items-center pb-20 flex justify-center"> <a class="bg-purple lg:hover:bg-purple-500 lg:transition font-comfortaa text-white-100 px-2 py-3 rounded-full" href="programme/add">Ajouter une activitée</a> </div> ` })}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/programme/index.astro", void 0);

const $$file = "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/programme/index.astro";
const $$url = "/programme";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
