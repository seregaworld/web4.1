//гамбургер
window.onload=function(){	
    document.getElementById('toggle-nav').onclick=function() {
		document.getElementById('toggle-nav').classList.toggle('active');
		document.getElementById('ret').classList.toggle('active');
	}
}

