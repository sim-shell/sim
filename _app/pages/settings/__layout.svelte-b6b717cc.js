import{S as s,i as t,d as e,s as n,G as o,v as a,e as c,t as i,q as l,c as r,f as u,l as f,g as h,w as p,j as d,h as $,k as m,I as v,J as g,C as k,A as y}from"../../chunks/vendor-a88373e8.js";const w="src/routes/settings/__layout.svelte";function S(s){let t,n,a,_,x,E,b,j;const A=s[1].default,C=o(A,s,s[0],null),I={c:function(){t=c("h1"),n=i("Settings"),a=l(),_=c("div"),x=c("a"),E=i("Profile"),b=l(),C&&C.c(),this.h()},l:function(s){t=r(s,"H1",{});var e=u(t);n=f(e,"Settings"),e.forEach(h),a=p(s),_=r(s,"DIV",{class:!0});var o=u(_);x=r(o,"A",{href:!0});var c=u(x);E=f(c,"Profile"),c.forEach(h),o.forEach(h),b=p(s),C&&C.l(s),this.h()},h:function(){d(t,w,0,0,0),$(x,"href","/settings/profile"),d(x,w,3,1,42),$(_,"class","submenu"),d(_,w,2,0,19)},m:function(s,e){m(s,t,e),v(t,n),m(s,a,e),m(s,_,e),v(_,x),v(x,E),m(s,b,e),C&&C.m(s,e),j=!0},p:function(s,[t]){C&&C.p&&(!j||1&t)&&g(C,A,s,s[0],t,null,null)},i:function(s){j||(k(C,s),j=!0)},o:function(s){y(C,s),j=!1},d:function(s){s&&h(t),s&&h(a),s&&h(_),s&&h(b),C&&C.d(s)}};return e("SvelteRegisterBlock",{block:I,id:S.name,type:"component",source:"",ctx:s}),I}function _(s,t,e){let{$$slots:n={},$$scope:o}=t;a("_layout",n,["default"]);const c=[];return Object.keys(t).forEach((s=>{~c.indexOf(s)||"$$"===s.slice(0,2)||console.warn(`<_layout> was created with unknown prop '${s}'`)})),s.$$set=s=>{"$$scope"in s&&e(0,o=s.$$scope)},[o,n]}export default class extends s{constructor(s){super(s),t(this,s,_,S,n,{}),e("SvelteRegisterComponent",{component:this,tagName:"_layout",options:s,id:S.name})}}
