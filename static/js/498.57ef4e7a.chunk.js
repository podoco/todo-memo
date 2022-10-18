"use strict";(self.webpackChunktodo_memo=self.webpackChunktodo_memo||[]).push([[498,516],{498:function(n,o,e){e.r(o),e.d(o,{default:function(){return M}});var r,t,i,a,c,l,d,s,u,p,x,h,g,b=e(168),f=e(444),m=e(516),j=e(791),w=e(885),Z="http://localhost:3002/",v=function(n,o){fetch("".concat(n).concat(o),{method:"DELETE"}).then((function(){window.location.href=Z})).catch((function(n){console.error("Error",n)}))},k=e(184),y=f.ZP.div(r||(r=(0,b.Z)(["\npadding: 8px 16px;\njustify-content: space-between;\ndisplay: flex;\nmargin: 9px 0;\nborder-radius:8px;\nbox-shadow: 3px 3px rgba(0, 0, 255, .3);\nbackground-color: ghostwhite;\ncolor: rgba(250,108,108,1);\n\n"]))),P=f.ZP.div(t||(t=(0,b.Z)(["\n  display:flex;\n  position: relative;\n  align-items: center;\n  text-align: center;\n"]))),C=f.ZP.button(i||(i=(0,b.Z)(["\n  padding: 8px 16px;\n  margin-left: 2px;\n  background-color: white;\n  color:  rgba(250,108,108,1);\n  border-radius: 6px;\n  box-shadow: 3px 3px rgba(0, 0, 255, .3);\n  float: right;\n  cursor: pointer;\n  justify-content: center;\n\n  &:hover{\n    color: white;\n    background-color: palevioletred;\n  };\n"]))),S=f.ZP.input(a||(a=(0,b.Z)(["\nheight: 40px;\nmargin: 10px 0px;\nfont-size: large;\n"]))),E=function(n){var o=n.id,e=n.title,r=(0,j.useState)(e),t=(0,w.Z)(r,2),i=t[0],a=t[1],c=(0,j.useState)(!1),l=(0,w.Z)(c,2),d=l[0],s=l[1],u=function(n){console.log(i),v("http://localhost:3001/memo/",n)},p=function(){!function(n,o,e){fetch("".concat(n).concat(o),{method:"PATCH",headers:{"Content-Type":"Application/json"},body:JSON.stringify(e)}).then((function(){window.location.href=Z})).catch((function(n){console.error("Error",n)}))}("http://localhost:3001/memo/",o,{title:i})};return d?(0,k.jsxs)(y,{children:[(0,k.jsx)("form",{onSubmit:p,children:(0,k.jsx)(S,{value:i,onChange:function(n){return a(n.target.value)}})}),(0,k.jsxs)(P,{children:[(0,k.jsx)(C,{type:"submit",onClick:p,children:"save"}),(0,k.jsx)(C,{onClick:function(){return u(o)},children:"x"})]})]},o):(0,k.jsxs)(y,{children:[(0,k.jsx)("h2",{children:e}),(0,k.jsxs)(P,{children:[(0,k.jsx)(C,{onClick:function(){return s(!0)},children:"edit"}),(0,k.jsx)(C,{onClick:function(){return u(o)},children:"x"})]})]},o)},T=f.ZP.div(c||(c=(0,b.Z)(["\n  align-items: center;\n"]))),z=function(n){var o=n.memos;return(0,k.jsx)(T,{children:o.map((function(n){return(0,k.jsx)(E,{memos:o,id:n.id,title:n.title},n.id)}))})},A=f.ZP.form(l||(l=(0,b.Z)(["\ndisplay: flex;\npadding-top:8px;\n"]))),D=f.ZP.input(d||(d=(0,b.Z)(["\nwidth: 100%;\npadding: 8px 12px;\nmargin-right: 16px;\ncolor: palevioletred;\nborder-radius: 4px;\nbox-shadow: 5px 6px 2px 0px rgba(0,0,0,0.55);\n\n\n"]))),N=f.ZP.input(s||(s=(0,b.Z)(["\ncursor: pointer;\nwidth: 70px;\nbackground-color: whitesmoke;\nborder: none;\nfont-size: medium;\ntransition: all 200ms ease-in;\nbox-shadow: 5px 6px 2px 0px rgba(0,0,0,0.55);\nborder-radius: 4px;\nbackground: linear-gradient(90deg, \n    rgba(171,72,237,1) 0%, rgba(250,108,108,1) 50%, rgba(249,181,86,1) 100%);\n\n&:hover{\n  color: whitesmoke;\n  background-color: rgb(191,219,254);\n  transform: scale(1.02);\n}\n\n"]))),O=function(){var n=(0,j.useState)(""),o=(0,w.Z)(n,2),e=o[0],r=o[1];return(0,k.jsxs)(A,{onSubmit:function(n){n.preventDefault(),function(n,o){fetch(n,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)}).then((function(){window.location.href=Z})).catch((function(n){console.error("Error",n)}))}("http://localhost:3001/memo/",{title:e})},children:[(0,k.jsx)(D,{type:"text",placeholder:"\ud574\uc57c\ud560\uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",required:!0,value:e,onChange:function(n){return r(n.target.value)}}),(0,k.jsx)(N,{type:"submit",value:"\uc785\ub825"})]})},_=f.ZP.div(u||(u=(0,b.Z)(["\ndisplay: flex;\nalign-items: center;\njustify-content: center;\nbackground-color: aliceblue;\nborder-radius: 20px;\nbackground: linear-gradient(90deg, \n    rgba(171,72,237,1) 0%, rgba(250,108,108,1) 50%, rgba(249,181,86,1) 100%);\n"]))),J=f.ZP.div(p||(p=(0,b.Z)(["\nwidth: 100%;\npadding: 24px;\nmargin: 16px;\nborder-radius: 40px;\nbackground-color: white;\nborder: 4px;\nbox-shadow: -9px 17px 13px rgb(0 0 0 /16%);\n"]))),L=f.ZP.div(x||(x=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 12px;\n \n"]))),q=f.ZP.h1(h||(h=(0,b.Z)(["\n  color: rgba(171,72,237,1);\n  font-weight: 500;\n"]))),H=f.ZP.button(g||(g=(0,b.Z)(["\n  height: 40px;\n  font-size: medium;\n  margin-top: 30px;\n  border: none;\n  cursor: pointer;\n  background-color: white;\n  border-radius: 6px;\n  box-shadow: 5px 6px 2px 0px rgba(0,0,0,0.55);\n  background: linear-gradient(90deg, \n    rgba(171,72,237,1) 0%, rgba(250,108,108,1) 50%, rgba(249,181,86,1) 100%);\n  transition: all 300ms ease-in;\n  &:hover{\n    color: white;\n    transform: scale(1.05);\n  }\n"]))),M=function(n){var o=n.memos,e=n.isPending;return(0,k.jsx)(_,{children:(0,k.jsxs)(J,{children:[(0,k.jsxs)(L,{children:[(0,k.jsx)(q,{children:"TodoMemo"}),(0,k.jsx)(H,{onClick:function(){console.log(o.length),o.map((function(n){return v("http://localhost:3001/memo/",n.id)})),console.log("\uc9c0\uc6b0\uae30")},children:"Delete All"})]}),e&&(0,k.jsx)(m.default,{}),o&&(0,k.jsx)(z,{memos:o}),(0,k.jsx)(O,{memos:o})]})})}},516:function(n,o,e){e.r(o);var r=e(184);o.default=function(){return(0,r.jsx)("div",{className:"loading",children:(0,r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921",alt:"loading"})})}}}]);
//# sourceMappingURL=498.57ef4e7a.chunk.js.map