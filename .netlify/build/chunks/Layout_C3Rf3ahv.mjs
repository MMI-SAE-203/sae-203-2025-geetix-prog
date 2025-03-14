import { e as createComponent, u as unescapeHTML, s as spreadAttributes, r as renderTemplate, m as maybeRenderHead, i as renderComponent, k as renderScript, f as createAstro, h as addAttribute, l as renderHead, n as renderSlot } from './astro/server_CnDgR73Q.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const countersByPage = /* @__PURE__ */ new WeakMap();
function createSvgComponent({ meta, attributes, children }) {
  const renderedIds = /* @__PURE__ */ new WeakMap();
  const Component = createComponent((result, props) => {
    let counter = countersByPage.get(result) ?? 0;
    const {
      title: titleProp,
      viewBox,
      mode,
      ...normalizedProps
    } = normalizeProps(attributes, props);
    const title = titleProp ? unescapeHTML(`<title>${titleProp}</title>`) : "";
    if (mode === "sprite") {
      let symbol = "";
      let id = renderedIds.get(result);
      if (!id) {
        countersByPage.set(result, ++counter);
        id = `a:${counter}`;
        symbol = unescapeHTML(`<symbol${spreadAttributes({ viewBox, id })}>${children}</symbol>`);
        renderedIds.set(result, id);
      }
      return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${title}${symbol}<use href="#${id}" /></svg>`;
    }
    return renderTemplate`<svg${spreadAttributes({ viewBox, ...normalizedProps })}>${title}${unescapeHTML(children)}</svg>`;
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = { role: "img" };
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, { size, ...props }) {
  if (size !== void 0 && props.width === void 0 && props.height === void 0) {
    props.height = size;
    props.width = size;
  }
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const LogoHeader = createSvgComponent({"meta":{"src":"/_astro/paw.cWwTL8Ad.svg","width":60,"height":60,"format":"svg"},"attributes":{"mode":"inline","width":"60","height":"60","fill":"none"},"children":"<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.523 26.582a6.408 6.408 0 013.954 0c1.426.463 2.461 1.613 3.422 3.081.964 1.474 2.012 3.53 3.346 6.147l.036.071c.314.617.05 1.362-.59 1.665-.64.303-1.413.048-1.727-.568-1.378-2.703-2.366-4.64-3.249-5.988-.895-1.368-1.524-1.876-2.062-2.05a3.735 3.735 0 00-2.306 0c-.539.174-1.168.682-2.062 2.05-.883 1.349-1.871 3.285-3.25 5.988l-1.511 2.967a50.78 50.78 0 00-.783 1.572c-.18.39-.232.562-.244.635-.22 1.234.73 2.326 1.941 2.36.067.002.242-.011.668-.107.41-.092.952-.235 1.724-.438l.05-.014c.822-.217 1.296-.342 1.775-.435a14.869 14.869 0 015.69 0c.479.093.953.218 1.776.435l.05.014c.77.203 1.313.346 1.723.438.427.096.601.11.668.107 1.212-.034 2.16-1.126 1.941-2.36-.12-.678.353-1.32 1.055-1.436.703-.115 1.37.34 1.49 1.017.474 2.675-1.58 5.186-4.41 5.266-.422.012-.87-.068-1.328-.17-.466-.105-1.057-.261-1.794-.456l-.028-.007c-.886-.234-1.272-.336-1.655-.41-1.54-.3-3.126-.3-4.666 0-.383.074-.769.176-1.655.41l-.028.007c-.737.195-1.328.351-1.794.455-.457.103-.907.183-1.327.17-2.832-.079-4.885-2.59-4.411-5.265.07-.398.237-.808.43-1.227.197-.426.47-.963.812-1.634l1.561-3.062c1.334-2.617 2.382-4.673 3.346-6.147.96-1.468 1.996-2.618 3.422-3.081zM24.846 14.23c1.02.917 1.809 2.267 2.213 3.811.405 1.546.38 3.107-.049 4.402-.421 1.273-1.31 2.475-2.758 2.871-1.465.401-2.857-.195-3.867-1.102-1.02-.917-1.81-2.267-2.214-3.812-.405-1.545-.379-3.106.05-4.401.42-1.273 1.31-2.475 2.758-2.872 1.464-.4 2.857.195 3.867 1.103zm-1.76 1.82c-.61-.549-1.102-.612-1.401-.53-.315.087-.735.419-1.005 1.234-.263.795-.31 1.878-.006 3.037.304 1.16.872 2.063 1.471 2.601.61.548 1.101.611 1.4.53.316-.087.736-.42 1.006-1.235.262-.794.31-1.877.006-3.036-.304-1.16-.872-2.063-1.472-2.602zm11.066-1.82c-1.02.917-1.809 2.267-2.213 3.811-.405 1.546-.38 3.107.049 4.402.421 1.273 1.31 2.475 2.758 2.871 1.465.401 2.857-.195 3.867-1.102 1.02-.917 1.809-2.267 2.214-3.812s.379-3.106-.05-4.401c-.42-1.273-1.31-2.475-2.758-2.872-1.464-.4-2.857.195-3.867 1.103zm1.76 1.82c.61-.549 1.102-.612 1.401-.53.316.087.735.419 1.005 1.234.263.795.31 1.878.006 3.037-.304 1.16-.872 2.063-1.471 2.601-.61.548-1.102.611-1.4.53-.316-.087-.736-.42-1.005-1.235-.263-.794-.31-1.877-.007-3.036.304-1.16.872-2.063 1.472-2.602zM15.462 28.237c.496.33.992.918 1.297 1.705.305.788.324 1.529.174 2.067-.151.54-.427.773-.657.851-.238.081-.63.066-1.131-.268-.496-.331-.992-.918-1.297-1.705-.305-.788-.324-1.529-.174-2.067.15-.54.427-.773.657-.851.237-.081.629-.067 1.13.268zm1.468-2.046c-.97-.647-2.224-.988-3.459-.568-1.241.423-1.983 1.453-2.29 2.551-.306 1.1-.22 2.372.249 3.583.469 1.21 1.27 2.23 2.246 2.88.97.647 2.225.99 3.46.569 1.241-.423 1.983-1.453 2.29-2.552.306-1.1.22-2.372-.249-3.582-.47-1.211-1.271-2.23-2.247-2.88zm26.61 2.046c-.496.33-.992.918-1.297 1.705-.305.788-.324 1.529-.174 2.067.151.54.427.773.657.851.238.081.63.066 1.13-.268.497-.331.993-.918 1.298-1.705.306-.788.324-1.529.174-2.067-.15-.54-.427-.773-.657-.851-.238-.081-.629-.067-1.13.268zm-1.468-2.046c.97-.647 2.224-.988 3.459-.568 1.241.423 1.983 1.453 2.29 2.551.307 1.1.22 2.372-.249 3.583-.469 1.21-1.27 2.23-2.246 2.88-.97.647-2.225.99-3.46.569-1.241-.423-1.983-1.453-2.29-2.552-.306-1.1-.22-2.372.249-3.582.47-1.211 1.271-2.23 2.247-2.88z\" fill=\"#E1748C\" />"});

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="header" class="flex justify-between items-center pt-5 pr-10 fixed bg-white-100/75 top-0 w-full z-50 lg:justify-between transition-transform duration-300 lg:pr-0"> <a href="/" aria-label="Accueil"> ${renderComponent($$result, "LogoHeader", LogoHeader, {})} </a> <a href="/" aria-label="Accueil"><h1 class="text-pink font-coiny text-2xl">Miaullywood</h1></a> <button id="menu-btn" class="group relative z-10 flex h-5 w-7 flex-col justify-between *:block *:ease *:h-1 *:w-full *:transform *:rounded-full *:bg-pink *:transition *:duration-300 lg:hidden" aria-label="Menu" aria-controls="menu" aria-expanded="false"> <span class="group-aria-expanded:translate-y-[4px] group-aria-expanded:rotate-45"></span> <span class="group-aria-expanded:-translate-y-[4px] group-aria-expanded:-rotate-45"></span> <span class="group-aria-expanded:opacity-0 group-aria-expanded:invisible"></span> </button> <nav id="menu" class="flex-1 px-6 py-12 flex justify-between mt-20 flex-col fixed z-10 inset-0 bg-white-100 visible opacity-100 max-lg:aria-hidden:invisible max-lg:aria-hidden:opacity-0 lg:static lg:bg-transparent lg:flex-row lg:py-6 lg:mt-0 lg:justify-between lg:items-center lg:gap-4 lg:visible lg:opacity-100 lg:transform-none lg:aria-hidden:lg:" aria-hidden="true"> <div class="lg:mx-auto"> <ul class="flex flex-col gap-4 lg:flex-row"> <li> <a class="block p-2 rounded-lg text-pink font-aclonica lg:text-sm lg:hover:scale-110" href="/">Accueil</a> </li> <li> <a class="block p-2 rounded-lg text-pink font-aclonica lg:text-sm lg:hover:scale-110" href="/programme">Programme</a> </li> <li> <a class="block p-2 rounded-lg text-pink font-aclonica lg:text-sm lg:hover:scale-110" href="/a_propos">À propos</a> </li> <li> <a class="block p-2 rounded-lg text-pink font-aclonica lg:text-sm lg:hover:scale-110" href="/contact">Contact</a> </li> <li> <a class="block p-2 rounded-lg text-pink font-aclonica lg:text-sm lg:hover:scale-110" href="/film">Films</a> </li> <li> <a class="block p-2 rounded-lg text-pink font-aclonica lg:text-sm lg:hover:scale-110" href="/invite">Invités</a> </li> <li> <a class="block p-2 rounded-lg text-pink font-aclonica lg:text-sm lg:hover:scale-110" href="/infos_pratiques">Infos pratiques</a> </li> </ul> </div> <div class="flex items-center justify-center gap-4 px-4 lg:mr-0 lg:pr-0"> <a href="/login" class="inline-flex items-center gap-2 text-pink border-2 font-bold rounded-lg transition duration-300 ease-in-out px-3 py-1 text-base border-pink hover:bg-pink hover:text-white">Connexion</a> <a href="/signup" class="inline-flex items-center gap-2 font-bold rounded-lg transition duration-300 ease-in-out px-3 py-1.5 text-base bg-pink text-white hover:bg-pink-700">Inscription</a> </div> </nav> </header> ${renderScript($$result, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Header.astro", void 0);

const Instagram = createSvgComponent({"meta":{"src":"/_astro/instagram.CaxNbRaI.svg","width":25,"height":24,"format":"svg"},"attributes":{"mode":"inline","width":"25","height":"24","fill":"none"},"children":"<path d=\"M17.84 5.46a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4zm4.6 2.42a7.588 7.588 0 00-.46-2.43 4.94 4.94 0 00-1.16-1.77 4.7 4.7 0 00-1.77-1.15 7.3 7.3 0 00-2.43-.47C15.56 2 15.22 2 12.5 2s-3.06 0-4.12.06a7.3 7.3 0 00-2.43.47 4.78 4.78 0 00-1.77 1.15 4.7 4.7 0 00-1.15 1.77 7.3 7.3 0 00-.47 2.43C2.5 8.94 2.5 9.28 2.5 12s0 3.06.06 4.12a7.3 7.3 0 00.47 2.43 4.7 4.7 0 001.15 1.77c.497.51 1.102.903 1.77 1.15a7.3 7.3 0 002.43.47c1.06.06 1.4.06 4.12.06s3.06 0 4.12-.06a7.3 7.3 0 002.43-.47 4.7 4.7 0 001.77-1.15 4.85 4.85 0 001.16-1.77c.285-.78.44-1.6.46-2.43 0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12zM20.64 16a5.612 5.612 0 01-.34 1.86 3.06 3.06 0 01-.75 1.15c-.324.33-.717.586-1.15.75a5.61 5.61 0 01-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.732 5.732 0 01-1.94-.3 3.27 3.27 0 01-1.1-.75 3 3 0 01-.74-1.15 5.54 5.54 0 01-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 01.35-1.9A3 3 0 015.5 5a3.14 3.14 0 011.1-.8 5.73 5.73 0 011.9-.34c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 011.86.34 3.06 3.06 0 011.19.8c.328.307.584.683.75 1.1.222.609.337 1.252.34 1.9.05 1 .06 1.37.06 4s-.01 3-.06 4zM12.5 6.87A5.13 5.13 0 1017.64 12a5.12 5.12 0 00-5.14-5.13zm0 8.46a3.33 3.33 0 110-6.66 3.33 3.33 0 010 6.66z\" fill=\"#FFD1A6\" />"});

const Facebook = createSvgComponent({"meta":{"src":"/_astro/facebook.nFQz7Oo1.svg","width":11,"height":20,"format":"svg"},"attributes":{"mode":"inline","width":"11","height":"20","fill":"none"},"children":"<path d=\"M8.69 3.32h1.81V.14A24.195 24.195 0 007.863 0C5.245 0 3.455 1.66 3.455 4.7v2.62H.5v3.56h2.955V20h3.542v-9.12h2.945l.442-3.56H6.997V5.05c0-1.05.27-1.73 1.694-1.73z\" fill=\"#FFD1A6\" />"});

const Twitter = createSvgComponent({"meta":{"src":"/_astro/twitter.DHWqeR2u.svg","width":17,"height":16,"format":"svg"},"attributes":{"mode":"inline","width":"17","height":"16","fill":"none"},"children":"<path d=\"M13.183 15.313h2.481l-5.42-6.196L16.62.688h-4.993L7.717 5.8 3.243.688H.76l5.798 6.626L.44 15.312H5.56l3.535-4.673 4.088 4.674zm-.87-13.14h1.374L4.813 13.904H3.338l8.974-11.732z\" fill=\"#FFD1A6\" />"});

const Top = createSvgComponent({"meta":{"src":"/_astro/top.BtGdEECQ.svg","width":60,"height":60,"format":"svg"},"attributes":{"mode":"inline","width":"60","height":"60","fill":"none"},"children":"<rect x=\"15\" y=\"15\" width=\"30\" height=\"30\" rx=\"7\" fill=\"#391700\" /><path d=\"M23 33l7-7 7 7\" stroke=\"#FFD1A6\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />"});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-brown text-center pt-15 pb-10"> <div id="scrollTopContainer" class="fixed bottom-10 left-10 z-50"> <a href="#top" class=""> ${renderComponent($$result, "Top", Top, {})} </a> </div> <a href="/" class="font-coiny text-orange-100 text-4xl">Miaullywood</a> <div class="flex justify-center gap-10 mt-10"> ${renderComponent($$result, "Twit", Twitter, {})} ${renderComponent($$result, "Face", Facebook, {})} ${renderComponent($$result, "Insta", Instagram, {})} </div> <p class="font-comfortaa text-xs mt-10 text-orange-100">Projet réalisé dans le cadre d’un exercice pédagogique au département MMI de Montbéliard</p> <p class="font-comfortaa text-xs mt-5 text-orange-100">Fait par Mathis Guellati</p> </footer> ${renderScript($$result, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Miaullywood</title>${renderHead()}</head> <body class="bg-white-100" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/mathi/github/sae-203-2025-geetix-prog/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Facebook as F, Instagram as I, Twitter as T, createSvgComponent as c };
