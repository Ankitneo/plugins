import{y as z,G as M,r as b,H as g,c7 as B,o as t,k as n,b as s,n as C,bU as I,Q as S,e as u,F as m,l as v,t as $,P as D,m as h}from"./ModalsView.js";import{u as E}from"./FormatDates.js";import{l as V}from"./linkTo.js";function k(l){const r=/(https?:\/\/|ftps?:\/\/|www\.)((?![.,?!;:()]*(\s|$))[^\s]){2,}/gim;return l.match(r)?l.replace(r,o=>`&nbsp;<a href="${o}" target="_blank" rel="noopener noreferrer">${o}</a>&nbsp;`):l}const j="/plugin_assets/redmine_kanban/images/icons/cheveron.svg",A={class:"modal-issue__comments"},N={class:"flex items-center justify-between comments-header"},P=["value"],F={class:"flex"},J=s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[s("path",{d:"M240 96h64a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm0 128h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm256 192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-256-64h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm-64 0h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352z"})],-1),O=[J],R={key:0,class:"scroller custom-scroll"},U={class:"comment__author"},G=["innerHTML"],Q={class:"comment__notes"},q={key:0,class:"pl-18"},K=["innerHTML"],W=["innerHTML"],X="all",y="notes",T="propperties",se=z({__name:"IssueDetailsComments",props:{journals:{default:null}},setup(l){const r=l,o=M(),{dateDistanceToNow:H}=E(),p=[{id:X,name:o.t("label_history")},{id:y,name:o.t("label_issue_history_notes")},{id:T,name:o.t("label_issue_history_properties")}],c=b(p[0].id),d=b(!1),_=g(()=>r.journals?r.journals.filter(i=>{var a;return c.value===y?i.notes:c.value===T?(a=i.details)==null?void 0:a.length:i}):null),f=g(()=>_.value?d.value?B(_.value).reverse():_.value:null);return(i,a)=>(t(),n("div",A,[s("div",N,[C(s("select",{id:"tab","onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e),name:"tab",class:"modal-issue__comments-tabs",style:S({backgroundImage:`url(${u(j)})`})},[(t(),n(m,null,v(p,e=>s("option",{key:e.id,value:e.id},$(e.name),9,P)),64))],4),[[I,c.value]]),s("div",F,[s("button",{class:D(["sorting",{sorted:d.value}]),onClick:a[1]||(a[1]=e=>d.value=!d.value)},O,2)])]),f.value?(t(),n("div",R,[(t(!0),n(m,null,v(f.value,(e,w)=>(t(),n("div",{key:w,class:"comment"},[s("div",U,[s("strong",{innerHTML:i.$t("label_added_time_by",{author:u(V)(e.user),age:u(H)(e.created_on)})},null,8,G)]),s("div",Q,[e.details.length?(t(),n("ul",q,[(t(!0),n(m,null,v(e.details,({text:L},x)=>(t(),n("li",{key:x+e.id,class:"mb-12 text-grey fz-12",innerHTML:u(k)(L||"-")},null,8,K))),128))])):h("",!0),e.notes?(t(),n("div",{key:1,class:"text-black pl-4 pr-4",innerHTML:u(k)(e.notes)},null,8,W)):h("",!0)])]))),128))])):h("",!0)]))}});export{se as _};
