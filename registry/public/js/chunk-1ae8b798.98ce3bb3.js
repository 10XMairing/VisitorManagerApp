(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ae8b798"],{"496d":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12",lg:"6",md:"8"}},[a("v-card",{staticClass:"pa-4 card"},[a("v-toolbar",{attrs:{flat:""}},[a("v-btn",{attrs:{icon:""}},[a("v-icon",{attrs:{size:"60"}},[e._v("person")])],1),a("v-toolbar-title",[e._v("Add Host")])],1),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{rules:e.nameRules,label:"Host Name",required:""},model:{value:e.host.name,callback:function(t){e.$set(e.host,"name",t)},expression:"host.name"}}),a("v-text-field",{attrs:{rules:e.emailRules,label:"Host E-mail",required:""},model:{value:e.host.email,callback:function(t){e.$set(e.host,"email",t)},expression:"host.email"}}),a("v-text-field",{attrs:{rules:e.phoneRules,label:"Host Phone",counter:"10",prefix:"+91",type:"number",required:""},model:{value:e.host.phone,callback:function(t){e.$set(e.host,"phone",t)},expression:"host.phone"}}),a("v-btn",{staticClass:"mt-2 mr-4",attrs:{disabled:!e.valid,loading:e.loadingSave,color:"primary"},on:{click:e.addHost}},[e._v("Submit")]),a("v-btn",{staticClass:"mt-2 mr-4",attrs:{color:"warning",outlined:""},on:{click:e.reset}},[e._v("Reset Form")]),a("v-btn",{staticClass:"mt-2",attrs:{color:"warning",outlined:""},on:{click:e.resetValidation}},[e._v("Reset Validation")]),a("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.alert.show,expression:"alert.show"}],staticClass:"my-3",attrs:{type:e.alert.type}},[e._v(e._s(e.alert.message))])],1)],1)],1),a("v-col",{attrs:{cols:"12",lg:"7",md:"8",justify:"center",align:"center"}},[e.pageLoaded?a("div",[a("v-divider"),a("v-toolbar",{attrs:{flat:""}},[a("v-tooltip",{attrs:{right:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on;return[a("v-btn",e._g({attrs:{disabled:!e.anySelected,color:"primary",icon:""},on:{click:function(t){e.deleteDialog=!0}}},r),[a("v-icon",[e._v("delete")])],1)]}}],null,!1,1959358846)},[a("span",[e._v("Delete Selected")])]),a("v-toolbar-title",[e._v("Hosts List")])],1),a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[a("v-checkbox",{attrs:{color:"primary"},model:{value:e.checkall,callback:function(t){e.checkall=t},expression:"checkall"}})],1),a("th",{staticClass:"text-left"},[e._v("Name")]),a("th",{staticClass:"text-left"},[e._v("Phone")]),a("th",{staticClass:"text-left"},[e._v("Email")])])]),a("tbody",e._l(e.hostList,(function(t,r){return a("tr",{key:"asd"+r},[a("td",[a("v-checkbox",{attrs:{color:"primary"},model:{value:e.checks[r],callback:function(t){e.$set(e.checks,r,t)},expression:"checks[ix]"}})],1),a("td",[e._v(e._s(t.name))]),a("td",[e._v(e._s(t.phone))]),a("td",[e._v(e._s(t.email))])])})),0)]},proxy:!0}],null,!1,2138872711)})],1):a("v-text-field",{attrs:{loading:"",color:"success"}}),a("v-dialog",{attrs:{"max-width":"400px"},model:{value:e.deleteDialog,callback:function(t){e.deleteDialog=t},expression:"deleteDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Confirm Delete?")]),a("v-card-text",[e._v("This Action cannot be reverted.All data for this host will be removed.")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.deleteDialog=!1}}},[e._v("cancel")]),a("v-btn",{attrs:{color:"blue darken-1",loading:e.loadingDel,text:""},on:{click:e.deleteSelected}},[e._v("DELETE")])],1)],1)],1)],1)],1)],1)},n=[],i=(a("4160"),a("d3b7"),a("159b"),a("96cf"),a("9f12")),s=a("53fe"),o=a("8b83"),l=a("c65a"),c=a("c03e"),u=a("9ab4"),d=a("60a3"),h=a("74f9"),v=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(o["a"])(this,Object(l["a"])(t).apply(this,arguments)),e.pageLoaded=!1,e.deleteDialog=!1,e.loadingDel=!1,e.loadingSave=!1,e.valid=!1,e.checkall=!1,e.checks=[],e.alert={show:!1,type:"success",message:"unknown activity"},e.host={name:"",email:"",phone:""},e.nameRules=[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=50||"Name must be less than 50 characters"}],e.emailRules=[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],e.addressRules=[function(e){return!!e||"Address is required"}],e.phoneRules=[function(e){return e&&10==e.length||"Phone Number length must be 10"}],e}return Object(c["a"])(t,e),Object(s["a"])(t,[{key:"created",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,regeneratorRuntime.awrap(this.loadHosts());case 2:case"end":return e.stop()}}),null,this)}},{key:"loadHosts",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.pageLoaded=!1,e.prev=1,e.next=4,regeneratorRuntime.awrap(h["a"].macGetAllHosts());case 4:this.pageLoaded=!0,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),this.pageLoaded=!0;case 10:case"end":return e.stop()}}),null,this,[[1,7]])}},{key:"validate",value:function(){this.$refs.form.validate()}},{key:"reset",value:function(){this.$refs.form.reset()}},{key:"resetValidation",value:function(){this.$refs.form.resetValidation()}},{key:"submitAndSave",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if(this.validate(),this.valid)try{this.showAlert("success","Added new Host"),this.reset()}catch(t){this.showAlert("error","failed to add new host")}case 2:case"end":return e.stop()}}),null,this)}},{key:"showAlert",value:function(e,t){this.alert={show:!0,type:e,message:t}}},{key:"hideAlert",value:function(){this.alert.show=!1}},{key:"setChecksStatus",value:function(e,t){this.checks=[];for(var a=0;a<e;a++)this.checks[a]=t}},{key:"onChangeCheckAll",value:function(e,t){e?this.setChecksStatus(this.hostList.length,!0):this.setChecksStatus(this.hostList.length,!1)}},{key:"deleteSelected",value:function(){var e,t=this;return regeneratorRuntime.async((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,this.loadingDel=!0,e=[],this.checks.forEach((function(a,r){a&&e.push(t.hostList[r]._id)})),a.next=6,regeneratorRuntime.awrap(h["a"].macDeleteHosts({ids:e}));case 6:this.loadingDel=!1,this.deleteDialog=!1,a.next=13;break;case 10:a.prev=10,a.t0=a["catch"](0),this.loadingDel=!1;case 13:return a.next=15,regeneratorRuntime.awrap(this.loadHosts());case 15:case"end":return a.stop()}}),null,this,[[0,10]])}},{key:"addHost",value:function(){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.loadingSave=!0,e.next=4,regeneratorRuntime.awrap(h["a"].macAddHost(this.host));case 4:return this.loadingSave=!1,this.reset(),e.next=8,regeneratorRuntime.awrap(this.loadHosts());case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.loadingSave=!1;case 13:case"end":return e.stop()}}),null,this,[[0,10]])}},{key:"hostList",get:function(){return h["a"].getHosts}},{key:"anySelected",get:function(){for(var e=0;e<this.checks.length;e++)if(this.checks[e])return!0;return!1}}]),t}(d["b"]);u["a"]([Object(d["c"])("checkall")],v.prototype,"onChangeCheckAll",null),v=u["a"]([Object(d["a"])({components:{}})],v);var f=v,p=f,b=a("2877"),m=a("6544"),g=a.n(m),y=a("0798"),w=a("8336"),k=a("b0af"),x=a("99d9"),O=a("ac7c"),_=a("62ad"),j=a("169a"),V=a("ce7e"),C=a("4bd4"),D=a("132d"),S=a("0fd9"),R=a("1f4f"),P=a("2fa4"),$=a("8654"),E=a("71d9"),A=a("2a7f"),H=a("3a2f"),B=Object(b["a"])(p,r,n,!1,null,null,null);t["default"]=B.exports;g()(B,{VAlert:y["a"],VBtn:w["a"],VCard:k["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCheckbox:O["a"],VCol:_["a"],VDialog:j["a"],VDivider:V["a"],VForm:C["a"],VIcon:D["a"],VRow:S["a"],VSimpleTable:R["a"],VSpacer:P["a"],VTextField:$["a"],VToolbar:E["a"],VToolbarTitle:A["a"],VTooltip:H["a"]})},"4bd4":function(e,t,a){"use strict";a("a4d3"),a("4de4"),a("7db0"),a("4160"),a("caad"),a("e439"),a("dbb4"),a("b64b"),a("07ac"),a("2532"),a("159b");var r=a("2fa7"),n=a("58df"),i=a("7e2b"),s=a("3206");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(a,!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t["a"]=Object(n["a"])(i["a"],Object(s["b"])("form")).extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var t=this,a=function(e){return e.$watch("hasError",(function(a){t.$set(t.errorBag,e._uid,a)}),{immediate:!0})},r={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=e.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(e._uid)||(r.valid=a(e)))})):r.valid=a(e),r},validate:function(){return 0===this.inputs.filter((function(e){return!e.validate(!0)})).length},reset:function(){this.inputs.forEach((function(e){return e.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(e){return e.resetValidation()})),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var t=this.inputs.find((function(t){return t._uid===e._uid}));if(t){var a=this.watchers.find((function(e){return e._uid===t._uid}));a&&(a.valid(),a.shouldValidate()),this.watchers=this.watchers.filter((function(e){return e._uid!==t._uid})),this.inputs=this.inputs.filter((function(e){return e._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:l({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},"8ce9":function(e,t,a){},ce7e:function(e,t,a){"use strict";a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");var r=a("2fa7"),n=(a("8ce9"),a("7560"));function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(a,!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t["a"]=n["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(e){var t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:s({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:s({role:"separator","aria-orientation":t},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-1ae8b798.98ce3bb3.js.map