(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36ba3740"],{"974b":function(e,t,n){},fa7e:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"float",style:e.styles},[n("span",{staticClass:"font1",staticStyle:{"text-align":"center",display:"block"}},[""!=e.title?n("el-tag",{attrs:{type:"primary"}},[e._v(" "+e._s(e.title))]):e._e(),e._v(" "),n("el-button",{attrs:{icon:"el-icon-refresh",size:"mini",type:"success"},on:{click:e.format}},[e._v(e._s(e.$t("美化")))]),e._v(" "),n("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.value,expression:"value",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{size:"mini",type:"success",icon:"el-icon-document-copy"}},[e._v(e._s(e.$t("点击复制")))])],1),e._v(" "),n("editor",{attrs:{lang:"json",options:e.editorOptions,theme:"chrome",height:e.height},on:{init:e.editorInit},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1)},o=[],a=(n("e680"),{name:"Json",props:{styles:{type:String,default:"width: 50%"},read:{type:Boolean,default:!1},title:{type:String,default:""},value:{type:Object,default:{}},pointOut:{type:Array,default:[]},height:{type:String,default:"600"},fontSize:{type:String,default:"18"}},data:function(){return{ed:null,editorOptions:{enableBasicAutocompletion:!0,enableSnippets:!0,enableLiveAutocompletion:!0,tabSize:2,fontSize:Number(this.fontSize),showPrintMargin:!1}}},watch:{value:function(e){this.$emit("getValue",e)}},destroyed:function(){this.ed=null},created:function(){},methods:{format:function(){try{var e=this.ed.getValue(),t=JSON.parse(e);this.ed.setValue(JSON.stringify(t,null,"\t"))}catch(n){console.log(n)}},setCompletions:function(e,t,n,i,o){return 0===i.length?o(null,[]):o(null,this.pointOut)},editorInit:function(e){n("cabe5"),n("93c6"),n("df65"),n("2bb0"),n("aafe"),n("b42c"),n("012f"),n("35cf"),n("d58b"),this.read&&e.setReadOnly(!0);var t=this;e.completers=[{getCompletions:function(e,n,i,o,a){t.setCompletions(e,n,i,o,a)}}],this.ed=e},onCopy:function(e){this.$message({message:"复制成功！",type:"success"})},onError:function(e){this.$message({message:"复制失败！",type:"error"})}}}),s=a,r=(n("fb1a"),n("cba8")),l=Object(r["a"])(s,i,o,!1,null,"73c20fea",null);t["default"]=l.exports},fb1a:function(e,t,n){"use strict";n("974b")}}]);