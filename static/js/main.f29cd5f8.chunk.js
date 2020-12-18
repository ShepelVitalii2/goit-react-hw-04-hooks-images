(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{31:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),r=n.n(c),o=n(4),i=n.n(o);n(30),n(31);var s=function(e){var t=e.title,n=e.children;return Object(a.jsxs)(a.Fragment,{children:[t&&Object(a.jsx)("h1",{children:t}),n]})},u=n(14),l=n(5),j=n(10),d=n(8),b=n(9),h=n(12),m=n(11),p=(n(32),function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={pictureName:""},e.handleNameChange=function(t){e.setState({pictureName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.pictureName.trim())return j.b.error("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0438");e.props.onSubmit(e.state.pictureName),e.setState({pictureName:""})},e}return Object(b.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{onSubmit:this.handleSubmit,className:"Searchbar",children:Object(a.jsxs)("form",{className:"SearchForm",children:[Object(a.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(a.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(a.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,value:this.state.pictureName,onChange:this.handleNameChange,placeholder:"Search images and photos"})]})})}}]),n}(c.Component)),O=n(23),f=n.n(O),g=n(2),v=n.n(g),x=function(e,t){return f.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("18992222-0ffbc097a98d577b6731791a7","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))};x.propTypes={query:v.a.string.isRequired,currentPage:v.a.number.isRequired};var y=x,N=Object(c.createContext)();function w(e){var t=e.gallery;return Object(a.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return function(e){var t=e.id,n=e.webformatURL,c=e.largeImageURL,r=e.previewURL;return Object(a.jsx)("li",{className:"ImageGalleryItem",children:Object(a.jsx)(N.Consumer,{children:function(e){return Object(a.jsx)("img",{src:n,"data-src":r,alt:"searchedPicture","data-large":c,className:"ImageGalleryItem-image lazyload blur-up",onClick:e})}})},"id-".concat(t))}(e)}))})}var S=function(e){var t=e.onClick;return Object(a.jsx)("button",{type:"button",className:"Button",onClick:t,children:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0435\u0449\u0435"})},k=n(24),C=n.n(k);var F=function(){return Object(a.jsx)(C.a,{className:"Loader App-logo",type:"ThreeDots",color:"#11BFFF",height:300,width:300,timeout:3e3})},I=document.querySelector("#modal-root"),D=function(e){Object(h.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(d.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handelBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(b.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(a.jsx)("div",{className:"Modal__backdrop",onClick:this.handelBackdropClick,children:Object(a.jsx)("div",{className:"Modal__content",children:this.props.children})}),I)}}]),n}(c.Component);function L(){return Object(a.jsx)("div",{children:Object(a.jsx)("h2",{className:"StartPage-header",children:"Thousands of pictures is waiting for you, just try to type something..."})})}function T(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(1),i=Object(l.a)(o,2),s=i[0],d=i[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),m=h[0],O=h[1],f=Object(c.useState)([]),g=Object(l.a)(f,2),v=g[0],x=g[1],k=Object(c.useState)(!1),C=Object(l.a)(k,2),I=C[0],T=C[1],B=Object(c.useState)(""),E=Object(l.a)(B,2),_=E[0],q=E[1];Object(c.useEffect)((function(){n&&(O(!0),y(n,s).then((function(e){x((function(t){return[].concat(Object(u.a)(t),Object(u.a)(e))}))})).catch((function(e){return e})).finally((function(){O(!1)})))}),[n,s]);return Object(a.jsxs)("div",{children:[Object(a.jsx)(p,{onSubmit:function(e){e!==n&&(x([]),r(e),d(1))}}),0===v.length&&Object(a.jsx)(L,{}),Object(a.jsx)(j.a,{}),Object(a.jsx)("div",{className:"Wrapper",children:m&&Object(a.jsx)(F,{})}),Object(a.jsx)(N.Provider,{value:function(e){if("IMG"===e.target.nodeName){e.preventDefault();var t=e.target.getAttribute("data-large");q(t),T(!0)}},children:n&&Object(a.jsx)(w,{gallery:v})}),I&&Object(a.jsx)(D,{onClose:function(){T(!I),I&&(document.body.style.overflowY="hidden")},children:Object(a.jsx)("img",{src:_,alt:"fullsizeImage"})}),Object(a.jsx)("div",{className:"BtnWrapper",children:n&&v.length>11&&Object(a.jsx)(S,{onClick:function(){d((function(e){return e+1}));var e={top:null,behavior:"smooth"};e.top=window.pageYOffset+document.documentElement.clientHeight,setTimeout((function(){window.scrollTo(e)}),1e3)}})})]})}function B(){return Object(a.jsx)(s,{children:Object(a.jsx)(T,{})})}i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.f29cd5f8.chunk.js.map