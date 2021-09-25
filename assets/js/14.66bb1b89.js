(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{380:function(t,n,s){"use strict";s.r(n);var a=s(42),e=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"重学前端-1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重学前端-1"}},[t._v("#")]),t._v(" 重学前端 - 1")]),t._v(" "),s("h4",{attrs:{id:"_1-为什么有的编程规范要求用-void-0-代替-undefined"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-为什么有的编程规范要求用-void-0-代替-undefined"}},[t._v("#")]),t._v(" 1. 为什么有的编程规范要求用 void 0 代替 undefined？")]),t._v(" "),s("ul",[s("li",[t._v("因为 JavaScript 的代码 undefined 是一个变量，而并非是一个关键字")]),t._v(" "),s("li",[t._v("我们为了避免无意中被篡改，我建议使用 void 0 来获取 undefined 值。")])]),t._v(" "),s("blockquote",[s("p",[t._v("實際上，es5後undefined已經被改為read-only屬性了。 但在局部作用域上，是會被修改的！ 如考慮以下函數：")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("test")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("undefined")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//輸出number")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n")])])]),s("blockquote",[s("p",[t._v("為了避免無意中被竄改，使用void(0)還是比較好的做法 而且在進行代碼壓縮時，undefined也會被換成void(0), 總是要被替換的，為什麼不一開始就換。")])]),t._v(" "),s("p",[t._v("为什么有的编程规范要求用 void 0 代替 undefined？\n字符串有最大长度吗？\n0.1 + 0.2 不是等于 0.3 么？\n为什么 JavaScript 里不是这样的？\nES6 新加入的 Symbol 是个什么东西？\n为什么给对象添加的方法能用在基本类型上？")])])}),[],!1,null,null,null);n.default=e.exports}}]);