//загрузка текста из json
window.onload=function(){
	function httpGet(url) {
		return new Promise(function(resolve, reject) {
			var xhr = new XMLHttpRequest();
    			xhr.open('GET', url, true);

    			xhr.onload = function() {
      				if (this.status == 200) {
        				resolve(xhr.responseText);
      				} else {
        				var error = new Error(this.statusText);
        				error.code = this.status;
        				reject(error);
      				}
    			};

    			xhr.onerror = function() {
      				reject(new Error("Network Error"));
    			};

    			xhr.send();
  		});

	}
	
	httpGet("./js/shopia-header.json").then( function f1(result) {
  			var data = JSON.parse(result); 
			document.getElementById("telephon").innerHTML=data["telephon"];
          		document.getElementById("welcome").innerHTML=data["welcome"];
          		document.getElementById("vert1").innerHTML=data["vert1"];
          		document.getElementById("vert2").innerHTML=data["vert2"];
          		document.getElementById("vert3").innerHTML=data["vert3"];
          		document.getElementById("account").innerHTML=data["account"];
          		document.getElementById("whistlist").innerHTML=data["whistlist"];
          		document.getElementById("login").innerHTML=data["login"];
  			return 'f1';
		});

	httpGet("./js/shopia-section-one.json").then( function f2(result) {
  			var data = JSON.parse(result); 
			document.getElementById("home").innerHTML=data["home"];
          		document.getElementById("gallery").innerHTML=data["gallery"];
          		document.getElementById("categories").innerHTML=data["categories"];
          		document.getElementById("pages").innerHTML=data["pages"];
          		document.getElementById("rupiah").innerHTML=data["rupiah"];
          		document.getElementById("dollar").innerHTML=data["dollar"];
  			return 'f2';
		});

	httpGet("./js/shopia-section-two.json").then( function f3(result) {
  			var data = JSON.parse(result); 
			document.getElementById("mid-season").innerHTML=data["mid-season"];
         		document.getElementById("sale").innerHTML=data["sale"];
          		document.getElementById("50off").innerHTML=data["50off"];
          		document.getElementById("up").innerHTML=data["up"];
  			return 'f3';
		});

		httpGet("./js/shopia-footer.json").then( function f7(result) {
  			var data = JSON.parse(result); 
			document.getElementById("shops").innerHTML=data["shops"];
          		document.getElementById("newin").innerHTML=data["newin"];
          		document.getElementById("women").innerHTML=data["women"];
          		document.getElementById("men").innerHTML=data["men"];
          		document.getElementById("shoes").innerHTML=data["shoes"];
          		document.getElementById("bags").innerHTML=data["bags"];
          		document.getElementById("topb").innerHTML=data["topb"];
          		document.getElementById("sale_special").innerHTML=data["sale_special"];
          		document.getElementById("lookbook").innerHTML=data["lookbook"];
          		document.getElementById("information").innerHTML=data["information"];
          		document.getElementById("about").innerHTML=data["about"];
          		document.getElementById("customer_service").innerHTML=data["customer_service"];
          		document.getElementById("new_collection").innerHTML=data["new_collection"];
          		document.getElementById("best_sellers").innerHTML=data["best_sellers"];
          		document.getElementById("Manufacturers").innerHTML=data["Manufacturers"];
          		document.getElementById("privacy").innerHTML=data["privacy"];
          		document.getElementById("terms").innerHTML=data["terms"];
          		document.getElementById("blog").innerHTML=data["blog"];
          		document.getElementById("customer_s").innerHTML=data["customer_s"];
          		document.getElementById("serch_terms").innerHTML=data["serch_terms"];
          		document.getElementById("advanced_s").innerHTML=data["advanced_s"];
          		document.getElementById("order_returns").innerHTML=data["order_returns"];
          		document.getElementById("contact_us").innerHTML=data["contact_us"];
          		document.getElementById("rss").innerHTML=data["rss"];
          		document.getElementById("help").innerHTML=data["help"];
          		document.getElementById("consultant").innerHTML=data["consultant"];
          		document.getElementById("store_location").innerHTML=data["store_location"];
          		document.getElementById("stay_conn").innerHTML=data["stay_conn"];
          		document.getElementById("subscribe").innerHTML=data["subscribe"];
         		document.getElementById("shopia_fashion_store").innerHTML=data["shopia_fashion_store"];
  			return 'f7';
		});

		httpGet("./js/preload_and_other.json").then( function f7(result) {
  			var data = JSON.parse(result); 
			document.getElementById("please_message").innerHTML=data["please_message"];
			document.getElementById("box_4").innerHTML=data["box_4"];
			document.getElementById("label_user").innerHTML=data["label_user"];
			document.getElementById("label_mail").innerHTML=data["label_mail"];
			document.getElementById("label_subject").innerHTML=data["label_subject"];
			document.getElementById("select_message").innerHTML=data["select_message"];
			document.getElementById("select_error").innerHTML=data["select_error"];
			document.getElementById("select_wish").innerHTML=data["select_wish"];
			document.getElementById("select_please").innerHTML=data["select_please"];
			document.getElementById("hello").innerHTML=data["hello"];
			document.getElementById("label_message").innerHTML=data["label_message"];
			document.getElementById("mymagicoverbox_pop_id").innerHTML=data["mymagicoverbox_pop_id"];
			document.getElementById("mymagicoverbox_fermer_id").innerHTML=data["mymagicoverbox_fermer_id"];
  			return 'f7';
		});







};
