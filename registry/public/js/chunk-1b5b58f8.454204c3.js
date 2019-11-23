(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1b5b58f8"],{"0751":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.pageLoaded?r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"12",lg:"6",md:"8"}},[r("v-card",{staticClass:"pa-4 card"},[r("v-toolbar",{attrs:{flat:""}},[r("v-btn",{attrs:{icon:""}},[r("v-icon",{attrs:{size:"60"}},[e._v("event_note")])],1),r("v-toolbar-title",[e._v("New Visitor Entry")])],1),r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{rules:e.nameRules,label:"Name",required:""},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),r("v-text-field",{attrs:{label:"Phone",counter:"10",rules:e.phoneRules,prefix:"+91",type:"number",required:""},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),r("v-text-field",{attrs:{rules:e.addressRules,label:"Address",required:""},model:{value:e.user.address,callback:function(t){e.$set(e.user,"address",t)},expression:"user.address"}}),r("v-divider",{staticClass:"py-3"}),r("span",{staticClass:"font-weight-medium"},[e._v("Host Details")]),r("span",[r("small",{staticClass:"mx-4"},[e._v("(Select a host from right menu)")])]),r("v-text-field",{attrs:{readonly:"",rules:e.nameRules,label:"Host Name",required:""},model:{value:e.user.host.name,callback:function(t){e.$set(e.user.host,"name",t)},expression:"user.host.name"}}),r("v-text-field",{attrs:{readonly:"",rules:e.emailRules,label:"Host E-mail",required:""},model:{value:e.user.host.email,callback:function(t){e.$set(e.user.host,"email",t)},expression:"user.host.email"}}),r("v-text-field",{attrs:{readonly:"",prefix:"+91",label:"Host Phone",required:""},model:{value:e.user.host.phone,callback:function(t){e.$set(e.user.host,"phone",t)},expression:"user.host.phone"}}),r("v-btn",{staticClass:"mt-2 mr-4",attrs:{disabled:!e.valid,color:"primary"},on:{click:e.submitAndSave}},[e._v("Submit")]),r("v-btn",{staticClass:"mt-2 mr-4",attrs:{color:"warning",outlined:""},on:{click:e.reset}},[e._v("Reset Form")]),r("v-btn",{staticClass:"mt-2",attrs:{color:"warning",outlined:""},on:{click:e.resetValidation}},[e._v("Reset Validation")]),r("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.alert.show,expression:"alert.show"}],staticClass:"my-3",attrs:{type:e.alert.type}},[e._v(e._s(e.alert.message))])],1)],1)],1),r("v-col",{attrs:{cols:"12",lg:"3",md:"4"}},[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"500"}},[r("v-toolbar",{attrs:{color:"blue-grey darken-3",dense:"",dark:""}},[r("v-toolbar-title",[e._v("Hosts List")]),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",[e._v("mdi-magnify")])],1)],1),r("v-list",[e._l(e.hosts,(function(t,a){return[r("v-list-item",{key:"ab"+a,on:{click:function(r){return e.handleClick(t)}}},[r("v-list-item-icon",[r("v-icon",{attrs:{color:"pink"}},[e._v(e._s(t.name.charAt(0)))])],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.name)}})],1)],1),r("v-divider",{key:"ko-"+a})]}))],2)],1)],1)],1):r("v-text-field",{attrs:{loading:"",color:"success"}})],1)},s=[],n=(r("b0c0"),r("d3b7"),r("96cf"),r("9f12")),i=r("53fe"),o=r("8b83"),l=r("c65a"),u=r("c03e"),c=r("9ab4"),d=r("60a3"),h=r("74f9"),f=function(e){function t(){var e;return Object(n["a"])(this,t),e=Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.valid=!1,e.pageLoaded=!1,e.phoneMask="##########",e.alert={show:!1,type:"success",message:"unknown activity"},e.user={name:"",email:"",address:"",phone:"",host:{name:"",email:"",phone:""}},e.nameRules=[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=50||"Name must be less than 50 characters"}],e.emailRules=[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],e.addressRules=[function(e){return!!e||"Address is required"}],e.phoneRules=[function(e){return e&&10==e.length||"Phone Number length must be 10"}],e}return Object(u["a"])(t,e),Object(i["a"])(t,[{key:"created",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.loadHosts());case 2:case"end":return e.stop()}}),null,this)}},{key:"loadHosts",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.pageLoaded=!1,e.prev=1,e.next=4,regeneratorRuntime.awrap(h["a"].macGetAllHosts());case 4:this.pageLoaded=!0,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),this.pageLoaded=!0;case 10:case"end":return e.stop()}}),null,this,[[1,7]])}},{key:"validate",value:function(){this.$refs.form.validate()}},{key:"reset",value:function(){this.$refs.form.reset()}},{key:"resetValidation",value:function(){this.$refs.form.resetValidation()}},{key:"submitAndSave",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(this.validate(),!this.valid){e.next=12;break}return e.prev=2,e.next=5,regeneratorRuntime.awrap(h["a"].macAddEntry(this.user));case 5:this.showAlert("success","Added new Host"),this.reset(),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](2),this.showAlert("error","failed to add new host");case 12:case"end":return e.stop()}}),null,this,[[2,9]])}},{key:"showAlert",value:function(e,t){this.alert={show:!0,type:e,message:t}}},{key:"hideAlert",value:function(){this.alert.show=!1}},{key:"handleClick",value:function(e){this.user.host.name=e.name,this.user.host.phone=e.phone,this.user.host.email=e.email}},{key:"hosts",get:function(){return h["a"].getHosts}}]),t}(d["b"]);f=c["a"]([Object(d["a"])({components:{}})],f);var v=f,m=v,p=r("2877"),b=r("6544"),y=r.n(b),w=r("0798"),g=r("8336"),O=r("b0af"),k=r("62ad"),x=r("ce7e"),j=r("4bd4"),V=r("132d"),_=r("8860"),$=r("da13"),P=r("5d23"),R=r("34c3"),C=r("0fd9"),E=r("2fa4"),A=r("8654"),B=r("71d9"),L=r("2a7f"),q=Object(p["a"])(m,a,s,!1,null,null,null);t["default"]=q.exports;y()(q,{VAlert:w["a"],VBtn:g["a"],VCard:O["a"],VCol:k["a"],VDivider:x["a"],VForm:j["a"],VIcon:V["a"],VList:_["a"],VListItem:$["a"],VListItemContent:P["a"],VListItemIcon:R["a"],VListItemTitle:P["b"],VRow:C["a"],VSpacer:E["a"],VTextField:A["a"],VToolbar:B["a"],VToolbarTitle:L["a"]})},"4bd4":function(e,t,r){"use strict";r("a4d3"),r("4de4"),r("7db0"),r("4160"),r("caad"),r("e439"),r("dbb4"),r("b64b"),r("07ac"),r("2532"),r("159b");var a=r("2fa7"),s=r("58df"),n=r("7e2b"),i=r("3206");function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(r,!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=Object(s["a"])(n["a"],Object(i["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,r=function(e){return e.$watch("hasError",(function(r){t.$set(t.errorBag,e._uid,r)}),{immediate:!0})},a={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?a.shouldValidate=e.$watch("shouldValidate",(function(s){s&&(t.errorBag.hasOwnProperty(e._uid)||(a.valid=r(e)))})):a.valid=r(e),a},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var r=this.watchers.find((function(e){return e._uid===t._uid}));r&&(r.valid(),r.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:l({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"8ce9":function(e,t,r){},ce7e:function(e,t,r){"use strict";r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");var a=r("2fa7"),s=(r("8ce9"),r("7560"));function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(r,!0).forEach((function(t){Object(a["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t["a"]=s["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:i({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:i({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-1b5b58f8.454204c3.js.map