(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),l=(a(16),a(6)),s=a(1),o=a(2),u=a(4),d=a(3),h=a(5),m=(a(17),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},a.handleReadMoreClick=function(e){e.preventDefault(),a.setState({visible:!0})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.id,a=e.author,n=e.text,c=e.bigText,i=this.state.visible;return r.a.createElement("div",{className:"news__article"},r.a.createElement("p",{className:"news__author"},a,":"),r.a.createElement("p",{className:"news__text"},n),!i&&r.a.createElement("a",{href:"#new-"+t,onClick:this.handleReadMoreClick,className:"news__readmore"},"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"),i&&r.a.createElement("p",{className:"news__bigText"},c))}}]),t}(r.a.Component)),b=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).renderNews=function(){var e=a.props.data,t=r.a.createElement("p",null,"\u041a \u0441\u043e\u0436\u0430\u043b\u0435\u043d\u0438\u044e, \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439 \u043d\u0435\u0442");return e.length>0&&(t=e.map(function(e,t){return r.a.createElement(m,{key:e.id,data:e})})),t},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.data;return r.a.createElement("div",{className:"news"},r.a.createElement("h3",null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),r.a.createElement("div",{className:"news__list"},this.renderNews()),e.length>0?r.a.createElement("strong",null,"\u0412\u0441\u0435\u0433\u043e \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439: ",e.length):null)}}]),t}(r.a.Component),f=a(9),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).handlerSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.text,c=t.bigText;a.props.onAddNews({id:+new Date,author:n,text:r,bigText:c})},a.validate=function(){var e=a.state,t=e.name,n=e.text,r=e.bigText,c=e.agree;return!!(t.trim()&&n.trim()&&r.trim()&&c)},a.handleChange=function(e){var t=e.target,n=t.id,r=t.value;a.setState(Object(f.a)({},n,r))},a.handlerCheckbox=function(e){a.setState({agree:e.currentTarget.checked})},a.state={name:"",text:"",bigText:"",agree:!1},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.text,n=e.bigText,c=e.agree;return r.a.createElement("form",{className:"add",onSubmit:this.handlerSubmit},r.a.createElement("input",{id:"name",type:"text",value:t,className:"add__author",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",onChange:this.handleChange}),r.a.createElement("textarea",{id:"text",className:"add__text",value:a,placeholder:"\u041a\u0440\u0430\u0442\u043a\u043e",onChange:this.handleChange}),r.a.createElement("textarea",{id:"bigText",className:"add__bigText",value:n,placeholder:"\u041f\u043e\u043b\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u043d\u043e\u0432\u043e\u0441\u0442\u0438",onChange:this.handleChange}),r.a.createElement("label",{className:"add__checkrule"},r.a.createElement("input",{type:"checkbox",onChange:this.handlerCheckbox,checked:c})," \u042f \u0441\u043e\u0433\u043b\u0430\u0441\u0435\u043d \u0441 \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c\u0438"),r.a.createElement("button",{disabled:!this.validate(),className:"add__btn"},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u043e\u0441\u0442\u044c"))}}]),t}(r.a.Component),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).componentDidMount=function(){fetch("./data/newsData.json").then(function(e){return e.json()}).then(function(e){a.setState({news:e,filteredNews:null,isLoading:!1})}).catch(function(e){console.log(e.message)})},a.handleAddNews=function(e){var t=[e].concat(Object(l.a)(a.state.news));a.setState({news:t})},a.state={news:null,isLoading:!0},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.news,a=e.filteredNews,n=e.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(g,{onAddNews:this.handleAddNews}),n&&r.a.createElement("p",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e..."),Array.isArray(t)&&r.a.createElement(b,{data:a}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){if(!Array.isArray(t.news))return null;var a=Object(l.a)(t.news);return a.forEach(function(e,t){-1!==e.bigText.toLowerCase().indexOf("pubg")&&(e.bigText="\u0421\u041f\u0410\u041c")}),{filteredNews:a}}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.3be167b2.chunk.js.map