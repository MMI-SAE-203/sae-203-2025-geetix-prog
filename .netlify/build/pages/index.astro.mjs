import { e as createComponent, f as createAstro, m as maybeRenderHead, r as renderTemplate, i as renderComponent } from '../chunks/astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
import { c as createSvgComponent, $ as $$Layout } from '../chunks/Layout_C3Rf3ahv.mjs';
import 'clsx';
import { e as ActeurReaSorted, h as getActivitiesByDay } from '../chunks/backend_CHWkaQGZ.mjs';
export { renderers } from '../renderers.mjs';

const Line = createSvgComponent({"meta":{"src":"/_astro/line.Cp9kE6Bj.svg","width":49,"height":458,"format":"svg"},"attributes":{"mode":"inline","width":"49","height":"458","fill":"none"},"children":"<g filter=\"url(#a)\"><path d=\"M-5 20s21 59.209 23.5 74.68v0c8.273 51.201-21.139 102.719-6.257 152.402l3.053 10.195a221.173 221.173 0 016.322 99.642L9.5 430\" stroke=\"#E1748C\" stroke-width=\"5\" stroke-linecap=\"round\" /></g><defs><filter id=\"a\" x=\"-28.801\" y=\".199\" width=\"77.198\" height=\"457.601\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"><feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\" /><feColorMatrix in=\"SourceAlpha\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\" /><feOffset dy=\"4\" /><feGaussianBlur stdDeviation=\"10.65\" /><feComposite in2=\"hardAlpha\" operator=\"out\" /><feColorMatrix values=\"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0\" /><feBlend in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_287_118\" /><feBlend in=\"SourceGraphic\" in2=\"effect1_dropShadow_287_118\" result=\"shape\" /></filter></defs>"});

const Cercle = createSvgComponent({"meta":{"src":"/_astro/cercle.DuLVSxVX.svg","width":45,"height":89,"format":"svg"},"attributes":{"mode":"inline","width":"45","height":"89","fill":"none"},"children":"<circle cx=\"44.5\" cy=\"44.5\" r=\"44.5\" fill=\"#E1748C\" />"});

const Forme = createSvgComponent({"meta":{"src":"/_astro/ellipse13.AaqvBDNP.svg","width":326,"height":361,"format":"svg"},"attributes":{"mode":"inline","width":"326","height":"361","fill":"none"},"children":"<path d=\"M252.524 13.682c24.481-21.744 62.969-16.507 73.588 14.467 12.635 36.855 17.194 77.091 12.805 116.936-6.742 61.188 15.68 158.515-26.16 195.677-41.841 37.163-144.516 11.116-196.946 2.483-38.385-6.32-74.183-25.478-103.285-54.663-18.775-18.828-14.333-49.005 5.547-66.662 24.481-21.744 62.897-13.978 93.384-2.034a86.085 86.085 0 0017.415 4.804c25.488 4.196 51.234-3.595 71.574-21.661 20.339-18.066 33.607-44.926 36.884-74.671a132.129 132.129 0 00-1.978-41.355c-5.425-26.03-2.707-55.664 17.172-73.321z\" fill=\"#E1748C\" />"});

const $$Astro$1 = createAstro();
const $$CardInvite = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardInvite;
  const { ...invite } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="text-center"> <p class="text-xl pb-5 font-comfortaa text-white">${invite.prenom} ${invite.nom} - ${invite.role}</p> </div>`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Card_invite.astro", void 0);

const $$Astro = createAstro();
const $$Carousel = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Carousel;
  const { activities } = Astro2.props;
  console.log(activities);
  return renderTemplate`${maybeRenderHead()}<div x-data="{ activities: \${JSON.stringify(activities)}, index: 0 }"> <div class="overflow-hidden group relative mt-10 card-container"> <div class="flex flex-row lg:gap-10 lg:flex lg:space-x-0 space-x-4 overflow-x-auto lg:overflow-visible w-full scrollbar-hide"> ${activities.map((activity) => renderTemplate`<div class="flex-shrink-0 lg:flex-shrink lg:w-1/3 transform w-8/10 transition-transform duration-300 group-hover:scale-101 bg-purple rounded-4xl rounded-tr-4xl p-4 text-center card"> <div> <h2 class="text-3xl capitalize text-blue font-aclonica">${activity.dayName}</h2> ${activity.activities.map((a) => renderTemplate`<div class="py-2 border-b border-purple-300 last:border-0"> <p class="font-comfortaa text-white-100">${a.titre_act}</p> </div>`)} </div> <div class="text-blue hover:text-blue-300 mt-3"> <a href="/programme">
En savoir plus
</a> </div> </div>`)} </div> </div> </div>`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Carousel.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const invites = await ActeurReaSorted();
  const activitiesByDay = await getActivitiesByDay();
  activitiesByDay.filter((dayGroup) => {
    const date = new Date(dayGroup.date);
    const today = /* @__PURE__ */ new Date();
    return date >= today;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-orange-100 rounded-tl-4xl rounded-tr-4xl"> <div class="absolute"> ${renderComponent($$result2, "Line", Line, {})} </div> <div class="pt-10 mt-30"> <h2 class="text-4xl text-center font-aclonica text-purple">
Présentation
</h2> <div class="*:w-60 *:h-4 *:bg-pink *:mx-auto *:rounded-full"> <div></div> </div> </div> <p class="font-comfortaa text-l w-5/6 m-auto pt-10 text-brown p-4">
Le « Festival Miaullywood » allie cinéma et ambiance féline pour
			sensibiliser à la maltraitance animale et promouvoir des
			réalisateurs émergents. Accessible en réalité virtuelle, il propose
			conférences, ateliers, projections en plein air et un musée
			retraçant l’histoire des chats.
</p> <p class="font-comfortaa text-l w-5/6 m-auto pt-5 text-brown p-4">
Destiné à un public large, notamment les 18-35 ans, il se tiendra à
			Pontarlier, avec le cinéma Olympia comme lieu central, offrant un
			cadre mêlant nature et culture.
</p> ${renderComponent($$result2, "Cercle", Cercle, { "class": "absolute right-0" })} <div class="mt-15"> <a href="/programme" class="ml-7 text-pink lg:ml-40">Cliquez pour en savoir plus</a> </div> <div class="bg-orange rounded-tl-4xl rounded-tr-4xl mt-10"> <div class="pt-10"> <h2 class="text-4xl text-center font-aclonica text-purple">
Programme
</h2> <div class="*:w-60 *:h-4 *:bg-blue *:mx-auto *:rounded-full"> <div></div> </div> </div> <div class="lg:flex lg:justify-center lg:grid-cols-3 lg:gap-4 lg:mx-10 lg:mt-10"> ${renderComponent($$result2, "Carousel", $$Carousel, { "class": "", "activities": activitiesByDay })} </div> <div class="mt-35 text-center"> <a href="/programme" class="text-white-100 bg-purple px-2 py-1 rounded-full">
Cliquez pour en savoir plus
</a> <div class="-mt-40 flex justify-end"> ${renderComponent($$result2, "Forme", Forme, { "class": "" })} </div> </div> </div> <div class="bg-orange-100 rounded-tl-4xl rounded-tr-4xl -mt-25 relative z-10"> <div class="absolute right-0 top-30 transform rotate-180"> ${renderComponent($$result2, "Line", Line, {})} </div> <div class="pt-10"> <h2 class="text-4xl text-center font-aclonica text-purple">
Localisation
</h2> <div class="*:w-60 *:h-4 *:bg-pink *:mx-auto *:rounded-full"> <div></div> </div> <div class="mt-10 pb-10"> <iframe class="w-8/10 mx-auto rounded-4xl" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5451.833664421554!2d6.358482!3d46.904354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478dbcc13a4f5b1f%3A0x45cbd7a0ca4c890e!2s1945%20Rue%20de%20Morteau%2C%2025300%20Pontarlier!5e0!3m2!1sfr!2sfr!4v1741771029245!5m2!1sfr!2sfr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> <p class="font-comfortaa text-brown text-xs text-center mt-5">1945 Rue de Morteau, 25300 Pontarlier</p> </div> </div> </div> <div class="bg-orange rounded-tl-4xl rounded-tr-4xl pb-25 -mt-2"> <div class="pt-10"> <h2 class="text-4xl text-center font-aclonica text-purple">
Billeterie
</h2> <div class="*:w-60 *:h-4 *:bg-blue *:mx-auto *:rounded-full"> <div></div> </div> </div> <div class=""> <p class="font-comfortaa text-l w-5/6 m-auto pt-10 text-brown p-4">Ne manquez pas l’opportunité de vivre une expérience unique au cœur du « Festival Miaullywood » ! Entre projections, ateliers, et une ambiance chaleureuse dédiée aux amoureux des chats, chaque moment promet d’être inoubliable. Réservez dès maintenant vos places pour plonger dans cet univers félin et cinématographique.</p> </div> <button class="flex mx-auto mt-10"> <a href="" class="text-white-100 bg-purple px-2 py-1 rounded-full lg:hover:bg-purple-500 lg:transition">Cliquez pour réserver</a> </button> </div> <div class="bg-orange-100 rounded-tl-4xl rounded-tr-4xl -mt-8 pb-20"> <div class="pt-10"> <h2 class="text-4xl text-center font-aclonica text-purple">
Invités
</h2> <div class="*:w-40 *:h-4 *:bg-pink *:mx-auto *:rounded-full"> <div></div> </div> </div> <div class="bg-purple p-5 rounded-4xl w-4/5 mt-10 mx-auto lg:grid-cols-2 lg:grid lg:gap-4 lg: lg:mx-auto lg:w-1/2"> ${invites.map((invite) => renderTemplate`${renderComponent($$result2, "Card2", $$CardInvite, { ...invite })}`)} </div> </div> </div> ` })}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/index.astro", void 0);

const $$file = "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
