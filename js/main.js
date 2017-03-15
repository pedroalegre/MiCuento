$(document).ready(function() {
	$.getJSON("https://micuento.com/test/get_cuentos/", function(data) {
		showBooks(data.cuentos);
	});

	// filter the books by search input
	$("#search").keyup(function() {
		var $cells = $.merge($(".bookTitle"), $(".bookDescription"));
		var val = $.trim(this.value).toUpperCase();
		if (val === "")
			$cells.parent().show();
		else {
			$cells.parent().hide();
			$cells.filter(function() {
				return -1 != $(this).text().toUpperCase().indexOf(val);
			}).parent().show();
		}
	});
});

// place all the books
function showBooks(books) {
	$.each(books, function(i) {
		$("#booksList").append("<div class='book well'>");
		$(".book").last().append("<img src='" + books[i].portada + "' alt='bookCover' width='248.4px'>");
		$(".book").last().append("<div class='bookTitle'>" + books[i].titulo + "</div>");
		$(".book").last().append("<div>Idioma: " + "<span class='text-uppercase'>" + books[i].idioma + "</span></div>");
		$(".book").last().append("<div class='bookDescription'>" + books[i].descripcion + "</div>");
	})
}