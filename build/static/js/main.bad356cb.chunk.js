(this["webpackJsonpquiz-final"]=this["webpackJsonpquiz-final"]||[]).push([[0],{108:function(e,t,a){},110:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){},121:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){},125:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),s=a(19),i=a.n(s),o=(a(108),a(11)),l=a.n(o),u=a(20),j=a(16),d=a(22),b=(a(110),a(18)),m=a(25),O=a(23),x=a(38);a(115),a(78),a(118);x.a.apps.length||x.a.initializeApp({apiKey:"AIzaSyD3q3ZnM6qejCc4NOoXjQ2xsVfVn24WdJc",authDomain:"quiz-54a90.firebaseapp.com",projectId:"quiz-54a90",storageBucket:"quiz-54a90.appspot.com",messagingSenderId:"915241107805",appId:"1:915241107805:web:91ca6d11bb535d313828b4",measurementId:"G-4HHYPEW7DM"});var h=function(){var e=Object(j.a)(l.a.mark((function e(t,a){var n,r,c,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=w.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=11;break}return r=t.displayName,c=t.email,s=new Date,e.next=11,n.set(Object(u.a)({displayName:r,email:c,average:0,CreatedAt:s,result:[],isExamHasGiven:!1},a));case 11:return e.abrupt("return",n);case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(j.a)(l.a.mark((function e(t,a,n){var r,c,s,i,o,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({uid:t,obj:a}),r=a.correctPoints,c=a.numberOfCorrectAnswers,s=a.numberOfIncorrectAnswers,i=a.numberOfQuestions,o=w.doc("users/".concat(t)),u=Date.now(),e.next=6,o.update({result:x.a.firestore.FieldValue.arrayUnion({correctPoints:r,numberOfCorrectAnswers:c,numberOfIncorrectAnswers:s,numberOfQuestions:i,createdAt:u,examName:n})});case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),p=function(){var e=Object(j.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.doc("users/".concat(t));case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(j.a)(l.a.mark((function e(t,a,n,r,c){var s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),s=w.doc("result/l1aU30VzftlGgYP4Y91W"),e.next=4,s.get();case 4:i=e.sent,o=i.data()[t],console.log(i.data()),o&&o.forEach(function(){var e=Object(j.a)(l.a.mark((function e(i){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(i),i.id!==a){e.next=8;break}return e.next=4,s.update(Object(O.a)({},t,x.a.firestore.FieldValue.arrayRemove(Object(u.a)({},c))));case 4:return e.next=6,s.update(Object(O.a)({},t,x.a.firestore.FieldValue.arrayUnion({id:a,firstName:n,average:r})));case 6:e.next=11;break;case 8:return console.log("i am get logged"),e.next=11,s.update(Object(O.a)({},t,x.a.firestore.FieldValue.arrayUnion({id:a,firstName:n,average:r})));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 8:case"end":return e.stop()}}),e)})));return function(t,a,n,r,c){return e.apply(this,arguments)}}(),g=function(){var e=Object(j.a)(l.a.mark((function e(t,a){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=w.doc("users/".concat(t)),e.next=3,n.update({average:a});case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),w=x.a.firestore(),N=x.a.auth(),y=(a(119),function(){return Object(n.jsx)("div",{className:"spinner-overlay",children:Object(n.jsxs)("div",{class:"lds-ring",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]})})}),k=(a(120),a(179)),C=a(174),E=a(175),S=a(173),A=a(176),q=a(178),F=a(180),W=a(181),I=a(182),P=(a(121),a(177),a(72)),R=Object(P.a)([function(e){return e.user}],(function(e){return e.currentUser})),T=(Object(P.a)([R],(function(e){return console.log(e.result),e?e.result:(console.log("it null"),[])})),Object(m.b)((function(e){return{user:R(e)}}))((function(e){var t=e.user;return t?Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(k.a,{style:{marginTop:"7rem"},className:"mt--7",fluid:!0,children:Object(n.jsx)(C.a,{children:Object(n.jsx)(E.a,{className:"order-xl-1",xl:"8",children:Object(n.jsxs)(S.a,{className:"bg-secondary shadow",children:[Object(n.jsx)(A.a,{className:"bg-white border-0",children:Object(n.jsx)(C.a,{className:"align-items-center",children:Object(n.jsx)(E.a,{xs:"8",children:Object(n.jsx)("h3",{className:"mb-0",children:"My account"})})})}),Object(n.jsx)(q.a,{children:Object(n.jsxs)(F.a,{children:[Object(n.jsx)("h6",{className:"heading-small text-muted mb-4",children:"User information"}),Object(n.jsxs)("div",{className:"pl-lg-4",children:[Object(n.jsx)(C.a,{children:Object(n.jsx)(E.a,{lg:"6",children:Object(n.jsxs)(W.a,{children:[Object(n.jsx)("label",{className:"form-control-label",htmlFor:"input-email",children:"Email address"}),Object(n.jsx)(I.a,{className:"form-control-alternative",id:"input-email",placeholder:"jesse@example.com",value:t.email,type:"email"})]})})}),Object(n.jsxs)(C.a,{children:[Object(n.jsx)(E.a,{lg:"6",children:Object(n.jsxs)(W.a,{children:[Object(n.jsx)("label",{className:"form-control-label",htmlFor:"input-first-name",children:"First name"}),Object(n.jsx)(I.a,{className:"form-control-alternative",value:t.firstName,id:"input-first-name",placeholder:"First name",type:"text"})]})}),Object(n.jsx)(E.a,{lg:"6",children:Object(n.jsxs)(W.a,{children:[Object(n.jsx)("label",{className:"form-control-label",htmlFor:"input-last-name",children:"Last name"}),Object(n.jsx)(I.a,{className:"form-control-alternative",value:t.lastName,id:"input-last-name",placeholder:"Last name",type:"text"})]})})]})]}),Object(n.jsx)("hr",{className:"my-4"})]})})]})})})})}):Object(n.jsx)("div",{children:"Loading"})}))),U=(a(122),a(186)),D=(a(123),a(183)),L=a(184),z=a(185),M=function(e){var t=e.correctPoints,a=e.numberOfCorrectAnswers,r=e.numberOfIncorrectAnswers,c=e.numberOfQuestions,s=e.examName;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"row",children:Object(n.jsxs)(D.a,{className:"align-items-center",children:[Object(n.jsx)("a",{className:"avatar rounded-circle mr-3",href:"#pablo",onClick:function(e){return e.preventDefault()}}),Object(n.jsx)(D.a,{children:Object(n.jsx)("span",{className:"mb-0 text-sm",children:s})})]})}),Object(n.jsx)("td",{children:10*c}),Object(n.jsx)("td",{children:Object(n.jsxs)(L.a,{color:"",className:"badge-dot",children:[Object(n.jsx)("i",{className:"bg-success"}),t]})}),Object(n.jsx)("td",{children:a}),Object(n.jsx)("td",{children:Object(n.jsxs)("div",{className:"d-flex align-items-center",children:[Object(n.jsx)("span",{className:"mr-2",children:r}),Object(n.jsx)("div",{children:Object(n.jsx)(z.a,{max:"100",value:"100",barClassName:"bg-success"})})]})})]})},V=function(e){var t=e.lastResult;return console.log(t),t?Object(n.jsx)(C.a,{className:"mt-5",children:Object(n.jsx)("div",{className:"col",children:Object(n.jsxs)(S.a,{className:"bg-default shadow",children:[Object(n.jsx)(A.a,{className:"bg-transparent border-0",children:Object(n.jsx)("h3",{className:"text-white mb-0",children:"Last Exams"})}),Object(n.jsxs)(U.a,{className:"align-items-center table-dark table-flush",responsive:!0,children:[Object(n.jsx)("thead",{className:"thead-dark",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Exam Name"}),Object(n.jsx)("th",{scope:"col",children:"Totla Marks"}),Object(n.jsx)("th",{scope:"col",children:"My Marks"}),Object(n.jsx)("th",{scope:"col",children:"Correct Answer"}),Object(n.jsx)("th",{scope:"col",children:"Incorrect Answer"})]})}),Object(n.jsx)("tbody",{children:t.length>0?t.map((function(e){return Object(n.jsx)(M,Object(u.a)({},e))})):Object(n.jsx)("h1",{className:"data",children:"No Data Available"})})]})]})})}):Object(n.jsx)("div",{children:"Loading..."})},Y=(a(124),a(187)),_=function(e){var t=e.average;return Object(n.jsx)(E.a,{lg:"6",xl:"4",children:Object(n.jsx)(S.a,{className:"card-stats mb-4 mb-xl-0",children:Object(n.jsx)(q.a,{children:Object(n.jsxs)(C.a,{children:[Object(n.jsxs)("div",{className:"col",children:[Object(n.jsx)(Y.a,{tag:"h5",className:"text-uppercase text-muted mb-0",children:"Avarage"}),Object(n.jsx)("span",{className:"h2 font-weight-bold mb-0",children:Math.floor(t)})]}),Object(n.jsx)(E.a,{className:"col-auto",children:Object(n.jsx)("div",{className:"icon icon-shape bg-danger text-white rounded-circle shadow",children:Object(n.jsx)("i",{className:"fas fa-chart-bar"})})})]})})})})},B=Object(m.b)((function(e){return{user:R(e)}}))((function(e){var t=e.lastResult,a=e.user,c=Object(r.useState)(),s=Object(d.a)(c,2),i=s[0],o=s[1];return console.log(t),Object(r.useEffect)((function(){a&&function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.doc("users/".concat(a.id)).get();case 2:t=e.sent,n=t.data(),o(n.average),console.log(n.average);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[a]),t?Object(n.jsx)("div",{className:"row",children:Object(n.jsx)(_,{average:i})}):Object(n.jsx)("div",{children:"Loading..."})})),G=Object(m.b)((function(e){return{user:R(e)}}))((function(e){var t=e.user,a=Object(r.useState)(),c=Object(d.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(),u=Object(d.a)(o,2),b=u[0],m=u[1];return Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=w.doc("result/0Lsbc5zdNsXsMJHSeP1u"),e.next=3,t.get();case 3:a=e.sent,console.log(a.data());case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(r.useEffect)((function(){t?(function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=5;break}return e.next=3,p(t.id);case 3:e.sent.onSnapshot((function(e){i(e.data().result)}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),m(t)):m(null)}),[b]),window.value=12,Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(B,{lastResult:s}),Object(n.jsx)(V,{lastResult:s})]})})),H=(a(125),a(30)),J=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("nav",{class:"sidenav",children:[Object(n.jsx)("div",{class:"logo-box",children:"Logo Here"}),Object(n.jsxs)("ul",{class:"sidenav-items",children:[Object(n.jsx)("li",{class:"dashboard item",children:Object(n.jsxs)(H.b,{to:"/",class:"link link1 ",children:[Object(n.jsx)("i",{className:"fas r fa-tv"}),Object(n.jsx)("span",{className:"f-fam",children:"DashBoard"})]})}),Object(n.jsx)("li",{class:"dashboard item",children:Object(n.jsxs)(H.b,{to:"/userprofile",class:"link link1 ",children:[Object(n.jsx)("i",{className:"fas r fa-user"}),Object(n.jsx)("span",{className:"f-fam",children:"User"})]})}),Object(n.jsx)("li",{class:"dashboard item",children:Object(n.jsxs)(H.b,{to:"/exam",class:"link link1 ",children:[Object(n.jsx)("i",{class:"far r fa-copy "}),Object(n.jsx)("span",{className:"f-fam rr",children:"Take Exam"})]})}),Object(n.jsx)("li",{class:"dashboard item",children:Object(n.jsxs)("span",{class:"link link1",onClick:function(){return N.signOut()},children:[Object(n.jsx)("i",{class:"fas r fa-sign-out-alt"}),Object(n.jsx)("span",{className:"f-fam ",children:"Sign Out"})]})})]})]})})},Q=(a(127),function(){var e=Object(r.useState)(null),t=Object(d.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){return function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.collection("questions").orderBy("grade").get();case 2:t=e.sent,c(t.docs.map((function(e){return e.data()})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),console.log(a),a?Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-lg-6",children:[Object(n.jsx)("h1",{children:"Choose Your class"}),a.map((function(e){return Object(n.jsx)("div",{className:"student-class",children:Object(n.jsxs)(H.b,{to:"/exam/".concat(e.id),children:[e.grade,Object(n.jsx)("span",{style:{backgroundColor:"#e74c3c"},className:"student-class__outlined",children:"\xa0"})]})})}))]})}):Object(n.jsx)("div",{children:"Loading..."})}),X=(a(128),"SET_RESULT"),K="INCREASE_CORRECTANSWER",Z="DECREASE_CORRECTANSWER";function $(e,t){switch(t.type){case"set":return t.payload;case"unMount":console.log(e);break;default:throw new Error}}Object(m.b)(null,(function(e){return{increase:function(){return e({type:K})}}}))((function(e){var t=e.question,a=e.questionOption,c=e.increase,s=Object(r.useState)(void 0),i=Object(d.a)(s,2),o=i[0],l=i[1],u=Object(r.useState)(),j=Object(d.a)(u,2),b=(j[0],j[1]),m=Object(r.useState)(a),O=Object(d.a)(m,2),x=O[0],h=(O[1],x),f=Object(r.useReducer)($,"nothing"),p=Object(d.a)(f,2),v=p[0],g=p[1];return Object(r.useEffect)((function(){return g({type:"set",payload:o}),function(){var e=h.filter((function(e){return!0===!e.isCorrect}));console.log(e),c(),g({type:"unMount"})}}),[o]),Object(n.jsxs)("div",{className:"col-12 col-md-7 m-auto",children:[Object(n.jsx)("h3",{className:"quiz-question",children:t}),Object(n.jsx)("span",{onClick:c,children:v}),a.map((function(e){return Object(n.jsx)("div",{className:"quiz-option ".concat(o===e.option?"active-option":""),onClick:function(){l(e.option),b(e)},children:e.option})}))]})})),a(129);var ee=a(80),te=a.n(ee),ae=Object(m.b)((function(e){return{user:R(e)}}))((function(e){var t=e.user,a=Object(r.useState)(),c=Object(d.a)(a,2),s=c[0],i=c[1],o=Object(b.g)().id;Object(r.useEffect)((function(){(function(){var e=Object(j.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.doc("questions/".concat(o)).get();case 2:t=e.sent,a=t.data();try{i(a)}catch(n){console.log(n)}case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]);var u=function(){var e=Object(j.a)(l.a.mark((function e(a){var n,r,c,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==a.numberOfCorrectAnswers||0!==a.numberOfIncorrectAnswers){e.next=4;break}console.log("i am 0"),e.next=17;break;case 4:return l=t.result,a.correctPoints,n=l.reduce((function(e,t,a,n){return e+t.correctPoints}),0),r=n/t.result.length,c=(n+a.correctPoints)/(t.result.length+1),i={firstName:t.firstName,id:t.id,average:r},e.next=10,f(t.id,a,s.examName);case 10:return e.next=12,v(t.group,t.id,t.firstName,c,i);case 12:return e.next=14,g(t.id,c);case 14:return u=w.doc("questions/".concat(o)),e.next=17,u.update({userEntry:x.a.firestore.FieldValue.arrayUnion({id:t.id})});case 17:case"end":return e.stop()}var l}),e)})));return function(t){return e.apply(this,arguments)}}();if(!t||!s)return Object(n.jsx)("div",{children:"Loading.."});var m=s.userEntry.some((function(e){return e.id===t.id}));return console.log(m),t.grade!==s.grade?Object(n.jsx)("div",{children:" You are not permitted to give exam in this grade "}):!1===s.isThereAnyExam?Object(n.jsx)("div",{children:"There Is no exam Today"}):!1===m&&!0===s.isThereAnyExam?s?Object(n.jsx)(te.a,{quiz:s.question,onComplete:u}):Object(n.jsx)("div",{children:"Loading..."}):!0===m?Object(n.jsx)("div",{children:"You have Already give your exam"}):void 0})),ne=function(){return Object(n.jsxs)("div",{className:"container-c",children:[Object(n.jsx)(J,{}),Object(n.jsx)("main",{className:"main-content",children:Object(n.jsxs)(b.d,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/",component:G}),Object(n.jsx)(b.b,{exact:!0,path:"/userprofile",component:T}),Object(n.jsx)(b.b,{exact:!0,path:"/exam",component:Q}),Object(n.jsx)(b.b,{exact:!0,path:"/exam/:id",component:ae})]})})]})},re="SET_CURRENT_USER",ce=Object(m.b)(null,(function(e){return{setUser:function(t){return e(function(e){return{type:re,payload:e}}(t))}}}))((function(e){var t=e.setUser,a=Object(r.useState)(void 0),c=Object(d.a)(a,2),s=c[0],i=c[1];return Object(r.useEffect)((function(){N.onAuthStateChanged(function(){var e=Object(j.a)(l.a.mark((function e(a){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!a){e.next=7;break}return e.next=3,h(a);case 3:e.sent.onSnapshot((function(e){console.log(e.data()),i(e.data()),t(Object(u.a)({id:e.id},e.data()))})),e.next=8;break;case 7:i(a);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[]),void 0===s?Object(n.jsx)(y,{}):null===s?Object(n.jsx)(b.a,{to:"/signin"}):s?(console.log(s),Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(b.d,{children:Object(n.jsx)(ne,{})})})):void 0})),se=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,203)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},ie=(a(138),a(200)),oe=a(194),le=a(192),ue=a(197),je=a(193),de=a(199),be=a(195),me=a(66),Oe=a.n(me),xe=a(84),he=a(188),fe=a(190),pe=Object(he.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),ve=Object(m.b)((function(e){return{user:R(e)}}))((function(e){var t,a,c=e.user,s=Object(r.useState)({email:"",password:""}),i=Object(d.a)(s,2),o=i[0],m=i[1],x=o.email,h=o.password,f=Object(r.useState)(!1),p=Object(d.a)(f,2),v=p[0],g=p[1],w=pe(),y=function(e){var t=e.target,a=t.name,n=t.value;m(Object(u.a)(Object(u.a)({},o),{},Object(O.a)({},a,n)))},k=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,N.signInWithEmailAndPassword(x,h);case 4:e.sent,m({email:"",password:""}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return c?Object(n.jsx)(b.a,{to:"/"}):Object(n.jsxs)(fe.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(le.a,{}),Object(n.jsxs)("div",{className:w.paper,children:[Object(n.jsx)(ie.a,{className:w.avatar,children:Object(n.jsx)(Oe.a,{})}),Object(n.jsx)(xe.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)("form",{className:w.form,noValidate:!0,onSubmit:k,children:[Object(n.jsx)(ue.a,(t={name:"email",variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address"},Object(O.a)(t,"name","email"),Object(O.a)(t,"autoComplete","email"),Object(O.a)(t,"autoFocus",!0),Object(O.a)(t,"value",x),Object(O.a)(t,"onChange",y),t)),Object(n.jsx)(ue.a,(a={name:"password",variant:"outlined",margin:"normal",required:!0,fullWidth:!0},Object(O.a)(a,"name","password"),Object(O.a)(a,"label","Password"),Object(O.a)(a,"type","password"),Object(O.a)(a,"id","password"),Object(O.a)(a,"autoComplete","current-password"),Object(O.a)(a,"value",h),Object(O.a)(a,"onChange",y),a)),Object(n.jsx)(je.a,{control:Object(n.jsx)(de.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(n.jsx)(oe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:w.submit,onClick:function(){return g(!0)},children:v?"Sign In...":"Sign In"}),Object(n.jsxs)(be.a,{container:!0,children:[Object(n.jsx)(be.a,{item:!0,xs:!0}),Object(n.jsx)(be.a,{item:!0,children:Object(n.jsx)(H.b,{to:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})})),ge=a(196),we=a(198);function Ne(){return Object(n.jsxs)(xe.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(n.jsx)(ge.a,{color:"inherit",href:"https://material-ui.com/",children:"Your Website"})," ",(new Date).getFullYear(),"."]})}var ye=Object(he.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}})),ke=Object(m.b)((function(e){return{user:R(e)}}))((function(e){var t=e.user,a=Object(r.useState)({firstName:"",lastName:"",email:"",password:"",confirmedPassword:"",grade:"",group:""}),c=Object(d.a)(a,2),s=c[0],i=c[1],o=s.firstName,m=s.lastName,x=s.email,f=s.password,p=s.confirmedPassword,v=s.grade,g=s.group,w=Object(r.useState)(!1),y=Object(d.a)(w,2),k=y[0],C=y[1],E=ye(),S=function(e){var t=e.target,a=t.name,n=t.value;i(Object(u.a)(Object(u.a)({},s),{},Object(O.a)({},a,n)))},A=function(){var e=Object(j.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),f===p){e.next=4;break}return alert("passwords don't match"),e.abrupt("return");case 4:return e.prev=4,e.next=7,N.createUserWithEmailAndPassword(x,f);case 7:return a=e.sent,n=a.user,e.next=11,h(n,{firstName:o,lastName:m,grade:v,group:g});case 11:i({firstName:"",lastName:"",email:"",password:"",confirmedPassword:"",grade:"",group:""}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(4),C(!1),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[4,14]])})));return function(t){return e.apply(this,arguments)}}();return t?(console.log(t),Object(n.jsx)(b.a,{to:"/"})):Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(fe.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(le.a,{}),Object(n.jsxs)("div",{className:E.paper,children:[Object(n.jsx)(ie.a,{className:E.avatar,children:Object(n.jsx)(Oe.a,{})}),Object(n.jsx)(xe.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(n.jsxs)("form",{className:E.form,noValidate:!0,onSubmit:A,children:[Object(n.jsxs)(be.a,{container:!0,spacing:2,children:[Object(n.jsx)(be.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(ue.a,{name:"firstName",autoComplete:"fname",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"First Name",autoFocus:!0,value:o,onChange:S})}),Object(n.jsx)(be.a,{item:!0,xs:12,sm:6,children:Object(n.jsx)(ue.a,{name:"lastName",variant:"outlined",required:!0,fullWidth:!0,id:"lastName",label:"Last Name",autoComplete:"lname",value:m,onChange:S})}),Object(n.jsx)(be.a,{item:!0,xs:12,children:Object(n.jsx)(ue.a,{name:"email",variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",autoComplete:"email",value:x,onChange:S})}),Object(n.jsx)(be.a,{item:!0,xs:12,children:Object(n.jsx)(ue.a,{name:"password",variant:"outlined",required:!0,fullWidth:!0,label:"Password",type:"password",id:"password",autoComplete:"current-password",value:f,onChange:S})}),Object(n.jsx)(be.a,{item:!0,xs:12,children:Object(n.jsx)(ue.a,{name:"confirmedPassword",variant:"outlined",required:!0,fullWidth:!0,label:"confirmed Password",type:"password",id:"password",autoComplete:"current-password",value:p,onChange:S})}),Object(n.jsx)(be.a,{item:!0,xs:12,children:Object(n.jsx)(ue.a,{name:"grade",variant:"outlined",required:!0,fullWidth:!0,id:"grade",label:"Grade",autoFocus:!0,value:v,onChange:S})}),Object(n.jsx)(be.a,{item:!0,xs:12,children:Object(n.jsx)(ue.a,{name:"group",variant:"outlined",required:!0,fullWidth:!0,id:"grade",label:"Group",autoFocus:!0,value:g,onChange:S})}),Object(n.jsx)(be.a,{item:!0,xs:12,children:Object(n.jsx)(je.a,{control:Object(n.jsx)(de.a,{value:"allowExtraEmails",color:"primary"}),label:"I want to receive inspiration, marketing promotions and updates via email."})})]}),Object(n.jsx)(oe.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:E.submit,onClick:function(){return C(!0)},children:k?"creating account...":"sign up"}),Object(n.jsx)(be.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(be.a,{item:!0,children:Object(n.jsx)(ge.a,{href:"#",variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(n.jsx)(we.a,{mt:5,children:Object(n.jsx)(Ne,{})})]})})})),Ce=a(43),Ee=a(81),Se=a(82),Ae=a.n(Se),qe={result:null,correctAnswer:0,wrongAnswer:0},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return Object(u.a)(Object(u.a)({},e),{},{currentUser:t.payload});case K:return Object(u.a)(Object(u.a)({},e),{},{correctAnswer:e.correctAnswer+1});case Z:return Object(u.a)(Object(u.a)({},e),{},{wrongAnswer:e.wrongAnswer+1});default:return e}},We={currentUser:null},Ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(u.a)(Object(u.a)({},e),{},{currentUser:t.payload});default:return e}},Pe=Object(Ce.combineReducers)({user:Ie,result:Fe}),Re=[Ae.a],Te=Object(Ce.createStore)(Pe,Object(Ee.composeWithDevTools)(Ce.applyMiddleware.apply(void 0,Re)));i.a.render(Object(n.jsx)(m.a,{store:Te,children:Object(n.jsx)(H.a,{children:Object(n.jsxs)(c.a.StrictMode,{children:[Object(n.jsx)(b.b,{exact:!0,path:"/signup",component:ke}),Object(n.jsx)(b.b,{exact:!0,path:"/signin",component:ve}),Object(n.jsx)(ce,{})]})})}),document.getElementById("root")),se()}},[[144,1,2]]]);
//# sourceMappingURL=main.bad356cb.chunk.js.map