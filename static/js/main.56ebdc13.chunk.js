(this.webpackJsonpcurrencyconvert=this.webpackJsonpcurrencyconvert||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),i=n(5),a=n.n(i),u=(n(12),n(13),function(){return Object(c.jsx)("div",{className:"ba b--white",children:Object(c.jsxs)("ul",{children:[Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("a",{href:"./index.html",children:"Home "})]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("a",{href:"./index.html",children:"About "})," "]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("a",{href:"./index.html",children:"Currencies "})," "]}),Object(c.jsxs)("li",{children:[" ",Object(c.jsx)("a",{href:"./index.html",children:"Contact us "})," "]})]})})}),j=n(4),o=n.n(j),b=n(6),h=n(2),l=(n(15),function(e){var t=e.rates,n=e.currencies,s=Object(r.useState)(1),i=Object(h.a)(s,2),a=i[0],u=i[1],j=Object(r.useState)(""),o=Object(h.a)(j,2),b=o[0],l=o[1];return Object(c.jsxs)("div",{className:"tc bg-near-white dib br3 pa3 ma2 grow bw2 shadow-3",children:[Object(c.jsxs)("h1",{className:"ma0",children:[a," usd equals to:"]}),Object(c.jsxs)("h2",{children:[n,"  ",Object(c.jsx)("br",{}),t*a]}),Object(c.jsx)("input",{type:"number",placeholder:"enter USD amount",onKeyDown:function(e){13===e.keyCode&&u(b)},onChange:function(e){return l(e.target.value)}}),Object(c.jsx)("button",{className:"f6 link dim dib white bg-mid-gray",onClick:function(){u(b)},children:" Convert "})]})}),d=(n(16),function(){var e=Object(r.useState)({rates:[]}),t=Object(h.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(""),a=Object(h.a)(i,2),u=a[0],j=a[1],d=function(){var e=Object(b.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://currencyapi.net/api/v1/rates?key=f50olPV26Mg9Gv9uIzxI3Y8ZecJdUMAOQJJ7&base=USD").then((function(e){return e.json()})).then((function(e){return s(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){d()}),[]);var O=Object.entries(n.rates).filter((function(e){return e[0].toLowerCase().includes(u.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"tc ma3",children:[Object(c.jsx)("img",{alt:"usa",src:"https://www.states101.com/img/usflag.svg"}),Object(c.jsx)("input",{type:"search",placeholder:"Search for currencies",className:"w5 h2",onChange:function(e){return j(e.target.value)}})]}),O.map((function(e,t){return Object(c.jsx)(l,{currencies:e[0],rates:e[1]},t)}))," "]})});var O=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{}),Object(c.jsx)("div",{children:Object(c.jsx)(d,{})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};n(17);a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),f()}],[[18,1,2]]]);
//# sourceMappingURL=main.56ebdc13.chunk.js.map