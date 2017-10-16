// Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("complited");
});

// Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
		// extract input value
		var todoText = $(this).val();
		// create new <li> and add to <ul>
		$("ul").append("<li><span>X</span> " + todoText + "</li>");
		$(this).val("");
	}
});