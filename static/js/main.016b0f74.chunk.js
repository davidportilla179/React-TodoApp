(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(7),o=n.n(s),r=(n(12),n(5)),d=n(3),i=(n(13),n(14),n(0)),l=function(e){var t=Object(a.useState)(""),n=Object(d.a)(t,2),c=n[0],s=n[1];return Object(i.jsxs)("form",{className:"form",onSubmit:function(t){t.preventDefault();var n={title:t.target.firstChild.value,done:!1};e.updateTodo(t,n),s(""),t.target.reset()},children:[Object(i.jsx)("input",{className:"form-input",type:"text",placeholder:"Escribe una tarea...",onChange:function(e){return s(e.target.value)}}),Object(i.jsx)("button",{className:"form-button",disabled:c?"":"disabled",children:"A\xf1adir"})]})},j=(n(16),function(e){var t=e.todos,n=e.updateTodo,a=e.show,c=e.handleHide,s=t.filter((function(e){return!0===e.done})),o=t.filter((function(e){return!0!==e.done}));return Object(i.jsxs)("div",{className:"card-header",children:[Object(i.jsxs)("div",{className:"header",children:[Object(i.jsxs)("h1",{children:["Tienes ",Object(i.jsx)("span",{className:"span-header",children:t.length})," ",t.length>2?"Tareas":"Tarea"]}),Object(i.jsxs)("p",{className:"task",children:["Completadas:  ",Object(i.jsx)("span",{className:"span-header",children:s.length})]}),Object(i.jsxs)("p",{className:"task",children:["Faltan: ",Object(i.jsx)("span",{className:"span-header",children:o.length})]}),Object(i.jsx)("p",{className:"progress-tag",children:"Progreso:"}),Object(i.jsx)("progress",{value:s.length,max:t.length}),Object(i.jsxs)("div",{className:"icon-wrapper",onClick:function(e){return c(!a)},children:[Object(i.jsx)("i",{className:a?"gg-block":"gg-unblock"}),Object(i.jsx)("p",{children:a?"SHOW":"HIDE"})]})]}),Object(i.jsx)(l,{updateTodo:n})]})}),u=(n(17),function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("input",{type:"checkbox",className:"ok",checked:e.done,defaultChecked:e.done,onChange:function(t){return e.toggleDone(t,e.index)}})})}),b=function(e){var t=e.todo,n=e.toggleDone,a=e.index,c=e.deleteTodo;return Object(i.jsxs)("div",{className:"list-item animate__animated animate__bounceInDown",children:[Object(i.jsx)(u,{done:t.done,toggleDone:n,index:a}),Object(i.jsx)("p",{className:"".concat(t.done?"done":""),children:t.title}),Object(i.jsx)("div",{className:"buttons",children:Object(i.jsx)("button",{className:"delete",onClick:function(e){return c(e,a)},children:"\u292b"})})]})},h=(n(18),function(e){var t=e.todos,n=e.toggleDone,a=e.deleteTodo,c=e.show;return Object(i.jsx)("div",{className:"list-wrapper",children:t.map((function(e,t){return c&&e.done?"":Object(i.jsx)(b,{todo:e,toggleDone:n,deleteTodo:a,index:t},t)}))})}),p=function(){var e=Object(a.useState)([{title:"Tarea 1",done:!1},{title:"Tarea 2",done:!1},{title:"Tarea 3",done:!1},{title:"Tarea 4",done:!1}]),t=Object(d.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),o=Object(d.a)(s,2),l=o[0],u=o[1];return Object(i.jsx)("div",{className:"wrapper",children:Object(i.jsxs)("div",{className:"card-frame",children:[Object(i.jsx)(j,{todos:n,updateTodo:function(e,t){var a=Object(r.a)(n);a.filter((function(e){return e.title===t.title})).length>0?alert("tarea duplicada"):(a.push(t),c(a))},show:l,handleHide:u}),Object(i.jsx)(h,{todos:n,toggleDone:function(e,t){var a=Object(r.a)(n);a[t].done=!a[t].done,c(a)},deleteTodo:function(e,t){var a=Object(r.a)(n);a.splice(t,1),c(a)},show:l})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),O()}],[[19,1,2]]]);
//# sourceMappingURL=main.016b0f74.chunk.js.map