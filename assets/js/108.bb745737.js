(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{675:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spin-加载中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spin-加载中"}},[t._v("#")]),t._v(" Spin 加载中 "),a("Common-SourceCodeLink",{attrs:{comp:"spin"}})],1),t._v(" "),a("h2",{attrs:{id:"基本使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[t._v("#")]),t._v(" 基本使用")]),t._v(" "),a("Common-Democode",[a("spin-demo1"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("<template>\n  <section>\n    <a-spin />\n  </section>\n</template>\n")])])])])],1),t._v(" "),a("h2",{attrs:{id:"各种大小"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各种大小"}},[t._v("#")]),t._v(" 各种大小")]),t._v(" "),a("p",[t._v("小的用于文本加载，默认用于块级容器级加载，大的用于页面级加载。")]),t._v(" "),a("Common-Democode",[a("spin-demo2"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <a-spin size="small" />\n    <a-spin />\n    <a-spin size="large" />\n  </div>\n</template>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"容器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#容器"}},[t._v("#")]),t._v(" 容器")]),t._v(" "),a("p",[t._v("放入一个容器中。")]),t._v(" "),a("Common-Democode",[a("spin-demo3"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div class="example">\n    <a-spin />\n  </div>\n</template>\n<style scoped>\n  .example {\n    text-align: center;\n    background: rgba(0,0,0,0.05);\n    border-radius: 4px;\n    margin-bottom: 20px;\n    padding: 30px 50px;\n    margin: 20px 0;\n  }\n</style>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"卡片加载中"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卡片加载中"}},[t._v("#")]),t._v(" 卡片加载中")]),t._v(" "),a("p",[t._v("可以直接把内容内嵌到 Spin 中，将现有容器变为加载状态")]),t._v(" "),a("Common-Democode",[a("spin-demo5"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <div>\n      Loading state：<a-switch v-model="spinning"></a-switch>\n    </div>\n    <a-spin :spinning="spinning">\n      <div class="spin-content">\n        可以点击‘切换’按钮，控制本区域的spin展示。\n      </div>\n    </a-spin>\n  </div>\n</template>\n<script>\n  export default {\n    data () {\n      return {\n        spinning: false\n      }\n    },\n  }\n<\/script>\n<style scoped>\n  .spin-content{\n    border: 1px solid #91d5ff;\n    background-color: #e6f7ff;\n    padding: 30px;\n  }\n</style>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"自定义描述文案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义描述文案"}},[t._v("#")]),t._v(" 自定义描述文案")]),t._v(" "),a("Common-Democode",[a("spin-demo4"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <a-spin tip="Loading...">\n      <div class="spin-content">\n        我可以自定义描述文案\n      </div>\n    </a-spin>\n  </div>\n</template>\n<style scoped>\n  .spin-content{\n    border: 1px solid #91d5ff;\n    background-color: #e6f7ff;\n    padding: 30px;\n  }\n</style>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"自定义指示符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义指示符"}},[t._v("#")]),t._v(" 自定义指示符")]),t._v(" "),a("Common-Democode",[a("spin-demo6"),t._v(" "),a("highlight-code",{attrs:{slot:"codeText",lang:"vue"},slot:"codeText"},[a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v('<template>\n  <div>\n    <a-spin>\n      <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />\n    </a-spin>\n  </div>\n</template>\n')])])])])],1),t._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("属性")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("spinning")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否为加载中状态")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("size")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("组件大小，可选值为 "),a("code",[t._v("small")]),t._v(" "),a("code",[t._v("default")]),t._v(" "),a("code",[t._v("large")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("default")])])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("tip")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("当作为包裹元素时，可以自定义描述文案")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[t._v("indicator")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("加载指示符")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("slot")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])])])])],1)}),[],!1,null,null,null);e.default=s.exports}}]);