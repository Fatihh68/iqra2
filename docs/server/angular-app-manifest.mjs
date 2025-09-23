
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/iqra2/',
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
    'index.csr.html': {size: 24588, hash: '724d66839cfb27e80820115106eebee6f1bb5190ec7b3b028f3cbcd3626f5206', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17251, hash: 'e1bbdc276177b0e182e7379a80fa7be99b648ea2c7fe1a3f56ac2cce4ded3cb0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-BUFLP657.css': {size: 80634, hash: 'q19qhoq6KRQ', text: () => import('./assets-chunks/styles-BUFLP657_css.mjs').then(m => m.default)}
  },
};
