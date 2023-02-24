"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[295],{4295:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var a=n(2791),r=n(1413),c=n(7689),s=n(9434),o=n(184);var i=function(e,t){return function(n){var a=(0,s.v9)((function(e){return e.userData.user}));return Boolean(a)?(0,o.jsx)(e,(0,r.Z)({},n)):(0,o.jsx)(c.Fg,{to:t})}},l=n(4942),u=n(9439),m=n(9829),d=n(4558),_="ContactForm_formTitle__pbm4s",p="ContactForm_title__Wh8oO",h="ContactForm_form__zqkUM",f="ContactForm_button__x3ZRx",x="ContactForm_inputPaper__Ikwtb",v={contactName:"",contactNumber:""},N=function(){var e=(0,s.v9)((function(e){return e.contactsData.contacts})),t=(0,a.useState)(v),n=(0,u.Z)(t,2),c=n[0],i=n[1],N=(0,s.I0)(),j=function(e){var t=e.target,n=t.name,a=t.value;i((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,l.Z)({},n,a))}))},b=function(){i(v)};return(0,o.jsx)("div",{children:(0,o.jsxs)("form",{className:h,onSubmit:function(t){t.preventDefault();var n={id:(0,m.x0)(),name:c.contactName,number:c.contactNumber};e.some((function(e){return e.name.toLowerCase()===n.name.toLowerCase()}))?alert("".concat(n.name," is already in contact list.")):(N((0,d.uK)(n)),b())},children:[(0,o.jsx)("h2",{className:_,children:"Add contact"}),(0,o.jsxs)("label",{children:[(0,o.jsx)("p",{className:p,children:"Name"}),(0,o.jsx)("input",{className:x,type:"text",name:"contactName",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:j,value:c.contactName,placeholder:"Write name",required:!0})]}),(0,o.jsxs)("label",{children:[(0,o.jsx)("p",{className:p,children:"Number"}),(0,o.jsx)("input",{className:x,type:"tel",name:"contactNumber",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",onChange:j,value:c.contactNumber,placeholder:"Write phone number",required:!0})]}),(0,o.jsx)("button",{className:f,type:"submit",children:"Add contact"})]})})},j="ContactList_sectionList__5puRH",b="ContactList_title__q2+Fd",C="ContactList_list__lJuMM",g="ContactList_notification__ptVsv",A="ContactList_paper__BqGOx",F="ContactList_contactsWrapper__3T1ac",L="ContactElement_item__Tw9np",w="ContactElement_button__5-mBN",Z=function(e){var t=e.name,n=e.number,a=e.id,r=(0,s.I0)();return(0,o.jsxs)("li",{className:L,children:[t,": ",n,(0,o.jsx)("button",{className:w,value:a,onClick:function(){return r((0,d.GK)(a))},children:"Delete"})]},a)},y=function(){var e=(0,s.v9)((function(e){return e.contactsData})),t=e.contacts,n=e.error,a=(0,s.v9)((function(e){return e.contactsData.filter})),r=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return(0,o.jsxs)("section",{className:j,children:[Boolean(n).length>0&&(0,o.jsxs)("p",{className:g,children:["Upss, Some error occured... ",n]}),(0,o.jsx)("ul",{className:C,children:r.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,o.jsx)(Z,{name:n,number:a,id:t},t)}))})]})},k="Loader_ldsHourglass__VuSPI";var z=function(){return(0,o.jsx)("div",{className:k})},D=n(2167),q="Filter_filterBox__pEV3n",B="Filter_title__7iS2q",S="Filter_inputPaper__SwDUA",I=function(){var e=(0,s.v9)((function(e){return e.contactsData.filter})),t=(0,s.I0)();return(0,o.jsx)("div",{children:(0,o.jsxs)("label",{className:q,children:[(0,o.jsx)("p",{className:B,children:"Find contacts by name"}),(0,o.jsx)("input",{className:S,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",onChange:function(e){t((0,D.W1)(e.target.value))},value:e,placeholder:"Write name",required:!0})]})})};var W=i((function(){var e=(0,s.I0)(),t=(0,s.v9)((function(e){return e.contactsData})),n=t.error,r=t.contacts,c=t.isLoading;return(0,a.useEffect)((function(){e((0,d.K2)())}),[e]),(0,o.jsxs)("div",{className:A,children:[(0,o.jsx)(N,{}),(0,o.jsx)(I,{}),(0,o.jsxs)("div",{className:F,children:[(0,o.jsx)("h2",{className:b,children:"Contact list"}),n&&(0,o.jsxs)("p",{children:["Some error occured... ",n]}),c&&(0,o.jsx)(z,{}),(null===r||void 0===r?void 0:r.length)>0?(0,o.jsx)(y,{}):(0,o.jsx)("p",{className:g,children:"There are no contacts yet"})]})]})}),"/sign-in")}}]);
//# sourceMappingURL=295.b969c7c7.chunk.js.map