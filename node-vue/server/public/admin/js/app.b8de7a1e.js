(function(e){function t(t){for(var n,o,i=t[0],l=t[1],c=t[2],m=0,p=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/admin/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},1257:function(e,t,r){"use strict";var n=r("2a2f"),a=r.n(n);a.a},"2a2f":function(e,t,r){},"2d40":function(e,t,r){},"44af":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=(r("d3b7"),r("bc3a")),s=r.n(a),o=r("8c4f"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"广告位")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"广告"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.items.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v(" 添加广告 ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.items,(function(t,n){return r("el-col",{key:n,attrs:{md:24}},[r("el-form-item",{attrs:{label:"跳转链接"}},[r("el-input",{model:{value:t.url,callback:function(r){e.$set(t,"url",r)},expression:"item.url"}})],1),r("el-form-item",{staticStyle:{"margin-top":"0.5rem"},attrs:{label:"图片"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(r){return e.$set(t,"image",r.url)},"before-upload":e.beforeAvatarUpload}},[t.image?r("img",{staticClass:"avatar",attrs:{src:t.image}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.items.splice(e.i,1)}}},[e._v(" 删除 ")])],1)],1)})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},l=[],c=(r("96cf"),r("1da1")),u={name:"AdEdit",props:{id:{}},data:function(){return{model:{items:[]}}},methods:{save:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save",e.model),!e.id){t.next=7;break}return t.next=4,e.$http.put("/rest/ads/"+e.id,e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("/rest/ads",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/ads/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/ads/"+e.id);case 2:r=t.sent,console.log("fetch: ",r.data),e.model=Object.assign({},e.model,r.data);case 5:case"end":return t.stop()}}),t)})))()},beforeAvatarUpload:function(e){console.log("file: ",e);var t="image/jpeg"===e.type,r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r}},created:function(){this.id&&this.fetch()}},m=u,p=r("2877"),d=Object(p["a"])(m,i,l,!1,null,"ef8fd20a",null),f=d.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("广告位列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),r("el-table-column",{attrs:{prop:"title",label:"名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/ads/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},v=[],b={name:"AdList",data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/ads");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm("是否确定删除广告位 ".concat(e.title),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("/rest/ads/".concat(e._id));case 2:n=r.sent,console.log(n),n.data.success&&t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},g=b,x=Object(p["a"])(g,h,v,!1,null,"6cfd5a14",null),w=x.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"管理员")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},y=[],k={name:"AdminUserEdit",props:{id:{}},data:function(){return{model:{}}},methods:{save:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save",e.model),!e.id){t.next=7;break}return t.next=4,e.$http.put("/rest/admin_users/"+e.id,e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("/rest/admin_users",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/admin_users/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/admin_users/"+e.id);case 2:r=t.sent,console.log("fetch: ",r.data),e.model=r.data;case 5:case"end":return t.stop()}}),t)})))()}},created:function(){this.id&&this.fetch()}},$=k,R=Object(p["a"])($,_,y,!1,null,"63b4a55a",null),O=R.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("管理员列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),r("el-table-column",{attrs:{prop:"username",label:"管理员名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/admin_users/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},S=[],C={name:"AdminUserList",data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/admin_users");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm("是否确定删除用户 ".concat(e.username),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("/rest/admin_users/".concat(e._id));case 2:n=r.sent,console.log(n),n.data.success&&t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},E=C,A=Object(p["a"])(E,j,S,!1,null,"48c2d672",null),T=A.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"文章")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"所属分类"}},[r("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"标题"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"详情"}},[r("vue-editor",{model:{value:e.model.body,callback:function(t){e.$set(e.model,"body",t)},expression:"model.body"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},P=[],U=r("5873"),B={name:"ArticleEdit",components:{VueEditor:U["a"]},props:{id:{}},data:function(){return{model:{},categories:[]}},methods:{save:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save",e.model),!e.id){t.next=7;break}return t.next=4,e.$http.put("/rest/articles/"+e.id,e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("/rest/articles",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/articles/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/articles/"+e.id);case 2:r=t.sent,console.log("fetch: ",r.data),e.model=r.data;case 5:case"end":return t.stop()}}),t)})))()},fetchCatigories:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/categories/");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchCatigories(),this.id&&this.fetch()}},L=B,D=Object(p["a"])(L,z,P,!1,null,"78576426",null),I=D.exports,M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("文章列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),r("el-table-column",{attrs:{prop:"title",label:"文章名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/articles/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},J=[],H={name:"ArticleList",data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/articles");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm("是否确定删除分类 ".concat(e.title),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("/rest/articles/".concat(e._id));case 2:n=r.sent,console.log(n),n.data.success&&t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},G=H,V=Object(p["a"])(G,M,J,!1,null,"802b70e4",null),q=V.exports,N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"分类")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"上级分类"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.model.parent,callback:function(t){e.$set(e.model,"parent",t)},expression:"model.parent"}},e._l(e.parents,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},F=[],K={name:"CategoryEdit",props:{id:{}},data:function(){return{model:{},parents:[]}},methods:{save:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save"),!e.id){t.next=7;break}return t.next=4,e.$http.put("/rest/categories/"+e.id,e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("/rest/categories",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/categories/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/categories/"+e.id);case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchParents:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/categories/");case 2:r=t.sent,e.parents=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchParents(),this.id&&this.fetch()}},Q=K,W=Object(p["a"])(Q,N,F,!1,null,"8273c24c",null),X=W.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("分类列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),r("el-table-column",{attrs:{prop:"parent.name",label:"上级分类"}}),r("el-table-column",{attrs:{prop:"name",label:"分类名称"}}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/categories/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},Z=[],ee=(r("b0c0"),{name:"CategoryList",data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/categories");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm("是否确定删除分类 ".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("/rest/categories/".concat(e._id));case 2:n=r.sent,console.log(n),n.data.success&&t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}}),te=ee,re=Object(p["a"])(te,Y,Z,!1,null,"7b9e5f28",null),ne=re.exports,ae=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"英雄")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-tabs",{attrs:{type:"border-card",value:"first"}},[r("el-tab-pane",{attrs:{label:"基本信息",name:"first"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"称号"}},[r("el-input",{model:{value:e.model.title,callback:function(t){e.$set(e.model,"title",t)},expression:"model.title"}})],1),r("el-form-item",{attrs:{label:"分类"}},[r("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:e.model.categories,callback:function(t){e.$set(e.model,"categories",t)},expression:"model.categories"}},e._l(e.categories,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"难度"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9},model:{value:e.model.scores.difficult,callback:function(t){e.$set(e.model.scores,"difficult",t)},expression:"model.scores.difficult"}})],1),r("el-form-item",{attrs:{label:"技能"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9},model:{value:e.model.scores.skills,callback:function(t){e.$set(e.model.scores,"skills",t)},expression:"model.scores.skills"}})],1),r("el-form-item",{attrs:{label:"攻击"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9},model:{value:e.model.scores.attack,callback:function(t){e.$set(e.model.scores,"attack",t)},expression:"model.scores.attack"}})],1),r("el-form-item",{attrs:{label:"生存"}},[r("el-rate",{staticStyle:{"margin-top":"0.6rem"},attrs:{max:9},model:{value:e.model.scores.survive,callback:function(t){e.$set(e.model.scores,"survive",t)},expression:"model.scores.survive"}})],1),r("el-form-item",{attrs:{label:"顺风出装"}},[r("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:e.model.items1,callback:function(t){e.$set(e.model,"items1",t)},expression:"model.items1"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"逆风出装"}},[r("el-select",{attrs:{placeholder:"请选择",multiple:""},model:{value:e.model.items2,callback:function(t){e.$set(e.model,"items2",t)},expression:"model.items2"}},e._l(e.items,(function(e){return r("el-option",{key:e._id,attrs:{label:e.name,value:e._id}})})),1)],1),r("el-form-item",{attrs:{label:"使用技巧"}},[r("el-input",{model:{value:e.model.usageTips,callback:function(t){e.$set(e.model,"usageTips",t)},expression:"model.usageTips"}})],1),r("el-form-item",{attrs:{label:"对抗技巧"}},[r("el-input",{model:{value:e.model.battleTips,callback:function(t){e.$set(e.model,"battleTips",t)},expression:"model.battleTips"}})],1),r("el-form-item",{attrs:{label:"团战思路"}},[r("el-input",{model:{value:e.model.teamTips,callback:function(t){e.$set(e.model,"teamTips",t)},expression:"model.teamTips"}})],1),r("el-form-item",{attrs:{label:"头像"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.model.avatar?r("img",{staticClass:"avatar",attrs:{src:e.model.avatar}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1)],1),r("el-tab-pane",{attrs:{label:"技能",name:"second"}},[r("el-button",{attrs:{type:"text"},on:{click:function(t){return e.model.skills.push({})}}},[r("i",{staticClass:"el-icon-plus"}),e._v(" 添加技能 ")]),r("el-row",{staticStyle:{"flex-wrap":"wrap"},attrs:{type:"flex"}},e._l(e.model.skills,(function(t,n){return r("el-col",{key:n,attrs:{md:12}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:t.name,callback:function(r){e.$set(t,"name",r)},expression:"item.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.$http.defaults.baseURL+"/upload","show-file-list":!1,"on-success":function(r){return e.$set(t,"icon",r.url)},"before-upload":e.beforeAvatarUpload}},[t.icon?r("img",{staticClass:"avatar",attrs:{src:t.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"描述"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.desc,callback:function(r){e.$set(t,"desc",r)},expression:"item.desc"}})],1),r("el-form-item",{attrs:{label:"注意"}},[r("el-input",{attrs:{type:"textarea"},model:{value:t.tips,callback:function(r){e.$set(t,"tips",r)},expression:"item.tips"}})],1),r("el-form-item",{attrs:{label:"注意"}},[r("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(t){return e.model.skills.splice(e.i,1)}}},[e._v(" 删除 ")])],1)],1)})),1)],1)],1),r("el-form-item",[r("el-button",{staticStyle:{"margin-top":"30px"},attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},se=[],oe={name:"HeroEdit",props:{id:{}},data:function(){return{model:{name:"",avatar:"",scores:{difficult:0,skills:0,attack:0,survive:0},skills:[]},categories:[],items:[]}},methods:{save:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save",e.mode),!e.id){t.next=7;break}return t.next=4,e.$http.put("/rest/heros/"+e.id,e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("/rest/heros",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/heros/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/heros/"+e.id);case 2:r=t.sent,console.log("fetch",r),e.mode=Object.assign(e.model,r.data);case 5:case"end":return t.stop()}}),t)})))()},handleAvatarSuccess:function(e,t){console.log("res: ",e),console.log("file: ",t),this.model.avatar=e.url},beforeAvatarUpload:function(e){console.log("file: ",e);var t="image/jpeg"===e.type,r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r},fetchCategories:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/categories");case 2:r=t.sent,e.categories=r.data;case 4:case"end":return t.stop()}}),t)})))()},fetchItems:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){this.fetchCategories(),this.fetchItems(),this.id&&this.fetch()}},ie=oe,le=(r("6f1e"),Object(p["a"])(ie,ae,se,!1,null,"e64bd9d6",null)),ce=le.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("英雄列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{prop:"title",label:"称号"}}),r("el-table-column",{attrs:{prop:"avatar",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.avatar}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/heros/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},me=[],pe={name:"HeroList",data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/heros");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm("是否确定删除英雄 ".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("/rest/heros/".concat(e._id));case 2:n=r.sent,console.log(n),n.data.success&&t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},de=pe,fe=Object(p["a"])(de,ue,me,!1,null,"2b7108fc",null),he=fe.exports,ve=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.id?"编辑":"新建")+"物品")]),r("el-form",{attrs:{"label-width":"120px"},nativeOn:{submit:function(t){return t.preventDefault(),e.save(t)}}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1),r("el-form-item",{attrs:{label:"图标"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.getAuthHeaders(),"show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.model.icon?r("img",{staticClass:"avatar",attrs:{src:e.model.icon}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},be=[],ge={name:"ItemEdit",props:{id:{}},data:function(){return{model:{}}},methods:{save:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("save"),!e.id){t.next=7;break}return t.next=4,e.$http.put("/rest/items/"+e.id,e.model);case 4:r=t.sent,t.next=10;break;case 7:return t.next=9,e.$http.post("/rest/items",e.model);case 9:r=t.sent;case 10:console.log(r),e.$router.push("/items/list"),e.$message({type:"success",message:"保存成功"});case 13:case"end":return t.stop()}}),t)})))()},fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/items/"+e.id);case 2:r=t.sent,e.model=r.data;case 4:case"end":return t.stop()}}),t)})))()},handleAvatarSuccess:function(e,t){console.log("res: ",e),console.log("file: ",t),this.$set(this.model,"icon",e.url)},beforeAvatarUpload:function(e){console.log("file: ",e);var t="image/jpeg"===e.type,r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r}},created:function(){this.id&&this.fetch()}},xe=ge,we=(r("6d63"),Object(p["a"])(xe,ve,be,!1,null,"00f0a428",null)),_e=we.exports,ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v("物品列表")]),r("el-table",{attrs:{data:e.items}},[r("el-table-column",{attrs:{prop:"_id",label:"ID",width:"220"}}),r("el-table-column",{attrs:{prop:"name",label:"名称"}}),r("el-table-column",{attrs:{prop:"icon",label:"图标"},scopedSlots:e._u([{key:"default",fn:function(e){return[r("img",{staticStyle:{height:"3rem"},attrs:{src:e.row.icon}})]}}])}),r("el-table-column",{attrs:{fixed:"right",label:"操作",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.$router.push("/items/edit/"+t.row._id)}}},[e._v("编辑")]),r("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(r){return e.remove(t.row)}}},[e._v("删除")])]}}])})],1)],1)},ke=[],$e={name:"ItemList",data:function(){return{items:[]}},methods:{fetch:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/rest/items");case 2:r=t.sent,e.items=r.data;case 4:case"end":return t.stop()}}),t)})))()},remove:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.$confirm("是否确定删除物品 ".concat(e.name),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,t.$http.delete("/rest/items/".concat(e._id));case 2:n=r.sent,console.log(n),n.data.success&&t.$message({type:"success",message:"删除成功!"}),t.fetch();case 6:case"end":return r.stop()}}),r)}))));case 1:case"end":return r.stop()}}),r)})))()}},created:function(){this.fetch()}},Re=$e,Oe=Object(p["a"])(Re,ye,ke,!1,null,"bb8a39f8",null),je=Oe.exports,Se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-container"},[r("el-card",{staticClass:"login-card",attrs:{header:"请先登录"}},[r("el-form",{nativeOn:{submit:function(t){return t.preventDefault(),e.login(t)}}},[r("el-form-item",{attrs:{label:"用户名"}},[r("el-input",{model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{label:"密码"}},[r("el-input",{attrs:{type:"password"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("确定")])],1)],1)],1)],1)},Ce=[],Ee={name:"Login",data:function(){return{model:{}}},methods:{login:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("login",e.model);case 2:r=t.sent,localStorage.token=r.data.token,e.$message({type:"success",message:"登录成功"}),e.$router.push("/");case 6:case"end":return t.stop()}}),t)})))()}}},Ae=Ee,Te=(r("7a66"),Object(p["a"])(Ae,Se,Ce,!1,null,"462afd51",null)),ze=Te.exports,Pe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticStyle:{height:"100vh"}},[r("el-aside",{staticStyle:{"background-color":"rgb(238, 241, 246)"},attrs:{width:"200px"}},[r("el-menu",{attrs:{router:"","default-openeds":["3"],"unique-opened":"","default-active":e.$route.path}},[r("el-submenu",{attrs:{index:"1"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("内容管理")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("分类")]),r("el-menu-item",{attrs:{index:"/categories/create"}},[e._v("新建分类")]),r("el-menu-item",{attrs:{index:"/categories/list"}},[e._v("分类列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("物品")]),r("el-menu-item",{attrs:{index:"/items/create"}},[e._v("新建物品")]),r("el-menu-item",{attrs:{index:"/items/list"}},[e._v("物品列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("英雄")]),r("el-menu-item",{attrs:{index:"/heros/create"}},[e._v("新建英雄")]),r("el-menu-item",{attrs:{index:"/heros/list"}},[e._v("英雄列表")])],2),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("文章")]),r("el-menu-item",{attrs:{index:"/articles/create"}},[e._v("新建文章")]),r("el-menu-item",{attrs:{index:"/articles/list"}},[e._v("文章列表")])],2)],2),r("el-submenu",{attrs:{index:"2"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("运营管理")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("广告位")]),r("el-menu-item",{attrs:{index:"/ads/create"}},[e._v("新建广告位")]),r("el-menu-item",{attrs:{index:"/ads/list"}},[e._v("广告位列表")])],2)],2),r("el-submenu",{attrs:{index:"3"}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-message"}),e._v("系统设置")]),r("el-menu-item-group",[r("template",{slot:"title"},[e._v("管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/create"}},[e._v("新建管理员")]),r("el-menu-item",{attrs:{index:"/admin_users/list"}},[e._v("管理员列表")])],2)],2)],1)],1),r("el-container",[r("el-header",{staticStyle:{"text-align":"right","font-size":"12px"}},[r("el-dropdown",[r("i",{staticClass:"el-icon-setting",staticStyle:{"margin-right":"15px"}}),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",[e._v("查看")]),r("el-dropdown-item",[e._v("新增")]),r("el-dropdown-item",[e._v("删除")])],1)],1),r("span",[e._v("王小虎")])],1),r("el-main",[r("router-view")],1)],1)],1)},Ue=[],Be=(r("cb29"),{data:function(){var e={date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄"};return{tableData:Array(20).fill(e)}}}),Le=Be,De=(r("1257"),Object(p["a"])(Le,Pe,Ue,!1,null,"6b569dfb",null)),Ie=De.exports;n["default"].use(o["a"]);var Me=[{path:"/login",name:"Login",component:ze,meta:{isPublic:!0}},{path:"/",name:"Main",component:Ie,children:[{path:"/categories/create",name:"CategoryCreate",component:X},{path:"/categories/edit/:id",name:"CategoryEdit",component:X,props:!0},{path:"/categories/list",name:"CategoryList",component:ne},{path:"/items/create",name:"ItemCreate",component:_e},{path:"/items/edit/:id",name:"ItemEdit",component:_e,props:!0},{path:"/items/list",name:"ItemList",component:je},{path:"/heros/create",component:ce},{path:"/heros/edit/:id",component:ce,props:!0},{path:"/heros/list",component:he},{path:"/articles/create",component:I},{path:"/articles/edit/:id",component:I,props:!0},{path:"/articles/list",component:q},{path:"/ads/create",component:f},{path:"/ads/edit/:id",component:f,props:!0},{path:"/ads/list",component:w},{path:"/admin_users/create",component:O},{path:"/admin_users/edit/:id",component:O,props:!0},{path:"/admin_users/list",component:T}]}],Je=new o["a"]({routes:Me});Je.beforeEach((function(e,t,r){if(!e.meta.isPublic&&!localStorage.token)return r("/login");r()}));var He=Je,Ge=s.a.create({baseURL:Object({NODE_ENV:"production",BASE_URL:"/admin/"}).VUE_APP_API_URL||"/admin/api"});Ge.interceptors.request.use((function(e){return localStorage.token&&(e.headers.Authorization="Bearer "+localStorage.token),e}),(function(e){return Promise.reject(e)})),Ge.interceptors.response.use((function(e){return e}),(function(e){return console.log("error",e.response),e.response.data.message&&n["default"].prototype.$message({type:"error",message:e.response.data.message}),401===e.response.status&&He.push("/login"),Promise.reject(e)}));var Ve=Ge,qe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},Ne=[],Fe=(r("f8d6"),{}),Ke=Object(p["a"])(Fe,qe,Ne,!1,null,"4e4d9dfe",null),Qe=Ke.exports,We=r("5c96"),Xe=r.n(We);r("0fae");n["default"].use(Xe.a),n["default"].config.productionTip=!1,n["default"].prototype.$http=Ve,n["default"].mixin({computed:{uploadUrl:function(){return $http.defaults.baseURL+"/upload"}},methods:{getAuthHeaders:function(){return{Authorization:"Bearer ".concat(localStorage.token||"")}}}}),new n["default"]({router:He,render:function(e){return e(Qe)}}).$mount("#app")},6846:function(e,t,r){},"6d63":function(e,t,r){"use strict";var n=r("6846"),a=r.n(n);a.a},"6f1e":function(e,t,r){"use strict";var n=r("cafd"),a=r.n(n);a.a},"7a66":function(e,t,r){"use strict";var n=r("2d40"),a=r.n(n);a.a},cafd:function(e,t,r){},f8d6:function(e,t,r){"use strict";var n=r("44af"),a=r.n(n);a.a}});
//# sourceMappingURL=app.b8de7a1e.js.map