Drupal.locale = { 'pluralFormula': function ($n) { return Number(($n!=1)); }, 'strings': {"":{"An AJAX HTTP error occurred.":"Ocorreu um erro HTTP no AJAX","HTTP Result Code: !status":"C\u00f3digo do Resultado HTTP:  !status","An AJAX HTTP request terminated abnormally.":"Uma requisi\u00e7\u00e3o HTTP AJAX terminou de forma anormal.","Debugging information follows.":"Estas s\u00e3o as informa\u00e7\u00f5es de depura\u00e7\u00e3o.","Path: !uri":"Caminho: !url","StatusText: !statusText":"Texto de Status: !statusText","ResponseText: !responseText":"Texto de Resposta: !responseText","ReadyState: !readyState":"ReadyState: !readyState","Not restricted":"Sem restri\u00e7\u00f5es","Not customizable":"N\u00e3o \u00e9 personaliz\u00e1vel","Restricted to certain pages":"Restrito para certas p\u00e1ginas","Not tracked":"N\u00e3o monitorado","One domain with multiple subdomains":"Um Dom\u00ednio com multiplos subdom\u00ednios","Multiple top-level domains":"M\u00faltiplos dom\u00ednios prim\u00e1rios","All pages with exceptions":"Todas as p\u00e1ginas com exce\u00e7\u00f5es","Excepted: @roles":"Exce\u00e7\u00f5es: @roles","A single domain":"Um \u00fanico dom\u00ednio","No privacy":"Sem privacidade","@items enabled":"@items habilitados","Title":"T\u00edtulo","Automatic alias":"Endere\u00e7o autom\u00e1tico","Alias: @alias":"URL Alternativa: @alias","No alias":"Nenhuma URL alternativa","Disabled":"Desativado","Enabled":"Ativado","Edit":"Editar","Search":"Buscar","Add":"Adicionar","Configure":"Configurar","Loading":"Carregando","Sunday":"domingo","Monday":"segunda-feira","Tuesday":"ter\u00e7a-feira","Wednesday":"quarta-feira","Thursday":"quinta-feira","Friday":"sexta-feira","Saturday":"s\u00e1bado","Next":"Pr\u00f3ximo","Upload":"Upload","Done":"Conclu\u00eddo","Prev":"Anterior","Mon":"seg","Tue":"ter","Wed":"qua","Thu":"qui","Fri":"sex","Sat":"sab","Sun":"dom","January":"janeiro","February":"fevereiro","March":"mar\u00e7o","April":"abril","May":"mai","June":"junho","July":"julho","August":"agosto","September":"setembro","October":"outubro","November":"novembro","December":"dezembro","Show":"Exibir","Select all rows in this table":"Selecionar todas as linhas da tabela","Deselect all rows in this table":"Desmarcar todas as linhas da tabela","Today":"Hoje","Jan":"jan","Feb":"fev","Mar":"mar","Apr":"abr","Jun":"jun","Jul":"jul","Aug":"ago","Sep":"set","Oct":"out","Nov":"nov","Dec":"dez","Su":"Dom","Mo":"Seg","Tu":"Ter","We":"Qua","Th":"Qui","Fr":"Sex","Sa":"S\u00e1b","Not published":"N\u00e3o publicado","Please wait...":"Por favor, espere um pouco...","Hide":"Ocultar","mm\/dd\/yy":"mm\/dd\/yy","Only files with the following extensions are allowed: %files-allowed.":"Apenas arquivos com as seguintes extens\u00f5es s\u00e3o permitidos: %files-allowed.","By @name on @date":"Por @name em @date","By @name":"Por @name","Not in menu":"Fora do menu","New revision":"Nova revis\u00e3o","Drag to re-order":"Arraste para reordenar","Changes made in this table will not be saved until the form is submitted.":"Mudan\u00e7as feitas nesta tabela n\u00e3o ser\u00e3o salvas at\u00e9 que o formul\u00e1rio seja enviado.","The changes to these blocks will not be saved until the \u003Cem\u003ESave blocks\u003C\/em\u003E button is clicked.":"As altera\u00e7\u00f5es nesses blocos n\u00e3o v\u00e3o ser salvas enquanto o bot\u00e3o \u003Cem\u003ESalvar Blocos\u003C\/em\u003E n\u00e3o for clicado.","Show shortcuts":"Mostrar atalhos","This permission is inherited from the authenticated user role.":"Essa permiss\u00e3o \u00e9 herdada do papel de usu\u00e1rio autenticado.","No revision":"Sem revis\u00e3o","@number comments per page":"@number coment\u00e1rios por p\u00e1gina","Requires a title":"T\u00edtulo requerido","(active tab)":"(aba ativa)","The block cannot be placed in this region.":"O bloco n\u00e3o pode ser colocado nessa regi\u00e3o.","Customize dashboard":"Personalizar painel","Hide summary":"Ocultar sum\u00e1rio","Edit summary":"Editar resumo","Don\u0027t display post information":"N\u00e3o exibir informa\u00e7\u00f5es de postagem","@title dialog":"Di\u00e1logo @title","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"O arquivo selecionado %filename n\u00e3o p\u00f4de ser transferido. Somente arquivos com as seguintes extens\u00f5es s\u00e3o permitidos: %extensions.","Re-order rows by numerical weight instead of dragging.":"Re-ordernar as linhas por campos n\u00famericos de peso ao inv\u00e9s de arrastar-e-soltar.","Show row weights":"Exibir pesos das linhas","Hide row weights":"Ocultar pesos das linhas","Autocomplete popup":"Popup de autocompletar","Searching for matches...":"Procurando por dados correspondentes...","Hide shortcuts":"Esconder atalhos","Other":"Outros","Close":"Fechar","Log messages":"Mensagens de log","Insert file":"Inserir arquivo"}} };;
/*
	jQuery ColorBox v1.3.31
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	updated: 2013-01-28
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var h=t.createElement(i);return o&&(h.id=U+o),n&&(h.style.cssText=n),e(h)}function n(e){var t=b.length,i=(j+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?T.width():T.height())/100:1)*parseInt(e,10))}function l(e){return _.photo||/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(e)}function r(){var t,i=e.data(N,J);null==i?(_=e.extend({},$),console&&console.log&&console.log("Error: cboxElement missing settings object")):_=e.extend({},i);for(t in _)e.isFunction(_[t])&&"on"!==t.slice(0,2)&&(_[t]=_[t].call(N));_.rel=_.rel||N.rel||e(N).data("rel")||"nofollow",_.href=_.href||e(N).attr("href"),_.title=_.title||N.title,"string"==typeof _.href&&(_.href=e.trim(_.href))}function s(i,o){e(t).trigger(i),e("*",p).trigger(i),o&&o.call(N)}function a(){var e,t,i,o=U+"Slideshow_",n="click."+U;_.slideshow&&b[1]?(t=function(){I.html(_.slideshowStop).unbind(n).bind(et,function(){(_.loop||b[j+1])&&(e=setTimeout(G.next,_.slideshowSpeed))}).bind(Z,function(){clearTimeout(e)}).one(n+" "+tt,i),p.removeClass(o+"off").addClass(o+"on"),e=setTimeout(G.next,_.slideshowSpeed)},i=function(){clearTimeout(e),I.html(_.slideshowStart).unbind([et,Z,tt,n].join(" ")).one(n,function(){G.next(),t()}),p.removeClass(o+"on").addClass(o+"off")},_.slideshowAuto?t():i()):p.removeClass(o+"off "+o+"on")}function d(i){R||(N=i,r(),b=e(N),j=0,"nofollow"!==_.rel&&(b=e("."+V).filter(function(){var t,i=e.data(this,J);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===_.rel}),j=b.index(N),-1===j&&(b=b.add(N),j=b.length-1)),O||(O=P=!0,p.css({visibility:"hidden",display:"block"}),C=o(rt,"LoadedContent","width:0; height:0; overflow:hidden").appendTo(w),K=g.height()+x.height()+w.outerHeight(!0)-w.height(),z=y.width()+v.width()+w.outerWidth(!0)-w.width(),D=C.outerHeight(!0),B=C.outerWidth(!0),_.returnFocus&&(e(N).blur(),e(t).one(it,function(){e(N).focus()})),f.css({opacity:parseFloat(_.opacity),cursor:_.overlayClose?"pointer":"auto",visibility:"visible"}).show(),_.w=h(_.initialWidth,"x"),_.h=h(_.initialHeight,"y"),G.position(),ht&&T.bind("resize."+lt+" scroll."+lt,function(){f.css({width:T.width(),height:T.height(),top:T.scrollTop(),left:T.scrollLeft()})}).trigger("resize."+lt),s(Y,_.onOpen),F.add(H).hide(),S.html(_.close).show()),G.load(!0))}function c(){!p&&t.body&&(X=!1,T=e(i),p=o(rt).attr({id:J,"class":nt?U+(ht?"IE6":"IE"):""}).hide(),f=o(rt,"Overlay",ht?"position:absolute":"").hide(),W=o(rt,"LoadingOverlay").add(o(rt,"LoadingGraphic")),m=o(rt,"Wrapper"),w=o(rt,"Content").append(H=o(rt,"Title"),E=o(rt,"Current"),L=o(rt,"Next"),M=o(rt,"Previous"),I=o(rt,"Slideshow").bind(Y,a),S=o(rt,"Close")),m.append(o(rt).append(o(rt,"TopLeft"),g=o(rt,"TopCenter"),o(rt,"TopRight")),o(rt,!1,"clear:left").append(y=o(rt,"MiddleLeft"),w,v=o(rt,"MiddleRight")),o(rt,!1,"clear:left").append(o(rt,"BottomLeft"),x=o(rt,"BottomCenter"),o(rt,"BottomRight"))).find("div div").css({"float":"left"}),k=o(rt,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),F=L.add(M).add(E).add(I),e(t.body).append(f,p.append(m,k)))}function u(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),d(this))}return p?(X||(X=!0,L.click(function(){G.next()}),M.click(function(){G.prev()}),S.click(function(){G.close()}),f.click(function(){_.overlayClose&&G.close()}),e(t).bind("keydown."+U,function(e){var t=e.keyCode;O&&_.escKey&&27===t&&(e.preventDefault(),G.close()),O&&_.arrowKey&&b[1]&&(37===t?(e.preventDefault(),M.click()):39===t&&(e.preventDefault(),L.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+U,"."+V,i):e("."+V).live("click."+U,i)),!0):!1}var f,p,m,w,g,y,v,x,b,T,C,k,W,H,E,I,L,M,S,F,_,K,z,D,B,N,j,A,O,P,R,q,G,Q,X,$={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},J="colorbox",U="cbox",V=U+"Element",Y=U+"_open",Z=U+"_load",et=U+"_complete",tt=U+"_cleanup",it=U+"_closed",ot=U+"_purge",nt=!e.support.leadingWhitespace,ht=nt&&!i.XMLHttpRequest,lt=U+"_IE6",rt="div";e.colorbox||(e(c),G=e.fn[J]=e[J]=function(t,i){var o=this;if(t=t||{},c(),u()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,J,e.extend({},e.data(this,J)||$,t))}).addClass(V),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&d(o[0])}return o},G.position=function(e,t){function i(e){g[0].style.width=x[0].style.width=w[0].style.width=parseInt(e.style.width,10)-z+"px",w[0].style.height=y[0].style.height=v[0].style.height=parseInt(e.style.height,10)-K+"px"}var o,n,l,r=0,s=0,a=p.offset();T.unbind("resize."+U),p.css({top:-9e4,left:-9e4}),n=T.scrollTop(),l=T.scrollLeft(),_.fixed&&!ht?(a.top-=n,a.left-=l,p.css({position:"fixed"})):(r=n,s=l,p.css({position:"absolute"})),s+=_.right!==!1?Math.max(T.width()-_.w-B-z-h(_.right,"x"),0):_.left!==!1?h(_.left,"x"):Math.round(Math.max(T.width()-_.w-B-z,0)/2),r+=_.bottom!==!1?Math.max(T.height()-_.h-D-K-h(_.bottom,"y"),0):_.top!==!1?h(_.top,"y"):Math.round(Math.max(T.height()-_.h-D-K,0)/2),p.css({top:a.top,left:a.left,visibility:"visible"}),e=p.width()===_.w+B&&p.height()===_.h+D?0:e||0,m[0].style.width=m[0].style.height="9999px",o={width:_.w+B+z,height:_.h+D+K,top:r,left:s},0===e&&p.css(o),p.dequeue().animate(o,{duration:e,complete:function(){i(this),P=!1,m[0].style.width=_.w+B+z+"px",m[0].style.height=_.h+D+K+"px",_.reposition&&setTimeout(function(){T.bind("resize."+U,G.position)},1),t&&t()},step:function(){i(this)}})},G.resize=function(e){O&&(e=e||{},e.width&&(_.w=h(e.width,"x")-B-z),e.innerWidth&&(_.w=h(e.innerWidth,"x")),C.css({width:_.w}),e.height&&(_.h=h(e.height,"y")-D-K),e.innerHeight&&(_.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(C.css({height:"auto"}),_.h=C.height()),C.css({height:_.h}),G.position("none"===_.transition?0:_.speed))},G.prep=function(i){function h(){return _.w=_.w||C.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function r(){return _.h=_.h||C.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(O){var a,d="none"===_.transition?0:_.speed;C.empty().remove(),C=o(rt,"LoadedContent").append(i),C.hide().appendTo(k.show()).css({width:h(),overflow:_.scrolling?"auto":"hidden"}).css({height:r()}).prependTo(w),k.hide(),e(A).css({"float":"none"}),a=function(){function i(){nt&&p[0].style.removeAttribute("filter")}var h,r,a=b.length,c="frameBorder",u="allowTransparency";O&&(r=function(){clearTimeout(q),W.remove(),s(et,_.onComplete)},nt&&A&&C.fadeIn(100),H.html(_.title).add(C).show(),a>1?("string"==typeof _.current&&E.html(_.current.replace("{current}",j+1).replace("{total}",a)).show(),L[_.loop||a-1>j?"show":"hide"]().html(_.next),M[_.loop||j?"show":"hide"]().html(_.previous),_.slideshow&&I.show(),_.preloading&&e.each([n(-1),n(1)],function(){var t,i,o=b[this],n=e.data(o,J);n&&n.href?(t=n.href,e.isFunction(t)&&(t=t.call(o))):t=o.href,l(t)&&(i=new Image,i.src=t)})):F.hide(),_.iframe?(h=o("iframe")[0],c in h&&(h[c]=0),u in h&&(h[u]="true"),_.scrolling||(h.scrolling="no"),e(h).attr({src:_.href,name:(new Date).getTime(),"class":U+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",r).appendTo(C),e(t).one(ot,function(){h.src="//about:blank"}),_.fastIframe&&e(h).trigger("load")):r(),"fade"===_.transition?p.fadeTo(d,1,i):i())},"fade"===_.transition?p.fadeTo(d,0,function(){G.position(0,a)}):G.position(d,a)}},G.load=function(i){var n,a,d,c=G.prep;P=!0,A=!1,N=b[j],i||r(),Q&&p.add(f).removeClass(Q),_.className&&p.add(f).addClass(_.className),Q=_.className,s(ot),s(Z,_.onLoad),_.h=_.height?h(_.height,"y")-D-K:_.innerHeight&&h(_.innerHeight,"y"),_.w=_.width?h(_.width,"x")-B-z:_.innerWidth&&h(_.innerWidth,"x"),_.mw=_.w,_.mh=_.h,_.maxWidth&&(_.mw=h(_.maxWidth,"x")-B-z,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.maxHeight&&(_.mh=h(_.maxHeight,"y")-D-K,_.mh=_.h&&_.h<_.mh?_.h:_.mh),n=_.href,q=setTimeout(function(){W.appendTo(w)},100),_.inline?(d=o(rt).hide().insertBefore(e(n)[0]),e(t).one(ot,function(){d.replaceWith(C.children())}),c(e(n))):_.iframe?c(" "):_.html?c(_.html):l(n)?(e(A=new Image).addClass(U+"Photo").bind("error",function(){_.title=!1,c(o(rt,"Error").html(_.imgError))}).one("load",function(){var e;_.scalePhotos&&(a=function(){A.height-=A.height*e,A.width-=A.width*e},_.mw&&A.width>_.mw&&(e=(A.width-_.mw)/A.width,a()),_.mh&&A.height>_.mh&&(e=(A.height-_.mh)/A.height,a())),_.h&&(A.style.marginTop=Math.max(_.h-A.height,0)/2+"px"),b[1]&&(_.loop||b[j+1])&&(A.style.cursor="pointer",A.onclick=function(){G.next()}),nt&&(A.style.msInterpolationMode="bicubic"),setTimeout(function(){c(A)},1)}),setTimeout(function(){A.src=n},1)):n&&k.load(n,_.data,function(t,i){c("error"===i?o(rt,"Error").html(_.xhrError):e(this).contents())})},G.next=function(){!P&&b[1]&&(_.loop||b[j+1])&&(j=n(1),G.load())},G.prev=function(){!P&&b[1]&&(_.loop||j)&&(j=n(-1),G.load())},G.close=function(){O&&!R&&(R=!0,O=!1,s(tt,_.onCleanup),T.unbind("."+U+" ."+lt),f.fadeTo(200,0),p.stop().fadeTo(300,0,function(){p.add(f).css({opacity:1,cursor:"auto"}).hide(),s(ot),C.empty().remove(),setTimeout(function(){R=!1,s(it,_.onClosed)},1)}))},G.remove=function(){e([]).add(p).add(f).remove(),p=null,e("."+V).removeData(J).removeClass(V),e(t).unbind("click."+U)},G.element=function(){return e(N)},G.settings=$)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('.colorbox-load', context)
      .once('init-colorbox-load', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxInline = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParam = function(name, url){
      if (name == 'fragment') {
        var results = new RegExp('(#[^&#]*)').exec(url);
      }
      else {
        var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
      }
      if (!results) { return ''; }
      return results[1] || '';
    };
    $('.colorbox-inline', context).once('init-colorbox-inline').colorbox({
      transition:settings.colorbox.transition,
      speed:settings.colorbox.speed,
      opacity:settings.colorbox.opacity,
      slideshow:settings.colorbox.slideshow,
      slideshowAuto:settings.colorbox.slideshowAuto,
      slideshowSpeed:settings.colorbox.slideshowSpeed,
      slideshowStart:settings.colorbox.slideshowStart,
      slideshowStop:settings.colorbox.slideshowStop,
      current:settings.colorbox.current,
      previous:settings.colorbox.previous,
      next:settings.colorbox.next,
      close:settings.colorbox.close,
      overlayClose:settings.colorbox.overlayClose,
      maxWidth:settings.colorbox.maxWidth,
      maxHeight:settings.colorbox.maxHeight,
      innerWidth:function(){
        return $.urlParam('width', $(this).attr('href'));
      },
      innerHeight:function(){
        return $.urlParam('height', $(this).attr('href'));
      },
      title:function(){
        return decodeURIComponent($.urlParam('title', $(this).attr('href')));
      },
      iframe:function(){
        return $.urlParam('iframe', $(this).attr('href'));
      },
      inline:function(){
        return $.urlParam('inline', $(this).attr('href'));
      },
      href:function(){
        return $.urlParam('fragment', $(this).attr('href'));
      }
    });
  }
};

})(jQuery);
;
(function(){function C(){var a="{}";if("userDataBehavior"==f){g.load("jStorage");try{a=g.getAttribute("jStorage")}catch(b){}try{r=g.getAttribute("jStorage_update")}catch(c){}h.jStorage=a}D();x();E()}function u(){var a;clearTimeout(F);F=setTimeout(function(){if("localStorage"==f||"globalStorage"==f)a=h.jStorage_update;else if("userDataBehavior"==f){g.load("jStorage");try{a=g.getAttribute("jStorage_update")}catch(b){}}if(a&&a!=r){r=a;var l=p.parse(p.stringify(c.__jstorage_meta.CRC32)),k;C();k=p.parse(p.stringify(c.__jstorage_meta.CRC32));
var d,n=[],e=[];for(d in l)l.hasOwnProperty(d)&&(k[d]?l[d]!=k[d]&&"2."==String(l[d]).substr(0,2)&&n.push(d):e.push(d));for(d in k)k.hasOwnProperty(d)&&(l[d]||n.push(d));s(n,"updated");s(e,"deleted")}},25)}function s(a,b){a=[].concat(a||[]);var c,k,d,n;if("flushed"==b){a=[];for(c in m)m.hasOwnProperty(c)&&a.push(c);b="deleted"}c=0;for(d=a.length;c<d;c++){if(m[a[c]])for(k=0,n=m[a[c]].length;k<n;k++)m[a[c]][k](a[c],b);if(m["*"])for(k=0,n=m["*"].length;k<n;k++)m["*"][k](a[c],b)}}function v(){var a=(+new Date).toString();
if("localStorage"==f||"globalStorage"==f)try{h.jStorage_update=a}catch(b){f=!1}else"userDataBehavior"==f&&(g.setAttribute("jStorage_update",a),g.save("jStorage"));u()}function D(){if(h.jStorage)try{c=p.parse(String(h.jStorage))}catch(a){h.jStorage="{}"}else h.jStorage="{}";z=h.jStorage?String(h.jStorage).length:0;c.__jstorage_meta||(c.__jstorage_meta={});c.__jstorage_meta.CRC32||(c.__jstorage_meta.CRC32={})}function w(){if(c.__jstorage_meta.PubSub){for(var a=+new Date-2E3,b=0,l=c.__jstorage_meta.PubSub.length;b<
l;b++)if(c.__jstorage_meta.PubSub[b][0]<=a){c.__jstorage_meta.PubSub.splice(b,c.__jstorage_meta.PubSub.length-b);break}c.__jstorage_meta.PubSub.length||delete c.__jstorage_meta.PubSub}try{h.jStorage=p.stringify(c),g&&(g.setAttribute("jStorage",h.jStorage),g.save("jStorage")),z=h.jStorage?String(h.jStorage).length:0}catch(k){}}function q(a){if("string"!=typeof a&&"number"!=typeof a)throw new TypeError("Key name must be string or numeric");if("__jstorage_meta"==a)throw new TypeError("Reserved key name");
return!0}function x(){var a,b,l,k,d=Infinity,n=!1,e=[];clearTimeout(G);if(c.__jstorage_meta&&"object"==typeof c.__jstorage_meta.TTL){a=+new Date;l=c.__jstorage_meta.TTL;k=c.__jstorage_meta.CRC32;for(b in l)l.hasOwnProperty(b)&&(l[b]<=a?(delete l[b],delete k[b],delete c[b],n=!0,e.push(b)):l[b]<d&&(d=l[b]));Infinity!=d&&(G=setTimeout(x,Math.min(d-a,2147483647)));n&&(w(),v(),s(e,"deleted"))}}function E(){var a;if(c.__jstorage_meta.PubSub){var b,l=A,k=[];for(a=c.__jstorage_meta.PubSub.length-1;0<=a;a--)b=
c.__jstorage_meta.PubSub[a],b[0]>A&&(l=b[0],k.unshift(b));for(a=k.length-1;0<=a;a--){b=k[a][1];var d=k[a][2];if(t[b])for(var n=0,e=t[b].length;n<e;n++)try{t[b][n](b,p.parse(p.stringify(d)))}catch(g){}}A=l}}var y=window.jQuery||window.$||(window.$={}),p={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&function(a){return String(a).evalJSON()}||y.parseJSON||y.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||y.toJSON};if("function"!==
typeof p.parse||"function"!==typeof p.stringify)throw Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");var c={__jstorage_meta:{CRC32:{}}},h={jStorage:"{}"},g=null,z=0,f=!1,m={},F=!1,r=0,t={},A=+new Date,G,B={isXML:function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?"HTML"!==a.nodeName:!1},encode:function(a){if(!this.isXML(a))return!1;try{return(new XMLSerializer).serializeToString(a)}catch(b){try{return a.xml}catch(c){}}return!1},
decode:function(a){var b="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(a){var b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a);return b};if(!b)return!1;a=b.call("DOMParser"in window&&new DOMParser||window,a,"text/xml");return this.isXML(a)?a:!1}};y.jStorage={version:"0.4.12",set:function(a,b,l){q(a);l=l||{};if("undefined"==typeof b)return this.deleteKey(a),b;if(B.isXML(b))b={_is_xml:!0,xml:B.encode(b)};else{if("function"==typeof b)return;
b&&"object"==typeof b&&(b=p.parse(p.stringify(b)))}c[a]=b;for(var k=c.__jstorage_meta.CRC32,d=p.stringify(b),g=d.length,e=2538058380^g,h=0,f;4<=g;)f=d.charCodeAt(h)&255|(d.charCodeAt(++h)&255)<<8|(d.charCodeAt(++h)&255)<<16|(d.charCodeAt(++h)&255)<<24,f=1540483477*(f&65535)+((1540483477*(f>>>16)&65535)<<16),f^=f>>>24,f=1540483477*(f&65535)+((1540483477*(f>>>16)&65535)<<16),e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16)^f,g-=4,++h;switch(g){case 3:e^=(d.charCodeAt(h+2)&255)<<16;case 2:e^=
(d.charCodeAt(h+1)&255)<<8;case 1:e^=d.charCodeAt(h)&255,e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16)}e^=e>>>13;e=1540483477*(e&65535)+((1540483477*(e>>>16)&65535)<<16);k[a]="2."+((e^e>>>15)>>>0);this.setTTL(a,l.TTL||0);s(a,"updated");return b},get:function(a,b){q(a);return a in c?c[a]&&"object"==typeof c[a]&&c[a]._is_xml?B.decode(c[a].xml):c[a]:"undefined"==typeof b?null:b},deleteKey:function(a){q(a);return a in c?(delete c[a],"object"==typeof c.__jstorage_meta.TTL&&a in c.__jstorage_meta.TTL&&
delete c.__jstorage_meta.TTL[a],delete c.__jstorage_meta.CRC32[a],w(),v(),s(a,"deleted"),!0):!1},setTTL:function(a,b){var l=+new Date;q(a);b=Number(b)||0;return a in c?(c.__jstorage_meta.TTL||(c.__jstorage_meta.TTL={}),0<b?c.__jstorage_meta.TTL[a]=l+b:delete c.__jstorage_meta.TTL[a],w(),x(),v(),!0):!1},getTTL:function(a){var b=+new Date;q(a);return a in c&&c.__jstorage_meta.TTL&&c.__jstorage_meta.TTL[a]?(a=c.__jstorage_meta.TTL[a]-b)||0:0},flush:function(){c={__jstorage_meta:{CRC32:{}}};w();v();s(null,
"flushed");return!0},storageObj:function(){function a(){}a.prototype=c;return new a},index:function(){var a=[],b;for(b in c)c.hasOwnProperty(b)&&"__jstorage_meta"!=b&&a.push(b);return a},storageSize:function(){return z},currentBackend:function(){return f},storageAvailable:function(){return!!f},listenKeyChange:function(a,b){q(a);m[a]||(m[a]=[]);m[a].push(b)},stopListening:function(a,b){q(a);if(m[a])if(b)for(var c=m[a].length-1;0<=c;c--)m[a][c]==b&&m[a].splice(c,1);else delete m[a]},subscribe:function(a,
b){a=(a||"").toString();if(!a)throw new TypeError("Channel not defined");t[a]||(t[a]=[]);t[a].push(b)},publish:function(a,b){a=(a||"").toString();if(!a)throw new TypeError("Channel not defined");c.__jstorage_meta||(c.__jstorage_meta={});c.__jstorage_meta.PubSub||(c.__jstorage_meta.PubSub=[]);c.__jstorage_meta.PubSub.unshift([+new Date,a,b]);w();v()},reInit:function(){C()},noConflict:function(a){delete window.$.jStorage;a&&(window.jStorage=this);return this}};(function(){var a=!1;if("localStorage"in
window)try{window.localStorage.setItem("_tmptest","tmpval"),a=!0,window.localStorage.removeItem("_tmptest")}catch(b){}if(a)try{window.localStorage&&(h=window.localStorage,f="localStorage",r=h.jStorage_update)}catch(c){}else if("globalStorage"in window)try{window.globalStorage&&(h="localhost"==window.location.hostname?window.globalStorage["localhost.localdomain"]:window.globalStorage[window.location.hostname],f="globalStorage",r=h.jStorage_update)}catch(k){}else if(g=document.createElement("link"),
g.addBehavior){g.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(g);try{g.load("jStorage")}catch(d){g.setAttribute("jStorage","{}"),g.save("jStorage"),g.load("jStorage")}a="{}";try{a=g.getAttribute("jStorage")}catch(m){}try{r=g.getAttribute("jStorage_update")}catch(e){}h.jStorage=a;f="userDataBehavior"}else{g=null;return}D();x();"localStorage"==f||"globalStorage"==f?"addEventListener"in window?window.addEventListener("storage",u,!1):document.attachEvent("onstorage",
u):"userDataBehavior"==f&&setInterval(u,1E3);E();"addEventListener"in window&&window.addEventListener("pageshow",function(a){a.persisted&&u()},!1)})()})();;
(function ($) {
  Drupal.viewsSlideshow = Drupal.viewsSlideshow || {};

  /**
   * Views Slideshow Controls
   */
  Drupal.viewsSlideshowControls = Drupal.viewsSlideshowControls || {};

  /**
   * Implement the play hook for controls.
   */
  Drupal.viewsSlideshowControls.play = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].play(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the pause hook for controls.
   */
  Drupal.viewsSlideshowControls.pause = function (options) {
    // Route the control call to the correct control type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].top.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause == 'function') {
        Drupal[Drupal.settings.viewsSlideshowControls[options.slideshowID].bottom.type].pause(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Text Controls
   */

  // Add views slieshow api calls for views slideshow text controls.
  Drupal.behaviors.viewsSlideshowControlsText = {
    attach: function (context) {

      // Process previous link
      $('.views_slideshow_controls_text_previous:not(.views-slideshow-controls-text-previous-processed)', context).addClass('views-slideshow-controls-text-previous-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_previous_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'previousSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process next link
      $('.views_slideshow_controls_text_next:not(.views-slideshow-controls-text-next-processed)', context).addClass('views-slideshow-controls-text-next-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_next_', '');
        $(this).click(function() {
          Drupal.viewsSlideshow.action({ "action": 'nextSlide', "slideshowID": uniqueID });
          return false;
        });
      });

      // Process pause link
      $('.views_slideshow_controls_text_pause:not(.views-slideshow-controls-text-pause-processed)', context).addClass('views-slideshow-controls-text-pause-processed').each(function() {
        var uniqueID = $(this).attr('id').replace('views_slideshow_controls_text_pause_', '');
        $(this).click(function() {
          if (Drupal.settings.viewsSlideshow[uniqueID].paused) {
            Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID, "force": true });
          }
          else {
            Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID, "force": true });
          }
          return false;
        });
      });
    }
  };

  Drupal.viewsSlideshowControlsText = Drupal.viewsSlideshowControlsText || {};

  /**
   * Implement the pause hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.pause = function (options) {
    var pauseText = Drupal.theme.prototype['viewsSlideshowControlsPause'] ? Drupal.theme('viewsSlideshowControlsPause') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(pauseText);
  };

  /**
   * Implement the play hook for text controls.
   */
  Drupal.viewsSlideshowControlsText.play = function (options) {
    var playText = Drupal.theme.prototype['viewsSlideshowControlsPlay'] ? Drupal.theme('viewsSlideshowControlsPlay') : '';
    $('#views_slideshow_controls_text_pause_' + options.slideshowID + ' a').text(playText);
  };

  // Theme the resume control.
  Drupal.theme.prototype.viewsSlideshowControlsPause = function () {
    return Drupal.t('Resume');
  };

  // Theme the pause control.
  Drupal.theme.prototype.viewsSlideshowControlsPlay = function () {
    return Drupal.t('Pause');
  };

  /**
   * Views Slideshow Pager
   */
  Drupal.viewsSlideshowPager = Drupal.viewsSlideshowPager || {};

  /**
   * Implement the transitionBegin hook for pagers.
   */
  Drupal.viewsSlideshowPager.transitionBegin = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].transitionBegin(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the goToSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.goToSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].goToSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the previousSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.previousSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].previousSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };

  /**
   * Implement the nextSlide hook for pagers.
   */
  Drupal.viewsSlideshowPager.nextSlide = function (options) {
    // Route the pager call to the correct pager type.
    // Need to use try catch so we don't have to check to make sure every part
    // of the object is defined.
    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].top.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }

    try {
      if (typeof Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type != "undefined" && typeof Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide == 'function') {
        Drupal[Drupal.settings.viewsSlideshowPager[options.slideshowID].bottom.type].nextSlide(options);
      }
    }
    catch(err) {
      // Don't need to do anything on error.
    }
  };


  /**
   * Views Slideshow Pager Fields
   */

  // Add views slieshow api calls for views slideshow pager fields.
  Drupal.behaviors.viewsSlideshowPagerFields = {
    attach: function (context) {
      // Process pause on hover.
      $('.views_slideshow_pager_field:not(.views-slideshow-pager-field-processed)', context).addClass('views-slideshow-pager-field-processed').each(function() {
        // Parse out the location and unique id from the full id.
        var pagerInfo = $(this).attr('id').split('_');
        var location = pagerInfo[2];
        pagerInfo.splice(0, 3);
        var uniqueID = pagerInfo.join('_');

        // Add the activate and pause on pager hover event to each pager item.
        if (Drupal.settings.viewsSlideshowPagerFields[uniqueID][location].activatePauseOnHover) {
          $(this).children().each(function(index, pagerItem) {
            var mouseIn = function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
              Drupal.viewsSlideshow.action({ "action": 'pause', "slideshowID": uniqueID });
            }
            
            var mouseOut = function() {
              Drupal.viewsSlideshow.action({ "action": 'play', "slideshowID": uniqueID });
            }
          
            if (jQuery.fn.hoverIntent) {
              $(pagerItem).hoverIntent(mouseIn, mouseOut);
            }
            else {
              $(pagerItem).hover(mouseIn, mouseOut);
            }
            
          });
        }
        else {
          $(this).children().each(function(index, pagerItem) {
            $(pagerItem).click(function() {
              Drupal.viewsSlideshow.action({ "action": 'goToSlide', "slideshowID": uniqueID, "slideNum": index });
            });
          });
        }
      });
    }
  };

  Drupal.viewsSlideshowPagerFields = Drupal.viewsSlideshowPagerFields || {};

  /**
   * Implement the transitionBegin hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.transitionBegin = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_'+ pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }

  };

  /**
   * Implement the goToSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.goToSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + options.slideNum).addClass('active');
    }
  };

  /**
   * Implement the previousSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.previousSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');

      // If we are on the first pager then activate the last pager.
      // Otherwise activate the previous pager.
      if (pagerNum == 0) {
        pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length() - 1;
      }
      else {
        pagerNum--;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + pagerNum).addClass('active');
    }
  };

  /**
   * Implement the nextSlide hook for pager fields pager.
   */
  Drupal.viewsSlideshowPagerFields.nextSlide = function (options) {
    for (pagerLocation in Drupal.settings.viewsSlideshowPager[options.slideshowID]) {
      // Get the current active pager.
      var pagerNum = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"].active').attr('id').replace('views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_', '');
      var totalPagers = $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').length();

      // If we are on the last pager then activate the first pager.
      // Otherwise activate the next pager.
      pagerNum++;
      if (pagerNum == totalPagers) {
        pagerNum = 0;
      }

      // Remove active class from pagers
      $('[id^="views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '"]').removeClass('active');

      // Add active class to active pager.
      $('#views_slideshow_pager_field_item_' + pagerLocation + '_' + options.slideshowID + '_' + slideNum).addClass('active');
    }
  };


  /**
   * Views Slideshow Slide Counter
   */

  Drupal.viewsSlideshowSlideCounter = Drupal.viewsSlideshowSlideCounter || {};

  /**
   * Implement the transitionBegin for the slide counter.
   */
  Drupal.viewsSlideshowSlideCounter.transitionBegin = function (options) {
    $('#views_slideshow_slide_counter_' + options.slideshowID + ' .num').text(options.slideNum + 1);
  };

  /**
   * This is used as a router to process actions for the slideshow.
   */
  Drupal.viewsSlideshow.action = function (options) {
    // Set default values for our return status.
    var status = {
      'value': true,
      'text': ''
    }

    // If an action isn't specified return false.
    if (typeof options.action == 'undefined' || options.action == '') {
      status.value = false;
      status.text =  Drupal.t('There was no action specified.');
      return error;
    }

    // If we are using pause or play switch paused state accordingly.
    if (options.action == 'pause') {
      Drupal.settings.viewsSlideshow[options.slideshowID].paused = 1;
      // If the calling method is forcing a pause then mark it as such.
      if (options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 1;
      }
    }
    else if (options.action == 'play') {
      // If the slideshow isn't forced pause or we are forcing a play then play
      // the slideshow.
      // Otherwise return telling the calling method that it was forced paused.
      if (!Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce || options.force) {
        Drupal.settings.viewsSlideshow[options.slideshowID].paused = 0;
        Drupal.settings.viewsSlideshow[options.slideshowID].pausedForce = 0;
      }
      else {
        status.value = false;
        status.text += ' ' + Drupal.t('This slideshow is forced paused.');
        return status;
      }
    }

    // We use a switch statement here mainly just to limit the type of actions
    // that are available.
    switch (options.action) {
      case "goToSlide":
      case "transitionBegin":
      case "transitionEnd":
        // The three methods above require a slide number. Checking if it is
        // defined and it is a number that is an integer.
        if (typeof options.slideNum == 'undefined' || typeof options.slideNum !== 'number' || parseInt(options.slideNum) != (options.slideNum - 0)) {
          status.value = false;
          status.text = Drupal.t('An invalid integer was specified for slideNum.');
        }
      case "pause":
      case "play":
      case "nextSlide":
      case "previousSlide":
        // Grab our list of methods.
        var methods = Drupal.settings.viewsSlideshow[options.slideshowID]['methods'];

        // if the calling method specified methods that shouldn't be called then
        // exclude calling them.
        var excludeMethodsObj = {};
        if (typeof options.excludeMethods !== 'undefined') {
          // We need to turn the excludeMethods array into an object so we can use the in
          // function.
          for (var i=0; i < excludeMethods.length; i++) {
            excludeMethodsObj[excludeMethods[i]] = '';
          }
        }

        // Call every registered method and don't call excluded ones.
        for (i = 0; i < methods[options.action].length; i++) {
          if (Drupal[methods[options.action][i]] != undefined && typeof Drupal[methods[options.action][i]][options.action] == 'function' && !(methods[options.action][i] in excludeMethodsObj)) {
            Drupal[methods[options.action][i]][options.action](options);
          }
        }
        break;

      // If it gets here it's because it's an invalid action.
      default:
        status.value = false;
        status.text = Drupal.t('An invalid action "!action" was specified.', { "!action": options.action });
    }
    return status;
  };
})(jQuery);
;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", "event", "Downloads", Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(), Drupal.googleanalytics.getPageUrl(this.href));
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", "pageview", { page: Drupal.googleanalytics.getPageUrl(this.href) });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", "event", "Mails", "Click", this.href.substring(7));
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode != 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains)) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", "event", "Outbound links", "Click", this.href);
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga('send', 'pageview', location.pathname + location.search + location.hash);
    }
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function () {
    var href = $.colorbox.element().attr("href");
    if (href) {
      ga("send", "pageview", { page: Drupal.googleanalytics.getPageUrl(href) });
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
}

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
}

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
}

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
}

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
}

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
}

})(jQuery);
;
