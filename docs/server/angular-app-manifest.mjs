
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/iqra2',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {
  "src/app/pages/sss/sss.component.ts": [
    "chunk-KRVCMAZB.js"
  ],
  "node_modules/@angular/animations/fesm2022/browser.mjs": [
    "chunk-2MVB3DSS.js"
  ]
},
  assets: {
    'index.csr.html': {size: 24587, hash: '4bf342b73090c5a6556226319c173fb3e80cc564ad80e3289adc9a1664fb7b6e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17250, hash: '0567c0c59a53ea1cb615f4a28e1495678831506befd30efb2392a6569861d433', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BUFLP657.css': {size: 80634, hash: 'q19qhoq6KRQ', text: () => import('./assets-chunks/styles-BUFLP657_css.mjs').then(m => m.default)}
  },
};
