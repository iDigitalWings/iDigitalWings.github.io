import{_ as r,a as o,o as s,e,x as t}from"./chunks/framework.Ba_Ek9Jm.js";const E=JSON.parse('{"title":"Electron 概念","description":"","frontmatter":{"title":"Electron 概念","date":"2020-07-24T13:54:51.428Z","category":["前端"],"tags":["electron"]},"headers":[],"relativePath":"posts/2020/07/0724-electron-concepts.md","filePath":"posts/2020/07/0724-electron-concepts.md","lastUpdated":1718173059000}'),n={name:"posts/2020/07/0724-electron-concepts.md"},a=e("h2",{id:"main-and-renderer-processes",tabindex:"-1"},[t("Main and Renderer Processes "),e("a",{class:"header-anchor",href:"#main-and-renderer-processes","aria-label":'Permalink to "Main and Renderer Processes"'},"​")],-1),c=e("p",null,[e("code",null,"package.json"),t(" 启动的 main 线程称为主线程。主线程只有一个，可以通过创建 web pages 来显示 GUI。")],-1),l=e("p",null,"Electron 使用 Chromium 的多线程架构用来显示页面。每个页面都有一个它自己的线程，称之为 Renderer Processes。",-1),d=e("ul",null,[e("li",null,[e("a",{href:"https://www.electronjs.org/docs/tutorial/application-architecture",target:"_blank",rel:"noreferrer"},"Electron Application Architecture ")])],-1),i=[a,c,l,d];function p(_,h,m,u,f,g){return s(),o("div",null,i)}const P=r(n,[["render",p]]);export{E as __pageData,P as default};
