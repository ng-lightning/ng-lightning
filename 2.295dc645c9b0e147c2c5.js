(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"/osD":function(n,e,t){"use strict";t.d(e,"a",function(){return s}),t.d(e,"b",function(){return p});var l=t("CcnG"),o=t("Ip0R"),r=t("dwFs"),i=t("fz/N"),s=(t("zP4+"),l.ob({encapsulation:2,styles:[],data:{}}));function a(n){return l.Jb(0,[(n()(),l.qb(0,0,null,null,4,"li",[["role","presentation"]],[[2,"slds-is-active",null],[8,"id",0],[1,"aria-controls",0]],[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.select(n.context.$implicit)&&l),l},null,null)),l.pb(1,278528,null,0,o.l,[l.s,l.t,l.k,l.E],{ngClass:[0,"ngClass"]},null),(n()(),l.qb(2,0,null,null,2,"a",[["role","tab"]],[[1,"aria-selected",0],[1,"tabindex",0]],null,null,r.b,r.a)),l.pb(3,278528,null,0,o.l,[l.s,l.t,l.k,l.E],{ngClass:[0,"ngClass"]},null),l.pb(4,49152,null,0,i.a,[],{nglInternalOutlet:[0,"nglInternalOutlet"]},null)],function(n,e){var t=e.component;n(e,1,0,"slds-tabs_"+t.variant+"__item"),n(e,3,0,"slds-tabs_"+t.variant+"__link"),n(e,4,0,e.context.$implicit.label)},function(n,e){n(e,0,0,e.context.$implicit.active,e.context.$implicit.uid+"__item",e.context.$implicit.uid),n(e,2,0,e.context.$implicit.active,e.context.$implicit.active?0:1)})}function u(n){return l.Jb(0,[(n()(),l.hb(0,null,null,0))],null,null)}function c(n){return l.Jb(0,[(n()(),l.qb(0,0,null,null,2,null,null,null,null,null,null,null)),(n()(),l.hb(16777216,null,null,1,null,u)),l.pb(2,540672,null,0,o.u,[l.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),l.hb(0,null,null,0))],function(n,e){n(e,2,0,null==e.parent.context.$implicit?null:e.parent.context.$implicit.templateRef)},null)}function d(n){return l.Jb(0,[(n()(),l.qb(0,0,null,null,3,"div",[["role","tabpanel"]],[[8,"id",0],[1,"aria-labelledby",0]],null,null,null,null)),l.pb(1,278528,null,0,o.l,[l.s,l.t,l.k,l.E],{ngClass:[0,"ngClass"]},null),(n()(),l.hb(16777216,null,null,1,null,c)),l.pb(3,16384,null,0,o.n,[l.P,l.M],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,1,0,t.tabClass(e.context.$implicit)),n(e,3,0,!t.lazy||e.context.$implicit.active)},function(n,e){n(e,0,0,e.context.$implicit.uid,e.context.$implicit.uid+"__item")})}function p(n){return l.Jb(0,[(n()(),l.qb(0,0,null,null,3,"ul",[["role","tablist"]],null,[[null,"keydown.ArrowLeft"],[null,"keydown.ArrowRight"]],function(n,e,t){var l=!0,o=n.component;return"keydown.ArrowLeft"===e&&(l=!1!==o.move(t,-1)&&l),"keydown.ArrowRight"===e&&(l=!1!==o.move(t,1)&&l),l},null,null)),l.pb(1,278528,null,0,o.l,[l.s,l.t,l.k,l.E],{ngClass:[0,"ngClass"]},null),(n()(),l.hb(16777216,null,null,1,null,a)),l.pb(3,278528,null,0,o.m,[l.P,l.M,l.s],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null),(n()(),l.hb(16777216,null,null,1,null,d)),l.pb(5,278528,null,0,o.m,[l.P,l.M,l.s],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null)],function(n,e){var t=e.component;n(e,1,0,"slds-tabs_"+t.variant+"__nav"),n(e,3,0,t.tabs,t.trackByTab),n(e,5,0,t.tabs,t.trackByTab)},null)}},M6rV:function(n,e,t){"use strict";var l="300";function o(){return Math.random().toString(36).substring(7)}function r(n){var e="";return n?(n.forceEmbedLayout&&(e+="embed=1"),n.clickToLoad&&(e+=(e.length?"&":"")+"ctl=1"),n.openFile&&(e+=(e.length?"&":"")+"file="+n.openFile),!n.view||"preview"!==n.view&&"editor"!==n.view||(e+=(e.length?"&":"")+"view="+n.view),n.hideExplorer&&(e+=(e.length?"&":"")+"hideExplorer=1"),n.hideNavigation&&(e+=(e.length?"&":"")+"hideNavigation=1;"),n.hideDevTools&&(e+=(e.length?"&":"")+"hidedevtools=1"),"number"==typeof n.devToolsHeight&&n.devToolsHeight>0&&n.devToolsHeight<100&&(e+=(e.length?"&":"")+"devtoolsheight="+n.devToolsHeight),e.length?"?"+e:e):e}function i(n,e,t){if(null===n.parentNode)throw new Error("Invalid Element");e.id=n.id,u(e,t),n.parentNode.replaceChild(e,n)}function s(n){if("string"==typeof n){var e=document.getElementById(n);if(null!==e)return e}else if(n instanceof HTMLElement)return n;throw new Error("Invalid Element")}function a(n){return n&&!1===n.newWindow?"_self":"_blank"}function u(n,e){e&&(e.hasOwnProperty("height")&&(n.height=""+e.height),e.hasOwnProperty("width")&&(n.width=""+e.width)),n.height||(n.height=l),n.width||n.setAttribute("style","width:100%;")}var c=function(n){var e=this;this.pending={},this.port=n,this.port.onmessage=function(n){if(n.data.payload.__reqid){var t=n.data.payload.__reqid,l=n.data.payload.__success;if(e.pending[t]){if(delete n.data.payload.__reqid,delete n.data.payload.__success,l){var o=0===Object.keys(n.data.payload).length&&n.data.payload.constructor===Object?null:n.data.payload;e.pending[t].resolve(o)}else e.pending[t].reject(n.data.payload.error?n.data.type+": "+n.data.payload.error:n.data.type);delete e.pending[t]}}}};c.prototype.request=function(n){var e=this,t=o();return new Promise(function(l,o){e.pending[t]={resolve:l,reject:o},n.payload.__reqid=t,e.port.postMessage(n)})};var d=function(n,e){var t=this;this.rdc=new c(n),this.preview={},Object.defineProperty(this.preview,"origin",{value:e.previewOrigin,writable:!1}),this.editor={openFile:function(n){return t.rdc.request({type:"SDK_OPEN_FILE",payload:{path:n}})}}};d.prototype.applyFsDiff=function(n){return this.rdc.request({type:"SDK_APPLY_FS_DIFF",payload:n})},d.prototype.getFsSnapshot=function(){return this.rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},d.prototype.getDependencies=function(){return this.rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})};var p=[],m=function(n){var e=this;this.id=o(),this.element=n,this.pending=new Promise(function(n,t){var l=function(t){t.data.action&&"SDK_INIT_SUCCESS"===t.data.action&&t.data.id===e.id&&(e.vm=new d(t.ports[0],t.data.payload),n(e.vm),r())},o=function(){e.element.contentWindow&&e.element.contentWindow.postMessage({action:"SDK_INIT",id:e.id},"*")};function r(){window.clearInterval(s),window.removeEventListener("message",l)}window.addEventListener("message",l),o();var i=0,s=window.setInterval(function(){if(e.vm)r();else{if(i>=20)return r(),t("Timeout: Unable to establish a connection with the StackBlitz VM"),void p.forEach(function(n,t){n.id===e.id&&p.splice(t,1)});i++,o()}},500)}),p.push(this)},f=["typescript","create-react-app","angular-cli","javascript","polymer"],g="https://stackblitz.com/run";function b(n,e){var t=document.createElement("input");return t.type="hidden",t.name=n,t.value=e,t}function h(n){-1===f.indexOf(n.template)&&console.warn("Unsupported project template, must be one of: "+f.join(", "));var e=document.createElement("form");return e.method="POST",e.setAttribute("style","display:none;"),e.appendChild(b("project[title]",n.title)),e.appendChild(b("project[description]",n.description)),e.appendChild(b("project[template]",n.template)),n.tags&&n.tags.forEach(function(n){e.appendChild(b("project[tags][]",n))}),n.dependencies&&e.appendChild(b("project[dependencies]",JSON.stringify(n.dependencies))),n.settings&&e.appendChild(b("project[settings]",JSON.stringify(n.settings))),Object.keys(n.files).forEach(function(t){e.appendChild(b("project[files]["+t+"]",n.files[t]))}),e}function v(n,e){var t=h(n);return t.action=g+r(e),t.id="sb","<html><head><title></title></head><body>"+t.outerHTML+"<script>document.getElementById('sb').submit();<\/script></body></html>"}var y={connect:function(n){if(!n||!n.contentWindow)return Promise.reject("Provided element is not an iframe.");var e=function(n){var e=n instanceof Element?"element":"id";return p.find(function(t){return t[e]===n})||null}(n);return e?e.pending:new m(n).pending},openGithubProject:function(n,e){window.open("https://stackblitz.com/github/"+n+r(e),a(e))},openProject:function(n,e){!function(n,e){var t=h(n);t.action=g+r(e),t.target=a(e),document.body.appendChild(t),t.submit(),document.body.removeChild(t)}(n,e)},openProjectId:function(n,e){window.open("https://stackblitz.com/edit/"+n+r(e),a(e))},embedGithubProject:function(n,e,t){var l=s(n),o=document.createElement("iframe");return o.src="https://stackblitz.com/github/"+e+r(t),i(l,o,t),y.connect(o)},embedProject:function(n,e,t){var l=s(n),o=v(e,t),r=document.createElement("iframe");return i(l,r,t),r.contentDocument&&r.contentDocument.write(o),y.connect(r)},embedProjectId:function(n,e,t){var l=s(n),o=document.createElement("iframe");return o.src="https://stackblitz.com/edit/"+e+r(t),i(l,o,t),y.connect(o)}},w=y;function C(n){return n.charAt(0).toUpperCase()+n.slice(1)}t.d(e,"a",function(){return j});var j=function(){function n(){this.showCode=!1,this.selectedTab="markup"}return n.prototype.tryItOut=function(){var n,e,t,l,o,r,i;n=this.dir,e=this.file,t=decodeURIComponent(this.tsRaw),l=decodeURIComponent(this.markupRaw),r="app-demo-"+n+"-"+e,i="Demo"+C(n)+C(e),w.openProject({files:(o={"angular.json":'{\n  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",\n  "version": 1,\n  "newProjectRoot": "projects",\n  "projects": {\n    "demo": {\n      "root": "",\n      "sourceRoot": "src",\n      "projectType": "application",\n      "prefix": "app",\n      "schematics": {},\n      "architect": {\n        "build": {\n          "builder": "@angular-devkit/build-angular:browser",\n          "options": {\n            "outputPath": "dist/demo",\n            "index": "src/index.html",\n            "main": "src/main.ts",\n            "polyfills": "src/polyfills.ts",\n            "tsConfig": "src/tsconfig.app.json",\n            "assets": [\n              "src/favicon.ico",\n              "src/assets"\n            ],\n            "styles": [\n              "node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css",\n              "node_modules/@angular/cdk/overlay-prebuilt.css",\n              "src/styles.css"\n            ],\n            "scripts": []\n          },\n          "configurations": {\n            "production": {\n              "fileReplacements": [\n                {\n                  "replace": "src/environments/environment.ts",\n                  "with": "src/environments/environment.prod.ts"\n                }\n              ],\n              "optimization": true,\n              "outputHashing": "all",\n              "sourceMap": false,\n              "extractCss": true,\n              "namedChunks": false,\n              "aot": true,\n              "extractLicenses": true,\n              "vendorChunk": false,\n              "buildOptimizer": true\n            }\n          }\n        },\n        "serve": {\n          "builder": "@angular-devkit/build-angular:dev-server",\n          "options": {\n            "browserTarget": "demo:build"\n          },\n          "configurations": {\n            "production": {\n              "browserTarget": "demo:build:production"\n            }\n          }\n        },\n        "extract-i18n": {\n          "builder": "@angular-devkit/build-angular:extract-i18n",\n          "options": {\n            "browserTarget": "demo:build"\n          }\n        },\n        "test": {\n          "builder": "@angular-devkit/build-angular:karma",\n          "options": {\n            "main": "src/test.ts",\n            "polyfills": "src/polyfills.ts",\n            "tsConfig": "src/tsconfig.spec.json",\n            "karmaConfig": "src/karma.conf.js",\n            "styles": [\n              "styles.css"\n            ],\n            "scripts": [],\n            "assets": [\n              "src/favicon.ico",\n              "src/assets"\n            ]\n          }\n        },\n        "lint": {\n          "builder": "@angular-devkit/build-angular:tslint",\n          "options": {\n            "tsConfig": [\n              "src/tsconfig.app.json",\n              "src/tsconfig.spec.json"\n            ],\n            "exclude": [\n              "**/node_modules/**"\n            ]\n          }\n        }\n      }\n    },\n    "demo-e2e": {\n      "root": "e2e/",\n      "projectType": "application",\n      "architect": {\n        "e2e": {\n          "builder": "@angular-devkit/build-angular:protractor",\n          "options": {\n            "protractorConfig": "e2e/protractor.conf.js",\n            "devServerTarget": "demo:serve"\n          }\n        },\n        "lint": {\n          "builder": "@angular-devkit/build-angular:tslint",\n          "options": {\n            "tsConfig": "e2e/tsconfig.e2e.json",\n            "exclude": [\n              "**/node_modules/**"\n            ]\n          }\n        }\n      }\n    }\n  },\n  "defaultProject": "demo"\n}',"src/index.html":"<"+r+">loading</app-demo-"+r+">","src/main.ts":"import './polyfills';\nimport { enableProdMode } from '@angular/core';\nimport { platformBrowserDynamic } from '@angular/platform-browser-dynamic';\nimport { AppModule } from './app/app.module';\nplatformBrowserDynamic().bootstrapModule(AppModule).then(ref => {\n  // Ensure Angular destroys itself on hot reloads.\n  if (window['ngRef']) {\n    window['ngRef'].destroy();\n  }\n  window['ngRef'] = ref;\n  // Otherwise, log the boot error\n}).catch(err => console.error(err));","src/polyfills.ts":"/**\n * This file includes polyfills needed by Angular and is loaded before the app.\n * You can add your own extra polyfills to this file.\n *\n * This file is divided into 2 sections:\n *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.\n *   2. Application imports. Files imported after ZoneJS that should be loaded before your main\n *      file.\n *\n * The current setup is for so-called \"evergreen\" browsers; the last versions of browsers that\n * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),\n * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.\n *\n * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html\n */\n/***************************************************************************************************\n * BROWSER POLYFILLS\n */\n/** IE9, IE10 and IE11 requires all of the following polyfills. **/\n// import 'core-js/es6/symbol';\n// import 'core-js/es6/object';\n// import 'core-js/es6/function';\n// import 'core-js/es6/parse-int';\n// import 'core-js/es6/parse-float';\n// import 'core-js/es6/number';\n// import 'core-js/es6/math';\n// import 'core-js/es6/string';\n// import 'core-js/es6/date';\n// import 'core-js/es6/array';\n// import 'core-js/es6/regexp';\n// import 'core-js/es6/map';\n// import 'core-js/es6/set';\n/** IE10 and IE11 requires the following for NgClass support on SVG elements */\n// import 'classlist.js';  // Run `npm install --save classlist.js`.\n/** IE10 and IE11 requires the following to support `@angular/animation`. */\n// import 'web-animations-js';  // Run `npm install --save web-animations-js`.\n/** Evergreen browsers require these. **/\nimport 'core-js/es6/reflect';\nimport 'core-js/es7/reflect';\n/** ALL Firefox browsers require the following to support `@angular/animation`. **/\n// import 'web-animations-js';  // Run `npm install --save web-animations-js`.\n/***************************************************************************************************\n * Zone JS is required by Angular itself.\n */\nimport 'zone.js/dist/zone';  // Included with Angular CLI.\n/***************************************************************************************************\n * APPLICATION IMPORTS\n */\n/**\n * Date, currency, decimal and percent pipes.\n * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10\n */\n// import 'intl';  // Run `npm install --save intl`."},o["src/app/app.component.ts"]=t,o["src/app/"+e+".html"]=l,o["src/app/app.module.ts"]="import { NgModule } from '@angular/core';\nimport { BrowserModule } from '@angular/platform-browser';\nimport { FormsModule, ReactiveFormsModule } from '@angular/forms';\nimport { HttpClientModule } from '@angular/common/http';\nimport { NglModule } from 'ng-lightning';\nimport { "+i+" } from './app.component';\n\n@NgModule({\n  imports:      [ BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, NglModule ],\n  declarations: [ "+i+" ],\n  bootstrap:    [ "+i+" ],\n  providers   : [ ]\n})\nexport class AppModule { }\n",o["src/styles.css"]="/* Add application styles & imports to this file! */;",o),title:"Dynamically Generated Project",description:"Created with <3 by ng-lightning",template:"angular-cli",dependencies:{rxjs:"^6.3.3","@angular/cdk":"^7.0.0","@angular/core":"^7.0.0","@angular/forms":"^7.0.0","@angular/http":"^7.0.0","@angular/language-service":"^7.0.0","@angular/platform-browser":"^7.0.0","@angular/platform-browser-dynamic":"^7.0.0","@angular/common":"^7.0.0","@angular/router":"^7.0.0","@salesforce-ux/design-system":"~2.8.0",tslib:"^1.9.3",typescript:"~3.1.1","ng-lightning":"^4.0.0"},tags:["ng-lightning","stackblitz","sdk"]})},n}()},S9nO:function(n,e,t){"use strict";t.d(e,"a",function(){return o});var l=t("CcnG"),o=(t("ttgq"),function(){function n(n,e,t){this.element=n,this.hostService=t,this.src="",this.alternativeText="",this.fallbackIconName="standard:user",this.error=new l.m,this._imgError=!1,e.addClass(n.nativeElement,"slds-avatar")}return n.prototype.fallbackIconClass=function(){var n=this.fallbackIconName.split(":");return"slds-icon-"+n[0]+"-"+n[1]},Object.defineProperty(n.prototype,"shouldShowImage",{get:function(){return this.src&&!this._imgError},enumerable:!0,configurable:!0}),n.prototype.onImgError=function(){this._imgError=!0,this.error.emit()},n.prototype.ngOnInit=function(){this.setHostClass()},n.prototype.ngOnChanges=function(){this.setHostClass()},n.prototype.setHostClass=function(){var n;this.hostService.updateClass(this.element,((n={})["slds-avatar_"+(this.size||"medium")]=!0,n["slds-avatar_"+(this.variant||"rectangle")]=!0,n))},n}())},Uiij:function(n,e,t){"use strict";t.d(e,"a",function(){return r}),t.d(e,"b",function(){return a});var l=t("CcnG"),o=t("Ip0R"),r=(t("ttgq"),t("S9nO"),l.ob({encapsulation:2,styles:[],data:{}}));function i(n){return l.Jb(0,[(n()(),l.qb(0,0,null,null,0,"img",[],[[8,"src",4],[8,"alt",0]],[[null,"error"]],function(n,e,t){var l=!0;return"error"===e&&(l=!1!==n.component.onImgError()&&l),l},null,null))],null,function(n,e){var t=e.component;n(e,0,0,t.src,t.alternativeText)})}function s(n){return l.Jb(0,[(n()(),l.qb(0,0,null,null,2,"abbr",[["class","slds-avatar__initials"]],null,null,null,null,null)),l.pb(1,278528,null,0,o.l,[l.s,l.t,l.k,l.E],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),(n()(),l.Hb(2,null,["",""]))],function(n,e){n(e,1,0,"slds-avatar__initials",e.component.fallbackIconClass())},function(n,e){n(e,2,0,e.component.initials)})}function a(n){return l.Jb(2,[(n()(),l.hb(16777216,null,null,1,null,i)),l.pb(1,16384,null,0,o.n,[l.P,l.M],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),l.hb(0,[["template_initials",2]],null,0,null,s))],function(n,e){n(e,1,0,e.component.shouldShowImage,l.zb(e,2))},null)}},dH7C:function(n,e,t){"use strict";t.d(e,"a",function(){return l});var l=function(){return function(){}}()},tHxD:function(n,e,t){"use strict";t.d(e,"a",function(){return a}),t.d(e,"b",function(){return f});var l=t("CcnG"),o=t("Ip0R"),r=t("/osD"),i=t("zP4+"),s=t("VMZN"),a=(t("M6rV"),l.ob({encapsulation:2,styles:[],data:{}}));function u(n){return l.Jb(0,[(n()(),l.qb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function c(n){return l.Jb(0,[(n()(),l.hb(16777216,null,null,1,null,u)),l.pb(1,540672,null,0,o.u,[l.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),l.hb(0,null,null,0))],function(n,e){n(e,1,0,e.component.markup)},null)}function d(n){return l.Jb(0,[(n()(),l.qb(0,0,null,null,0,null,null,null,null,null,null,null))],null,null)}function p(n){return l.Jb(0,[(n()(),l.hb(16777216,null,null,1,null,d)),l.pb(1,540672,null,0,o.u,[l.P],{ngTemplateOutlet:[0,"ngTemplateOutlet"]},null),(n()(),l.hb(0,null,null,0))],function(n,e){n(e,1,0,e.component.ts)},null)}function m(n){return l.Jb(0,[(n()(),l.qb(0,0,null,null,6,"ngl-tabset",[],null,[[null,"selectedChange"]],function(n,e,t){var l=!0;return"selectedChange"===e&&(l=!1!==(n.component.selectedTab=t.id)&&l),l},r.b,r.a)),l.pb(1,1097728,null,1,i.a,[l.k,l.E],{setSelected:[0,"setSelected"]},{selectedChange:"selectedChange"}),l.Fb(603979776,1,{tabs:1}),(n()(),l.hb(0,null,null,1,null,c)),l.pb(4,16384,[[1,4]],0,s.a,[[2,l.M]],{id:[0,"id"],label:[1,"label"]},null),(n()(),l.hb(0,null,null,1,null,p)),l.pb(6,16384,[[1,4]],0,s.a,[[2,l.M]],{id:[0,"id"],label:[1,"label"]},null)],function(n,e){n(e,1,0,e.component.selectedTab),n(e,4,0,"markup","Markup"),n(e,6,0,"ts","Typescript")},null)}function f(n){return l.Jb(2,[(n()(),l.qb(0,0,null,null,6,"div",[["class","slds-is-absolute"],["style","right: 0;"]],null,null,null,null,null)),(n()(),l.qb(1,0,null,null,2,"button",[["class","slds-button slds-button_neutral"],["title","Toggle Code"],["type","button"]],null,[[null,"click"]],function(n,e,t){var l=!0,o=n.component;return"click"===e&&(l=0!=(o.showCode=!o.showCode)&&l),l},null,null)),(n()(),l.qb(2,0,null,null,0,"img",[["src","assets/images/code.svg"],["style","height:15px;"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,[" Code"])),(n()(),l.qb(4,0,null,null,2,"button",[["class","slds-button slds-button_neutral"],["title","Edit on Stackblitz"],["type","button"]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.tryItOut()&&l),l},null,null)),(n()(),l.qb(5,0,null,null,0,"img",[["src","assets/images/stackblitz.svg"],["style","height:15px;"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,[" Stackblitz"])),(n()(),l.hb(16777216,null,null,1,null,m)),l.pb(8,16384,null,0,o.n,[l.P,l.M],{ngIf:[0,"ngIf"]},null)],function(n,e){n(e,8,0,e.component.showCode)},null)}}}]);