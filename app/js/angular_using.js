var myApp=angular.module("myApp", ["ui.router"]);

myApp.factory('MyServiceREST', function($http, $q){
	return{
		getProduct:function(){
			var deferred = $q.defer()
			$http.get("/api/product").then(function success(response){
				deferred.resolve(response.data);
			},function error(response){
				deferred.reject(response.status);
			});
			return deferred.promise;
		},
		getProductId:function(Id){
			var deferred = $q.defer()
			$http.get("/api/product/"+Id).then(function success(response){
				deferred.resolve(response.data);
			},function error(response){
				deferred.reject(response.status);
			});
			return deferred.promise;
		},
		postProduct: function(data){
			console.log(data);
			$http.post("/api/product", data)
			.success(function (data, status, headers, config){
				console.log(status);
			})
			.error(function (data, status, headers, config){
				console.log(status);
			});
		},
		putProduct: function(data){
			$http.put("/api/product", data)
			.success(function (data, status, headers, config){
				console.log(status);
			})
			.error(function (data, status, headers, config){
				console.log(status);
			});
		},
		deleteProduct: function(Id){
			$http.delete("/api/product/"+Id)
			.success(function (data, status, headers, config){
				console.log(status);
			})
			.error(function (data, status, headers, config){
				console.log(status);
			});
		}
	}
});

myApp.controller("MainController", function MainController($scope, $http, MyServiceREST){
	$scope.new_product_title="Insert product!";
	$scope.prName_product="Product";
	$scope.prRes="Resource";
	$scope.prDay="Day (supply)";
	$scope.button_ins="Save";
	$scope.title_but="About the product!";
	$scope.title_choin="Select the product by the code of the product";
	$scope.new_info_title="More about the product";
	
	$scope.pd_product_title="PUT AND DELETE";
	$scope.pd_title_choin="Product code";
	$scope.get_but="Update";
	$scope.delete_but="Delete";
	$scope.pdName_product="Product";
	$scope.pdRes="Resource";
	$scope.pdDay="Day (supply)";	
	$scope.put_but="Save";			
		
	$scope.postTovar = function(name_product_a,res_a, day_a, info_a) {
		MyServiceREST.postProduct(JSON.stringify({
						name_product: name_product_a,
						res: res_a,
						day: day_a,
						info: info_a
						})
		);
		document.getElementById("name_pr").value="";
		document.getElementById("res_pr").value="";
		document.getElementById("day_pr").value="";
		document.getElementById("info_pr").value="";
	};
	$scope.getId = function(Id) {
		var promiseObj=MyServiceREST.getProductId(Id);
		promiseObj.then(function(value){
			var data = value;
			$scope.infName_product=data.name_product;
			$scope.infRes=data.res;
			$scope.infDay=data.day;
			$scope.infInfo=data.info;
		});
	};
	$scope.getId1 = function(Id) {
		var promiseObj=MyServiceREST.getProductId(Id);
		promiseObj.then(function(value){
			var data = value;
			document.getElementById("pdname").value=data.name_product;
			document.getElementById("pdres").value=data.res;
			document.getElementById("pdday").value=data.day;
			document.getElementById("pdinfo").value=data.info;
		});
		document.getElementById("id_pr").value="";
	};
	$scope.putProduct = function(id_s) {
		console.log(document.getElementById("pdname").value);
		var name_product_a= document.getElementById("pdname").value;
		var res_a= document.getElementById("pdres").value;
		var day_a= document.getElementById("pdday").value;
		var info_a= document.getElementById("pdinfo").value;
		console.log(info_a);
		MyServiceREST.putProduct(JSON.stringify({
						id: id_s,
						name_product: name_product_a,
						res: res_a,
						day: day_a,
						info: info_a
						})
		);
		document.getElementById("pdname").value="";
		document.getElementById("pdres").value="";
		document.getElementById("pdday").value="";
		document.getElementById("pdinfo").value="";
	};
	$scope.deleteProduct = function(id_s) {
		MyServiceREST.deleteProduct(id_s);
		document.getElementById("id_pr").value="";
	};





	//----------------------------------------этот блок не относится к заданию----------
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

		};
		httpGet("./js/shopia-section-three.json").then( function f4(result) {
  			var data = JSON.parse(result); 
			$scope.free=data["free"];
          		$scope.order_min=data["order_min"];
          		$scope.k30days=data["30days"];
          		$scope.money=data["money"];
          		$scope.support=data["support"];
          		$scope.lifestyme=data["lifestyme"];
  			return 'f4';
		});

		httpGet("./js/shopia-section-four.json").then( function f5(result) {
  			var data = JSON.parse(result); 
			$scope.summer=data["summer"];
          		$scope.handpicked=data["handpicked"];
          		$scope.e201=data["201"];
          		$scope.procent1=data["procent1"];
          		$scope.add1=data["add1"];
          		$scope.e202=data["202"];
          		$scope.procent2=data["procent2"];
          		$scope.add2=data["add2"];
          		$scope.e203=data["203"];
          		$scope.procent3=data["procent3"];
          		$scope.add3=data["add3"];
          		$scope.e204=data["204"];
          		$scope.procent4=data["procent4"];
          		$scope.add4=data["add4"];
          		$scope.e401=data["401"];
          		$scope.procent5=data["procent5"];
          		$scope.add13=data["add13"];
          		$scope.e402=data["402"];
          		$scope.procent6=data["procent6"];
          		$scope.add14=data["add14"];
          		$scope.e403=data["403"];
          		$scope.procent7=data["procent7"];
          		$scope.add15=data["add15"];
          		$scope.e404=data["404"];
          		$scope.procent8=data["procent8"];
          		$scope.add16=data["add16"];
          		$scope.add5=data["add5"];
          		$scope.add6=data["add6"];
          		$scope.add7=data["add7"];
          		$scope.add8=data["add8"];
          		$scope.add9=data["add9"];
          		$scope.add10=data["add10"];
          		$scope.add11=data["add11"];
          		$scope.add12=data["add12"];
          		$scope.our=data["our"];
  			return 'f5';
		});

		httpGet("./js/shopia-section-five.json").then( function f6(result) {
  			var data = JSON.parse(result); 
			$scope.says=data["says"];
          		$scope.sed1=data["sed1"];
          		$scope.sandra=data["sandra"];
          		$scope.fashion=data["fashion"];
          		$scope.sed2=data["sed2"];
          		$scope.sheikh=data["sheikh"];
          		$scope.designer=data["designer"];
  			return 'f6';
		});


	//----------------------------------------конец блока не относящегося к заданию---------
			
});

myApp.config(function($stateProvider, $urlRouterProvider){
	    console.log(true);
        
            $urlRouterProvider.otherwise("/newsList");
                $stateProvider.state('home', {
                    url: "/home",
                    templateUrl:"../html/home.html"
                    })
		   
		 .state('newsList', {
                    url: "/newsList",
                    templateUrl:"../html/newsList.html"
                    })
		.state('postList', {
                    url: "/postList",
                    templateUrl:"../html/postList.html"
                    })
		.state('infoList', {
                    url: "/infoList",
                    templateUrl:"../html/infoList.html"
                    })
		.state('putDelete', {
                    url: "/putDelete",
                    templateUrl:"../html/putDelete.html"
                    })
});



