(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{uHBK:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),a=function(l){this.uid="",this.titulo="",this.thumbnail="",this.html="",this.nid="",this.uid=l.uid,this.titulo=l.titulo,this.thumbnail=l.thumbnail,this.html=l.html,this.nid=l.nid,this.data=l.data,this.img_seq=l.img_seq},e=u("mrSG"),i=u("I2rO"),o=u("U47h"),r=u("zlDu"),c=u("43Ke"),s=u("Ge40"),h=function(l,n,u,t){return new(u||(u=Promise))(function(a,e){function i(l){try{r(t.next(l))}catch(l){e(l)}}function o(l){try{r(t.throw(l))}catch(l){e(l)}}function r(l){l.done?a(l.value):new u(function(n){n(l.value)}).then(i,o)}r((t=t.apply(l,n||[])).next())})},b=function(l,n){var u,t,a,e,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function o(e){return function(o){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(a=2&e[0]?t.return:e[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,e[1])).done)return a;switch(t=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,t=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){i.label=e[1];break}if(6===e[0]&&i.label<a[1]){i.label=a[1],a=e;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(e);break}a[2]&&i.ops.pop(),i.trys.pop();continue}e=n.call(l,i)}catch(l){e=[6,l],t=0}finally{u=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,o])}}},d=function(l){function n(n,u,t){var a=l.call(this,"Receitas",n)||this;return a.storage=u,a.auth=t,a.st=new i.a,a._storage=new o.a("Receitas",u),a}return Object(e.c)(n,l),n.prototype.getReceitas=function(){return h(this,void 0,void 0,function(){var l;return b(this,function(n){switch(n.label){case 0:return[4,this.getUID()];case 1:return l=n.sent(),[4,this.collection.ref.where("nid","==",l).orderBy("data","desc").get()];case 2:return[2,n.sent().docs.map(function(l){return l.data()})]}})})},n.prototype.getUID=function(){return h(this,void 0,void 0,function(){return b(this,function(l){switch(l.label){case 0:return[4,this.auth.getUID()];case 1:return[2,l.sent()]}})})},n.prototype.create=function(n){return h(this,void 0,void 0,function(){var u,t,e,i,o,r,c,s;return b(this,function(h){switch(h.label){case 0:return u=n,[4,this.getUID()];case 1:return u.nid=h.sent(),t=n,[4,l.prototype.getId.call(this)];case 2:return t.uid=h.sent(),n.data=Date.now(),e=n,[4,this._storage.uploadPhoto(n.uid,"thumbnail",n.thumbnail)];case 3:e.thumbnail=h.sent(),i=this.st.getBetween(n.html,'<img src="','"'),o=0,r=i,h.label=4;case 4:return o<r.length?(c=r[o]).startsWith("data")?[4,this._storage.uploadPhoto(n.uid,n.img_seq,c)]:[3,6]:[3,7];case 5:s=h.sent(),n.html=n.html.replace(c,s),n.img_seq++,h.label=6;case 6:return o++,[3,4];case 7:return l.prototype.create.call(this,a,n),[2]}})})},n}(r.a),f=function(){function l(l,n){this.aService=l,this.ac=n}return l.prototype.ngOnInit=function(){var l=this;this.ac.params.subscribe(function(n){l.aService.findBy(a,n.uid).then(function(n){return l.receita=n}).catch(function(l){return console.log(l)})})},l}(),p=function(){function l(l){this.aService=l,this.receita={titulo:"",thumbnail:"",html:"",img_seq:0}}return l.prototype.ngOnInit=function(){},l.prototype.teste=function(){return l=this,void 0,u=function(){return function(l,n){var u,t,a,e,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function o(e){return function(o){return function(e){if(u)throw new TypeError("Generator is already executing.");for(;i;)try{if(u=1,t&&(a=2&e[0]?t.return:e[0]?t.throw||((a=t.return)&&a.call(t),0):t.next)&&!(a=a.call(t,e[1])).done)return a;switch(t=0,a&&(e=[2&e[0],a.value]),e[0]){case 0:case 1:a=e;break;case 4:return i.label++,{value:e[1],done:!1};case 5:i.label++,t=e[1],e=[0];continue;case 7:e=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===e[0]||2===e[0])){i=0;continue}if(3===e[0]&&(!a||e[1]>a[0]&&e[1]<a[3])){i.label=e[1];break}if(6===e[0]&&i.label<a[1]){i.label=a[1],a=e;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(e);break}a[2]&&i.ops.pop(),i.trys.pop();continue}e=n.call(l,i)}catch(l){e=[6,l],t=0}finally{u=a=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}([e,o])}}}(this,function(l){return this.aService.create(new a(this.receita)),[2]})},new((n=void 0)||(n=Promise))(function(t,a){function e(l){try{o(u.next(l))}catch(l){a(l)}}function i(l){try{o(u.throw(l))}catch(l){a(l)}}function o(l){l.done?t(l.value):new n(function(n){n(l.value)}).then(e,i)}o((u=u.apply(l,[])).next())});var l,n,u},l}(),g=u("0/uQ"),m=function(){function l(l,n){this.aService=l,this.router=n}return l.prototype.ngOnInit=function(){this.receitas=Object(g.a)(this.aService.getReceitas())},l.prototype.detalhe=function(l){this.router.navigate(["receitas/"+l])},l.prototype.add=function(){this.router.navigate(["receitas/add/0"])},l}(),v=function(){},R=u("1tIr"),S=u("pMnS"),y=u("ra/t"),w=u("ntG5"),k=u("Ip0R"),C=u("M9A9"),Z=u("ZYCi"),x=t.Qa({encapsulation:0,styles:[[""]],data:{}});function I(l){return t.lb(0,[(l()(),t.Sa(0,0,null,null,13,"ion-col",[["size-lg","3"],["size-md","4"],["size-sm","12"]],null,null,null,y.J,y.j)),t.Ra(1,49152,null,0,w.q,[t.l],null,null),(l()(),t.Sa(2,0,null,0,11,"ion-card",[],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.detalhe(l.context.$implicit.uid)&&t),t},y.I,y.f)),t.Ra(3,49152,null,0,w.h,[t.l],null,null),(l()(),t.Sa(4,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.Sa(5,0,null,0,8,"ion-card-header",[],null,null,null,y.F,y.g)),t.Ra(6,49152,null,0,w.j,[t.l],null,null),(l()(),t.Sa(7,0,null,0,2,"ion-card-title",[],null,null,null,y.H,y.i)),t.Ra(8,49152,null,0,w.l,[t.l],null,null),(l()(),t.jb(9,0,["",""])),(l()(),t.Sa(10,0,null,0,3,"ion-card-subtitle",[],null,null,null,y.G,y.h)),t.Ra(11,49152,null,0,w.k,[t.l],null,null),(l()(),t.jb(12,0,["",""])),t.fb(13,1)],null,function(l,n){l(n,4,0,n.context.$implicit.thumbnail),l(n,9,0,n.context.$implicit.titulo),l(n,12,0,t.kb(n,12,0,l(n,13,0,t.bb(n.parent,0),n.context.$implicit.data)))})}function E(l){return t.lb(0,[t.db(0,k.e,[t.w]),(l()(),t.Sa(1,0,null,null,14,"ion-header",[],null,null,null,y.N,y.n)),t.Ra(2,49152,null,0,w.y,[t.l],null,null),(l()(),t.Sa(3,0,null,0,12,"ion-toolbar",[],null,null,null,y.Z,y.z)),t.Ra(4,49152,null,0,w.Xa,[t.l],null,null),(l()(),t.Sa(5,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,y.E,y.e)),t.Ra(6,49152,null,0,w.g,[],null,null),(l()(),t.Sa(7,0,null,0,1,"ion-menu-button",[],null,null,null,y.T,y.u)),t.Ra(8,49152,null,0,w.P,[t.l],null,null),(l()(),t.Sa(9,0,null,0,6,"ion-buttons",[["slot","end"]],null,null,null,y.E,y.e)),t.Ra(10,49152,null,0,w.g,[],null,null),(l()(),t.Sa(11,0,null,0,4,"ion-button",[["icon-only",""],["title","Adicionar receita"]],null,[[null,"click"]],function(l,n,u){var a=!0,e=l.component;return"click"===n&&(a=!1!==t.bb(l,13).onClick(u)&&a),"click"===n&&(a=!1!==e.add()&&a),a},y.D,y.d)),t.Ra(12,49152,null,0,w.f,[t.l],null,null),t.Ra(13,16384,null,0,C.a,[[2,Z.l],t.l],null,null),(l()(),t.Sa(14,0,null,0,1,"ion-icon",[["color","dark"],["name","add"]],null,null,null,y.O,y.o)),t.Ra(15,49152,null,0,w.A,[t.l],{color:[0,"color"],name:[1,"name"]},null),(l()(),t.Sa(16,0,null,null,8,"ion-content",[["padding",""]],null,null,null,y.K,y.k)),t.Ra(17,49152,null,0,w.r,[t.l],null,null),(l()(),t.Sa(18,0,null,0,6,"ion-grid",[],null,null,null,y.M,y.m)),t.Ra(19,49152,null,0,w.x,[t.l],null,null),(l()(),t.Sa(20,0,null,0,4,"ion-row",[],null,null,null,y.W,y.w)),t.Ra(21,49152,null,0,w.Ea,[],null,null),(l()(),t.Ja(16777216,null,0,2,null,I)),t.Ra(23,278528,null,0,k.j,[t.R,t.O,t.u],{ngForOf:[0,"ngForOf"]},null),t.db(131072,k.b,[t.i])],function(l,n){var u=n.component;l(n,15,0,"dark","add"),l(n,23,0,t.kb(n,23,0,t.bb(n,24).transform(u.receitas)))},null)}var j=t.Oa("ng-component",m,function(l){return t.lb(0,[(l()(),t.Sa(0,0,null,null,1,"ng-component",[],null,null,null,E,x)),t.Ra(1,114688,null,0,m,[d,Z.l],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),O=u("My/g"),M=u("/rdR"),P=u("Zq1E"),T=u("gIcY"),q=u("w+Dx"),D=u("RrTj"),_=u("9opb"),z=t.Qa({encapsulation:0,styles:[[""]],data:{}});function B(l){return t.lb(0,[(l()(),t.Sa(0,0,null,null,7,"ion-header",[],null,null,null,y.N,y.n)),t.Ra(1,49152,null,0,w.y,[t.l],null,null),(l()(),t.Sa(2,0,null,0,5,"ion-toolbar",[],null,null,null,y.Z,y.z)),t.Ra(3,49152,null,0,w.Xa,[t.l],null,null),(l()(),t.Sa(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,y.E,y.e)),t.Ra(5,49152,null,0,w.g,[],null,null),(l()(),t.Sa(6,0,null,0,1,"ion-menu-button",[],null,null,null,y.T,y.u)),t.Ra(7,49152,null,0,w.P,[t.l],null,null),(l()(),t.Sa(8,0,null,null,26,"ion-content",[["padding",""]],null,null,null,y.K,y.k)),t.Ra(9,49152,null,0,w.r,[t.l],null,null),(l()(),t.Sa(10,0,null,0,24,"ion-grid",[],null,null,null,y.M,y.m)),t.Ra(11,49152,null,0,w.x,[t.l],null,null),(l()(),t.Sa(12,0,null,0,1,"lipd-cropper",[],null,[[null,"imageChange"]],function(l,n,u){var t=!0;return"imageChange"===n&&(t=!1!==(l.component.receita.thumbnail=u)&&t),t},O.b,O.a)),t.Ra(13,114688,null,0,M.a,[],{image:[0,"image"]},{imageChange:"imageChange"}),(l()(),t.Sa(14,0,null,0,12,"ion-item",[],null,[[null,"click"]],function(l,n,u){var a=!0;return"click"===n&&(a=!1!==t.bb(l,16).onClick(u)&&a),a},y.Q,y.q)),t.Ra(15,49152,null,0,w.F,[t.l],null,null),t.Ra(16,16384,null,0,C.a,[[2,Z.l],t.l],null,null),(l()(),t.Sa(17,0,null,0,2,"ion-label",[["position","fixed"]],null,null,null,y.R,y.r)),t.Ra(18,49152,null,0,w.L,[t.l],{position:[0,"position"]},null),(l()(),t.jb(-1,0,["T\xedtulo:"])),(l()(),t.Sa(20,0,null,0,6,"ion-input",[["clearInput",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionChange"],[null,"ionBlur"]],function(l,n,u){var a=!0,e=l.component;return"ionChange"===n&&(a=!1!==t.bb(l,21)._handleInputEvent(u.target.value)&&a),"ionBlur"===n&&(a=!1!==t.bb(l,21)._handleBlurEvent()&&a),"ngModelChange"===n&&(a=!1!==(e.receita.titulo=u)&&a),a},y.P,y.p)),t.Ra(21,16384,null,0,P.a,[t.l],null,null),t.gb(1024,null,T.g,function(l){return[l]},[P.a]),t.Ra(23,671744,null,0,T.k,[[8,null],[8,null],[8,null],[6,T.g]],{model:[0,"model"]},{update:"ngModelChange"}),t.gb(2048,null,T.h,null,[T.k]),t.Ra(25,16384,null,0,T.i,[[4,T.h]],null,null),t.Ra(26,49152,null,0,w.E,[t.l],{clearInput:[0,"clearInput"]},null),(l()(),t.Sa(27,0,null,0,1,"lipd-editor",[["placeholder","Escreva sua receita aqui"]],null,[[null,"htmlChange"]],function(l,n,u){var t=!0;return"htmlChange"===n&&(t=!1!==(l.component.receita.html=u)&&t),t},q.b,q.a)),t.Ra(28,4308992,null,0,D.a,[_.a],{placeholder:[0,"placeholder"],thumbnail:[1,"thumbnail"],title:[2,"title"],html:[3,"html"]},{htmlChange:"htmlChange"}),(l()(),t.Sa(29,0,null,0,5,"ion-row",[["justify-content-center",""]],null,null,null,y.W,y.w)),t.Ra(30,49152,null,0,w.Ea,[],null,null),(l()(),t.Sa(31,0,null,0,3,"ion-button",[],null,[[null,"click"]],function(l,n,u){var a=!0,e=l.component;return"click"===n&&(a=!1!==t.bb(l,33).onClick(u)&&a),"click"===n&&(a=!1!==e.teste()&&a),a},y.D,y.d)),t.Ra(32,49152,null,0,w.f,[t.l],null,null),t.Ra(33,16384,null,0,C.a,[[2,Z.l],t.l],null,null),(l()(),t.jb(-1,0,["Teste"]))],function(l,n){var u=n.component;l(n,13,0,u.receita.thumbnail),l(n,18,0,"fixed"),l(n,23,0,u.receita.titulo),l(n,26,0,""),l(n,28,0,"Escreva sua receita aqui",u.receita.thumbnail,u.receita.titulo,u.receita.html)},function(l,n){l(n,20,0,t.bb(n,25).ngClassUntouched,t.bb(n,25).ngClassTouched,t.bb(n,25).ngClassPristine,t.bb(n,25).ngClassDirty,t.bb(n,25).ngClassValid,t.bb(n,25).ngClassInvalid,t.bb(n,25).ngClassPending)})}var G=t.Oa("ng-component",p,function(l){return t.lb(0,[(l()(),t.Sa(0,0,null,null,1,"ng-component",[],null,null,null,B,z)),t.Ra(1,114688,null,0,p,[d],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),U=u("LUJV"),W=u("ZYjt"),F=t.Qa({encapsulation:0,styles:[[""]],data:{}});function J(l){return t.lb(0,[t.db(0,k.e,[t.w]),t.db(0,U.a,[W.b]),(l()(),t.Sa(2,0,null,null,7,"ion-header",[],null,null,null,y.N,y.n)),t.Ra(3,49152,null,0,w.y,[t.l],null,null),(l()(),t.Sa(4,0,null,0,5,"ion-toolbar",[],null,null,null,y.Z,y.z)),t.Ra(5,49152,null,0,w.Xa,[t.l],null,null),(l()(),t.Sa(6,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,y.E,y.e)),t.Ra(7,49152,null,0,w.g,[],null,null),(l()(),t.Sa(8,0,null,0,1,"ion-menu-button",[],null,null,null,y.T,y.u)),t.Ra(9,49152,null,0,w.P,[t.l],null,null),(l()(),t.Sa(10,0,null,null,18,"ion-content",[["padding",""]],null,null,null,y.K,y.k)),t.Ra(11,49152,null,0,w.r,[t.l],null,null),(l()(),t.Sa(12,0,null,0,16,"ion-grid",[],null,null,null,y.M,y.m)),t.Ra(13,49152,null,0,w.x,[t.l],null,null),(l()(),t.Sa(14,0,null,0,3,"ion-row",[["justify-content-center",""]],null,null,null,y.W,y.w)),t.Ra(15,49152,null,0,w.Ea,[],null,null),(l()(),t.Sa(16,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),t.jb(17,null,["",""])),(l()(),t.Sa(18,0,null,0,6,"ion-row",[],null,null,null,y.W,y.w)),t.Ra(19,49152,null,0,w.Ea,[],null,null),(l()(),t.Sa(20,0,null,0,4,"span",[],null,null,null,null,null)),(l()(),t.Sa(21,0,null,null,1,"ion-icon",[["name","calendar"]],null,null,null,y.O,y.o)),t.Ra(22,49152,null,0,w.A,[t.l],{name:[0,"name"]},null),(l()(),t.jb(23,null,[" "," "])),t.fb(24,1),(l()(),t.Sa(25,0,null,0,3,"ion-row",[],null,null,null,y.W,y.w)),t.Ra(26,49152,null,0,w.Ea,[],null,null),(l()(),t.Sa(27,0,null,0,1,"div",[["class","ql-editor"],["style","width: 100%;"]],[[8,"innerHTML",1]],null,null,null,null)),t.fb(28,1)],function(l,n){l(n,22,0,"calendar")},function(l,n){var u=n.component;l(n,17,0,null==u.receita?null:u.receita.titulo),l(n,23,0,t.kb(n,23,0,l(n,24,0,t.bb(n,0),null==u.receita?null:u.receita.data))),l(n,27,0,t.kb(n,27,0,l(n,28,0,t.bb(n,1),null==u.receita?null:u.receita.html)))})}var K=t.Oa("ng-component",f,function(l){return t.lb(0,[(l()(),t.Sa(0,0,null,null,1,"ng-component",[],null,null,null,J,F)),t.Ra(1,114688,null,0,f,[d,Z.a],null,null)],function(l,n){l(n,1,0)},null)},{},{},[]),A=u("95zI"),Q=u("apKv"),N=u("B4/3"),Y=u("fTJM"),$=u("Z+Mw"),H=u("A6C8"),L=u("efFR"),X=u("RTkW");u.d(n,"ReceitasPageModuleNgFactory",function(){return V});var V=t.Pa(v,[],function(l){return t.Ya([t.Za(512,t.k,t.Ea,[[8,[R.a,S.a,j,G,K]],[3,t.k],t.z]),t.Za(4608,k.m,k.l,[t.w,[2,k.t]]),t.Za(4608,T.p,T.p,[]),t.Za(4608,A.a,A.a,[t.B,t.g]),t.Za(4608,_.a,_.a,[A.a,t.k,t.s]),t.Za(4608,Q.a,Q.a,[A.a,t.k,t.s]),t.Za(4608,d,d,[s.c,s.a,c.a]),t.Za(1073742336,k.c,k.c,[]),t.Za(1073742336,T.n,T.n,[]),t.Za(1073742336,T.e,T.e,[]),t.Za(1073742336,N.a,N.a,[]),t.Za(1073742336,Y.a,Y.a,[]),t.Za(1073742336,$.b,$.b,[]),t.Za(1073742336,H.a,H.a,[]),t.Za(1073742336,L.b,L.b,[]),t.Za(1073742336,X.a,X.a,[]),t.Za(1073742336,Z.o,Z.o,[[2,Z.u],[2,Z.l]]),t.Za(1073742336,v,v,[]),t.Za(1024,Z.j,function(){return[[{path:"",component:m},{path:"add/0",component:p},{path:":uid",component:f}]]},[])])})}}]);