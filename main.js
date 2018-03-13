$(document).ready(function() {
	$("h1").on("click", function() {
		console.log('hello')
		$(".change").removeClass("show")
		$(this).siblings(".change").addClass("show")
	})
})