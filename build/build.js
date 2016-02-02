!function e(t,n,o){function i(s,l){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!l&&a)return a(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return i(n?n:e)},c,c.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t){t.exports=function(e){return function(t){var n,o,i=t.slides.map(function(t){return[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(){var e=n+1;return a(1)?(l(n,o+1),!1):(i[e]&&l(e,0),void 0)},s=function(){var e=n-1;return a(-1)?(l(n,o-1),!1):(i[e]&&l(e,i[e].length-1),void 0)},l=function(e,t){n=e,o=t,i.forEach(function(n,o){n.forEach(function(n,i){n.classList.add("bespoke-bullet"),e>o||o===e&&t>=i?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),o===e&&i===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},a=function(e){return void 0!==i[n][o+e]};t.on("next",r),t.on("prev",s),t.on("slide",function(e){l(e.index,0)}),l(0,0)}}},{}],2:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},o=function(o,i){var r=e.slides[e.slide()],s=i-e.slide(),l=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,o)),o!==r&&["inactive",l,l+"-"+Math.abs(s)].map(t.bind(null,o))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(i){e.slides.map(o),t(i.slide,"active"),n(i.slide,"inactive")})}}},{}],3:[function(e,t){t.exports=function(){return function(e){var t=70,n=122,o="keydown",i=function(){var e,t;t=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?(e=document).exitFullscreen||e.webkitExitFullscreen||e.mozCancelFullScreen||e.msExitFullscreen:(e=document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.mozRequestFullScreen||e.msRequestFullscreen,t.apply(e)},r=function(e){return!!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)},s=function(e){var o=e.which;o!==t&&o!==n||r(e)||(i(),o===n&&e.preventDefault())};(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&(e.on("destroy",function(){document.removeEventListener(o,s)}),e.on("fullscreen.toggle",i),document.addEventListener(o,s))}}},{}],4:[function(e,t){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),o=parseInt(t,10);t&&(o?n(o-1):e.slides.forEach(function(e,o){e.getAttribute("data-bespoke-hash")===t&&n(o)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],5:[function(e,t){t.exports=function(t){t=t||{};var n=e("bespoke-nav-kbd")(t.kbd),o=e("bespoke-nav-touch")(t.touch);return function(e){n(e),o(e)}}},{"bespoke-nav-kbd":6,"bespoke-nav-touch":7}],6:[function(e,t){t.exports=function(){return function(e){var t=32,n=33,o=34,i=35,r=36,s=37,l=39,a=72,c=76,u=function(e,n){return e.ctrlKey||e.shiftKey&&n!==t||e.altKey||e.metaKey},f=function(f){if(!u(f,f.which))switch(f.which){case t:return f.shiftKey?e.prev():e.next();case l:case o:case c:return e.next();case s:case n:case a:return e.prev();case r:return e.slide(0);case i:return e.slide(e.slides.length-1)}};e.on("destroy",function(){document.removeEventListener("keydown",f)}),document.addEventListener("keydown",f)}}},{}],7:[function(e,t){t.exports=function(e){return function(t){e=e||{};var n="touchstart",o="touchmove",i=null,r="page"+(e.axis&&-1!==["x","y"].indexOf(e.axis)?e.axis.toUpperCase():"X"),s="number"==typeof e.threshold?Math.abs(e.threshold):Math.ceil(50/window.devicePixelRatio),l=function(e){1===e.touches.length&&(i=e.touches[0][r])},a=function(e){if(null!==i){var n=e.touches[0][r]-i;Math.abs(n)>s&&(t[n>0?"prev":"next"](),i=null)}};t.on("destroy",function(){t.parent.removeEventListener(n,l),t.parent.removeEventListener(o,a)}),t.parent.addEventListener(n,l),t.parent.addEventListener(o,a)}}},{}],8:[function(e,t){t.exports=function(t){return e("insert-css")(".bespoke-parent.bespoke-overview{pointer-events:auto}.bespoke-overview :not(img){pointer-events:none}.bespoke-overview .bespoke-slide{opacity:1;visibility:visible;cursor:pointer;pointer-events:auto}.bespoke-overview .bespoke-active{outline:6px solid #cfd8dc;outline-offset:-3px;-moz-outline-radius:3px}.bespoke-overview .bespoke-bullet{opacity:1;visibility:visible}.bespoke-overview-counter{counter-reset:overview}.bespoke-overview-counter .bespoke-slide::after{counter-increment:overview;content:counter(overview);position:absolute;right:.75em;bottom:.5em;font-size:1.25rem;line-height:1.25}.bespoke-title{visibility:hidden;position:absolute;top:0;left:0;width:100%;pointer-events:auto}.bespoke-title h1{margin:0;font-size:1.6em;line-height:1.2;text-align:center}.bespoke-overview:not(.bespoke-overview-to) .bespoke-title{visibility:visible}.bespoke-overview-to .bespoke-active,.bespoke-overview-from .bespoke-active{z-index:1}",{prepend:!0}),function(e){t="object"==typeof t?t:{};var n,o=79,i=13,r=38,s=40,l=/, */,a=/^none(?:, ?none)*$/,c=/^translate\((.+?)px, ?(.+?)px\) scale\((.+?)\)$/,u=/(^\?|&)overview(?=$|&)/,f=!("transition"in document.body.style)&&"webkitTransition"in document.body.style?"webkitTransitionEnd":"transitionend",d=["webkit","Moz"],p="number"==typeof t.columns?parseInt(t.columns):3,v="number"==typeof t.margin?parseFloat(t.margin):15,m=null,h=function(e,t){if(!(t in e.style))for(var n=t.charAt(0).toUpperCase()+t.substr(1),o=0,i=d.length;i>o;o++)if(d[o]+n in e.style)return d[o]+n;return t},b=function(e,t){return parseFloat(e.style[t].slice(6,-1))},y=function(e){return"zoom"in e.style?parseFloat(e.style.zoom)||void 0:void 0},k=function(e){var t=[],n=getComputedStyle(e),o=n[h(e,"transitionProperty")];if(!o||a.test(o))return t;o=o.split(l);var i=n[h(e,"transitionDuration")].split(l),r=n[h(e,"transitionDelay")].split(l);return o.forEach(function(e,n){("0s"!==i[n]||"0s"!==r[n])&&t.push(e)}),t},w=function(e,t,n,o){t&&(e.style[t]=n),e.offsetHeight,t&&(e.style[t]=o)},x=function(){e.on("activate",x)(),e.parent.scrollLeft=e.parent.scrollTop=0,(t.autostart||u.test(location.search))&&setTimeout(C,100)},g=function(){T(e.slides.indexOf(this))},E=function(t,n){var o=n.index+t;return o>=0&&o<e.slides.length&&e.slide(o,{preview:!0}),!1},L=function(e){e.scrollIntoView!==!1&&F(e.slide,e.index,y(e.slide))},z=function(e){var t=location.search.replace(u,"").replace(/^[^?]/,"?$&");e?history.replaceState(null,null,location.pathname+(t.length>0?t+"&":"?")+"overview"+location.hash):history.replaceState(null,null,location.pathname+t+location.hash)},F=function(t,n,o){e.parent.scrollTop=p>n?0:e.parent.scrollTop+t.getBoundingClientRect().top*(o||1)},K=function(e,t,o,i){o.removeEventListener(f,n,!1),i&&i!==o&&i.removeEventListener(f,n,!1),n=void 0,t.remove("bespoke-overview-"+e)},S=function(e){var t=e.firstElementChild;if(t.classList.contains("bespoke-title"))return t.style.width="",t;var n=document.createElement("header");n.className="bespoke-title",n.style[h(n,"transformOrigin")]="0 0";var o=document.createElement("h1");return o.appendChild(document.createTextNode(e.getAttribute("data-title")||document.title)),n.appendChild(o),w(e.insertBefore(n,t)),n},C=function(){var o,i,r=e.slides,s=e.parent,l=s.classList,a=r.length-1,c=e.slide(),u=c>0?r[0]:r[a],d=h(u,"transform"),x=s.querySelector(".bespoke-scale-parent"),T=1,q=0,O=m,W="webkitAppearance"in s.style;x?T=b(x,d):(o=y(u))&&(T=o),n&&K("from",l,r[0],r[a]),t.title&&(i=S(s)),O||(e.slide(c,{preview:!0}),l.add("bespoke-overview"),addEventListener("resize",C,!1),m=[e.on("activate",L),e.on("prev",E.bind(null,-1)),e.on("next",E.bind(null,1))],t.counter&&l.add("bespoke-overview-counter"),t.location&&z(!0),l.add("bespoke-overview-to"),q=a>0?k(u).length:k(u).join(" ").indexOf("transform")<0?0:1,s.style.overflowY="scroll",s.style.scrollBehavior="smooth",W&&r.forEach(function(e){w(e,"marginBottom","0%","")}));var A=s.clientWidth/T,B=s.clientHeight/T,H=(x||s).offsetWidth-s.clientWidth,N=x?H/2/T:0,M=u.offsetWidth,R=u.offsetHeight,I=A/(p*M+(p+1)*v),$=T*I,j=M*I,D=R*I,P=(A-j)/2,Y=(B-D)/2,U=v*I,V=0,X=0,G=0;i&&(t.scaleTitle!==!1?(i.style[o?"zoom":d]=o?$:"scale("+$+")",i.style.width=s.clientWidth/$+"px",V=i.offsetHeight*I):(H>0&&(i.style.width=s.clientWidth+"px"),V=i.offsetHeight/T)),r.forEach(function(e){var t=G*j+(G+1)*U-N-P,n=X*D+(X+1)*U+V-Y;e.style[d]="translate("+(t.toString().indexOf("e-")<0?t:0)+"px, "+(n.toString().indexOf("e-")<0?n:0)+"px) scale("+I+")",X*p+G===a&&(e.style.marginBottom=v+"px"),e.addEventListener("click",g,!1),G===p-1?(X+=1,G=0):G+=1}),O?F(r[c],c,o):q>0?u.addEventListener(f,n=function(e){e.target===this&&0===(q-=1)&&(K("to",l,this),W&&s.scrollHeight>s.clientHeight&&w(s,"overflowY","auto","scroll"),F(r[c],c,o))},!1):(r.forEach(function(e){w(e)}),l.remove("bespoke-overview-to"),F(r[c],c,o))},T=function(o){e.slide("number"==typeof o?o:e.slide(),{scrollIntoView:!1});var i,r=e.slides,s=e.parent,l=s.classList,a=r.length-1,u=e.slide()>0?r[0]:r[a],d=h(u,"transform"),p=h(u,"transition"),v=s.querySelector(".bespoke-scale-parent"),x="webkitAppearance"in s.style;v?i=b(v,d):(i=y(u))||(i=1),n&&K("to",l,r[0],r[a]);var E=s.scrollTop/i,L=(s.offsetWidth-(v||s).clientWidth)/2/i;s.style.scrollBehavior=s.style.overflowY="",r.forEach(function(e){x&&w(e,"marginBottom","0%",""),e.removeEventListener("click",g,!1)}),(E||L)&&r.forEach(function(e){var t=e.style[d].match(c);e.style[d]="translate("+(parseFloat(t[1])-L)+"px, "+(parseFloat(t[2])-E)+"px) scale("+t[3]+")",w(e,p,"none","")}),s.scrollTop=0,l.remove("bespoke-overview"),removeEventListener("resize",C,!1),(m||[]).forEach(function(e){e()}),m=null,t.counter&&l.remove("bespoke-overview-counter"),t.location&&z(!1),l.add("bespoke-overview-from");var F=a>0?k(u).length:k(u).join(" ").indexOf("transform")<0?0:1;r.forEach(function(e){e.style[d]=""}),F>0?u.addEventListener(f,n=function(e){e.target===this&&0===(F-=1)&&K("from",l,this)},!1):(r.forEach(function(e){w(e)}),l.remove("bespoke-overview-from"))},q=function(){m?T():C()},O=function(t){if(t.which===o)t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||q();else if(m)switch(t.which){case i:t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||T();break;case r:return E(-p,{index:e.slide()});case s:return E(p,{index:e.slide()})}};e.on("activate",x),e.on("destroy",function(){removeEventListener("resize",C,!1),document.removeEventListener("keydown",O,!1)}),e.on("overview",q),document.addEventListener("keydown",O,!1)}}},{"insert-css":12}],9:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,o=t.slides[0],i=o.offsetHeight,r=o.offsetWidth,s="zoom"===e||"zoom"in n.style&&"transform"!==e,l=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},a=s?t.slides:t.slides.map(l),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,o){return o+e in n.style?o+e:t},e.toLowerCase())}("Transform"),u=s?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},f=function(){var e=n.offsetWidth/r,t=n.offsetHeight/i;a.forEach(u.bind(null,Math.min(e,t)))};window.addEventListener("resize",f),f()}}},{}],10:[function(e,t){t.exports=function(e){return function(t){e=e||{};var n="string"==typeof e.separator?e.separator:" — ",o=document.title,i="string"==typeof e.title?e.title:o,r=function(e){var t=e.getAttribute("data-title");return null===t&&null!==(t=e.querySelector("h1,h2"))&&(t=t.textContent),null===t||0===t.length?null:t},s=function(e){var t=r(e.slide);document.title=null!==t?t+n+i:i};t.on("destroy",function(){document.title=o}),t.on("activate",s)}}},{}],11:[function(e,t){var n=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),o=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),i=o[0],r={},s=function(e,t){o[e]&&(f("deactivate",d(i,t)),i=o[e],f("activate",d(i,t)))},l=function(e,t){return arguments.length?(f("slide",d(o[e],t))&&s(e,t),void 0):o.indexOf(i)},a=function(e,t){var n=o.indexOf(i)+e;f(e>0?"next":"prev",d(i,t))&&s(n,t)},c=function(e,t){return(r[e]||(r[e]=[])).push(t),u.bind(null,e,t)},u=function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},f=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},d=function(e,t){return t=t||{},t.index=o.indexOf(e),t.slide=e,t},p={on:c,off:u,fire:f,slide:l,next:a.bind(null,1),prev:a.bind(null,-1),parent:n,slides:o};return(t||[]).forEach(function(e){e(p)}),s(0),p};t.exports={from:n}},{}],12:[function(e,t){var n={};t.exports=function(e,t){if(!n[e]){n[e]=!0;var o=document.createElement("style");o.setAttribute("type","text/css"),"textContent"in o?o.textContent=e:o.styleSheet.cssText=e;var i=document.getElementsByTagName("head")[0];t&&t.prepend?i.insertBefore(o,i.childNodes[0]):i.appendChild(o)}}},{}],13:[function(e){var t=e("bespoke"),n=e("bespoke-bullets"),o=e("bespoke-classes"),i=e("bespoke-fullscreen"),r=e("bespoke-hash"),s=e("bespoke-nav"),l=e("bespoke-overview"),a=e("bespoke-scale"),c=e("bespoke-title");t.from(".deck",[o(),s(),i(),a("transform"),l({margin:300,autostart:!0,title:!0,numbers:!0}),n(".build, .build-items > *:not(.build-items)"),c(),r()])},{bespoke:11,"bespoke-bullets":1,"bespoke-classes":2,"bespoke-fullscreen":3,"bespoke-hash":4,"bespoke-nav":5,"bespoke-overview":8,"bespoke-scale":9,"bespoke-title":10}]},{},[13]);