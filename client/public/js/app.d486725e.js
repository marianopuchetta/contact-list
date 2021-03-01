(function(t){function e(e){for(var s,o,i=e[0],c=e[1],u=e[2],m=0,f=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&f.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"009b":function(t,e,a){},"034f":function(t,e,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"0367":function(t,e,a){},"039a":function(t,e,a){"use strict";var s=a("7174"),n=a.n(s);n.a},"0a0c":function(t,e,a){},"12cf":function(t,e,a){"use strict";var s=a("30cd"),n=a.n(s);n.a},"1c3e":function(t,e,a){"use strict";var s=a("9113"),n=a.n(s);n.a},"30cd":function(t,e,a){},3607:function(t,e,a){"use strict";var s=a("009b"),n=a.n(s);n.a},"49ad":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("NavBar"),a("router-view")],1)},r=[],o=a("5530"),i=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"sm",type:"light",variant:"light"}},[a("b-navbar-brand",[a("router-link",{attrs:{to:"/"}},[t._v("Contacts")])],1),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",{staticClass:"links ml-auto-4"},[a("b-nav-item",[a("router-link",{attrs:{to:"/addContact"}},[t._v("Add Contact")])],1),a("b-nav-item",[a("router-link",{attrs:{to:"/searchContact"}},[t._v("Search")])],1),t.isActive&&"ADMIN_ROLE"===t.role?a("b-nav-item",[a("router-link",{attrs:{to:"/users"}},[t._v("Users")])],1):t._e()],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"},model:{value:t.input_search_contact,callback:function(e){t.input_search_contact=e},expression:"input_search_contact"}}),a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm"},on:{click:function(e){return t.search()}}},[t._v("Search")])],1),a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[t.isActive?a("em",[t._v(t._s(t.username))]):a("em",[t._v("guess")])]},proxy:!0}])},[t.isActive?a("div",[a("b-dropdown-item",[a("b-button",{attrs:{variant:"outline-danger"},on:{click:function(e){return t.logOut()}}},[t._v("LogOut")])],1)],1):a("div",[a("b-dropdown-item",[a("b-button",{attrs:{variant:"outline-success"}},[a("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1)],1),a("b-dropdown-item",[a("b-button",{attrs:{variant:"outline-primary"}},[a("router-link",{attrs:{to:"/register"}},[t._v("SignUp")])],1)],1)],1)])],1)],1)],1)],1)},u=[],l=a("bc3a"),m=a.n(l),f=a("2106"),d=a.n(f);s["default"].use(d.a,m.a);var p=m.a.create({baseURL:"https://node-mongo-vue-crud.herokuapp.com/",headers:{"Content-type":"application/json"}}),b={name:"navbar",data:function(){return{input_search_contact:""}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["logOut","getToken"])),{},{search:function(){var t=this;this.fill_search_result([]);var e={headers:{token:this.token}},a={input_search_contact:this.input_search_contact};console.log(this.input_search_contact),p.post("/search/",a,e).then((function(e){t.fill_search_result(e.data.contacts),t.input_search_contact=""})).catch((function(e){console.log(e.response.data.err.message),t.input_search_contact=e.response.data.err.message,setTimeout((function(){return t.input_search_contact=""}),5e3)})),this.$router.push("/searchContact")},fill_search_result:function(t){this.$store.commit("fill_search_result",t)}}),computed:Object(o["a"])(Object(o["a"])({},Object(i["e"])(["token"])),Object(i["c"])(["isActive","username","role"])),created:function(){this.getToken()}},_=b,v=a("2877"),h=Object(v["a"])(_,c,u,!1,null,null,null),g=h.exports,w={name:"App",components:{NavBar:g},data:function(){return{}},methods:Object(o["a"])({},Object(i["b"])(["logOut","getToken"])),computed:Object(o["a"])({},Object(i["c"])(["isActive"])),created:function(){this.getToken()}},k=w,C=(a("034f"),a("8c3f"),Object(v["a"])(k,n,r,!1,null,"69cf3dcf",null)),O=C.exports,y=(a("45fc"),a("8c4f")),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("h1",[t._v("Contact List")]),t.loading?a("img",{attrs:{src:"https://i.imgur.com/JfPpwOA.gif",alt:""}}):a("div",[a("div",{staticClass:"overflow-auto"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"contacts_table",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),a("b-table",{staticClass:"table",attrs:{id:"contacts_table",hover:"",items:t.contacts,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[a("b",{staticClass:"text-info"},[t._v(t._s(e.item.last_name.toUpperCase()))]),t._v(", "),a("b",[t._v(t._s(e.item.first_name))])]}},{key:"cell(see)",fn:function(t){return[a("router-link",{attrs:{to:{name:"contact-details",params:{_id:t.item._id,contact:t.item}}}},[a("i",{staticClass:"fa fa-share-square"})])]}}])})],1)]),a("div",[a("router-view",{on:{refreshData:t.refreshList}})],1)])},x=[],$=(a("99af"),{name:"contacts-list",data:function(){return{loading:!0,perPage:5,currentPage:1,contacts:[],fields:[{key:"name",label:"Full Name"},"email","contact_number","see"]}},computed:Object(o["a"])(Object(o["a"])({},Object(i["e"])(["token"])),{},{rows:function(){return this.contacts.length}}),methods:{retrieveContacts:function(){var t=this;p.get("/contacts").then((function(e){t.contacts=e.data})).catch((function(t){console.log(t)}))},refreshList:function(){this.retrieveContacts()},fullName:function(t){return"".concat(t," ").concat(t)}},created:function(){var t=this;setTimeout((function(){return t.loading=!1}),2e3),this.retrieveContacts()}}),E=$,P=(a("90e8"),Object(v["a"])(E,j,x,!1,null,null,null)),S=P.exports,U=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"overflow-auto"},[this.contact?a("div",[a("h4",{staticClass:"title_contact"},[t._v("Contact")]),a("b-table",{attrs:{stacked:"",items:t.items,responsive:"",fields:t.fields},scopedSlots:t._u([t.editable?{key:"cell(first_name)",fn:function(e){var s=e.item;return[a("b-form-input",{model:{value:s.first_name,callback:function(e){t.$set(s,"first_name",e)},expression:"item.first_name"}})]}}:null,t.editable?{key:"cell(last_name)",fn:function(e){var s=e.item;return[a("b-form-input",{model:{value:s.last_name,callback:function(e){t.$set(s,"last_name",e)},expression:"item.last_name"}})]}}:null,t.editable?{key:"cell(email)",fn:function(e){var s=e.item;return[a("b-form-input",{model:{value:s.email,callback:function(e){t.$set(s,"email",e)},expression:"item.email"}})]}}:null,t.editable?{key:"cell(contact_number)",fn:function(e){var s=e.item;return[a("b-form-input",{model:{value:s.contact_number,callback:function(e){t.$set(s,"contact_number",e)},expression:"item.contact_number"}})]}}:null],null,!0)}),t.editable?a("div",[a("b-button",{staticClass:"btn",attrs:{variant:"outline-danger"},on:{click:function(e){return t.disableEditing()}}},[a("i",{staticClass:"fa fa-window-close"})]),a("b-button",{staticClass:"btn",attrs:{variant:"outline-success"},on:{click:function(e){return t.updateContact()}}},[a("i",{staticClass:"fa fa-save"})])],1):a("div",[a("b-button",{staticClass:"btn",attrs:{variant:"outline-danger"},on:{click:function(e){return t.confirmation()}}},[a("i",{staticClass:"fa fa-trash"})]),a("b-button",{staticClass:"btn",attrs:{variant:"outline-warning"},on:{click:function(e){return t.enableEditing()}}},[a("i",{staticClass:"fa fa-edit"})])],1)],1):a("div",[a("br"),a("p",[t._v("Please click on a contact...")])])])])},T=[],q={name:"contact",props:["contact"],data:function(){return{items:[this.contact],fields:["first_name","last_name","email","contact_number"],editable:!1}},methods:{updateContact:function(){var t={id:this.contact._id,first_name:this.contact.first_name,last_name:this.contact.last_name,email:this.contact.email,contact_number:this.contact.contact_number};p.put("/contact/"+this.contact._id,t).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)})),this.editable=!1},deleteContact:function(){var t=this;p.delete("/contact/"+this.contact._id).then((function(e){console.log(e.data),t.$emit("refreshData"),t.$router.push("/").catch((function(t){console.log(t)}))})).catch((function(t){console.log(t)}))},disableEditing:function(){this.editable=!1},enableEditing:function(){this.editable=!0},confirmation:function(){var t=confirm("Delete?");return 1==t&&(this.deleteContact(),!0)}}},A=q,D=(a("610c"),a("b817"),Object(v["a"])(A,U,T,!1,null,"28bdcf66",null)),R=D.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"submitform"},[t.submitted?a("div",[a("h4",[t._v("The contact was added successfully!")]),a("button",{staticClass:"btn btn-success",on:{click:t.newContact}},[t._v(" Add new contact ")])]):a("div",[a("b-form",{staticClass:"form_contact",on:{submit:t.saveContact}},[a("b-form-group",{attrs:{id:"input_first_name",label:"first name:","label-for":"input_first_name"}},[a("b-form-input",{attrs:{id:"input_first_name",required:"",placeholder:"Enter first name"},model:{value:t.contact.first_name,callback:function(e){t.$set(t.contact,"first_name",e)},expression:"contact.first_name"}})],1),a("b-form-group",{attrs:{id:"input_last_name",label:"last name:","label-for":"input_last_name"}},[a("b-form-input",{attrs:{id:"input_last_name",required:"",placeholder:"Enter last name"},model:{value:t.contact.last_name,callback:function(e){t.$set(t.contact,"last_name",e)},expression:"contact.last_name"}})],1),a("b-form-group",{attrs:{id:"input_email",label:"email:","label-for":"input_email"}},[a("b-form-input",{attrs:{id:"input_email",type:"email",required:"",placeholder:"Enter email"},model:{value:t.contact.email,callback:function(e){t.$set(t.contact,"email",e)},expression:"contact.email"}})],1),a("b-form-group",{attrs:{id:"input_contact_number",label:"contact number:","label-for":"input_contact_number"}},[a("b-form-input",{attrs:{id:"input_contact_number",required:"",placeholder:"Enter contact number"},model:{value:t.contact.contact_number,callback:function(e){t.$set(t.contact,"contact_number",e)},expression:"contact.contact_number"}})],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),a("b-button",{attrs:{type:"reset",variant:"danger"},on:{click:function(e){return t.onReset()}}},[t._v("Reset")])],1)],1)])])},F=[],I={name:"addcontact",data:function(){return{contact:{first_name:"",last_name:"",email:"",contact_number:""},submitted:!1}},methods:{saveContact:function(){var t=this,e={first_name:this.contact.first_name,last_name:this.contact.last_name,email:this.contact.email,contact_number:this.contact.contact_number};p.post("/contact/add",e).then((function(e){t.contact.id=e.data.id})).catch((function(t){console.log(t)})),this.submitted=!0},newContact:function(){this.submitted=!1,this.contact={}},onReset:function(t){t.preventDefault(),this.email="",this.first_name="",this.last_name="",this.contact_number=""}}},N=I,B=(a("df22"),Object(v["a"])(N,L,F,!1,null,null,null)),M=B.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"overflow-auto"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"contacts_table",size:"sm"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),a("b-table",{staticClass:"table",attrs:{id:"contacts_table",hover:"",items:this.search_result,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage},scopedSlots:t._u([{key:"cell(name)",fn:function(e){return[a("b",{staticClass:"text-info"},[t._v(t._s(e.item.last_name.toUpperCase()))]),t._v(", "),a("b",[t._v(t._s(e.item.first_name))])]}},{key:"cell(see)",fn:function(t){return[a("router-link",{attrs:{to:{name:"contact-details",params:{_id:t.item._id,contact:t.item}}}},[a("i",{staticClass:"fa fa-share-square"})])]}}])})],1)])},J=[],G={name:"searchContact",data:function(){return{message:"",perPage:5,currentPage:1,fields:[{key:"name",label:"Full Name"},"email","contact_number","see"]}},methods:{fullName:function(t){return"".concat(t," ").concat(t)}},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["e"])(["token"])),Object(i["c"])(["role","search_result"])),{},{rows:function(){return this.search_result.length}}),created:function(){this.getToken()}},H=G,K=Object(v["a"])(H,z,J,!1,null,null,null),Q=K.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},["ADMIN_ROLE"===t.role?a("div",[a("b-button",[a("router-link",{staticClass:"btn btn-primary",attrs:{to:"/adduser"}},[t._v("Add User")])],1)],1):t._e(),a("h1",[t._v("Users List")]),""!==t.message?a("div",[a("p",{staticClass:"error"},[t._v(t._s(t.message))])]):t._e(),a("div",{staticClass:"overflow-auto"},[a("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"users_table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),a("b-table",{attrs:{id:"users_table",hover:"",items:t.users,fields:t.fields,"per-page":t.perPage,"current-page":t.currentPage},scopedSlots:t._u([{key:"cell(see)",fn:function(t){return[a("router-link",{attrs:{to:{name:"user-details",params:{_id:t.item._id,user:t.item}}}},[a("i",{staticClass:"fa fa-share-square"})])]}}])})],1),a("div",[a("router-view",{on:{refreshData:t.refreshList}})],1)])},W=[],X={name:"users-list",data:function(){return{message:"",perPage:5,currentPage:1,users:[],fields:["username","role","status","see"]}},methods:{retrieveUsers:function(){var t=this,e={headers:{token:this.token,role:this.role}};p.get("/users",e).then((function(e){t.users=e.data})).catch((function(e){console.log(e.response.data.err.message),t.message=e.response.data.err.message,setTimeout((function(){return t.message=""}),3e3)}))},refreshList:function(){this.retrieveUsers()}},mounted:function(){this.retrieveUsers()},computed:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["e"])(["token"])),Object(i["c"])(["role"])),{},{rows:function(){return this.users.length}})},Y=X,Z=(a("ce4f"),Object(v["a"])(Y,V,W,!1,null,"00034466",null)),tt=Z.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"overflow-auto"},[a("h1",{staticClass:"title_user"},[t._v("User")]),this.user?a("div",[""!==t.message?a("div",[a("h4",{staticClass:"error"},[t._v(t._s(t.message))])]):t._e(),a("b-table",{staticClass:"b-table",attrs:{stacked:"",items:t.items,responsive:"",fields:t.fields},scopedSlots:t._u([t.editable?{key:"cell(username)",fn:function(e){var s=e.item;return[a("b-form-input",{model:{value:s.username,callback:function(e){t.$set(s,"username",e)},expression:"item.username"}})]}}:null,t.editable?{key:"cell(email)",fn:function(e){var s=e.item;return[a("b-form-input",{model:{value:s.email,callback:function(e){t.$set(s,"email",e)},expression:"item.email"}})]}}:null,t.editable?{key:"cell(password)",fn:function(e){var s=e.item;return[a("b-form-input",{model:{value:s.password,callback:function(e){t.$set(s,"password",e)},expression:"item.password"}})]}}:null,t.editable?{key:"cell(role)",fn:function(e){var s=e.item;return[a("b-form-input",{model:{value:s.role,callback:function(e){t.$set(s,"role",e)},expression:"item.role"}})]}}:null,t.editable?{key:"cell(status)",fn:function(e){var s=e.item;return[a("b-form-input",{model:{value:s.status,callback:function(e){t.$set(s,"status",e)},expression:"item.status"}})]}}:null],null,!0)}),t.editable?a("div",[a("b-button",{staticClass:"btn",attrs:{variant:"outline-danger"},on:{click:function(e){return t.disableEditing()}}},[a("i",{staticClass:"fa fa-window-close"})]),a("b-button",{staticClass:"btn",attrs:{variant:"outline-success"},on:{click:function(e){return t.updateUser()}}},[a("i",{staticClass:"fa fa-save"})])],1):a("div",[a("b-button",{staticClass:"btn",attrs:{variant:"outline-danger"},on:{click:function(e){return t.confirmation()}}},[a("i",{staticClass:"fa fa-trash"})]),a("b-button",{staticClass:"btn",attrs:{variant:"outline-warning"},on:{click:function(e){return t.enableEditing()}}},[a("i",{staticClass:"fa fa-edit"})])],1)],1):a("div",[a("br"),a("p",[t._v("Please click on a User...")])])])])},at=[],st={name:"user",props:["user"],data:function(){return{items:[this.user],fields:["username","email","role","status"],editable:!1,message:""}},methods:{updateUser:function(){var t={id:this.user._id,username:this.user.username,email:this.user.email,password:this.user.password,role:this.user.role,status:this.user.status};p.put("/user/"+this.user._id,t).then((function(t){console.log(t.data)})).catch((function(t){console.log(t)})),this.editable=!1},deleteUser:function(){var t=this,e={headers:{token:this.token,role:this.role}};p.delete("/user/"+this.user._id,e).then((function(e){console.log(e),t.$emit("refreshData"),t.$router.push("/users").catch((function(t){console.log(t)}))})).catch((function(e){console.log(e.response.data.err.message),t.message=e.response.data.err.message,setTimeout((function(){return t.message=""}),3e3)}))},disableEditing:function(){this.editable=!1},enableEditing:function(){this.editable=!0},confirmation:function(){var t=confirm("Delete?");return 1==t&&(this.deleteUser(),!0)}},computed:Object(o["a"])(Object(o["a"])({},Object(i["e"])(["token"])),Object(i["c"])(["role"]))},nt=st,rt=(a("3607"),a("5fe9"),Object(v["a"])(nt,et,at,!1,null,"12a7cba7",null)),ot=rt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"submitform"},[t.submitted?a("div",[a("h4",[t._v("The user was added successfully!")]),a("button",{staticClass:"btn btn-success",on:{click:t.newUser}},[t._v(" Add new user ")])]):a("div",[""!==t.message?a("div",{staticClass:"error"},[t._v(" "+t._s(t.message)+" ")]):t._e(),a("b-form",{staticClass:"form_user",on:{submit:t.submitForm}},[a("b-form-group",{attrs:{id:"input_username",label:"username:","label-for":"input_username"}},[a("b-form-input",{attrs:{id:"input_username",required:"",placeholder:"Enter username"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),a("b-form-group",{attrs:{id:"input_email",label:"email:","label-for":"input_email"}},[a("b-form-input",{attrs:{id:"input_email",required:"",placeholder:"Enter email"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1),a("b-form-group",{attrs:{id:"input_password",label:"password:","label-for":"input_password"}},[a("b-form-input",{attrs:{id:"input_password",type:"password",required:"",placeholder:"Enter password"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),a("b-form-group",{attrs:{id:"input_role",label:"role:","label-for":"user_role_radio"}},[a("b-form-radio",{staticClass:"mb-3",attrs:{name:"user.role_radio",value:"USER_ROLE",inline:""},model:{value:t.user.role,callback:function(e){t.$set(t.user,"role",e)},expression:"user.role"}},[t._v("user")]),a("b-form-radio",{staticClass:"mb-3",attrs:{name:"user.role_radio",value:"ADMIN_ROLE",inline:""},model:{value:t.user.role,callback:function(e){t.$set(t.user,"role",e)},expression:"user.role"}},[t._v("admin")])],1),a("b-form-group",{attrs:{id:"input_status",label:"status:","label-for":"input_status"}},[a("b-form-radio",{attrs:{name:"user.status_radio",value:"true",inline:""},model:{value:t.user.status,callback:function(e){t.$set(t.user,"status",e)},expression:"user.status"}},[t._v("verified")]),a("b-form-radio",{attrs:{name:"user.status_radio",value:"false",inline:""},model:{value:t.user.status,callback:function(e){t.$set(t.user,"status",e)},expression:"user.status"}},[t._v("unverified")])],1),a("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("Submit")]),a("b-button",{attrs:{type:"reset",variant:"danger"},on:{click:function(e){return t.onReset()}}},[t._v("Reset")])],1)],1)])])},ct=[],ut={name:"adduser",data:function(){return{user:{username:"",email:"",password:"",role:"USER_ROLE",status:"false"},submitted:!1,message:""}},methods:{submitForm:function(t){var e=this;t.preventDefault();var a={headers:{token:this.token,role:this.role}},s={username:this.user.username,email:this.user.email,password:this.user.password,role:this.user.role,status:this.user.status};p.post("/user/add",s,a).then((function(t){e.user.id=t.data.id,e.submitted=!0})).catch((function(t){console.log(t.response.data.err.message),e.message=t.response.data.err.message,setTimeout((function(){return e.message=""}),6e3)})),t.target.reset()},newUser:function(){this.submitted=!1,this.user={}},onReset:function(t){var e=this;t.preventDefault(),this.email="",this.username="",this.password="",this.role="",this.status="",this.show=!1,this.$nextTick((function(){e.show=!0}))}},computed:Object(o["a"])(Object(o["a"])({},Object(i["c"])(["role"])),Object(i["e"])(["token"]))},lt=ut,mt=(a("1c3e"),Object(v["a"])(lt,it,ct,!1,null,"5d7f5999",null)),ft=mt.exports,dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"div_login container"},[a("b-form",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"form",on:{submit:t.submitForm}},[a("b-form-group",{attrs:{id:"input_email",label:"email:","label-for":"input_email"}},[a("b-form-input",{attrs:{id:"input_email",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{id:"input_password",label:"password:","label-for":"input_password"}},[a("b-form-input",{attrs:{id:"input_password",type:"password",required:"",placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),""!==t.message?a("div",[a("p",{staticClass:"error"},[t._v(t._s(t.message))])]):t._e(),a("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Submit")]),a("div",{attrs:{id:"formFooter"}},[a("router-link",{attrs:{to:"/register"}},[t._v("Register")])],1),a("p",[t._v("user: admin@email.com "),a("br"),t._v(" password: @1234Pass")])],1)],1)},pt=[],bt={name:"login",data:function(){return{form:{email:"",password:""},show:!0,message:""}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["d"])(["getUser","setUsername(localStorage('user_name')"])),Object(i["b"])(["logIn","getToken","logOut"])),{},{submitForm:function(t){var e=this;t.preventDefault();var a={email:this.form.email,password:this.form.password};p.post("/login",a).then((function(t){var a=t.data.token;e.logIn(a)})).catch((function(t){console.log(t.response.data.err.message),e.message=t.response.data.err.message,setTimeout((function(){return e.message=""}),3e3)})),t.target.reset()}})},_t=bt,vt=(a("039a"),Object(v["a"])(_t,dt,pt,!1,null,null,null)),ht=vt.exports,gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"div_register container"},[a("b-form",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"form",on:{submit:t.submitForm}},[a("b-form-group",{attrs:{id:"input_username",label:"username:","label-for":"input_username"}},[a("b-form-input",{attrs:{id:"input_username",placeholder:"Enter username"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),a("b-form-group",{attrs:{id:"input_email",label:"email:","label-for":"input_email"}},[a("b-form-input",{attrs:{id:"input_email",type:"email",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),a("b-form-group",{attrs:{id:"input_password",label:"password:","label-for":"input_password"}},[a("b-form-input",{attrs:{id:"input_password",type:"password",placeholder:"Enter password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-form-group",{attrs:{id:"input_confirm_password",label:"confirm password:","label-for":"input_confirm_password"}},[a("b-form-input",{attrs:{id:"input_confirm_password",type:"password",placeholder:"Enter password again"},model:{value:t.form.confirm_password,callback:function(e){t.$set(t.form,"confirm_password",e)},expression:"form.confirm_password"}})],1),""!==t.message?a("div",[a("p",{staticClass:"error"},[t._v(t._s(t.message))])]):t._e(),a("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Submit")]),a("b-button",{attrs:{type:"reset",variant:"outline-danger"},on:{click:function(e){return t.onReset()}}},[t._v("Reset")]),a("div",{attrs:{id:"form_footer"}},[a("router-link",{attrs:{to:"/login"}},[t._v("Login")]),a("router-link",{attrs:{to:"/forgotPassword"}},[t._v("Forgot password?")])],1)],1)],1)},wt=[],kt={name:"login",data:function(){return{form:{username:"",email:"",password:"",confirm_password:""},show:!0,message:""}},methods:Object(o["a"])(Object(o["a"])(Object(o["a"])({},Object(i["d"])(["getUser"])),Object(i["b"])(["logIn","getToken","logOut"])),{},{submitForm:function(t){var e=this;t.preventDefault();var a={username:this.form.username,email:this.form.email,password:this.form.password,confirm_password:this.form.confirm_password};p.post("/register",a).then((function(t){var a=t.data.token;e.logIn(a)})).catch((function(t){console.log(t.response.data.err.message),e.message=t.response.data.err.message,setTimeout((function(){return e.message=""}),5e3)})),t.target.reset()}})},Ct=kt,Ot=(a("12cf"),Object(v["a"])(Ct,gt,wt,!1,null,"0106d88e",null)),yt=Ot.exports,jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"div_forgot_password container"},[t.mail_sended?a("p",[t._v("Check your mail")]):a("b-form",{staticClass:"form",on:{submit:t.submitForm}},[a("b-form-group",{attrs:{id:"input_email",label:"type your email:","label-for":"input_forgot_password_email"}},[a("b-form-input",{attrs:{id:"input_forgot_password_email",required:"",type:"email",placeholder:"Enter email"},model:{value:t.form.forgot_password_email,callback:function(e){t.$set(t.form,"forgot_password_email",e)},expression:"form.forgot_password_email"}})],1),""!==t.message?a("div",[a("p",{staticClass:"error"},[t._v(t._s(t.message))])]):t._e(),a("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Submit")]),a("b-button",{attrs:{type:"reset",variant:"outline-danger"},on:{click:function(e){return t.onReset()}}},[t._v("Reset")])],1)],1)},xt=[],$t={name:"forgotPassword",data:function(){return{message:"",mail_sended:!1,form:{forgot_password_email:""}}},methods:{submitForm:function(t){var e=this;p.get("/forgotPassword/"+this.form.forgot_password_email).then((function(t){console.log(t),e.mail_sended=!0})).catch((function(t){console.log(t),e.message=t.response.data.err.message,setTimeout((function(){return e.message=""}),5e3)})),t.preventDefault()}}},Et=$t,Pt=(a("cc94"),Object(v["a"])(Et,jt,xt,!1,null,"48ac4c15",null)),St=Pt.exports,Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container div_change_password"},[t._m(0),a("b-form",{staticClass:"form change_password",on:{submit:t.submitForm}},[a("b-form-group",{attrs:{id:"input_password",label:"Type new password:","label-for":"password"}},[a("b-form-input",{attrs:{type:"password"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),a("b-form-group",{attrs:{id:"input_confirm_password",label:"Confirm new password:","label-for":"confirm_password"}},[a("b-form-input",{attrs:{type:"password"},model:{value:t.form.confirm_password,callback:function(e){t.$set(t.form,"confirm_password",e)},expression:"form.confirm_password"}})],1),""!==t.message?a("p",{staticClass:"text-danger"},[t._v(t._s(t.message))]):t._e(),a("b-button",{attrs:{type:"submit",variant:"outline-success"}},[t._v("Submit")]),a("b-button",{attrs:{type:"reset",variant:"danger"},on:{click:function(e){return t.onReset()}}},[t._v("Reset")])],1)],1)},Tt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h4",[t._v("Change your password")])])}],qt={name:"changePassword",data:function(){return{message:"",form:{password:"",confirm_password:""}}},methods:{submitForm:function(t){var e=this;t.preventDefault();var a={headers:{token:this.$route.query.token}},s={password:this.form.password,confirm_password:this.form.confirm_password,email:this.$route.query.email};p.put("/change_password",s,a).then((function(){e.$router.push("/login")})).catch((function(t){console.log(t.response.data.err.message),e.message=t.response.data.err.message,setTimeout((function(){return e.message=""}),5e3)}))}},computed:Object(o["a"])({},Object(i["e"])(["token"]))},At=qt,Dt=(a("fcc5"),Object(v["a"])(At,Ut,Tt,!1,null,"65222282",null)),Rt=Dt.exports,Lt=a("1232");s["default"].use(i["a"]);var Ft=new i["a"].Store({state:{token:"",userDB:"",role:"",username:"",search_result:[]},mutations:{getUser:function(t,e){t.token=e,""===e?t.userDB="":(t.userDB=Object(Lt["a"])(e),Nt.push({name:"contacts"}).catch((function(t){return t})))},fill_search_result:function(t,e){t.search_result=e}},actions:{logIn:function(t,e){var a=t.commit;localStorage.setItem("token",e),a("getUser",e)},logOut:function(t){var e=t.commit;e("getUser",""),localStorage.removeItem("token"),Nt.push({name:"login"}).catch((function(t){console.log(t)}))},getToken:function(t){var e=t.commit,a=localStorage.getItem("token");e("getUser",a||"")}},getters:{isActive:function(t){return!!t.token},username:function(t){return t.userDB.user.username},role:function(t){return t.userDB.user.role},search_result:function(t){return t.search_result}}});s["default"].use(y["a"]);var It=new y["a"]({mode:"history",routes:[{path:"/navbar",name:"navbar",component:g},{path:"/",name:"contacts",component:S},{path:"/contact/:_id",name:"contact-details",component:R,props:!0,meta:{requireAuth:!0}},{path:"/addContact",name:"addcontact",component:M,meta:{requireAuth:!0}},{path:"/searchContact",name:"searchContact",component:Q,meta:{requireAuth:!0}},{path:"/users",name:"users",component:tt,meta:{requireAuth:!0}},{path:"/user/:_id",name:"user-details",component:ot,props:!0,meta:{requireAuth:!0}},{path:"/adduser",name:"adduser",component:ft,meta:{requireAuth:!0}},{path:"/login",name:"login",component:ht},{path:"/register",name:"register",component:yt},{path:"/forgotPassword",name:"forgotPassword",component:St},{path:"/changePassword",name:"changePassword",component:Rt}]});It.beforeEach((function(t,e,a){var s=t.matched.some((function(t){return t.meta.requireAuth}));s&&""===Ft.state.token?a({name:"login"}):a()}));var Nt=It,Bt=a("5f5b");a("f9e3"),a("2dd8");s["default"].use(Bt["a"]),s["default"].config.productionTip=!1,new s["default"]({router:Nt,store:Ft,render:function(t){return t(O)}}).$mount("#app")},"5fe9":function(t,e,a){"use strict";var s=a("628f"),n=a.n(s);n.a},"610c":function(t,e,a){"use strict";var s=a("0367"),n=a.n(s);n.a},"628f":function(t,e,a){},7174:function(t,e,a){},"85ec":function(t,e,a){},"8c3f":function(t,e,a){"use strict";var s=a("c10a"),n=a.n(s);n.a},"90e8":function(t,e,a){"use strict";var s=a("d5e1"),n=a.n(s);n.a},9113:function(t,e,a){},b56c:function(t,e,a){},b817:function(t,e,a){"use strict";var s=a("0a0c"),n=a.n(s);n.a},b899:function(t,e,a){},c10a:function(t,e,a){},cc94:function(t,e,a){"use strict";var s=a("b56c"),n=a.n(s);n.a},ce4f:function(t,e,a){"use strict";var s=a("cf60"),n=a.n(s);n.a},cf60:function(t,e,a){},d5e1:function(t,e,a){},df22:function(t,e,a){"use strict";var s=a("b899"),n=a.n(s);n.a},fcc5:function(t,e,a){"use strict";var s=a("49ad"),n=a.n(s);n.a}});
//# sourceMappingURL=app.d486725e.js.map