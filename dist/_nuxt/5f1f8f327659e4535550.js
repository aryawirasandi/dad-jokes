(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{177:function(e,t,n){var content=n(179);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(39).default)("53ff29af",content,!0,{sourceMap:!1})},178:function(e,t,n){"use strict";var r=n(177);n.n(r).a},179:function(e,t,n){(e.exports=n(38)(!1)).push([e.i,".joke{padding:1rem;border:1px;margin:1rem 0}",""])},180:function(e,t,n){"use strict";n.r(t);n(37);var r,o,c=n(5),l=n(72),h=n.n(l),d={name:"Joke",props:["joke","id"]},m=(n(178),n(13)),f={name:"Search Jokes",data:function(){return{text:""}},methods:{onSubmit:function(){this.$emit("search-text",this.text),this.text=""}}},k={data:function(){return{jokes:[]}},components:{Joke:Object(m.a)(d,function(){var e=this.$createElement,t=this._self._c||e;return t("nuxt-link",{attrs:{to:"jokes/"+this.id}},[t("div",{staticClass:"joke"},[t("p",[this._v(this._s(this.joke))])])])},[],!1,null,null,null).exports,SearchJoke:Object(m.a)(f,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"text"}],attrs:{type:"text",placeholder:"Search Jokes"},domProps:{value:e.text},on:{input:function(t){t.target.composing||(e.text=t.target.value)}}}),e._v(" "),n("input",{attrs:{type:"submit",value:"Search Jokes"}})])},[],!1,null,"5a442421",null).exports},created:(o=Object(c.a)(regeneratorRuntime.mark(function e(){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Accept:"application/json"}},e.prev=1,e.next=4,h.a.get("https://icanhazdadjoke.com/search",t);case 4:n=e.sent,this.jokes=n.data.results,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[1,8]])})),function(){return o.apply(this,arguments)}),methods:{searchText:(r=Object(c.a)(regeneratorRuntime.mark(function e(text){var t,n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t={headers:{Accept:"application/json"}},e.prev=1,e.next=4,h.a.get("https://icanhazdadjoke.com/search?term=".concat(text),t);case 4:n=e.sent,this.jokes=n.data.results,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}},e,this,[[1,8]])})),function(e){return r.apply(this,arguments)})},head:function(){return{title:"Dad Jokes",meta:[{hid:"description",name:"description",content:"Best Place For Corny Dad Jokes"}]}}},v=Object(m.a)(k,function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("SearchJoke",{on:{"search-text":this.searchText}}),this._v(" "),this._l(this.jokes,function(e){return t("Joke",{key:e.id,attrs:{id:e.id,joke:e.joke}})})],2)},[],!1,null,null,null);t.default=v.exports}}]);