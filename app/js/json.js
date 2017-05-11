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

	httpGet("./js/shopia-section-three.json").then( function f4(result) {
  			var data = JSON.parse(result); 
			document.getElementById("free").innerHTML=data["free"];
          		document.getElementById("order_min").innerHTML=data["order_min"];
          		document.getElementById("30days").innerHTML=data["30days"];
          		document.getElementById("money").innerHTML=data["money"];
          		document.getElementById("support").innerHTML=data["support"];
          		document.getElementById("lifestyme").innerHTML=data["lifestyme"];
  			return 'f4';
		});

	httpGet("./js/shopia-section-four.json").then( function f5(result) {
  			var data = JSON.parse(result); 
			document.getElementById("summer").innerHTML=data["summer"];
          		document.getElementById("handpicked").innerHTML=data["handpicked"];
          		document.getElementById("201").innerHTML=data["201"];
          		document.getElementById("procent1").innerHTML=data["procent1"];
          		document.getElementById("add1").innerHTML=data["add1"];
          		document.getElementById("202").innerHTML=data["202"];
          		document.getElementById("procent2").innerHTML=data["procent2"];
          		document.getElementById("add2").innerHTML=data["add2"];
          		document.getElementById("203").innerHTML=data["203"];
          		document.getElementById("procent3").innerHTML=data["procent3"];
          		document.getElementById("add3").innerHTML=data["add3"];
          		document.getElementById("204").innerHTML=data["204"];
          		document.getElementById("procent4").innerHTML=data["procent4"];
          		document.getElementById("add4").innerHTML=data["add4"];
          		document.getElementById("401").innerHTML=data["401"];
          		document.getElementById("procent5").innerHTML=data["procent5"];
          		document.getElementById("add13").innerHTML=data["add13"];
          		document.getElementById("402").innerHTML=data["402"];
          		document.getElementById("procent6").innerHTML=data["procent6"];
          		document.getElementById("add14").innerHTML=data["add14"];
          		document.getElementById("403").innerHTML=data["403"];
          		document.getElementById("procent7").innerHTML=data["procent7"];
          		document.getElementById("add15").innerHTML=data["add15"];
          		document.getElementById("404").innerHTML=data["404"];
          		document.getElementById("procent8").innerHTML=data["procent8"];
          		document.getElementById("add16").innerHTML=data["add16"];
          		document.getElementById("add5").innerHTML=data["add5"];
          		document.getElementById("add6").innerHTML=data["add6"];
          		document.getElementById("add7").innerHTML=data["add7"];
          		document.getElementById("add8").innerHTML=data["add8"];
          		document.getElementById("add9").innerHTML=data["add9"];
          		document.getElementById("add10").innerHTML=data["add10"];
          		document.getElementById("add11").innerHTML=data["add11"];
          		document.getElementById("add12").innerHTML=data["add12"];
          		document.getElementById("our").innerHTML=data["our"];
  			return 'f5';
		});

		httpGet("./js/shopia-section-five.json").then( function f6(result) {
  			var data = JSON.parse(result); 
			document.getElementById("says").innerHTML=data["says"];
          		document.getElementById("sed1").innerHTML=data["sed1"];
          		document.getElementById("sandra").innerHTML=data["sandra"];
          		document.getElementById("fashion").innerHTML=data["fashion"];
          		document.getElementById("sed2").innerHTML=data["sed2"];
          		document.getElementById("sheikh").innerHTML=data["sheikh"];
          		document.getElementById("designer").innerHTML=data["designer"];
  			return 'f6';
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
