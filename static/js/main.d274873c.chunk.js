(window["webpackJsonpgithub-users"]=window["webpackJsonpgithub-users"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/logo.138e3449.svg"},,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),s=a.n(c),l=(a(11),a(3)),o=a(5),i=(a(12),a(4)),u=a.n(i),m=function(e){var t=e.onChange,a=e.onKeyPress,n=e.searchUsers;return r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"left"},r.a.createElement("img",{src:u.a,height:30,alt:"Github"}),r.a.createElement("div",{className:"subtitle"},"user search")),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{className:"search-input",type:"text",onChange:t,onKeyPress:a,placeholder:"Search...",autoFocus:!0}),r.a.createElement("span",{className:"fa fa-search",onClick:n}))))},f=function(e){var t=e.count;return r.a.createElement("div",{className:"count"},t," users found")},h=function(e){var t=e.user,a=e.onClick;return r.a.createElement("li",{key:t.id,className:"user-row",onClick:function(){return a(t)},target:"_blank"},r.a.createElement("img",{src:t.avatar_url,width:40,height:40,className:"avatar",alt:"avatar"}),r.a.createElement("span",{className:"username"},t.login))},d=function(e){var t=e.users,a=e.onClick;return r.a.createElement("ul",{className:"user-list"},t.map((function(e){return r.a.createElement(h,{key:e.login,user:e,onClick:function(){return a(e)}})})))},v=(a(13),a(14),function(e){var t=e.handleClose,a=e.isModalOpen,n=e.userDetails,c=a?"modal display-block":"modal display-none";return r.a.createElement("div",{className:c,onClick:t},r.a.createElement("section",{className:"modal-main",onClick:function(e){return e.stopPropagation()}},r.a.createElement("div",{className:"user-details"},r.a.createElement("div",{className:"left"},r.a.createElement("img",{src:n.avatar_url,className:"avatar-large",alt:"avatar"}),r.a.createElement("div",{className:"basic-info"},r.a.createElement("h3",{className:"login"},n.login),n.name&&r.a.createElement("h3",{className:"name"},n.name),n.bio&&r.a.createElement("div",null,n.bio),n.company&&r.a.createElement("div",null,"Workplace: ",n.company),n.location&&r.a.createElement("div",null,"Location: ",n.location),n.email&&r.a.createElement("div",null,"Contact: ",n.email))),r.a.createElement("div",{className:"right"},r.a.createElement("div",{className:"column"},r.a.createElement("div",{class:"number"},n.public_repos),r.a.createElement("div",null,"repositories")),r.a.createElement("div",{className:"column"},r.a.createElement("div",{class:"number"},n.followers),r.a.createElement("div",null,"followers")),r.a.createElement("div",{className:"column"},r.a.createElement("div",{class:"number"},n.following),r.a.createElement("div",null,"following")))),r.a.createElement("i",{onClick:t,className:"fas fa-times"})))});function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var g="https://api.github.com/search/users?q=";var b=function(){var e=Object(n.useState)({searchResults:null,username:"",userDetails:{}}),t=Object(o.a)(e,2),a=t[0],c=t[1],s=function(e){!function(e){fetch("".concat("https://api.github.com/users/").concat(e)).then((function(e){return e.json()})).then((function(e){c((function(t){return E({},t,{userDetails:e})}))})).catch((function(e){console.log(e)}))}(e.login)};function l(){fetch("".concat(g).concat(a.username)).then((function(e){return e.json()})).then((function(e){c((function(t){return E({},t,{searchResults:e})})),console.log(e)})).catch((function(e){console.log(e)}))}var i=a.userDetails;return r.a.createElement("div",{className:"app"},r.a.createElement(v,{isModalOpen:!!Object.keys(i).length,handleClose:function(e){e.stopPropagation(),c((function(e){return E({},e,{userDetails:{}})}))},userDetails:i}),r.a.createElement(m,{onChange:function(e){var t=e.target.value;c((function(e){return E({},e,{username:t})}))},onKeyPress:function(e){"Enter"===e.key&&l()},searchUsers:l}),r.a.createElement("div",{className:"content"},a.searchResults&&a.searchResults.items&&r.a.createElement("div",null,r.a.createElement(f,{count:a.searchResults.items.length}),r.a.createElement(d,{users:a.searchResults.items,onClick:function(e){return s(e)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.d274873c.chunk.js.map