(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{15:function(e,t,c){},16:function(e,t,c){},17:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);var i=c(1),n=c(6),a=c.n(n),s=(c(15),c(16),c(2)),r=(c(17),"DETAILS_LOADED"),l="DETAILS_LOADING",j="SET_CITY";var d=c(3),o=c(0),b=["Samarqand","Bukhara","Tashkent","Fargona","Nukus"];function u(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(d.b)(),u=Object(i.useState)("Tashkent"),h=Object(s.a)(u,2),O=h[0],m=h[1];Object(i.useEffect)((function(){a(function(e){return function(t){t({type:l}),t({type:j,selectedCity:e}),fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat("88c34a8ddb27818051f224236d2df3ea","&units=metric")).then((function(e){return e.json()})).then((function(e){return t({type:r,weatherDetails:e})}))}}(O))}),[O]);return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"cities",children:[Object(o.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),m(c)},children:[Object(o.jsx)("input",{type:"text",placeholder:"Another location",name:"search",onChange:function(e){return n(e.target.value)}}),Object(o.jsx)("button",{type:"submit",className:"btn",children:Object(o.jsx)("img",{className:"search-icon",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"})})]}),Object(o.jsx)("ul",{className:"cities-list",children:b.map((function(e){return Object(o.jsx)("li",{onClick:function(e){var t;console.log("cityis",e),t=e.target.innerText,m(t)},children:e})}))})]})})}c(25);var h=function(e){return e.weatherReducer.weatherDetails};function O(){var e=Object(i.useState)(0),t=Object(s.a)(e,2),c=t[0],n=t[1],a=Object(i.useState)(0),r=Object(s.a)(a,2),l=r[0],j=r[1],b=Object(i.useState)(0),u=Object(s.a)(b,2),O=u[0],m=u[1],v=Object(i.useState)(0),x=Object(s.a)(v,2),f=x[0],p=x[1],g=Object(d.c)(h);return Object(i.useEffect)((function(){n(null===g||void 0===g?void 0:g.clouds.all),j(null===g||void 0===g?void 0:g.main.humidity),m(null===g||void 0===g?void 0:g.wind.speed),p(null===g||void 0===g?void 0:g.main.pressure)}),[g]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"weather-details",children:[Object(o.jsx)("h3",{children:"Weather Details"}),Object(o.jsxs)("ul",{className:"details-list",children:[Object(o.jsxs)("li",{className:"details-list-item",children:[Object(o.jsx)("div",{children:"Cloudy "}),Object(o.jsxs)("div",{className:"details-num",children:[c,"%"]})]}),Object(o.jsxs)("li",{className:"details-list-item",children:[Object(o.jsx)("div",{children:"Humidity "})," ",Object(o.jsxs)("div",{className:"details-num",children:[l,"%"]})]}),Object(o.jsxs)("li",{className:"details-list-item",children:[Object(o.jsx)("div",{children:"Wind "}),Object(o.jsxs)("div",{className:"details-num",children:[O,"km/h"]})]}),Object(o.jsxs)("li",{className:"details-list-item",children:[Object(o.jsx)("div",{children:"Pressure "})," ",Object(o.jsxs)("div",{className:"details-num",children:[f,"mm"]})]})]})]})})}c(26);function m(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"sidebar-container",children:[Object(o.jsx)(u,{}),Object(o.jsx)("hr",{}),Object(o.jsx)(O,{}),Object(o.jsx)("hr",{})]})})}c(27);var v=function(e){return e.weatherReducer.weatherDetails};function x(){var e=new Date,t=Object(i.useState)(""),c=Object(s.a)(t,2),n=c[0],a=c[1],r=Object(i.useState)(""),l=Object(s.a)(r,2),j=l[0],b=l[1],u=Object(i.useState)(0),h=Object(s.a)(u,2),O=h[0],m=h[1],x=Object(i.useState)(""),f=Object(s.a)(x,2),p=f[0],g=f[1],w=Object(d.c)(v);return console.log("WeatherDetails",w),Object(i.useEffect)((function(){m(Math.round(null===w||void 0===w?void 0:w.main.temp)),g(null===w||void 0===w?void 0:w.name),a(null===w||void 0===w?void 0:w.weather[0].icon),b(null===w||void 0===w?void 0:w.weather[0].description)}),[w]),Object(o.jsxs)("div",{className:"info-weather",children:[Object(o.jsxs)("div",{className:"temparature",children:[O,"\xb0"]}),Object(o.jsxs)("div",{className:"additional",children:[Object(o.jsx)("h2",{className:"city",children:p}),Object(o.jsx)("div",{className:"date",children:"".concat(e," ")})]}),Object(o.jsxs)("div",{className:"weather-condition",children:[Object(o.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(n,".png"),alt:"weather condition icon"}),Object(o.jsx)("br",{}),Object(o.jsx)("span",{className:"condition",children:j})]})]})}function f(){return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{className:"info",children:[Object(o.jsx)("h1",{className:"info-logo",children:"the.weather"}),Object(o.jsx)(x,{})]}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(m,{})})]})})}function p(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"Loading..."})})}var g=function(){var e=Object(d.c)((function(e){return e.loading}));console.log("loading",e);var t=(new Date).getHours();if(t>5&&t<9)var c="morning";else if(t>9&&t<16)c="houray";else if(t>16&&t<20)c="evening";else if(t>20&&t<5)c="night";return Object(o.jsx)("div",{className:"App ".concat(c),children:e?Object(o.jsx)(p,{}):Object(o.jsx)(f,{})})},w=c(5),N=c(4),S={loading:!0,weatherInfo:{},selectedCity:"Tashkent"},D=Object(w.b)({weatherReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r:return Object(N.a)(Object(N.a)({},e),{},{loading:!1,weatherDetails:t.weatherDetails});case l:return Object(N.a)(Object(N.a)({},e),{},{loading:!0});case j:var c=t.selectedCity;return Object(N.a)(Object(N.a)({},e),{},{selectedCity:c});default:return e}}}),y=c(10),_=Object(w.d)(D,Object(w.c)(Object(w.a)(y.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));a.a.render(Object(o.jsx)(d.a,{store:_,children:Object(o.jsx)(g,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.9508bd07.chunk.js.map