(this["webpackJsonpsearch-movies"]=this["webpackJsonpsearch-movies"]||[]).push([[0],{14:function(e,t,c){},15:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(6),r=c.n(s),i=(c(14),c(15),c(5)),o=c(7),l=c(3),j=c(8),u=c.n(j),b=c(9),d=c.n(b),h=c(0);var m=function(e){var t=e.movie,c=d()(t.release_date).format("MMMM Do YYYY");return Object(h.jsxs)("div",{className:"movie-card",children:[Object(h.jsx)("a",{href:"https://www.themoviedb.org/movie/".concat(t.id,"?language=en-US"),target:"_blank",children:Object(h.jsx)("img",{className:"movie-card-image",src:"https://image.tmdb.org/t/p/w94_and_h141_bestv2/".concat(t.poster_path),alt:t.title+" poster"})}),Object(h.jsxs)("div",{className:"movie-card-content",children:[Object(h.jsx)("h3",{className:"movie-card-title",children:t.title}),Object(h.jsx)("p",{className:"date",children:c}),Object(h.jsx)("p",{className:"movie-card-desc",children:t.overview})]})]})};function O(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(l.a)(s,2),j=r[0],b=r[1],d=Object(a.useState)(!1),O=Object(l.a)(d,2),p=O[0],v=O[1],x=Object(a.useState)(null),f=Object(l.a)(x,2),g=f[0],N=f[1],S=Object(a.useState)(0),w=Object(l.a)(S,2),y=w[0],_=w[1],k=Object(a.useState)(1),M=Object(l.a)(k,2),C=M[0],F=M[1],D=Object(a.useState)(!1),Y=Object(l.a)(D,2),A=Y[0],P=Y[1],T=function(){var e=Object(o.a)(Object(i.a)().mark((function e(t){var a,n,s;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),F(C+1),v(!0),a="https://api.themoviedb.org/3/search/movie?api_key=d1217855f38a1bce208570b648feff3f&language=en-US&query=".concat(c,"&page=").concat(C,"&include_adult=false"),e.prev=4,e.next=7,fetch(a);case 7:return n=e.sent,e.next=10,n.json();case 10:(s=e.sent).results&&s.results.length>0?(N(null),b(s.results),_(s.total_pages)):N("Sorry, no movies found by name "+c),P(!1),v(!1),e.next=22;break;case 16:e.prev=16,e.t0=e.catch(4),console.error(e.t0),P(!1),v(!1),N("An unexpected error occured.");case 22:case"end":return e.stop()}}),e,null,[[4,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{className:"title",children:"Welcome to Movie Search App"}),Object(h.jsxs)("form",{className:"form",onSubmit:T,children:[Object(h.jsx)("input",{className:"input",type:"text",name:"query",placeholder:"Please enter a movie name",value:c,onChange:function(e){n(e.target.value),P(!0),F(1)}}),Object(h.jsx)("button",{className:"button",disabled:!c||!A,type:"submit",children:"Search"})]})]}),Object(h.jsx)("div",{className:"movie-card-list",children:p&&!g?Object(h.jsx)("span",{className:"loader",children:Object(h.jsx)(u.a,{type:"ThreeDots",color:"#00ff00",height:100,width:100})}):g?Object(h.jsx)("div",{className:"message",children:Object(h.jsx)("h1",{children:g})}):j.filter((function(e){return e.poster_path})).map((function(e){return Object(h.jsx)(m,{movie:e},e.id)}))}),!p&&null==g&&y>=C?Object(h.jsx)("div",{className:"button-next",children:Object(h.jsx)("button",{className:"next",onClick:T,children:"Next page"})}):""]})}var p=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(O,{})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),v()}},[[38,1,2]]]);
//# sourceMappingURL=main.35c6cbfc.chunk.js.map