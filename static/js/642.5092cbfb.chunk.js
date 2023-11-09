"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[642],{6713:function(n,e,t){t.d(e,{IR:function(){return f},M1:function(){return l},Pg:function(){return p},_L:function(){return s},tx:function(){return h}});var r=t(5861),o=t(4687),c=t.n(o),u=t(1243),i="05daa517baabbb59954a8442a1286030",a=u.Z.create({baseURL:"https://api.themoviedb.org/3/"}),s=function(){var n=(0,r.Z)(c().mark((function n(){var e,t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("discover/movie?api_key=".concat(i,"&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"));case 2:return e=n.sent,t=e.data.results,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("search/movie?api_key=".concat(i,"&query=").concat(e));case 2:return t=n.sent,r=t.data.results,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("movie/".concat(e,"?api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("movie/".concat(e,"/credits?api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e){var t,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.get("movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},931:function(n,e,t){t.d(e,{Z:function(){return H}});var r,o,c,u,i,a,s,f,p,l,h=t(7689),d=t(4145),m=t(168),v=t(9202),x=t(1087),g=v.Z.ul(r||(r=(0,m.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  padding: 0 20px;\n  gap: ",";\n"])),(function(n){return n.theme.countSize(2)})),Z=v.Z.li(o||(o=(0,m.Z)(["\n  overflow: hidden;\n  border-radius: ",";\n  background-color: #707070;\n  width: 530px;\n  max-height: 375px;\n"])),(function(n){return n.theme.countSize(2)})),w=(0,v.Z)(x.rU)(c||(c=(0,m.Z)(["\n  display: flex;\n"]))),b=v.Z.img(u||(u=(0,m.Z)(["\n  width: 250px;\n"]))),y=v.Z.div(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0 5px;\n"]))),S=v.Z.p(a||(a=(0,m.Z)(["\n  margin-bottom: ",";\n  font-size: ",";\n  color: ",";\n"])),(function(n){return n.theme.countSize(5)}),(function(n){return n.theme.countSize(8)}),(function(n){return n.theme.colors.fontColor})),j=v.Z.div(s||(s=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n\n  gap: ",";\n"])),(function(n){return n.theme.countSize(3)})),z=v.Z.p(f||(f=(0,m.Z)(["\n  margin-bottom: ",";\n  font-size: ",";\n"])),(function(n){return n.theme.countSize(5)}),(function(n){return n.theme.countSize(7)})),k=v.Z.p(p||(p=(0,m.Z)(["\n  font-size: ",";\n"])),(function(n){return n.theme.countSize(5)})),_=v.Z.p(l||(l=(0,m.Z)(["\n  height: 130px;\n"])));function C(n){var e=n.split(" ");if(e.length>30){var t=e.slice(0,30);return"".concat(t.join(" "),"...")}return n}var L=t(184),H=function(n){var e=n.movies,t=(0,h.TH)();if(e)return(0,L.jsx)(g,{children:e.map((function(n){var e=n.original_title,r=n.id,o=n.poster_path,c=n.vote_average,u=n.overview;return(0,L.jsx)(Z,{children:(0,L.jsxs)(w,{to:"/movies/".concat(r),state:{from:t},children:[(0,L.jsx)(b,{src:o?"https://image.tmdb.org/t/p/w500/".concat(o):d.Z,alt:e}),(0,L.jsxs)(y,{children:[(0,L.jsx)(S,{children:e}),(0,L.jsx)(z,{children:c}),(0,L.jsxs)(j,{children:[(0,L.jsx)(k,{children:"Description:"}),(0,L.jsx)(_,{children:C(u)})]})]})]})},r)}))})}},4145:function(n,e){e.Z="https://imgs.search.brave.com/IoYXsAeMX1UnHVPpwqcjWOwaSOwAPx9uT-Srs96mG8g/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLW51enI0/Q2R5WVY0VGY4TGQt/R2U0WFV3LXQ1MDB4/NTAwLmpwZw"},3642:function(n,e,t){t.r(e),t.d(e,{default:function(){return b}});var r,o,c,u=t(5861),i=t(9439),a=t(4687),s=t.n(a),f=t(931),p=t(2791),l=t(168),h=t(9202),d=h.Z.form(r||(r=(0,l.Z)(["\n  display: flex;\n  align-items: center;\n  padding: 0 20px;\n  flex-direction: column;\n  margin-bottom: ",";\n"])),(function(n){return n.theme.countSize(7)})),m=h.Z.input(o||(o=(0,l.Z)(["\n  color: ",";\n  text-align: center;\n  font-size: ",";\n  width: 100%;\n  height: ",";\n  outline: none;\n  border: none;\n  border-radius: ",";\n  background-color: ",";\n\n  margin-bottom: ",";\n\n  &::placeholder {\n    font-size: ",";\n    text-transform: uppercase;\n  }\n"])),(function(n){return n.theme.colors.fontColor}),(function(n){return n.theme.countSize(8)}),(function(n){return n.theme.countSize(11)}),(function(n){return n.theme.countSize(2)}),(function(n){return n.theme.colors.inputSearch}),(function(n){return n.theme.countSize(3)}),(function(n){return n.theme.countSize(5)})),v=h.Z.button(c||(c=(0,l.Z)(["\n  width: max-content;\n  font-size: ",";\n  color: ",";\n  background: none;\n  border: none;\n  text-transform: uppercase;\n  &:hover,\n  &:focus {\n    cursor: pointer;\n    text-decoration: underline;\n  }\n"])),(function(n){return n.theme.countSize(4)}),(function(n){return n.theme.colors.fontColor})),x=t(184),g=function(n){var e=n.submitHandle,t=(0,p.useState)(""),r=(0,i.Z)(t,2),o=r[0],c=r[1];return(0,x.jsxs)(d,{onSubmit:function(n){n.preventDefault();var t=n.currentTarget.search.value;""!==t.trim()?(e(t),c("")):alert("please write something")},children:[(0,x.jsx)(m,{placeholder:"write your query",autoComplete:"off",type:"text",name:"search",value:o,onChange:function(n){var e=n.target.value;e.toLowerCase()!==o.toLowerCase()&&c(e)}}),(0,x.jsx)(v,{type:"submit",children:"press enter or here to search"})]})},Z=t(1087),w=t(6713),b=function(){var n=(0,Z.lr)(),e=(0,i.Z)(n,2),t=e[0],r=e[1],o=(0,p.useState)([]),c=(0,i.Z)(o,2),a=c[0],l=c[1],h=(0,p.useState)(!1),d=(0,i.Z)(h,2),m=d[0],v=d[1],b=t.get("search");return(0,p.useEffect)((function(){function n(){return(n=(0,u.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,w.IR)(b);case 3:e=n.sent,l(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:return n.prev=10,v(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))).apply(this,arguments)}b&&(v(!0),function(){n.apply(this,arguments)}())}),[b]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(g,{submitHandle:function(n){r({search:n.trim()})}}),m&&(0,x.jsx)("h1",{children:"loading..."}),b&&a.length>1&&(0,x.jsx)(f.Z,{movies:a}),b&&!a.length&&(0,x.jsx)("h1",{children:"Sorry we found nothing"})]})}}}]);
//# sourceMappingURL=642.5092cbfb.chunk.js.map