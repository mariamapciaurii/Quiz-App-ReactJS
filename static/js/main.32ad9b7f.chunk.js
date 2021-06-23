(this["webpackJsonpreact-quiz-app"]=this["webpackJsonpreact-quiz-app"]||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(8),r=c.n(s),i=(c(68),c(39)),o=c.n(i),l=c(53),u=c(12),j=c(56),d=c.n(j),b=c(38),h=c(10),v=(c(88),c(89),c(135)),O=c(136),g=c(133),m=[{category:"General Knowledge",value:9},{category:"Books",value:10},{category:"Films",value:11},{category:"Music",value:12},{category:"Musicals and Theaters",value:13},{category:"Television",value:14},{category:"Video Games",value:15},{category:"Board Games",value:16},{category:"Science and Nature",value:17},{category:"Computer",value:18},{category:"Mathematics",value:19},{category:"Mythology",value:20},{category:"Sports",value:21},{category:"Geography",value:22},{category:"History",value:23},{category:"Politics",value:24},{category:"Art",value:25},{category:"Celebrities",value:26},{category:"Animals",value:27},{category:"Vehicles",value:28},{category:"Comics",value:29},{category:"Gadgets",value:30},{category:"Japanese Anime",value:31},{category:"Cartoon and Animations",value:32}],y=c(4),x=function(e){var t=e.children;return Object(y.jsx)("div",{style:{width:"100%",padding:10,marginBottom:10,borderRadius:4,textAlign:"center",color:"red",textTransform:"capitalize"},children:t})},p=function(e){var t=e.name,c=e.setName,n=e.fetchQuestions,s=Object(a.useState)(""),r=Object(u.a)(s,2),i=r[0],o=r[1],l=Object(a.useState)(""),j=Object(u.a)(l,2),d=j[0],b=j[1],p=Object(a.useState)(!1),f=Object(u.a)(p,2),Q=f[0],S=f[1],z=Object(h.f)();return Object(y.jsx)("div",{className:"Quiz-content",children:Object(y.jsxs)("div",{children:[Object(y.jsx)("span",{className:"Quiz-content__title",children:"Quiz App"}),Q&&Object(y.jsx)(x,{children:"Please Fill Information"}),Object(y.jsxs)("div",{className:"Quiz-content__select",children:[Object(y.jsx)(v.a,{style:{marginBottom:30},label:"Enter Your Name",onChange:function(e){return c(e.target.value)},variant:"outlined"}),Object(y.jsx)(v.a,{select:!0,label:"Select Category",value:i,onChange:function(e){return o(e.target.value)},variant:"outlined",style:{marginBottom:30},children:m.map((function(e){return Object(y.jsx)(O.a,{value:e.value,children:e.category},e.category)}))}),Object(y.jsxs)(v.a,{select:!0,label:"Select Difficulty",value:d,onChange:function(e){return b(e.target.value)},variant:"outlined",style:{marginBottom:30},children:[Object(y.jsx)(O.a,{value:"easy",children:"Easy"},"Easy"),Object(y.jsx)(O.a,{value:"medium",children:"Medium"},"Medium"),Object(y.jsx)(O.a,{value:"hard",children:"Hard"},"Hard")]}),Object(y.jsx)(g.a,{color:"primary",size:"large",onClick:function(){i&&d&&t?(S(!1),n(i,d),z.push("/quiz")):S(!0)},children:"Start Quiz"})]})]})})},f=c(19),Q=c(134),S=(c(100),function(e){var t=e.currQues,c=e.setCurrQues,n=e.questions,s=e.options,r=e.correct,i=e.setScore,o=e.score,l=e.setQuestions,j=Object(a.useState)(),d=Object(u.a)(j,2),b=d[0],v=d[1],O=Object(a.useState)(!1),m=Object(u.a)(O,2),p=m[0],f=m[1],Q=Object(h.f)(),S=function(e){return b===e&&b===r?"select":b===e&&b!==r?"wrong":e===r?"select":void 0};return Object(y.jsxs)("div",{className:"question",children:[Object(y.jsxs)("h1",{children:["Question ",t+1," :"]}),Object(y.jsxs)("div",{className:"singleQuestion",children:[Object(y.jsx)("h2",{children:n[t].question}),Object(y.jsxs)("div",{className:"options",children:[p&&Object(y.jsx)(x,{children:p}),s&&s.map((function(e){return Object(y.jsx)("button",{className:"singleOption  ".concat(b&&S(e)),onClick:function(){return function(e){v(e),e===r&&i(o+1),f(!1)}(e)},disabled:b,children:e},e)}))]}),Object(y.jsxs)("div",{className:"controls",children:[Object(y.jsx)(g.a,{variant:"contained",color:"secondary",size:"large",style:{width:185},href:"/",onClick:function(){return c(0),void l()},children:"Quit"}),Object(y.jsx)(g.a,{variant:"contained",color:"primary",size:"large",style:{width:185},onClick:function(){t>8?Q.push("/result"):b?(c(t+1),v()):f("Please select an option first")},children:t>20?"Submit":"Next Question"})]})]})]})}),z=(c(101),function(e){var t,c=e.name,n=e.questions,s=e.score,r=e.setScore,i=e.setQuestions,o=Object(a.useState)(),l=Object(u.a)(o,2),j=l[0],d=l[1],b=Object(a.useState)(0),h=Object(u.a)(b,2),v=h[0],O=h[1];Object(a.useEffect)((function(){var e,t;console.log("hahah"),d(n&&g([null===(e=n[v])||void 0===e?void 0:e.correct_answer].concat(Object(f.a)(null===(t=n[v])||void 0===t?void 0:t.incorrect_answers))))}),[v,n]);var g=function(e){return e.sort((function(){return Math.random()-.5}))};return Object(y.jsxs)("div",{className:"Quiz-container",children:[Object(y.jsxs)("span",{className:"Quiz-container__subtitle",children:["Welcome, ",c]}),n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)("div",{className:"Quiz-container__info",children:[Object(y.jsx)("span",{children:n[v].category}),Object(y.jsxs)("span",{children:["Score : ",s]})]}),Object(y.jsx)(S,{currQues:v,setCurrQues:O,questions:n,options:j,correct:null===(t=n[v])||void 0===t?void 0:t.correct_answer,score:s,setScore:r,setQuestions:i})]}):Object(y.jsx)(Q.a,{style:{margin:100},color:"inherit",size:100,thickness:1})]})}),N=function(){return Object(y.jsx)("div",{children:"ResulPage"})};var C=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(),r=Object(u.a)(s,2),i=r[0],j=r[1],v=Object(a.useState)(0),O=Object(u.a)(v,2),g=O[0],m=O[1],x=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,a,n,s=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"",c=s.length>1&&void 0!==s[1]?s[1]:"",e.next=4,d.a.get("https://opentdb.com/api.php?amount=10".concat(t&&"&category=".concat(t)).concat(c&&"&difficulty=".concat(c),"&type=multiple"));case 4:a=e.sent,n=a.data,j(n.results);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)(b.a,{children:Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(h.c,{children:[Object(y.jsx)(h.a,{path:"/",exact:!0,children:Object(y.jsx)(p,{name:c,setName:n,fetchQuestions:x})}),Object(y.jsx)(h.a,{path:"/quiz",children:Object(y.jsx)(z,{name:c,questions:i,score:g,setScore:m,setQuestions:j})}),Object(y.jsx)(h.a,{path:"/result",children:Object(y.jsx)(N,{})})]})})})};r.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(C,{})}),document.getElementById("root"))},68:function(e,t,c){},88:function(e,t,c){},89:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.32ad9b7f.chunk.js.map