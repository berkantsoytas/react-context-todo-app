(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{15:function(t,e,o){},17:function(t,e,o){},18:function(t,e,o){"use strict";o.r(e);var c=o(0),n=o.n(c),a=o(9),d=o.n(a),r=(o(15),o(3)),i=o(1),s=Object(c.createContext)(0),u=function(t){var e=t.initialState,o=t.reducer,n=t.children;return Object(i.jsx)(s.Provider,{value:Object(c.useReducer)(o,e),children:n})},O=function(){return Object(c.useContext)(s)},j=(o(17),o(10)),l=o(6),b=function(t){var e=t.todo,o=O(),n=Object(r.a)(o,2);Object(j.a)(n[0]);var a=n[1],d=Object(c.useState)(!1),s=Object(r.a)(d,2),u=s[0],b=s[1],p=Object(c.useState)(e.content),f=Object(r.a)(p,2),m=f[0],v=f[1];return Object(i.jsxs)("div",{className:e.isCompleted?"todo-row completed":"todo-row",children:[Object(i.jsx)("div",{onClick:function(){return u?"":(t=e.id,void a({type:"COMPLETE_TODO",payload:t}));var t},children:u?Object(i.jsx)("input",{type:"text",value:m,className:"todo-input-edit",onChange:function(t){return v(t.target.value)}}):e.content}),Object(i.jsxs)("div",{className:"todo-icons",children:[Object(i.jsx)(l.b,{className:"todo-icon",onClick:function(){return t=e.id,void a({type:"REMOVE_TODO",payload:t});var t}}),u?Object(i.jsx)(l.a,{className:"todo-icon",onClick:function(){!function(t){var e=t.todoId,o=t.newValue;a({type:"UPDATE_TODO",payload:{todoId:e,newValue:o}})}({todoId:e.id,newValue:m}),v(""),b(!1)}}):Object(i.jsx)(l.c,{className:"todo-icon",onClick:function(){return b(!0)}})]})]})},p=function(t){var e=t.todos;return Object(i.jsx)("div",{className:"todo-list",children:e&&e.map((function(t){return Object(i.jsx)(b,{todo:t},t.id)}))})};var f=function(){var t=O(),e=Object(r.a)(t,2),o=e[0].todos,n=e[1],a=Object(c.useState)(""),d=Object(r.a)(a,2),s=d[0],u=d[1],j=Object(c.useRef)(null);return Object(c.useEffect)((function(){j.current.focus()}),[]),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),s||!(s.length<1)){var e={id:Math.floor(1232*Math.random()),content:s,isCompleted:!1};n({type:"ADD_TODO",payload:e}),u("")}},className:"todo-form",children:[Object(i.jsx)("input",{type:"text",className:"todo-input",onChange:function(t){return u(t.target.value)},value:s,ref:j}),Object(i.jsx)("button",{className:"todo-button",children:"Add"})]}),Object(i.jsx)(p,{todos:o})]})},m=o(8),v=o(2),x=function(t,e){switch(console.log(e),e.type){case"ADD_TODO":return Object(v.a)(Object(v.a)({},t),{},{todos:[e.payload].concat(Object(m.a)(t.todos))});case"REMOVE_TODO":return Object(v.a)(Object(v.a)({},t),{},{todos:Object(m.a)(t.todos).filter((function(t){return t.id!==e.payload}))});case"COMPLETE_TODO":return Object(v.a)(Object(v.a)({},t),{},{todos:t.todos.map((function(t){return t.id!==e.payload?t:Object(v.a)(Object(v.a)({},t),{},{isCompleted:!t.isCompleted})}))});case"UPDATE_TODO":return Object(v.a)(Object(v.a)({},t),{},{todos:t.todos.map((function(t){return t.id!==e.payload.todoId?t:Object(v.a)(Object(v.a)({},t),{},{content:e.payload.newValue})}))});default:return Object(v.a)({},t)}};d.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(u,{initialState:{todos:[{id:0,content:"\u0130lk todo"}]},reducer:x,children:Object(i.jsx)(f,{})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9eeff2f0.chunk.js.map