(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{156:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return f}),t.d(a,"StaticQueryContext",function(){return m}),t.d(a,"StaticQuery",function(){return p});var n=t(0),r=t.n(n),o=t(4),i=t.n(o),l=t(155),c=t.n(l);t.d(a,"Link",function(){return c.a}),t.d(a,"withPrefix",function(){return l.withPrefix}),t.d(a,"navigate",function(){return l.navigate}),t.d(a,"push",function(){return l.push}),t.d(a,"replace",function(){return l.replace}),t.d(a,"navigateTo",function(){return l.navigateTo});var s=t(159),u=t.n(s);t.d(a,"PageRenderer",function(){return u.a});var d=t(45);t.d(a,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},157:function(e,a,t){"use strict";var n=t(160),r=t(0),o=t.n(r),i=t(4),l=t.n(i),c=t(161),s=t.n(c),u=t(156),d=t(172),m=t.n(d),p=t(173),f=t(175),h=function(e){e.siteTitle;return o.a.createElement("div",{className:m.a.headerContainer},o.a.createElement("div",{className:m.a.titleWrap},o.a.createElement("h1",null,"Pandolajs"),o.a.createElement("p",{className:m.a.subtitle},"Make a immersion development experience"),o.a.createElement("div",{className:m.a.opBar},o.a.createElement("a",{href:"https://github.com/pandolajs",className:m.a.btn+" "+m.a.github},o.a.createElement(p.a,{icon:f.a})," GitHub"),o.a.createElement("a",{href:"/docs",className:m.a.btn},"Get Start"))))},v=t(7),y=t.n(v),b=t(176),E=t.n(b),g=function(e){function a(){return e.apply(this,arguments)||this}return y()(a,e),a.prototype.render=function(){return o.a.createElement("div",{className:E.a.footer},"© 2018 Pandolajs")},a}(r.Component),x=(t(177),t(48),t(178)),w=t.n(x),N=function(e){function a(){return e.apply(this,arguments)||this}return y()(a,e),a.prototype.render=function(){var e=this.props,a=e.navigates,t=void 0===a?[]:a,n=e.active;return o.a.createElement("div",{className:w.a.navContainer},o.a.createElement("div",{className:w.a.navWrap},o.a.createElement("a",{className:w.a.webLogo},"Pandolajs"),o.a.createElement("nav",{className:w.a.navList},o.a.createElement("dl",null,o.a.createElement("dd",{className:0===n?w.a.active:""},o.a.createElement("a",{href:"/"},"Home")),t.map(function(e,a){return o.a.createElement("dd",{key:a,className:a+1===n?w.a.active:""},o.a.createElement("a",{href:e.path},e.name))})))))},a}(r.Component);N.propTypes={navigates:l.a.arrayOf(l.a.shape({name:l.a.string,path:l.a.string})),active:l.a.number},N.defaultProps={active:0};var q=t(179),j=t.n(q),k=(t(180),[{name:"Docs",path:"/docs"},{name:"Boilerplates",path:"/boilerplates"},{name:"Components",path:"/components"},{name:"Tech",path:"/tech"},{name:"About",path:"/about"}]),C=function(e){var a=e.children,t=e.banner,r=e.className;return o.a.createElement(u.StaticQuery,{query:"2567386890",render:function(e){var n=e.site.siteMetadata,i=n.title,l=n.keywords,c=n.description;return o.a.createElement("div",{className:j.a.layout+" "+r},o.a.createElement(s.a,null,o.a.createElement("title",null,i),o.a.createElement("meta",{name:"keywords",content:l}),o.a.createElement("meta",{name:"description",content:c})),o.a.createElement(N,{navigates:k}),t&&o.a.createElement(h,{siteTitle:i}),o.a.createElement("div",{className:j.a.layoutContent},a),o.a.createElement(g,null))},data:n})};C.propTypes={children:l.a.node.isRequired,banner:l.a.bool,clssName:l.a.string},C.defaultProps={banner:!1,className:""};a.a=C},159:function(e,a,t){var n;e.exports=(n=t(171))&&n.default||n},160:function(e){e.exports={data:{site:{siteMetadata:{title:"Pandolajs",keywords:"reactjs,npm,nodejs,pandorajs,component,boilerplate",description:"Pandolajs is a ecosytem for frontend."}}}}},171:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),r=t.n(n),o=t(4),i=t.n(o),l=t(74),c=t(2),s=function(e){var a=e.location,t=c.default.getResourcesForPathnameSync(a.pathname);return r.a.createElement(l.a,Object.assign({location:a,pageResources:t},t.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},a.default=s},172:function(e,a,t){e.exports={headerContainer:"index-module--header-container--Yf_rM",titleWrap:"index-module--title-wrap--1doEt",subtitle:"index-module--subtitle--3X2gk",btn:"index-module--btn--3RkLw",github:"index-module--github--oqi-h",opBar:"index-module--op-bar--19_aF"}},176:function(e,a,t){e.exports={footer:"index-module--footer--2_JD6"}},178:function(e,a,t){e.exports={navContainer:"index-module--nav-container--2lgFE",navWrap:"index-module--nav-wrap--13u29",webLogo:"index-module--web-logo--3B3GS",navList:"index-module--nav-list--3xF8v",active:"index-module--active--3w4sO"}},179:function(e,a,t){e.exports={layout:"index-module--layout--yhm64",layoutContent:"index-module--layout-content--1ulQu"}},180:function(e,a,t){}}]);
//# sourceMappingURL=1-6cf9527e9417530a308b.js.map