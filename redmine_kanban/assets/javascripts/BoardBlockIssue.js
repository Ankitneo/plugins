import{u as f,a as k,r as p,o as v,c as D,w as y,b as d,t as _,d as r,e as l,C as B,h as i,E as $}from"./ModalsView.js";/* empty css                          */const h={class:"flex flex-column",style:{"min-width":"280px"}},C={class:"mb-24"},V={class:"flex items-center justify-end mt-32"},j={__name:"BoardBlockIssue",props:{isActive:{type:Boolean,default:!1},modalData:{required:!0,validator(a){return typeof a=="object"||a===null}}},setup(a){const o=a,c=f(),{closeModal:s,createAlert:b}=k(),n=p("");async function m(){if(!o.modalData||!n.value){b({status:"error"});return}try{const e={issue_id:o.modalData.issue.id,updated_on:o.modalData.issue.updated_on,block_reason:n.value};await c.editIssue(e),s(o.modalData.template)}catch(e){console.error(e)}s(o.modalData.template)}return(e,t)=>(v(),D(l($),{"is-active":a.isActive,"transition-name":"modal-fade",onClose:t[2]||(t[2]=u=>l(s)(a.modalData.template))},{default:y(()=>[d("div",h,[d("h3",C,_(e.$t("field_block_reason")),1),r(l(B),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=u=>n.value=u),placeholder:e.$t("field_subject"),label:e.$t("field_block_reason")},null,8,["modelValue","placeholder","label"]),d("div",V,[r(l(i),{label:e.$t("button_save"),class:"kb-button kb-button--xl kb-button--blue mr-8",onClick:m},null,8,["label"]),r(l(i),{label:e.$t("button_cancel"),class:"kb-button kb-button--xl",onClick:t[1]||(t[1]=u=>l(s)(a.modalData.template))},null,8,["label"])])])]),_:1},8,["is-active"]))}};export{j as default};
