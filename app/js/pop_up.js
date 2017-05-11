//Обатная связь + валидация
function fadeOut(el){
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .1) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
}

// fade in

function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}

                       function myFunctionPop_() {
                            fadeIn(document.getElementById('myfond_gris'));
                            var iddiv = document.getElementById('shopia-footer-content-up-shops-form-button_pop_up').getAttribute("iddiv");
                            fadeIn(document.getElementById(iddiv));	
                            document.getElementById('myfond_gris').setAttribute('opendiv', iddiv);	
                    
                        };

			function myFunctionPop1_() {
			    var iddiv = document.getElementById('myfond_gris').getAttribute("opendiv"); 			
			    fadeOut(document.getElementById('myfond_gris'));
			    fadeOut(document.getElementById(iddiv));
			   
			}
                       
			function myFunctionPop2_() {
				var valid = true;
				var re = /^\w$/;
        			if (((document.getElementById("user_name").value.length < 3)||(document.getElementById("user_name").value.length > 20))&&(!re.test(document.getElementById("user_name").value)))	
        			{
                			valid = false;
					document.getElementById("label_user").style.color="red";
					document.getElementById("user_name").value="";
				}
				else
				{
					document.getElementById("label_user").style.color="black";
				}

				var re_e= /.+@.+\..+/i;
				if (!re_e.test(document.getElementById("mail").value))
				{
					valid = false;
					document.getElementById("label_mail").style.color="red";
					document.getElementById("mail").value="";
				}
				else
				{
					document.getElementById("label_mail").style.color="black";
				}
	
				if (document.getElementById("subject").selectedIndex == 0)
				{
					valid = false;
					document.getElementById("label_subject").style.color="red";
				}
				else
				{
					document.getElementById("label_subject").style.color="black";
				}

				if (valid)
				{
                            		var iddiv = document.getElementById('myfond_gris').getAttribute('opendiv');
                            		fadeOut(document.getElementById("myfond_gris"));
                            		fadeOut(document.getElementById(iddiv));

					document.getElementById("mail").value="";
				 	document.getElementById("user_name").value="";	
					document.getElementById("message").value="";
					document.getElementById("subject").selectedIndex = 0;
					document.getElementById("label_mail").style.color="black";
					document.getElementById("label_user").style.color="black";
					document.getElementById("label_subject").style.color="black";
				}	
 			}
