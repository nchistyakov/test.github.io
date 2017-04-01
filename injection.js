// var script = document.createElement('script');
// script.innerHTML = 'window.user_permissions = ["admin"];';
// script.innerHTML+='window.user_pro_member = true;';
// script.innerHTML+='window.user_has_pro_permissions = true;';

// document.getElementsByTagName('head')[0].appendChild(script);
    setInterval(function() {
              console.log('inject');
          window.user_permissions = ['admin'];
          window.user_pro_member = true;
          window.user_has_pro_permissions = true
    }, 0);