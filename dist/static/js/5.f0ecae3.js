(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Wtdt:function(t,s,a){},eieE:function(t,s,a){"use strict";var i=a("Wtdt");a.n(i).a},hrsN:function(t,s,a){"use strict";a.r(s);var i=a("bS4n"),e=a.n(i),n=a("WRrH"),o=a("jhdv"),c=(a("fL11"),{name:"goodsDetail",computed:e()({},Object(n.d)({obj:function(t){return t.storageData.clickGoodsInfo},storageData:function(t){return t.storageData},staticData:function(t){return t.staticData}})),data:function(){return{body:[],copyStr:""}},created:function(){this.obj.details||this.$router.go(-1),this.staticData.isFooter&&this.$store.commit("staticData/changeFooter"),this.staticData.isScreen&&this.$store.commit("staticData/changeScreen")},methods:{copyInfo:function(){var t=this,s="",a=",",i=Object(o.a)(new Date);s=s+"日期"+a+"货号"+a+"店铺"+a+"尺码"+a+"数量"+a+"购买价"+a+"到货日期\n",this.obj.details.forEach(function(t){t.arriveNum+t.onHand>0&&(s=s+i+a+t.styleNo+a+t.storeName+a+t.size+a+t.arriveNum+a+"¥"+t.newMkd,s=t.arriveDate?s+a+t.arriveDate:s+a+"在库",s+="\n")}),this.copyStr=s,this.$nextTick(function(){t.copyStr="",t.$toast.success("复制成功")})}},beforeRouteLeave:function(t,s,a){this.staticData.isFooter||this.$store.commit("staticData/changeFooter"),this.staticData.isScreen||this.$store.commit("staticData/changeScreen"),a()},mounted:function(){}}),r=(a("eieE"),a("ZpG+")),v=Object(r.a)(c,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{ref:"screenBtn",staticClass:"msp_page"},[a("head-bar",{attrs:{title:"详情",cancel:""}}),t._v(" "),a("div",{staticClass:"msp_page_main"},[a("van-row",{staticClass:"detail_goodsImg"},[a("img",{attrs:{src:t.obj.imgUrls,alt:""}})]),t._v(" "),a("div",{staticClass:"detail_desc"},[t.obj.shopName?a("div",{staticClass:"flexCenter"},[a("div",{staticClass:"shop_div"},[t._v(t._s("店铺："+t.obj.storeName))])]):t._e(),t._v(" "),a("div",{staticClass:"flexCenter"},[a("div",{staticClass:"size_div"},[t._v(t._s("货号："+t.obj.styleNo))]),t._v(" "),a("div",{staticClass:"tags_div"},[t._v("\n\t\t\t\t\t"+t._s(t.obj.categoryString)+"\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"tags_div"},[t._v("\n\t\t\t\t\t"+t._s(t.obj.subCategory)+"\n\t\t\t\t")]),t._v(" "),a("div",{staticClass:"tags_div"},[t._v("\n\t\t\t\t\t"+t._s(t.obj.sex)+"\n\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"flexCenter"},[a("div",{staticClass:"_price"},[t._v("折扣价:￥"+t._s(t.obj.newMkdString))]),t._v(" "),a("div",{staticClass:"origin_price"},[t._v("吊牌价:￥"+t._s(t.obj.msrpString))]),t._v(" "),t.obj.msrp?a("div",{staticClass:"discount_tag"},[t._v("\n\t\t\t\t\t"+t._s(t.obj.discount/100)+"折\n\t\t\t\t")]):t._e()]),t._v(" "),a("div",{staticClass:"flexCenter"},[t.obj.isDeduce?a("div",{staticClass:"tags"},[t._v("\n\t\t\t\t\t有降价\n\t\t\t\t")]):t._e(),t._v(" "),t.obj.isArrive?a("div",{staticClass:"tags"},[t._v("\n\t\t\t\t\t有到货\n\t\t\t\t")]):t._e()]),t._v(" "),t.obj.deduceDate?a("div",{staticClass:"flexCenter"},[a("div",{staticClass:"arrivalTime"},[t._v("降价日期: "+t._s(t.obj.deduceDate))])]):t._e(),t._v(" "),t.obj.isArrive?a("div",{staticClass:"flexCenter"},[a("div",{staticClass:"arrivalTime"},[t._v("到库日期: "+t._s(t.obj.arriveInterval))])]):t._e()]),t._v(" "),a("div",{staticClass:"detail_info"},[a("div",{staticClass:"info_title"},[t._v("详细信息")]),t._v(" "),a("div",{staticClass:"msg_size_list"},[a("van-row",{staticClass:"flexCenter"},t._l(t.staticData.goodsDetailHead,function(s,i){return a("van-col",{key:i,staticClass:"textC border_list list_head",class:{minW:i<3,endW:3==i}},[t._v(t._s(s))])}),1),t._v(" "),t._l(t.obj.details,function(s,i){return a("van-row",{key:i,staticClass:"flexCenter"},[a("van-col",{staticClass:"textC border_list minW"},[t._v(t._s(s.size))]),t._v(" "),a("van-col",{staticClass:"textC border_list minW"},[t._v(t._s(s.onHand))]),t._v(" "),a("van-col",{staticClass:"textC border_list minW"},[t._v(t._s(s.arriveNum))]),t._v(" "),a("van-col",{staticClass:"textC border_list endW"},[t._v(t._s(s.arriveNum>0?s.arriveDate:""))])],1)})],2)])],1),t._v(" "),a("van-button",{staticClass:"copy_btn",attrs:{size:"large",text:"复制",type:"info","data-clipboard-text":t.copyStr},on:{click:t.copyInfo}})],1)},[],!1,null,"71ee4008",null);s.default=v.exports}}]);