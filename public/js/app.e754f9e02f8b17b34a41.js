webpackJsonp([1],{161:function(t,e,a){"use strict";var n=a(30),s=a(250),r=a(237),i=a.n(r),o=a(239),l=a.n(o),c=a(240),u=a.n(c);n.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/",name:"Home",component:i.a},{path:"/file/*",component:u.a},{path:"/logout",component:u.a},{path:"/oauth/*",component:u.a},{path:"/redirect",component:u.a},{path:"/:relationship_id*",name:"RelationshipWrapper",component:l.a,props:!0}]})},163:function(t,e){},164:function(t,e){},165:function(t,e){},166:function(t,e){},169:function(t,e,a){var n=a(4)(a(174),a(245),null,null,null);t.exports=n.exports},170:function(t,e,a){var n=a(4)(a(175),a(243),null,null,null);t.exports=n.exports},171:function(t,e,a){var n=a(4)(a(176),a(244),null,null,null);t.exports=n.exports},174:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(32),s=a.n(n),r=a(241),i=a.n(r);e.default={name:"ourloveio",components:{TopNav:i.a},mounted:function(){this.$root.$refs=s()(this.$root.$refs,{toastr:this.$refs.toastr}),this.$refs.toastr.defaultPosition="toast-bottom-right"}}},175:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),s=a.n(n),r=a(252),i=a.n(r);e.default={props:["valueKey","label","value"],data:function(){return{date:null}},methods:{dateChanged:function(){this.$emit("input",this.date),this.$emit("changedWithKey",this.date,this.valueKey)}},mounted:function(){this.value&&(this.date=s.a.utc(this.value).toDate())},components:{datepicker:i.a}}},176:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["label","value"],data:function(){return{modelValue:this.value||""}},computed:{state:function(){return this.modelValue.length?"success":"warning"}},methods:{updateValue:function(t){this.$emit("input",t)}}}},177:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",data:function(){return{}}}},178:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"default",function(){return f});var n=a(20),s=a.n(n),r=a(8),i=a.n(r),o=a(184),l=a.n(o),c=a(7),u=a.n(c),d=a(0),p=a.n(d),h=a(19),m=a(31),f={name:"relationship",props:["id","relationship"],data:function(){return{isRelationshipAdmin:!1,editMode:!1,editTabIndex:0,relationshipImages:[],primaryImage:null,pictureUploadLoading:!1,mainTimingInterval:null,relationshipDynamicTimes:{relationship_started_seconds:null,relationship_started_minutes:null,relationship_started_days:null,relationship_started_weeks:null,relationship_started_months:null,relationship_started_years:null,relationship_married_seconds:null,relationship_married_minutes:null,relationship_married_days:null,relationship_married_weeks:null,relationship_married_months:null,relationship_married_years:null}}},methods:{openSnackbar:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",a={success:"s",error:"e"};return this.$root.$refs.toastr[a[e]||"s"](t)},updateEditMode:function(){this.editMode=!this.editMode},successfullyAddedPicture:function(t,e){this.$refs["relationship-pictures"].removeAllFiles(),this.relationshipImages.push(e),this.openSnackbar("Successfully added picture!"),this.pictureUploadLoading=!1},getTimeDifference:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"days";return p.a.utc().diff(p.a.utc(this.relationship[t]),e)},updateTimerCountUps:function(){var t=this,e=["seconds","minutes","days","weeks","months","years"];["relationship_started","relationship_married"].forEach(function(a){e.forEach(function(e){t.relationship[a]&&(t.relationshipDynamicTimes[a+"_"+e]=t.getTimeDifference(a,e))})})},setPrimaryImage:function(){var t=this.relationshipImages.filter(function(t){return t.relationship_primary_image});this.primaryImage=t.length>0?t[0]:this.relationshipImages[0]},updateRelationship:function(){var t=this;return u()(i.a.mark(function e(){var a,n,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=["person1_name","person2_name","relationship_started","relationship_married"],n=l()(t.relationship).filter(function(t){return a.includes(t)}).reduce(function(e,a){return e[a]=t.relationship[a],e},{}),e.next=5,m.a.update(t.id,n);case 5:s=e.sent,t.openSnackbar("Successfully updated relationship info!"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error updating relationship",e.t0),t.openSnackbar("There was a problem updating your relationship.","error");case 13:case"end":return e.stop()}},e,t,[[0,9]])}))()}},created:function(){var t=this;return u()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.updateTimerCountUps(),t.mainTimingInterval=setInterval(function(){return t.updateTimerCountUps()},500),e.next=4,s.a.all([h.a.isRelationshipAdmin(t.id),m.a.getImages(t.id)]);case 4:a=e.sent,t.isRelationshipAdmin=a[0],t.relationshipImages=a[1],t.setPrimaryImage();case 8:case"end":return e.stop()}},e,t)}))()}}},179:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"default",function(){return f});var n=a(20),s=a.n(n),r=a(8),i=a.n(r),o=a(7),l=a.n(o),c=a(32),u=(a.n(c),a(0)),d=(a.n(u),a(19)),p=a(31),h=a(238),m=a.n(h),f={name:"relationship_wrapper",props:["relationship_id"],data:function(){return{loading:!0,isLoggedIn:!1,newRelationship:{},startDate:null,marriedDate:null,relationship:null}},methods:{openSnackbar:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",a={success:"s",error:"e"};return this.$root.$refs.toastr[a[e]||"s"](t)},dateChanged:function(){return console.log("args",this.newRelationship,arguments)},relationshipStatus:function(t){return this.loading?"loading"==t:this.relationship_id&&this.relationship?"valid"==t:"none"==t},createRelationship:function(){var t=this;return l()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.newRelationship.p1name&&t.newRelationship.p2name){e.next=3;break}return e.abrupt("return",t.openSnackbar("Make sure to enter at least both people's names to create the relationship!","error"));case 3:return e.next=5,p.a.create(t.relationship_id,t.newRelationship);case 5:return a=e.sent,e.next=8,t.getRelationship();case 8:t.openSnackbar("Successfully created relationship!"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),t.openSnackbar("There was a problem creating your relationship.","error"),console.log("error creating",e.t0);case 15:case"end":return e.stop()}},e,t,[[0,11]])}))()},getRelationship:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.relationship_id;return l()(i.a.mark(function a(){var n;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading=!0,a.next=3,p.a.get(e);case 3:n=a.sent,t.relationship=n.relationship,t.loading=!1;case 6:case"end":return a.stop()}},a,t)}))()}},created:function(){var t=this;return l()(i.a.mark(function e(){var a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.all([d.a.isLoggedIn(),d.a.setReturnTo(t.relationship_id),t.getRelationship()]);case 2:a=e.sent,t.isLoggedIn=a[0];case 4:case"end":return e.stop()}},e,t)}))()},components:{Relationship:m.a}}},180:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"reload-page",mounted:function(){window.location.reload()}}},181:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"default",function(){return l});var n=a(8),s=a.n(n),r=a(7),i=a.n(r),o=a(19),l={name:"TopNav",data:function(){return{isLoggedIn:!1,displayName:null,integrations:{}}},methods:{getLoggedInAndIntegrations:function(){var t=this;return i()(s.a.mark(function e(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getIntegrations();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},e,t)}))()},hasIntegration:function(t){return!!this.integrations[t]}},created:function(){var t=this;return i()(s.a.mark(function e(){var a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getLoggedInAndIntegrations();case 2:a=e.sent,t.isLoggedIn=a.logged_in,t.displayName=a.display_name,a.integrations instanceof Array&&a.integrations.forEach(function(e){return t.integrations[e]=!0});case 6:case"end":return e.stop()}},e,t)}))()}}},182:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(30),s=a(162),r=a(168),i=a.n(r),o=a(167),l=(a.n(o),a(169)),c=a.n(l),u=a(161),d=a(172),p=a.n(d),h=a(170),m=a.n(h),f=a(173),v=a.n(f),_=a(171),g=a.n(_),b=a(165),j=(a.n(b),a(164)),x=(a.n(j),a(163)),y=(a.n(x),a(166));a.n(y);window.ourloveFetch=i()(fetch,{credentials:"same-origin"}),"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){return o.attach(document.body)},!1),n.a.use(s.a),n.a.component("vue-toastr",p.a),n.a.component("datepicker",m.a),n.a.component("Dropzone",v.a),n.a.component("FormRequiredInput",g.a),n.a.config.productionTip=!1,new n.a({el:"#app",router:u.a,template:"<App/>",components:{App:c.a}})},19:function(t,e,a){"use strict";var n=a(8),s=a.n(n),r=a(7),i=a.n(r);e.a={isLoggedIn:function(){var t=this;return i()(s.a.mark(function e(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ourloveFetch("/api/v1.0/auth/logged_in");case 2:return a=t.sent,t.abrupt("return",a.json());case 4:case"end":return t.stop()}},e,t)}))()},isRelationshipAdmin:function(t){var e=this;return i()(s.a.mark(function a(){var n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ourloveFetch("/api/v1.0/auth/relationship_admin/"+t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},a,e)}))()},getIntegrations:function(){var t=this;return i()(s.a.mark(function e(){var a;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ourloveFetch("/api/v1.0/auth/integrations");case 2:return a=t.sent,t.abrupt("return",a.json());case 4:case"end":return t.stop()}},e,t)}))()},setReturnTo:function(t){var e=this;return i()(s.a.mark(function a(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ourloveFetch("/api/v1.0/auth/set_return_to/"+t);case 2:case"end":return e.stop()}},a,e)}))()}}},225:function(t,e){},226:function(t,e){},227:function(t,e,a){function n(t){return a(s(t))}function s(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var r={"./af":44,"./af.js":44,"./ar":51,"./ar-dz":45,"./ar-dz.js":45,"./ar-kw":46,"./ar-kw.js":46,"./ar-ly":47,"./ar-ly.js":47,"./ar-ma":48,"./ar-ma.js":48,"./ar-sa":49,"./ar-sa.js":49,"./ar-tn":50,"./ar-tn.js":50,"./ar.js":51,"./az":52,"./az.js":52,"./be":53,"./be.js":53,"./bg":54,"./bg.js":54,"./bn":55,"./bn.js":55,"./bo":56,"./bo.js":56,"./br":57,"./br.js":57,"./bs":58,"./bs.js":58,"./ca":59,"./ca.js":59,"./cs":60,"./cs.js":60,"./cv":61,"./cv.js":61,"./cy":62,"./cy.js":62,"./da":63,"./da.js":63,"./de":66,"./de-at":64,"./de-at.js":64,"./de-ch":65,"./de-ch.js":65,"./de.js":66,"./dv":67,"./dv.js":67,"./el":68,"./el.js":68,"./en-au":69,"./en-au.js":69,"./en-ca":70,"./en-ca.js":70,"./en-gb":71,"./en-gb.js":71,"./en-ie":72,"./en-ie.js":72,"./en-nz":73,"./en-nz.js":73,"./eo":74,"./eo.js":74,"./es":76,"./es-do":75,"./es-do.js":75,"./es.js":76,"./et":77,"./et.js":77,"./eu":78,"./eu.js":78,"./fa":79,"./fa.js":79,"./fi":80,"./fi.js":80,"./fo":81,"./fo.js":81,"./fr":84,"./fr-ca":82,"./fr-ca.js":82,"./fr-ch":83,"./fr-ch.js":83,"./fr.js":84,"./fy":85,"./fy.js":85,"./gd":86,"./gd.js":86,"./gl":87,"./gl.js":87,"./gom-latn":88,"./gom-latn.js":88,"./he":89,"./he.js":89,"./hi":90,"./hi.js":90,"./hr":91,"./hr.js":91,"./hu":92,"./hu.js":92,"./hy-am":93,"./hy-am.js":93,"./id":94,"./id.js":94,"./is":95,"./is.js":95,"./it":96,"./it.js":96,"./ja":97,"./ja.js":97,"./jv":98,"./jv.js":98,"./ka":99,"./ka.js":99,"./kk":100,"./kk.js":100,"./km":101,"./km.js":101,"./kn":102,"./kn.js":102,"./ko":103,"./ko.js":103,"./ky":104,"./ky.js":104,"./lb":105,"./lb.js":105,"./lo":106,"./lo.js":106,"./lt":107,"./lt.js":107,"./lv":108,"./lv.js":108,"./me":109,"./me.js":109,"./mi":110,"./mi.js":110,"./mk":111,"./mk.js":111,"./ml":112,"./ml.js":112,"./mr":113,"./mr.js":113,"./ms":115,"./ms-my":114,"./ms-my.js":114,"./ms.js":115,"./my":116,"./my.js":116,"./nb":117,"./nb.js":117,"./ne":118,"./ne.js":118,"./nl":120,"./nl-be":119,"./nl-be.js":119,"./nl.js":120,"./nn":121,"./nn.js":121,"./pa-in":122,"./pa-in.js":122,"./pl":123,"./pl.js":123,"./pt":125,"./pt-br":124,"./pt-br.js":124,"./pt.js":125,"./ro":126,"./ro.js":126,"./ru":127,"./ru.js":127,"./sd":128,"./sd.js":128,"./se":129,"./se.js":129,"./si":130,"./si.js":130,"./sk":131,"./sk.js":131,"./sl":132,"./sl.js":132,"./sq":133,"./sq.js":133,"./sr":135,"./sr-cyrl":134,"./sr-cyrl.js":134,"./sr.js":135,"./ss":136,"./ss.js":136,"./sv":137,"./sv.js":137,"./sw":138,"./sw.js":138,"./ta":139,"./ta.js":139,"./te":140,"./te.js":140,"./tet":141,"./tet.js":141,"./th":142,"./th.js":142,"./tl-ph":143,"./tl-ph.js":143,"./tlh":144,"./tlh.js":144,"./tr":145,"./tr.js":145,"./tzl":146,"./tzl.js":146,"./tzm":148,"./tzm-latn":147,"./tzm-latn.js":147,"./tzm.js":148,"./uk":149,"./uk.js":149,"./ur":150,"./ur.js":150,"./uz":152,"./uz-latn":151,"./uz-latn.js":151,"./uz.js":152,"./vi":153,"./vi.js":153,"./x-pseudo":154,"./x-pseudo.js":154,"./yo":155,"./yo.js":155,"./zh-cn":156,"./zh-cn.js":156,"./zh-hk":157,"./zh-hk.js":157,"./zh-tw":158,"./zh-tw.js":158};n.keys=function(){return Object.keys(r)},n.resolve=s,t.exports=n,n.id=227},237:function(t,e,a){var n=a(4)(a(177),a(242),null,null,null);t.exports=n.exports},238:function(t,e,a){function n(t){a(226)}var s=a(4)(a(178),a(248),n,"data-v-e56d4360",null);t.exports=s.exports},239:function(t,e,a){var n=a(4)(a(179),a(249),null,null,null);t.exports=n.exports},240:function(t,e,a){var n=a(4)(a(180),a(247),null,null,null);t.exports=n.exports},241:function(t,e,a){function n(t){a(225)}var s=a(4)(a(181),a(246),n,null,null);t.exports=s.exports},242:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main col text-center"},[a("h1",{staticClass:"display-d"},[t._v("This is ourlove.io!")]),a("div",[t._v("Create your relationships now!")])])}]}},243:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form-group"},[t.label?a("label",{attrs:{for:"dp"}},[t._v(t._s(t.label))]):t._e(),a("datepicker",{attrs:{name:"dp",placeholder:"Click here to select date...",format:"MMMM dd, yyyy","bootstrap-styling":!0,value:t.value},on:{closed:t.dateChanged},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)},staticRenderFns:[]}},244:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-form-fieldset",{attrs:{label:t.label,state:t.state,"label-cols":3}},[a("b-form-input",{attrs:{state:t.state,value:t.value},on:{input:t.updateValue},model:{value:t.modelValue,callback:function(e){t.modelValue=e},expression:"modelValue"}})],1)},staticRenderFns:[]}},245:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("top-nav"),a("router-view"),a("vue-toastr",{ref:"toastr"})],1)},staticRenderFns:[]}},246:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-nav-container"},[a("div",{staticClass:"container"},[a("b-navbar",{attrs:{toggleable:"toggleable",type:"inverse"}},[a("b-nav-toggle",{attrs:{target:"navbarNavDropdown"}}),a("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("img",{staticClass:"img-fluid",staticStyle:{"max-height":"32px"},attrs:{src:"/public/images/favicon_white.png"}}),a("span",{staticClass:"margin-left-sm"},[t._v("ourlove.io")])]),a("b-collapse",{attrs:{id:"navbarNavDropdown","is-nav":"is-nav"}},[a("b-nav",{staticClass:"is-nav-bar ml-auto"},[t.displayName?a("div",{staticClass:"d-flex align-items-center text-small",staticStyle:{"padding-right":"4px","margin-right":"4px","border-right":"1px solid"}},[a("strong",[t._v("Welcome, "+t._s(t.displayName))])]):t._e(),t.hasIntegration("facebook")||t.hasIntegration("instagram")||t.hasIntegration("pinterest")?t._e():a("div",{staticClass:"d-flex align-items-center text-small"},[a("div",[t._v("login")])]),t.hasIntegration("facebook")?t._e():a("b-nav-item",{attrs:{to:"/oauth/facebook"}},[a("i",{staticClass:"fa fa-2x fa-facebook-square",attrs:{"aria-hidden":"true"}})]),t.hasIntegration("instagram")?t._e():a("b-nav-item",{attrs:{to:"/oauth/instagram"}},[a("i",{staticClass:"fa fa-2x fa-instagram",attrs:{"aria-hidden":"true"}})]),t.hasIntegration("pinterest")?t._e():a("b-nav-item",{attrs:{to:"/oauth/pinterest"}},[a("i",{staticClass:"fa fa-2x fa-pinterest-square",attrs:{"aria-hidden":"true"}})]),t.isLoggedIn?a("b-nav-item",{staticClass:"d-flex align-items-center text-small",attrs:{to:"/logout"}},[a("div",[t._v("logout")])]):t._e()],1)],1)],1)],1)])},staticRenderFns:[]}},247:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-4x fa-spinner fa-spin"})])}]}},248:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col valid-relationship-container"},[t.isRelationshipAdmin?a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.editMode?a("i",{on:{click:t.updateEditMode}},[t._v("Edit Mode")]):t._e()]),a("div",{staticClass:"col-2 text-right"},[a("a",{staticClass:"gray",attrs:{href:"javascript:void(0)"},on:{click:t.updateEditMode}},[a("i",{staticClass:"fa fa-gear"})])])]):t._e(),a("h1",{staticClass:"text-center"},[t._v(t._s(t.relationship.person1_name)+" & "+t._s(t.relationship.person2_name))]),t.editMode?t._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-3 d-flex justify-content-center"},[t.primaryImage?t._e():a("div",[a("div",[a("i",[t._v("You don't have any pictures yet! Add some by  ")]),a("u",[a("a",{attrs:{href:"javascript:void(0)"},on:{click:t.updateEditMode}},[t._v("editing your relationship")])]),a("span",[t._v(" and they'll show up here!")])])]),t.primaryImage?a("div",{staticClass:"img-thumbnail force-circle w-200"},[a("img",{class:{portrait:"portrait"==t.primaryImage.orientation,landscape:"landscape"==t.primaryImage.orientation},attrs:{src:"/file/s3/"+t.primaryImage.main_image_name}})]):t._e()]),t._m(0),a("div",{staticClass:"col-lg-3"},[t._m(1),t.relationship.relationship_started?a("div",[a("div",{staticClass:"text-center"},[t._v("Your relationship started:")]),a("table",{staticClass:"table table-inverse thin two-cells"},[a("tbody",[a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_started_seconds))])]),a("td",[t._v("Seconds ago")])]),a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_started_minutes))])]),a("td",[t._v("Minutes ago")])]),a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_started_days))])]),a("td",[t._v("Days ago")])]),a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_started_weeks))])]),a("td",[t._v("Weeks ago")])]),a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_started_months))])]),a("td",[t._v("Months ago")])]),a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_started_years))])]),a("td",[t._v("Years ago")])])])])]):t._e(),t.relationship.relationship_married?a("div",[a("div",{staticClass:"text-center"},[t._v("You got married:")]),a("table",{staticClass:"table table-inverse thin two-cells"},[a("tbody",[a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_married_seconds))])]),a("td",[t._v("Seconds ago")])]),a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_married_minutes))])]),a("td",[t._v("Minutes ago")])]),a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_married_days))])]),a("td",[t._v("Days ago")])]),a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_married_weeks))])]),a("td",[t._v("Weeks ago")])]),a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_married_months))])]),a("td",[t._v("Months ago")])]),a("tr",[a("td",{staticClass:"text-center"},[a("strong",[t._v(t._s(t.relationshipDynamicTimes.relationship_married_years))])]),a("td",[t._v("Years ago")])])])])]):t._e()])]),t.editMode?a("div",[a("b-tabs",{ref:"edit-tabs",attrs:{card:"card"},model:{value:t.editTabIndex,callback:function(e){t.editTabIndex=e},expression:"editTabIndex"}},[a("b-tab",{attrs:{title:"Main Info"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6 offset-md-3"},[a("form-required-input",{attrs:{label:"First Person's Name"},model:{value:t.relationship.person1_name,callback:function(e){t.relationship.person1_name=e},expression:"relationship.person1_name"}}),a("form-required-input",{attrs:{label:"Second Person's Name"},model:{value:t.relationship.person2_name,callback:function(e){t.relationship.person2_name=e},expression:"relationship.person2_name"}}),a("datepicker",{attrs:{label:"Relationship Start Date"},model:{value:t.relationship.relationship_started,callback:function(e){t.relationship.relationship_started=e},expression:"relationship.relationship_started"}}),a("datepicker",{attrs:{label:"Optional: Married Date"},model:{value:t.relationship.relationship_married,callback:function(e){t.relationship.relationship_married=e},expression:"relationship.relationship_married"}}),a("div",{staticClass:"text-center padding-md"},[a("b-button",{staticClass:"btn-ourlove-dark",attrs:{size:"lg"},on:{click:function(e){t.updateRelationship()}}},[t._v("Update Relationship")])],1)],1)])]),a("b-tab",{attrs:{title:"Relationship Pictures"}},[t.pictureUploadLoading?a("div",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-4x fa-spinner fa-spin"})]):t._e(),t.pictureUploadLoading?t._e():a("div",[a("h3",[t._v("Upload New Images")]),a("dropzone",{ref:"relationship-pictures",attrs:{id:"relationship-pictures",acceptedFileTypes:"image/*",clickable:!0,language:{dictDefaultMessage:"<br>Click or drag images here to upload them!"},url:"/api/v1.0/relationships/file_upload/"+t.id},on:{"vdropzone-success":t.successfullyAddedPicture}})],1),a("div",{staticClass:"row margin-top-md"},[a("h5",{staticClass:"col"},[t._v("Current Images")])]),a("div",{staticClass:"row"},[t.relationshipImages.length?t._e():a("div",[a("i",[t._v("No images uploaded yet...")])]),t._l(t.relationshipImages,function(e){return t.relationshipImages.length?a("div",{staticClass:"col-sm-6 col-md-3"},[a("img",{staticClass:"img-fluid img-thumbnail rounded-circle",attrs:{src:"/file/s3/"+e.small_image_name}})]):t._e()})],2)])],1)],1):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col text-center"},[a("div",[t._v("Some more information!")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h2",[a("u",[t._v("Stats")])])}]}},249:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container relationship-container"},[t.relationshipStatus("loading")?a("div",{staticClass:"text-center create-relationship-container"},[a("i",{staticClass:"fa fa-4x fa-spinner fa-spin"})]):t._e(),t.relationshipStatus("none")?a("div",{staticClass:"col create-relationship-container"},[t.isLoggedIn?t._e():a("div",{staticClass:"text-center"},[a("h1",[t._v(t._s(t.relationship_id))]),a("h4",[t._v("is available!")]),a("div",[t._v("Login today by clicking on one of the providers below to create your page now!")]),t._m(0)]),t.isLoggedIn?a("div",[a("div",{staticClass:"text-center"},[a("h1",[t._v(t._s(t.relationship_id))]),a("h4",[t._v("Create Relationship")])]),a("div",{staticClass:"col col-md-6 offset-md-3"},[a("form-required-input",{attrs:{label:"First Person's Name"},model:{value:t.newRelationship.p1name,callback:function(e){t.newRelationship.p1name=e},expression:"newRelationship.p1name"}}),a("form-required-input",{attrs:{label:"Second Person's Name"},model:{value:t.newRelationship.p2name,callback:function(e){t.newRelationship.p2name=e},expression:"newRelationship.p2name"}}),a("datepicker",{attrs:{label:"Relationship Start Date"},model:{value:t.newRelationship.startDate,callback:function(e){t.newRelationship.startDate=e},expression:"newRelationship.startDate"}}),a("datepicker",{attrs:{label:"Optional: Married Date"},model:{value:t.newRelationship.marriedDate,callback:function(e){t.newRelationship.marriedDate=e},expression:"newRelationship.marriedDate"}}),a("div",{staticClass:"text-center padding-md"},[a("b-button",{staticClass:"btn-ourlove-dark",attrs:{size:"lg"},on:{click:function(e){t.createRelationship()}}},[t._v("Create Relationship Page")])],1)],1)]):t._e()]):t._e(),t.relationshipStatus("valid")?a("relationship",{attrs:{id:t.relationship_id,relationship:t.relationship}}):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"margin-vertical-xlg"},[a("a",{attrs:{href:"/oauth/facebook"}},[a("i",{staticClass:"fa fa-5x fa-facebook-square",attrs:{"aria-hidden":"true"}})]),a("a",{attrs:{href:"/oauth/instagram"}},[a("i",{staticClass:"fa fa-5x fa-instagram margin-left-md",attrs:{"aria-hidden":"true"}})]),a("a",{attrs:{href:"/oauth/pinterest"}},[a("i",{staticClass:"fa fa-5x fa-pinterest-square margin-left-md",attrs:{"aria-hidden":"true"}})])])}]}},31:function(t,e,a){"use strict";var n=a(183),s=a.n(n),r=a(8),i=a.n(r),o=a(7),l=a.n(o);e.a={get:function(t){var e=this;return l()(i.a.mark(function a(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ourloveFetch("/api/v1.0/relationships/get/"+t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},a,e)}))()},getImages:function(t){var e=this;return l()(i.a.mark(function a(){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ourloveFetch("/api/v1.0/relationships/get_images/"+t);case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}},a,e)}))()},create:function(t,e){var a=this;return l()(i.a.mark(function n(){var r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ourloveFetch("/api/v1.0/relationships/create/"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:s()({relationship:e})});case 2:return r=a.sent,a.abrupt("return",r.json());case 4:case"end":return a.stop()}},n,a)}))()},update:function(t,e){var a=this;return l()(i.a.mark(function n(){var r;return i.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ourloveFetch("/api/v1.0/relationships/update/"+t,{method:"PUT",headers:{"Content-Type":"application/json"},body:s()({relationship:e})});case 2:return r=a.sent,a.abrupt("return",r.json());case 4:case"end":return a.stop()}},n,a)}))()}}}},[182]);
//# sourceMappingURL=app.e754f9e02f8b17b34a41.js.map