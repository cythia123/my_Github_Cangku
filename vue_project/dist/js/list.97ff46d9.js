(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["list"],{"1a33":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.isNone?i("div",{staticClass:"header"},[t._v("还没有添加任何便签哦~~")]):t._e(),t.isDetail?i("div",{staticClass:"detail"},[i("p",{staticClass:"title"},[t._v(t._s(t.detailTitle))]),i("p",{staticClass:"content"},[t._v(t._s(t.detailContent))]),i("button",{on:{click:function(e){return t.backList()}}},[t._v("返回")])]):i("div",{staticClass:"item-container"},t._l(t.pageLists,function(e,s){return i("div",{key:s,staticClass:"item",class:{active:s===t.activeIndex},on:{click:function(e){return t.toggleItem(s)}}},[i("span",{directives:[{name:"show",rawName:"v-show",value:s==t.activeIndex,expression:"index==activeIndex"}],staticClass:"delete",on:{click:function(e){return e.stopPropagation(),t.delItem(s)}}},[t._v("×")]),i("p",{staticClass:"title"},[t._v(t._s(e.title))]),i("p"),i("p",{staticClass:"content"},[t._v(t._s(e.content))]),i("div",{staticClass:"footer"},[i("div",[t._v(t._s(e.time))]),s===t.activeIndex?i("a",{on:{click:function(e){return e.stopPropagation(),t.goDetail(s)}}},[t._v("查看详情>>")]):t._e()])])}),0)])},n=[],a=i("c0d6"),c={store:a["a"],data:function(){return{activeIndex:-1,isDetail:!1,detailTitle:"",detailContent:""}},mounted:function(){a["a"].commit("getLocal")},computed:{pageLists:function(){return a["a"].getters.myLists},isNone:function(){return 0===this.pageLists.length}},methods:{toggleItem:function(t){this.activeIndex===t?this.activeIndex=-1:this.activeIndex=t},delItem:function(t){a["a"].commit("delItem",t),localStorage["pageLists"]=JSON.stringify(a["a"].state.lists)},goDetail:function(t){this.isDetail=!0,this.detailTitle=this.pageLists[t].title,this.detailContent=this.pageLists[t].content},backList:function(){this.isDetail=!1}}},o=c,l=(i("b75b"),i("2877")),r=Object(l["a"])(o,s,n,!1,null,"866cb3b0",null);e["default"]=r.exports},8487:function(t,e,i){},b75b:function(t,e,i){"use strict";var s=i("8487"),n=i.n(s);n.a}}]);
//# sourceMappingURL=list.97ff46d9.js.map