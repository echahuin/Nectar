$(document).scroll(function(){
    $('.navbar').toggleClass('scrolled', $(this).scrollTop() > $('.navbar').height());
  });
  (function () {
        var options = {
            whatsapp: "+5491154237204", // WhatsApp number
            call_to_action: "Hable con nosotros", // Call to action
            position: "right", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
    
    (function(){
      emailjs.init("user_Tig0bFGN8WnM1kWzoJWWw");
   })();

    // function myAlertFunction() {
    //   alert("You selected some text!");
    // }

    // function vermas(id){
    // if(id==="mas"){
    // document.getElementById("desplegar").style.display="block";   
    // document.getElementById("mas").style.display="none"; 
    // }
    // else{
    // document.getElementById("desplegar").style.display="none";
    // document.getElementById("mas").style.display="inline";
    // }
//     // }
//     $(document).ready(function(){

//       var height = $(window).height();

//       $('#div2').height(height);
// });

  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      from_name: '',
      from_email: '',
    },
    methods: {
      //
      enviar(){
        let data = {
            from_name: this.from_name,
            from_email: this.from_email
        };
        
        emailjs.send("gmail","template_Yv5uIFz4", data)
        .then(function(response) {
            if(response.text === 'OK'){
                alert('El correo se ha enviado de forma exitosa');
            }
           console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        }, function(err) {
            alert('Ocurrió un problema al enviar el correo');
           console.log("FAILED. error=", err);
        });
      } 
      //
    },
    computed: {
    },
  })
