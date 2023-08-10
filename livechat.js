
(function(d,t) {
  var BASE_URL="https://chat.uaiz.app.br";
  var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
  g.src=BASE_URL+"/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g,s);
  g.onload=function(){
    window.chatwootSDK.run({
      websiteToken: 'z2DxJENd1CckWcrDxVH1mD25',
      baseUrl: BASE_URL
    })
  }
})(document,"script");
