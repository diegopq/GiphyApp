(this.webpackJsonpgiphy_app=this.webpackJsonpgiphy_app||[]).push([[0],{77:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(63),a=n.n(c),i=(n(77),n(101)),s=n(3),o=n(10),j=n(94),u=n(102),d=n(104),l=n(4),b=function(e){var t=e.setCategories,n=Object(r.useState)(""),c=Object(s.a)(n,2),a=c[0],i=c[1],b=function(e){e.preventDefault(),""!==a.trim()&&(t((function(e){return[a].concat(Object(o.a)(e))})),i(""))};return Object(l.jsx)(j.a,{margin:"10px 0px",children:Object(l.jsxs)("form",{action:"",onSubmit:b,children:[Object(l.jsx)(u.a,{type:"text",value:a,onChange:function(e){i(e.target.value)},placeholder:"Buscar GIF"}),Object(l.jsx)(d.a,{onClick:b,margin:"10px 0px",color:"white",backgroundColor:"brand.700",children:"Buscar"})]})})},x=n(54),p=n(98),h=n(96),O=n(105),f=n(103),g=n(55),m=n.n(g),v=n(65),y=function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,c,a,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=6DOVtDs7qtGxJ3Msaxu3axY5KCnp0osB&q=".concat(encodeURI(t),"&limit=10"),e.next=3,fetch(n);case 3:return r=e.sent,e.next=6,r.json();case 6:return c=e.sent,a=c.data,i=a.map((function(e){return{id:e.id,title:e.title,img:e.images.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=n(106),w=n(97),C=function(e){var t=e.title,n=e.img;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(j.a,{w:"10%",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",margin:"2",children:[Object(l.jsx)(k.a,{src:n,alt:t}),Object(l.jsx)(h.a,{children:Object(l.jsx)(w.a,{fontSize:"xs",children:t})})]})})},S=function(e){var t=e.category,n=function(e){var t=Object(r.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],a=n[1];return Object(r.useEffect)((function(){y(e).then((function(e){a({data:e,loading:!1})}))}),[e]),c}(t),c=n.data,a=n.loading;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(p.a,{as:"h3",size:"md",children:t}),a&&Object(l.jsx)(j.a,{w:"100%",h:"100px",children:Object(l.jsx)(h.a,{h:"100px",children:Object(l.jsx)(O.a,{color:"red.500",size:"xl"})})}),Object(l.jsx)(f.a,{h:"25%",children:c.map((function(e){return Object(r.createElement)(C,Object(x.a)(Object(x.a)({},e),{},{key:e.id}))}))})]})},z=n(107),B=function(){var e=Object(r.useState)([""]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(w.a,{fontSize:"3xl",color:"deepskyblue",children:"GifExpertApp"}),Object(l.jsx)(b,{setCategories:c}),Object(l.jsx)("hr",{}),Object(l.jsx)(z.a,{margin:"9px",children:n.map((function(e){return Object(l.jsx)(S,{category:e},e)}))})]})},E=n(100),F=Object(E.a)({config:{initialColorMode:"dark",useSystemColorMode:!0},colors:{brand:{900:"#1a365d",800:"#153e75",700:"#2a69ac"}}});a.a.render(Object(l.jsx)(i.a,{theme:F,children:Object(l.jsx)(B,{})}),document.getElementById("root"))}},[[84,1,2]]]);
//# sourceMappingURL=main.cd0653ff.chunk.js.map