(self.webpackChunkpong_keeper=self.webpackChunkpong_keeper||[]).push([[202],{4202:(e,n,t)=>{"use strict";t.r(n),t.d(n,{Keeper:()=>Oe,KeeperTest:()=>ze,default:()=>ke});var r=t(7294),a=t(5697),i=t.n(a),c=t(7703),o=t(2222),u=t(4890),l=t(7829),f=t(9163);function s(){var e,n,t=(e=["\n@import '~antd/dist/antd.css';\n  html,\n  body {\n    height: 100%;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    @import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');\n    font-family: 'Ubuntu', sans-serif;\n  }\n\n  body.fontLoaded {\n    font-family: 'Ubuntu', sans-serif;\n  }\n\n  #app {\n    position: relative;\n    min-height: 100%;\n    min-width: 100%;\n  }\n\n  p,\n  h1,h2,h3,h4,h5,h6\n  span,\n  label,\n  button {\n    font-family: 'Ubuntu', sans-serif;\n    line-height: 1.5em;\n  }\n  \n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return s=function(){return t},t}const p=(0,f.vJ)(s());function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=/^[a-zA-Z0-9]+$/,h=function(e,n,t){var r;return d(r={},e,n),d(r,"message",t),r},y=function(e,n){return h("pattern",e,n)},v=function(e,n){return[(t=e,h("required",!0,t)),y(m,n)];var t},b=t(8133),g=t(7361),w=t.n(g),P=function(e){return(e.Keeper||b.E3).toJS()};var S=t(4166),E=t.n(S);function j(){var e=x(["\n        @media (max-width: ","em) {\n          ",";\n        }\n      "]);return j=function(){return e},e}function O(){var e=x(["\n        @media (min-width: ","em) {\n          ",";\n        }\n      "]);return O=function(){return e},e}function x(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var A={desktop:992,tablet:768,mobile:320};const k=Object.keys(A).reduce((function(e,n){return e[n]={min:function(e){return(0,f.iv)(O(),A[n]/16,(0,f.iv)([e])).join("").replace(" ","")},max:function(e){return(0,f.iv)(j(),A[n]/16,(0,f.iv)([e])).join("").replace(" ","")}},e}),{});function z(){var e=T(["\n  ","\n  ","\n"]);return z=function(){return e},e}function C(){var e=T(["\n  font-weight: normal;\n"]);return C=function(){return e},e}function Z(){var e=T(["\n  font-size: 2rem;\n"]);return Z=function(){return e},e}function B(){var e=T(["\n  font-size: 1.5rem;\n"]);return B=function(){return e},e}function U(){var e=T(["\n  font-size: 1.25rem;\n"]);return U=function(){return e},e}function I(){var e=T(["\n  font-size: 0.875rem;\n"]);return I=function(){return e},e}function T(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var W=function(){return(0,f.iv)(I())},q=function(){return(0,f.iv)(U())},D=function(){return(0,f.iv)(B())},F=function(){return(0,f.iv)(C())};const K=W,$=q,J=D,M=function(){return(0,f.iv)(Z())},R=function(){return(0,f.iv)(z(),D(),F())};var _=t(8222);function L(){return(L=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function N(){var e,n,t=(e=["\n  &.ant-btn {\n    ",";\n    border-radius: 8px;\n    height: 2.75rem;\n    margin: 0.75rem 0;\n    color: ",";\n    background-color: ",";\n    border: 2px solid ",";\n  }\n  &.ant-btn:hover {\n    cursor: pointer;\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return N=function(){return t},t}var V=(0,f.ZP)(_.Z)(N(),(function(e){return e.width&&"width: ".concat(e.width,"%;")}),E().dark1,E().primary,E().primary);function G(e){return r.createElement(V,L({"data-testid":"custom-button"},e))}G.propTypes={};const H=(0,r.memo)(G);var Q=t(7362);function X(){return(X=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function Y(){var e,n,t=(e=["\n  height: 2.5rem;\n  &.ant-input {\n    padding-left: 1rem;\n    background-color: ",";\n    border: 1px solid ",";\n    width: 100%;\n    margin: 0.75rem 0;\n    ",";\n    border-radius: 8px;\n    &.ant-form-item-label {\n      font-size: 20px;\n    }\n    &::placeholder {\n      color: ",";\n    }\n  }\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return Y=function(){return t},t}var ee=(0,f.ZP)(Q.Z)(Y(),E().white,E().gray,(function(e){return e.width&&"width: ".concat(e.width,"%;")}),E().gray);function ne(e){return r.createElement(ee,X({"data-testid":"custom-input"},e))}ne.propTypes={};const te=(0,r.memo)(ne);function re(e,n,t,r,a,i,c){try{var o=e[i](c),u=o.value}catch(e){return void t(e)}o.done?n(u):Promise.resolve(u).then(r,a)}function ae(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],r=!0,a=!1,i=void 0;try{for(var c,o=e[Symbol.iterator]();!(r=(c=o.next()).done)&&(t.push(c.value),!n||t.length!==n);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(a)throw i}}return t}}(e,n)||function(e,n){if(e){if("string"==typeof e)return ie(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?ie(e,n):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ie(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function ce(){var e=he(["\n  font-weight: 300;\n  ","\n  margin: 0;\n"]);return ce=function(){return e},e}function oe(){var e=he(["\n  text-transform: capitalize;\n  font-weight: 300;\n  ","\n  margin: 0;\n"]);return oe=function(){return e},e}function ue(){var e=he(["\n  text-transform: capitalize;\n  font-weight: 300;\n  ","\n  margin: 0;\n"]);return ue=function(){return e},e}function le(){var e=he(["\n  text-transform: capitalize;\n  font-weight: 300;\n  ","\n  margin: 0;\n"]);return le=function(){return e},e}function fe(){var e=he(["\n  text-transform: uppercase;\n  ","\n  margin: 0;\n"]);return fe=function(){return e},e}function se(){var e=he(["\n  text-align: center;\n  width: 100%;\n  padding: 1rem;\n  .ant-legacy-form-explain {\n    margin-top: 0.5rem;\n    color: red;\n    ",";\n  }\n  & .ant-form-item-explain,\n  & .ant-form-item-extra {\n    text-align: left;\n    color: red;\n    font-size: 0.65rem;\n  }\n"]);return se=function(){return e},e}function pe(){var e=he(["\n  display: flex;\n  width: 100%;\n  ",";\n\n  align-items: center;\n"]);return pe=function(){return e},e}function de(){var e=he(["\n  display: flex;\n  align-items: center;\n  justify-content: space-evenly;\n  flex-direction: column;\n  border: 3px solid ",";\n  width: 75%;\n  height: 85%;\n  border-radius: 4% 12% 10% 8% / 3% 3% 6% 10%;\n  background: #ffffff;\n  position: relative;\n  padding: 0 1rem;\n  ","\n"]);return de=function(){return e},e}function me(){var e=he(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n"]);return me=function(){return e},e}function he(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var ye=f.ZP.div(me()),ve=f.ZP.div(de(),E().dark1,k.desktop.min("\n    width: 40%;\n    height: 85%;\n  ")),be=f.ZP.div(pe(),(function(e){return e.center?"justify-content: center;":"justify-content: space-between;"})),ge=(0,f.ZP)(l.Z)(se(),K()),we=f.ZP.p(fe(),R),Pe=f.ZP.p(le(),$()),Se=f.ZP.p(ue(),J()),Ee=f.ZP.p(oe(),M()),je=f.ZP.p(ce(),K());function Oe(e){var n=e.dispatchSetPlayers,t=e.dispatchSetStage,a=e.dispatchSetPlayerAScore,i=e.dispatchSetPlayerBScore,c=e.dispatchClearPlayersData,o=e.dispatchClearScore,u=e.players,f=e.stage,s=e.playerAScore,d=e.playerBScore,m=ae(l.Z.useForm(),1)[0],h=ae((0,r.useState)(!1),2),y=h[0],b=h[1];(0,r.useEffect)((function(){11!==s&&11!==d||b(!0)}),[s,d]);var g=function(){var e,r=(e=regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.validateFields();case 3:r=m.getFieldsValue(),n(r),t(2),m.resetFields(),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})),function(){var n=this,t=arguments;return new Promise((function(r,a){var i=e.apply(n,t);function c(e){re(i,r,a,c,o,"next",e)}function o(e){re(i,r,a,c,o,"throw",e)}c(void 0)}))});return function(){return r.apply(this,arguments)}}();return r.createElement(ye,null,r.createElement(ve,null,r.createElement(we,null,"The Keeper"),1===f&&r.createElement(ge,{form:m},r.createElement(l.Z.Item,{name:"playerA",rules:v("Username is required!","Invalid Username!")},r.createElement(te,{width:80,"data-testid":"input",placeholder:"Player A"})),r.createElement(l.Z.Item,{name:"playerB",rules:v("Username is required!","Invalid Username!")},r.createElement(te,{width:80,"data-testid":"input",placeholder:"Player B"})),r.createElement(H,{width:85,onClick:g,"data-testid":"btn"},"Continue")),2===f&&r.createElement(r.Fragment,null,r.createElement(be,null,r.createElement(Pe,null,u.playerA),r.createElement(H,{width:25,disabled:y,onClick:function(){a(s+1)}},"Add Win")),r.createElement(be,{center:!0},r.createElement(je,null,"Wins:"),r.createElement(Ee,null,s)),r.createElement(be,null,r.createElement(Pe,null,u.playerB),r.createElement(H,{width:25,disabled:y,onClick:function(){return i(d+1)}},"Add Win")),r.createElement(be,{center:!0},r.createElement(je,null,"Wins:"),r.createElement(Ee,null,d)),r.createElement("hr",null),r.createElement(be,null,r.createElement(je,null,"Current Winner"),r.createElement(Se,null,s||d?s===d?"It's a tie":s>d?u.playerA:u.playerB:"No one")),r.createElement(be,null,r.createElement(je,null,"Win Difference: ",Math.abs(s-d))),y&&r.createElement(be,null,r.createElement(H,{width:45,onClick:function(){b(!1),o()}},"Play Again"),r.createElement(H,{width:45,onClick:function(){b(!1),c()}},"Start Over")))),r.createElement(p,null))}Oe.propTypes={dispatchSetPlayers:i().func,dispatchSetStage:i().func,players:i().object,stage:i().number,playerAScore:i().number,playerBScore:i().number,dispatchSetPlayerAScore:i().func,dispatchSetPlayerBScore:i().func,dispatchClearPlayersData:i().func,dispatchClearScore:i().func};var xe=(0,o.zB)({keeper:(0,o.P1)(P,(function(e){return e})),players:(0,o.P1)(P,(function(e){return{playerA:w()(e,"playerA"),playerB:w()(e,"playerB")}})),stage:(0,o.P1)(P,(function(e){return w()(e,"stage",1)})),playerAScore:(0,o.P1)(P,(function(e){return w()(e,"playerAScore",0)})),playerBScore:(0,o.P1)(P,(function(e){return w()(e,"playerBScore",0)}))}),Ae=(0,c.$j)(xe,(function(e){return{dispatchSetPlayers:function(n){e(b.rr.setPlayers(n))},dispatchSetStage:function(n){e(b.rr.setStage(n))},dispatchSetPlayerAScore:function(n){e(b.rr.setPlayerAScore(n))},dispatchSetPlayerBScore:function(n){e(b.rr.setPlayerBScore(n))},dispatchClearPlayersData:function(){e(b.rr.clearPlayersData())},dispatchClearScore:function(){e(b.rr.clearScore())}}}));const ke=(0,u.qC)(Ae)(Oe);var ze=(0,u.qC)()(Oe)},4166:e=>{e.exports={transparent:"rgba(0,0,0,0)",text:"#212529",primary:"#00C4CC",secondary:"#f0f0f0",success:"#28a745",dark1:"#333333",dark2:"#353535",error:"#dc3545",white:"#fffff",gray:"#A9A9A9",whiteSmoke:"#f5f5f5"}}}]);
//# sourceMappingURL=202.bundle.js.map