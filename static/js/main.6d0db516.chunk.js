(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{190:function(e,a,t){e.exports=t(330)},195:function(e,a,t){},199:function(e,a,t){},200:function(e,a,t){},209:function(e,a,t){},325:function(e,a,t){},326:function(e,a,t){},327:function(e,a,t){},330:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(45),c=t.n(r),o=(t(195),t(196),t(111)),i=t.n(o),s=t(158),m=t(25),u=t(110),p=t(46),d=(t(199),Object(n.createContext)({})),E=t(339),h=t(346),g=(t(200),t(159)),f=t.n(g),v=t(341),b=t(338),w=t(35);t(209);var C=Object(p.d)(function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),r=t[0],c=t[1],o=Object(n.useContext)(d),i=o.isLoading,s=o.handleZipSubmit;function u(a){a.preventDefault(),e.history.push("/app/results?zipcode=".concat(r)),s(r)}return Object(n.useEffect)(function(){if("/app/results"===e.location.pathname){var a=f.a.parse(e.location.search).zipcode;a&&c(a),i||s(a)}},[]),l.a.createElement("div",{className:"container-zipform"},l.a.createElement(v.a,{onSubmit:u,className:"zipform"},l.a.createElement(v.a.Field,{name:"zipcode"},l.a.createElement(b.a,{name:"zipcode",value:r,icon:!0,onChange:function(e){(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&c(e.target.value)},maxLength:"5",autoComplete:"off",focus:!0,placeholder:"Enter ZIP Code",loading:i},l.a.createElement("input",null),l.a.createElement(w.a,{name:"search",link:!0,onClick:u})))))});function y(e){return l.a.createElement("div",{className:"home-main"},l.a.createElement(E.a,{hidden:!0}),l.a.createElement(h.a,{className:"header-main",as:"h1"},"TX Energy Plans"),l.a.createElement("p",{className:"header-info"},"View and compare plans offered in your area. Get started by entering in your ",l.a.createElement("strong",null,"ZIP code")," down below."),l.a.createElement(E.a,{hidden:!0}),l.a.createElement(C,null))}t(325);var k=t(342),S=t(340),O=(t(326),t(178)),j=t(173),N=t.n(j),x=t(337),_=t(344),z=(t(327),t(345)),L=t(348);function P(e){var a=e.logo,t=e.rating;return l.a.createElement(k.a.Cell,{className:"company-cell"},l.a.createElement("div",{style:{backgroundImage:"url("+a+")"},className:"company-logo",alt:"Company's logo"}),l.a.createElement("div",{style:{margin:"1rem 0 0"}},"Rating"," ",l.a.createElement(z.a,{trigger:l.a.createElement(w.a,{style:{marginLeft:".85rem"},name:"question circle outline"}),content:"The Company Rating is based on the ratio of customer complaints a company has received in the past 6 months compared to other companies. The more stars a company has, the lower the complaint ratio.",position:"right center"})),t&&-1!==t?l.a.createElement(L.a,{icon:"star",defaultRating:t,maxRating:5,size:"tiny",disabled:!0}):l.a.createElement("p",{style:{fontSize:".75rem"}},l.a.createElement("strong",null,"Not Available")))}function R(e){var a=e.sortedState,t=e.price,n=e.priceLevel;return l.a.createElement(k.a.Cell,{positive:a.column===n&&"ascending"===a.direction,negative:a.column===n&&"descending"===a.direction},l.a.createElement(h.a,{as:"h4",textAlign:"center"},t.toFixed(1),"\xa2"))}var H=t(343);function T(e){var a=e.name;return l.a.createElement(k.a.Cell,null,l.a.createElement(H.a,null,l.a.createElement(H.a.Item,null,l.a.createElement(H.a.Header,null,"Plan Name"),a)))}function A(e){var a=Object(n.useState)(0),t=Object(m.a)(a,2),r=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(m.a)(o,2),s=i[0],u=i[1],p=Object(n.useContext)(d),E=p.compareList,h=p.setCompareList,g=e.sortedState,f=e.plan,v=f.plan_id,b=f.plan_name,C=f.company_logo,y=f.rating_total,S=f.price_kwh500,j=f.price_kwh1000,z=f.price_kwh2000;function L(e,a){c(1===r?0:1)}var H=l.a.createElement(k.a.Row,{positive:s},l.a.createElement(P,{logo:C,rating:y}),l.a.createElement(R,{price:S,priceLevel:"500",sortedState:g}),l.a.createElement(R,{price:j,priceLevel:"1000",sortedState:g}),l.a.createElement(R,{price:z,priceLevel:"2000",sortedState:g}),l.a.createElement(k.a.Cell,{className:"checkbox-cell",textAlign:"right",collapsing:!0},l.a.createElement(x.a,{onChange:function(e,a){e.preventDefault(),a.checked?(u(!0),h([].concat(Object(O.a)(E),[v]))):(u(!1),h(E.filter(function(e){return e!==v})))}}))),A=l.a.createElement(k.a,{className:"details-table",unstackable:!0},l.a.createElement(k.a.Header,null,l.a.createElement(k.a.Row,null,l.a.createElement(k.a.HeaderCell,null,"Plan Details"),l.a.createElement(k.a.HeaderCell,null,"Pricing"))),l.a.createElement(k.a.Body,null,l.a.createElement(k.a.Row,null,l.a.createElement(T,{name:b}),l.a.createElement(k.a.Cell,null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore esse culpa dicta illo. Sit earum, vitae voluptate repellat hic nihil sed, sunt eligendi non commodi ullam corporis distinctio sequi natus.")))),I=l.a.createElement(k.a.Row,{positive:s},l.a.createElement(k.a.Cell,{colSpan:"12",className:"accordion-row",style:{padding:"0",paddingTop:"0"}},l.a.createElement(_.a,{className:"accordion-cursor"},l.a.createElement(_.a.Title,{className:"plan-dropdown"+(1===r?" hidden":""),active:1!==r,index:0,onClick:L},l.a.createElement("p",{style:{fontSize:".8rem",textAlign:"center",marginBottom:"2px"}},"More Details"),l.a.createElement(w.a,{className:"dropdown-icon",name:"dropdown"})),l.a.createElement(_.a.Content,{active:1===r},l.a.createElement(N.a,{animateOpacity:!0,duration:300,height:r?"auto":0},A,l.a.createElement("div",{className:"plan-dropdown plan-dropup accordion-cursor",onClick:L},l.a.createElement(w.a,{className:"dropup-icon",name:"dropdown",onClick:L})))))));return l.a.createElement(l.a.Fragment,null,H,I)}function I(){var e=Object(n.useContext)(d),a=e.plans,t=e.setPlans,r=e.isLoading,c=Object(n.useState)({column:null,direction:null}),o=Object(m.a)(c,2),i=o[0],s=o[1];function u(e){if(i.column===e)t(a.reverse()),s({column:i.column,direction:"ascending"===i.direction?"descending":"ascending"});else switch(s({column:e,direction:"ascending"}),e){case"500":t(a.sort(function(e,a){return e.price_kwh500-a.price_kwh500}));break;case"1000":t(a.sort(function(e,a){return e.price_kwh1000-a.price_kwh1000}));break;case"2000":t(a.sort(function(e,a){return e.price_kwh2000-a.price_kwh2000}))}}var p=a.slice(0,20).map(function(e){return l.a.createElement(A,{key:e.plan_id,plan:e,sortedState:i})});return l.a.createElement("div",{className:"plan-viewer"},l.a.createElement(k.a,{sortable:!0,unstackable:!0},l.a.createElement(k.a.Header,null,l.a.createElement(k.a.Row,{disabled:r},l.a.createElement(k.a.HeaderCell,{textAlign:"left"},"Company"),l.a.createElement(k.a.HeaderCell,{sorted:"500"===i.column?i.direction:null,onClick:function(){return u("500")},collapsing:!0,textAlign:"center"},"500",l.a.createElement("br",null),l.a.createElement("span",{style:{fontSize:".7rem"}},"kWh")),l.a.createElement(k.a.HeaderCell,{sorted:"1000"===i.column?i.direction:null,onClick:function(){return u("1000")},collapsing:!0,textAlign:"center"},"1000",l.a.createElement("br",null),l.a.createElement("span",{style:{fontSize:".7rem"}},"kWh")),l.a.createElement(k.a.HeaderCell,{sorted:"2000"===i.column?i.direction:null,onClick:function(){return u("2000")},collapsing:!0,textAlign:"center"},"2000",l.a.createElement("br",null),l.a.createElement("span",{style:{fontSize:".7rem"}},"kWh")),l.a.createElement(k.a.HeaderCell,null))),l.a.createElement(k.a.Body,null,r?l.a.createElement(k.a.Row,null,l.a.createElement(k.a.Cell,{colSpan:"12"},l.a.createElement(S.a,{active:r,inline:"centered"}))):p.length?p:l.a.createElement(k.a.Row,null,l.a.createElement(k.a.Cell,null,"No results found.")))))}function B(e){return l.a.createElement("div",null,l.a.createElement(E.a,{hidden:!0}),l.a.createElement("div",{className:"container-header"},l.a.createElement("div",{className:"header-home"},l.a.createElement(w.a,{name:"home",size:"large",link:!0,onClick:function(){e.history.push("/")}})),l.a.createElement(h.a,{className:"header-results",as:"h1"},"TX Energy Plans"),l.a.createElement("div",{className:"header-spacer"})),l.a.createElement(C,null),l.a.createElement(I,null))}c.a.render(l.a.createElement(function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),o=Object(m.a)(c,2),E=o[0],h=o[1],g=Object(n.useState)([]),f=Object(m.a)(g,2),v=f[0],b=f[1];function w(){return(w=Object(s.a)(i.a.mark(function e(a){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://cors-anywhere.herokuapp.com/http://www.powertochoose.org/en-us/service/v1/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({parameters:{method:"plans",zip_code:a}})});case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.dir(n),r(n),h(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])}))).apply(this,arguments)}return l.a.createElement(u.a,null,l.a.createElement(d.Provider,{value:{plans:t,setPlans:r,isLoading:E,compareList:v,setCompareList:b,handleZipSubmit:function(e){h(!0),/^[0-9]{5}$/.test(e)?function(e){w.apply(this,arguments)}(e):r([])}}},l.a.createElement("main",null,l.a.createElement(p.a,{exact:!0,path:"/",component:y}),l.a.createElement(p.a,{path:"/app/results",component:B}))))},null),document.getElementById("root"))}},[[190,1,2]]]);
//# sourceMappingURL=main.6d0db516.chunk.js.map