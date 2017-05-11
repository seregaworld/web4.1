//задержка пока не загрузилась страница	 
function ready() {

	setTimeout(function(){fadeOut(document.getElementById('page-preloader'))},5000);
}
document.addEventListener("DOMContentLoaded", ready);

