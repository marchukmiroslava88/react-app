(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(6),r=a.n(c),i=(a(13),a(1)),m=a(2),s=a(4),o=a(3);a(14),a(15);function u(e){e.target.placeholder=""}function d(e){e.target.placeholder="search..."}var f=function(){return l.a.createElement("input",{className:"search",type:"text",placeholder:"search...",onFocus:u,onBlur:d})},p=(a(16),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return l.a.createElement("div",{className:"time"},this.state.date.toLocaleTimeString())}}]),a}(l.a.Component)),v=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{className:"header"},this.props.children,l.a.createElement("div",{className:"d-flex"},l.a.createElement(f,null),l.a.createElement(p,null)))}}]),a}(l.a.Component),h=(a(17),function(e){var t=e.newArticles;return console.log(t),l.a.createElement("nav",{className:"nav"},e.navList.map((function(e){return l.a.createElement("li",{className:"nav-item",key:e.title},l.a.createElement("a",{className:"nav-link",href:e.url},e.title),"Articles"===e.title&&t>0&&l.a.createElement("span",{className:"sticker"},t))})))}),b=a(7),E=(a(18),function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).handleClick=function(t){e.props.onDelete(t.target.id)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"comments p-4"},this.props.comments.map((function(t){return l.a.createElement("div",{key:t.id,className:"border-bottom mb-3"},l.a.createElement("button",{type:"button",className:"close","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true",id:t.id,onClick:e.handleClick},"\xd7")),l.a.createElement("p",{className:"mb-2"},l.a.createElement("b",null,"\u0418\u043c\u044f:")," ",t.nameValue),l.a.createElement("p",{className:"mb-2"},l.a.createElement("b",null,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439:")," ",t.commentValue))})))}}]),a}(l.a.Component)),N=a(19),k=function(e){Object(s.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=e.target.elements.nameValue.value,a=e.target.elements.commentValue.value;n.setState((function(e){return{comments:[].concat(Object(b.a)(e.comments),[{id:N(),nameValue:t,commentValue:a}])}})),e.target.reset()},n.handleDelete=function(e){var t=n.state.comments.filter((function(t){return t.id!==e}));n.setState({comments:t})},n.state={comments:[]},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"},l.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},l.a.createElement("label",null,"\u0418\u043c\u044f:"),l.a.createElement("div",null,l.a.createElement("input",{id:"nameValue",type:"text"})),l.a.createElement("label",null,"\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439:"),l.a.createElement("div",null,l.a.createElement("textarea",{id:"commentValue"})),l.a.createElement("button",{type:"submit",className:"btn btn-info"},"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"))),l.a.createElement("div",{className:"col-md-3"},this.state.comments.length?l.a.createElement(E,{comments:this.state.comments,onDelete:this.handleDelete}):""))}}]),a}(l.a.Component),y=(a(21),[{title:"Home",url:"/"},{title:"Gallery",url:"/"},{title:"Articles",url:"/"}]);var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null,l.a.createElement(h,{navList:y,newArticles:"7"})),l.a.createElement(k,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(j,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.a4da5164.chunk.js.map