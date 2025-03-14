import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_CnDgR73Q.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/mathi/github/sae-203-2025-geetix-prog/","cacheDir":"file:///C:/Users/mathi/github/sae-203-2025-geetix-prog/node_modules/.astro/","outDir":"file:///C:/Users/mathi/github/sae-203-2025-geetix-prog/dist/","srcDir":"file:///C:/Users/mathi/github/sae-203-2025-geetix-prog/src/","publicDir":"file:///C:/Users/mathi/github/sae-203-2025-geetix-prog/public/","buildClientDir":"file:///C:/Users/mathi/github/sae-203-2025-geetix-prog/dist/","buildServerDir":"file:///C:/Users/mathi/github/sae-203-2025-geetix-prog/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/a_propos","isIndex":true,"type":"page","pattern":"^\\/a_propos\\/?$","segments":[[{"content":"a_propos","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/a_propos/index.astro","pathname":"/a_propos","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/contact","isIndex":true,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/film/add","isIndex":false,"type":"page","pattern":"^\\/film\\/add\\/?$","segments":[[{"content":"film","dynamic":false,"spread":false}],[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/film/add.astro","pathname":"/film/add","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/film/[id]","isIndex":false,"type":"page","pattern":"^\\/film\\/([^/]+?)\\/?$","segments":[[{"content":"film","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/film/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/film","isIndex":true,"type":"page","pattern":"^\\/film\\/?$","segments":[[{"content":"film","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/film/index.astro","pathname":"/film","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/infos_pratiques","isIndex":true,"type":"page","pattern":"^\\/infos_pratiques\\/?$","segments":[[{"content":"infos_pratiques","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/infos_pratiques/index.astro","pathname":"/infos_pratiques","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/invite/add","isIndex":false,"type":"page","pattern":"^\\/invite\\/add\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invite/add.astro","pathname":"/invite/add","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/invite/role/[role]","isIndex":false,"type":"page","pattern":"^\\/invite\\/role\\/([^/]+?)\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"role","dynamic":false,"spread":false}],[{"content":"role","dynamic":true,"spread":false}]],"params":["role"],"component":"src/pages/invite/role/[role].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/invite/[id]","isIndex":false,"type":"page","pattern":"^\\/invite\\/([^/]+?)\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/invite/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/invite","isIndex":true,"type":"page","pattern":"^\\/invite\\/?$","segments":[[{"content":"invite","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/invite/index.astro","pathname":"/invite","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/programme/add","isIndex":false,"type":"page","pattern":"^\\/programme\\/add\\/?$","segments":[[{"content":"programme","dynamic":false,"spread":false}],[{"content":"add","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programme/add.astro","pathname":"/programme/add","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/programme/[id]","isIndex":false,"type":"page","pattern":"^\\/programme\\/([^/]+?)\\/?$","segments":[[{"content":"programme","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/programme/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/programme","isIndex":true,"type":"page","pattern":"^\\/programme\\/?$","segments":[[{"content":"programme","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/programme/index.astro","pathname":"/programme","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DzTw3-Ml.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/a_propos/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/contact/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/film/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/film/add.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/film/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/infos_pratiques/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/add.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/invite/role/[role].astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/programme/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/programme/add.astro",{"propagation":"none","containsHead":true}],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/pages/programme/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/a_propos/index@_@astro":"pages/a_propos.astro.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/film/add@_@astro":"pages/film/add.astro.mjs","\u0000@astro-page:src/pages/film/[id]@_@astro":"pages/film/_id_.astro.mjs","\u0000@astro-page:src/pages/film/index@_@astro":"pages/film.astro.mjs","\u0000@astro-page:src/pages/infos_pratiques/index@_@astro":"pages/infos_pratiques.astro.mjs","\u0000@astro-page:src/pages/invite/add@_@astro":"pages/invite/add.astro.mjs","\u0000@astro-page:src/pages/invite/role/[role]@_@astro":"pages/invite/role/_role_.astro.mjs","\u0000@astro-page:src/pages/invite/[id]@_@astro":"pages/invite/_id_.astro.mjs","\u0000@astro-page:src/pages/invite/index@_@astro":"pages/invite.astro.mjs","\u0000@astro-page:src/pages/programme/add@_@astro":"pages/programme/add.astro.mjs","\u0000@astro-page:src/pages/programme/[id]@_@astro":"pages/programme/_id_.astro.mjs","\u0000@astro-page:src/pages/programme/index@_@astro":"pages/programme.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bo0MbYHI.mjs","C:/Users/mathi/github/sae-203-2025-geetix-prog/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_D3-xqdpZ.mjs","C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.BJhZg8Sp.js","C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.45uR7zqL.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"#menu-btn\"),t=document.querySelector(\"#menu\"),d=document.body,l=document.querySelector(\"#header\");e&&t&&e.addEventListener(\"click\",()=>{const n=e.ariaExpanded===\"true\",o=!n;e.ariaExpanded=String(o),t.ariaHidden=String(n),d.classList.toggle(\"noscroll\",o)});let r=window.scrollY;window.addEventListener(\"scroll\",()=>{window.scrollY>r?l.style.transform=\"translateY(-100%)\":l.style.transform=\"translateY(0)\",r=window.scrollY});const s=document.createElement(\"style\");s.innerHTML=\"body.noscroll { overflow: hidden; }\";document.head.appendChild(s);"],["C:/Users/mathi/github/sae-203-2025-geetix-prog/src/components/Footer.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const s=document.querySelector(\"footer\"),e=document.getElementById(\"scrollTopContainer\");s&&e&&new IntersectionObserver(o=>{o.forEach(t=>{t.isIntersecting?(e.classList.remove(\"fixed\"),e.classList.add(\"absolute\")):(e.classList.remove(\"absolute\"),e.classList.add(\"fixed\"))})},{threshold:0}).observe(s)});"]],"assets":["/_astro/cercle.DuLVSxVX.svg","/_astro/ellipse13.AaqvBDNP.svg","/_astro/line.Cp9kE6Bj.svg","/_astro/instagram.CaxNbRaI.svg","/_astro/twitter.DHWqeR2u.svg","/_astro/facebook.nFQz7Oo1.svg","/_astro/paw.cWwTL8Ad.svg","/_astro/top.BtGdEECQ.svg","/_astro/index.DzTw3-Ml.css","/favicon.svg"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"/BHaNMOGRomqTtcN1t336ajcSfmkQTWp+mrxkPjA73o="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
