webpackJsonp([1],{152:function(t,e,a){"use strict";var s=a(26),n=a(226),i=a(219),r=a.n(i),o=a(220),c=a.n(o);s.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/",name:"Home",component:r.a},{path:"/:relationship_id*",name:"Relationship",component:c.a,props:!0}]})},154:function(t,e){},155:function(t,e){},156:function(t,e){},157:function(t,e){},159:function(t,e,a){var s=a(15)(a(163),a(223),null,null,null);t.exports=s.exports},163:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(28),n=a.n(s),i=a(221),r=a.n(i);e.default={name:"ourloveio",components:{TopNav:r.a},mounted:function(){this.$root.$refs=n()(this.$root.$refs,{toastr:this.$refs.toastr}),this.$refs.toastr.defaultPosition="toast-bottom-right"}}},164:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"home",data:function(){return{}}}},165:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"default",function(){return h});var s=a(9),n=a.n(s),i=a(8),r=a.n(i),o=a(28),c=a.n(o),l=a(0),u=a.n(l),d=a(27),p=a(167),h={name:"relationship",props:["relationship_id"],data:function(){return{loading:!0,isLoggedIn:!1,toastMessage:null,mainTimingInterval:null,newRelationship:{},startDate:null,marriedDate:null,relationship:null,dynamicTimes:{secondsSinceStartDate:null,minutesSinceStartDate:null,daysSinceStartDate:null,weeksSinceStartDate:null,monthsSinceStartDate:null,yearsSinceStartDate:null,secondsSinceMarriedDate:null,minutesSinceMarriedDate:null,daysSinceMarriedDate:null}}},methods:{openSnackbar:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success",a={success:"s",error:"e"};return this.$root.$refs.toastr[a[e]||"s"](t)},dateChanged:function(){this.newRelationship=c()({},this.newRelationship,{startDate:this.startDate?u()(this.startDate).format("YYYY-MM-DD"):null,marriedDate:this.marriedDate?u()(this.marriedDate).format("YYYY-MM-DD"):null})},showSuccessAddedPicture:function(t){this.openSnackbar("Successfully added picture!")},relationshipStatus:function(t){return this.loading?"loading"==t:this.relationship_id&&this.relationship?"valid"==t:"none"==t},createRelationship:function(){var t=this;return r()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.create(t.relationship_id,t.newRelationship);case 3:return a=e.sent,e.next=6,t.getRelationship(a.id);case 6:t.openSnackbar("Successfully created relationship!"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),t.openSnackbar("There was a problem creating your relationship.","error"),console.log("error creating",e.t0);case 13:case"end":return e.stop()}},e,t,[[0,9]])}))()},getRelationship:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.relationship_id;return r()(n.a.mark(function a(){var s;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t.loading=!0,a.next=3,p.a.get(e);case 3:s=a.sent,t.relationship=s.relationship,t.relationship&&!t.mainTimingInterval&&(t.updateRelationshipTime(),t.mainTimingInterval=setInterval(function(){return t.updateRelationshipTime()},500)),t.loading=!1;case 7:case"end":return a.stop()}},a,t)}))()},updateRelationshipTime:function(){this.relationship.relationship_started&&(this.dynamicTimes.secondsSinceStartDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_started),"seconds"),this.dynamicTimes.minutesSinceStartDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_started),"minutes"),this.dynamicTimes.daysSinceStartDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_started),"days"),this.dynamicTimes.weeksSinceStartDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_started),"weeks"),this.dynamicTimes.monthsSinceStartDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_started),"months"),this.dynamicTimes.yearsSinceStartDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_started),"years")),this.relationship.relationship_married&&(this.dynamicTimes.secondsSinceMarriedDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_married),"seconds")),this.dynamicTimes.minutesSinceMarriedDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_married),"minutes"),this.dynamicTimes.daysSinceMarriedDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_married),"days"),this.dynamicTimes.weeksSinceMarriedDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_married),"weeks"),this.dynamicTimes.monthsSinceMarriedDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_married),"months"),this.dynamicTimes.yearsSinceMarriedDate=u.a.utc().diff(u.a.utc(this.relationship.relationship_married),"years")}},created:function(){var t=this;return r()(n.a.mark(function e(){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.isLoggedIn();case 2:return t.isLoggedIn=e.sent,e.next=5,t.getRelationship();case 5:case"end":return e.stop()}},e,t)}))()}}},166:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),a.d(e,"default",function(){return c});var s=a(9),n=a.n(s),i=a(8),r=a.n(i),o=a(27),c={name:"TopNav",data:function(){return{isLoggedIn:!1,displayName:null,integrations:{}}},methods:{getLoggedInAndIntegrations:function(){var t=this;return r()(n.a.mark(function e(){return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getIntegrations();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},e,t)}))()},hasIntegration:function(t){return!!this.integrations[t]}},created:function(){var t=this;return r()(n.a.mark(function e(){var a;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getLoggedInAndIntegrations();case 2:a=e.sent,t.isLoggedIn=a.logged_in,t.displayName=a.display_name,a.integrations instanceof Array&&a.integrations.forEach(function(e){return t.integrations[e]=!0});case 6:case"end":return e.stop()}},e,t)}))()}}},167:function(t,e,a){"use strict";var s=a(169),n=a.n(s),i=a(9),r=a.n(i),o=a(8),c=a.n(o);e.a={get:function(t){var e=this;return c()(r.a.mark(function a(){var s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ourloveFetch("/api/v1.0/relationships/get/"+t);case 2:return s=e.sent,e.abrupt("return",s.json());case 4:case"end":return e.stop()}},a,e)}))()},create:function(t,e){var a=this;return c()(r.a.mark(function s(){var i;return r.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,ourloveFetch("/api/v1.0/relationships/create/"+t,{method:"POST",headers:{"Content-Type":"application/json"},body:n()({relationship:e})});case 2:return i=a.sent,a.abrupt("return",i.json());case 4:case"end":return a.stop()}},s,a)}))()}}},168:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(26),n=a(153),i=a(158),r=a.n(i),o=a(159),c=a.n(o),l=a(152),u=a(160),d=a.n(u),p=a(162),h=a.n(p),f=a(161),m=a.n(f),v=a(156),g=(a.n(v),a(155)),j=(a.n(g),a(154)),_=(a.n(j),a(157));a.n(_);window.ourloveFetch=r()(fetch,{credentials:"same-origin"}),s.a.use(n.a),s.a.component("vue-toastr",d.a),s.a.component("datepicker",h.a),s.a.component("Dropzone",m.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:l.a,template:"<App/>",components:{App:c.a}})},207:function(t,e){},208:function(t,e,a){function s(t){return a(n(t))}function n(t){var e=i[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}var i={"./af":42,"./af.js":42,"./ar":48,"./ar-dz":43,"./ar-dz.js":43,"./ar-ly":44,"./ar-ly.js":44,"./ar-ma":45,"./ar-ma.js":45,"./ar-sa":46,"./ar-sa.js":46,"./ar-tn":47,"./ar-tn.js":47,"./ar.js":48,"./az":49,"./az.js":49,"./be":50,"./be.js":50,"./bg":51,"./bg.js":51,"./bn":52,"./bn.js":52,"./bo":53,"./bo.js":53,"./br":54,"./br.js":54,"./bs":55,"./bs.js":55,"./ca":56,"./ca.js":56,"./cs":57,"./cs.js":57,"./cv":58,"./cv.js":58,"./cy":59,"./cy.js":59,"./da":60,"./da.js":60,"./de":62,"./de-at":61,"./de-at.js":61,"./de.js":62,"./dv":63,"./dv.js":63,"./el":64,"./el.js":64,"./en-au":65,"./en-au.js":65,"./en-ca":66,"./en-ca.js":66,"./en-gb":67,"./en-gb.js":67,"./en-ie":68,"./en-ie.js":68,"./en-nz":69,"./en-nz.js":69,"./eo":70,"./eo.js":70,"./es":72,"./es-do":71,"./es-do.js":71,"./es.js":72,"./et":73,"./et.js":73,"./eu":74,"./eu.js":74,"./fa":75,"./fa.js":75,"./fi":76,"./fi.js":76,"./fo":77,"./fo.js":77,"./fr":80,"./fr-ca":78,"./fr-ca.js":78,"./fr-ch":79,"./fr-ch.js":79,"./fr.js":80,"./fy":81,"./fy.js":81,"./gd":82,"./gd.js":82,"./gl":83,"./gl.js":83,"./he":84,"./he.js":84,"./hi":85,"./hi.js":85,"./hr":86,"./hr.js":86,"./hu":87,"./hu.js":87,"./hy-am":88,"./hy-am.js":88,"./id":89,"./id.js":89,"./is":90,"./is.js":90,"./it":91,"./it.js":91,"./ja":92,"./ja.js":92,"./jv":93,"./jv.js":93,"./ka":94,"./ka.js":94,"./kk":95,"./kk.js":95,"./km":96,"./km.js":96,"./ko":97,"./ko.js":97,"./ky":98,"./ky.js":98,"./lb":99,"./lb.js":99,"./lo":100,"./lo.js":100,"./lt":101,"./lt.js":101,"./lv":102,"./lv.js":102,"./me":103,"./me.js":103,"./mi":104,"./mi.js":104,"./mk":105,"./mk.js":105,"./ml":106,"./ml.js":106,"./mr":107,"./mr.js":107,"./ms":109,"./ms-my":108,"./ms-my.js":108,"./ms.js":109,"./my":110,"./my.js":110,"./nb":111,"./nb.js":111,"./ne":112,"./ne.js":112,"./nl":114,"./nl-be":113,"./nl-be.js":113,"./nl.js":114,"./nn":115,"./nn.js":115,"./pa-in":116,"./pa-in.js":116,"./pl":117,"./pl.js":117,"./pt":119,"./pt-br":118,"./pt-br.js":118,"./pt.js":119,"./ro":120,"./ro.js":120,"./ru":121,"./ru.js":121,"./se":122,"./se.js":122,"./si":123,"./si.js":123,"./sk":124,"./sk.js":124,"./sl":125,"./sl.js":125,"./sq":126,"./sq.js":126,"./sr":128,"./sr-cyrl":127,"./sr-cyrl.js":127,"./sr.js":128,"./ss":129,"./ss.js":129,"./sv":130,"./sv.js":130,"./sw":131,"./sw.js":131,"./ta":132,"./ta.js":132,"./te":133,"./te.js":133,"./tet":134,"./tet.js":134,"./th":135,"./th.js":135,"./tl-ph":136,"./tl-ph.js":136,"./tlh":137,"./tlh.js":137,"./tr":138,"./tr.js":138,"./tzl":139,"./tzl.js":139,"./tzm":141,"./tzm-latn":140,"./tzm-latn.js":140,"./tzm.js":141,"./uk":142,"./uk.js":142,"./uz":143,"./uz.js":143,"./vi":144,"./vi.js":144,"./x-pseudo":145,"./x-pseudo.js":145,"./yo":146,"./yo.js":146,"./zh-cn":147,"./zh-cn.js":147,"./zh-hk":148,"./zh-hk.js":148,"./zh-tw":149,"./zh-tw.js":149};s.keys=function(){return Object.keys(i)},s.resolve=n,t.exports=s,s.id=208},219:function(t,e,a){var s=a(15)(a(164),a(222),null,null,null);t.exports=s.exports},220:function(t,e,a){var s=a(15)(a(165),a(225),null,null,null);t.exports=s.exports},221:function(t,e,a){function s(t){a(207)}var n=a(15)(a(166),a(224),s,null,null);t.exports=n.exports},222:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main col text-center"},[a("h1",{staticClass:"display-1"},[t._v("This is ourlove.io!")]),a("div",[t._v("Create your relationships now!")])])}]}},223:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("top-nav"),a("router-view"),a("vue-toastr",{ref:"toastr"})],1)},staticRenderFns:[]}},224:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top-nav-container"},[a("b-navbar",{attrs:{toggleable:"toggleable",type:"inverse"}},[a("b-nav-toggle",{attrs:{target:"navbarNavDropdown"}}),a("b-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[a("img",{staticClass:"img-fluid",staticStyle:{"max-height":"32px"},attrs:{src:"/public/images/favicon_white.png"}}),a("span",{staticClass:"margin-left-sm"},[t._v("ourlove.io")])]),a("b-collapse",{attrs:{id:"navbarNavDropdown","is-nav":"is-nav"}},[a("b-nav",{staticClass:"is-nav-bar ml-auto"},[t.displayName?a("div",{staticClass:"d-flex align-items-center text-small",staticStyle:{"padding-right":"4px","margin-right":"4px","border-right":"1px solid"}},[a("strong",[t._v("Welcome, "+t._s(t.displayName))])]):t._e(),t.hasIntegration("facebook")||t.hasIntegration("instagram")||t.hasIntegration("pinterest")?t._e():a("div",{staticClass:"d-flex align-items-center text-small"},[a("div",[t._v("login")])]),t.hasIntegration("facebook")?t._e():a("b-nav-item",{attrs:{to:"/oauth/facebook"}},[a("i",{staticClass:"fa fa-2x fa-facebook-square",attrs:{"aria-hidden":"true"}})]),t.hasIntegration("instagram")?t._e():a("b-nav-item",{attrs:{to:"/oauth/instagram"}},[a("i",{staticClass:"fa fa-2x fa-instagram",attrs:{"aria-hidden":"true"}})]),t.hasIntegration("pinterest")?t._e():a("b-nav-item",{attrs:{to:"/oauth/pinterest"}},[a("i",{staticClass:"fa fa-2x fa-pinterest-square",attrs:{"aria-hidden":"true"}})]),t.isLoggedIn?a("b-nav-item",{staticClass:"d-flex align-items-center text-small",attrs:{to:"/logout"}},[a("div",[t._v("logout")])]):t._e()],1)],1)],1)],1)},staticRenderFns:[]}},225:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container relationship-container"},[t.relationshipStatus("loading")?a("div",{staticClass:"text-center create-relationship-container"},[a("i",{staticClass:"fa fa-4x fa-spinner fa-spin"})]):t._e(),t.relationshipStatus("none")?a("div",{staticClass:"col create-relationship-container"},[t.isLoggedIn?t._e():a("div",{staticClass:"text-center"},[a("h1",{staticClass:"display-1"},[t._v(t._s(t.relationship_id))]),a("h3",{staticClass:"display-3"},[t._v("is available!")]),a("div",[t._v("Login today by clicking on one of the providers below to create your page now!")]),t._m(0)]),t.isLoggedIn?a("div",[a("h1",{staticClass:"text-center"},[t._v("Create Relationship")]),a("div",{staticClass:"col col-md-6 offset-md-3"},[a("label",[t._v("First Person's Name")]),a("b-form-input",{model:{value:t.newRelationship.p1name,callback:function(e){t.newRelationship.p1name=e},expression:"newRelationship.p1name"}}),a("label",[t._v("Second Person's Name")]),a("b-form-input",{model:{value:t.newRelationship.p2name,callback:function(e){t.newRelationship.p2name=e},expression:"newRelationship.p2name"}}),a("label",[t._v("Relationship Start Date")]),a("datepicker",{attrs:{format:"MMMM dd, yyyy","bootstrap-styling":!0},on:{closed:t.dateChanged},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),a("label",[t._v("Optional: Married Date")]),a("datepicker",{attrs:{format:"MMMM dd, yyyy","bootstrap-styling":!0},on:{closed:t.dateChanged},model:{value:t.marriedDate,callback:function(e){t.marriedDate=e},expression:"marriedDate"}}),a("div",{staticClass:"text-center padding-md"},[a("b-button",{staticClass:"btn-ourlove-dark",attrs:{size:"lg"},on:{click:function(e){t.createRelationship()}}},[t._v("Create Relationship Page")])],1)],1)]):t._e()]):t._e(),t.relationshipStatus("valid")?a("div",{staticClass:"col text-center valid-relationship-container"},[a("h1",[t._v(t._s(t.relationship.person1_name)+" & "+t._s(t.relationship.person2_name))]),t.relationship.relationship_started?a("div",[a("div",[t._v("You've been together for "+t._s(t.dynamicTimes.secondsSinceStartDate)+" seconds")]),a("div",[t._v("or "+t._s(t.dynamicTimes.minutesSinceStartDate)+" minutes")]),a("div",[t._v("or "+t._s(t.dynamicTimes.daysSinceStartDate)+" days")]),a("div",[t._v("or "+t._s(t.dynamicTimes.weeksSinceStartDate)+" weeks")]),a("div",[t._v("or "+t._s(t.dynamicTimes.monthsSinceStartDate)+" months")]),a("div",[t._v("or "+t._s(t.dynamicTimes.yearsSinceStartDate)+" years")])]):t._e(),a("div",{staticClass:"col col-md-6 offset-md-3"},[a("dropzone",{attrs:{id:"relationship-pictures",url:"/api/v1.0/relationships/file_upload/"+t.relationship_id},on:{"vdropzone-success":t.showSuccessAddedPicture}})],1)]):t._e()])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"margin-vertical-xlg"},[a("a",{attrs:{href:"/oauth/facebook"}},[a("i",{staticClass:"fa fa-5x fa-facebook-square",attrs:{"aria-hidden":"true"}})]),a("a",{attrs:{href:"/oauth/instagram"}},[a("i",{staticClass:"fa fa-5x fa-instagram margin-left-md",attrs:{"aria-hidden":"true"}})]),a("a",{attrs:{href:"/oauth/pinterest"}},[a("i",{staticClass:"fa fa-5x fa-pinterest-square margin-left-md",attrs:{"aria-hidden":"true"}})])])}]}},27:function(t,e,a){"use strict";var s=a(9),n=a.n(s),i=a(8),r=a.n(i);e.a={isLoggedIn:function(){var t=this;return r()(n.a.mark(function e(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ourloveFetch("/api/v1.0/auth/logged_in");case 2:return a=t.sent,t.abrupt("return",a.json());case 4:case"end":return t.stop()}},e,t)}))()},getIntegrations:function(){var t=this;return r()(n.a.mark(function e(){var a;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ourloveFetch("/api/v1.0/auth/integrations");case 2:return a=t.sent,t.abrupt("return",a.json());case 4:case"end":return t.stop()}},e,t)}))()}}}},[168]);
//# sourceMappingURL=app.07e6d7f16b4a7348c418.js.map