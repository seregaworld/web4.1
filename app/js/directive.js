myApp.directive("myDirective", function(MyServiceREST){
	return function (scope, element, attrs){
		var promiseObj=MyServiceREST.getProduct();
		promiseObj.then(function(value){
			var data = value;
			scope.product_title="Products!"
			if (angular.isArray(data)){
				console.log(data);
				for (var i=0; i<data.length; i++){
					var div_elem = angular.element("<div align='center'>");
            				element.append(div_elem);
					
					var div_lit_elem = angular.element("<div align='center'>");
					div_lit_elem.css("background-color","yellow");
					var p_name=angular.element("<p align='center'>");
					p_name.css("cursor", "pointer");
					p_name.css("font-size", "16px");
					p_name.css("font-family", 'LatoRegular');
					p_name.css("color", 'green');
					
					div_lit_elem.append(p_name.text(i+1+") "+data[i].name_product));
					div_lit_elem.append(angular.element('<p>').text("Resource: " + data[i].res));
					div_lit_elem.append(angular.element('<p>').text("Date: "+data[i].day));
					div_lit_elem.append(angular.element('<p>').text("Product code: "+data[i]._id));
					div_elem.append(div_lit_elem);
				}
			}
		})
	};
});
