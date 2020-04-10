$(document).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
  });
  (function () {
        var options = {
            whatsapp: "+5491151402739", // WhatsApp number
            call_to_action: "Hable con nosotros", // Call to action
            position: "right", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
    function myAlertFunction() {
      alert("You selected some text!");
    }
    function vermas(id){
    if(id==="mas"){
    document.getElementById("desplegar").style.display="block";   
    document.getElementById("mas").style.display="none"; 
    }
    else{
    document.getElementById("desplegar").style.display="none";
    document.getElementById("mas").style.display="inline";
    }
    }
    $(document).ready(function(){

      var height = $(window).height();

      $('#div2').height(height);
});

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
    },
    methods: {
    
    },
    computed: {
    },
  })