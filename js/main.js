$(document).ready(function() {
	var val = "";
	updateBookList(val);
	// filter the books by search input
	$("#search").keyup(function() {
		var val = $.trim(this.value).toUpperCase();
		updateBookList(val);
	});
});

// place all the books
function showBooks(books) {
	$.each(books, function(i) {
		$("#booksList").append("<div class='book well col-xs-12'>");
		$(".book").last().append("<div class='bookDescription overlay'>" + books[i].descripcion + "</div>");
		$(".book").last().append("<img src='" + books[i].portada + "' alt='bookCover' width='248.4px' height='248.4px'>");
		$(".book").last().append("<div class='bookTitle'>" + books[i].titulo + "</div>");
		$(".book").last().append("<div>Idioma: " + "<span class='text-uppercase'>" + books[i].idioma + "</span></div>");
	})
}

// load the booklist
function updateBookList(val) {
	$.getJSON("https://micuento.com/test/get_cuentos/" + val, function(data) {
		$("#booksList").empty();
		showBooks(data.cuentos);
	});
}