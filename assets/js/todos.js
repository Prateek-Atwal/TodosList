$("ul").on("click","li",function(){//jQuery event listeners are applied to only those elements which are present 
	// when the page loads for the first time. That's why here we use ul and 
	// listen for just li in the ul as the ul would be definitely present when the page loads.
	// with .click listener we cannot listen events fired on dynamically added elements
	

	// This method is correct but we have better and efficient method  

	//1. check if the todo is completed or not using if else
	// console.log($(this).css("color"));
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	$(this).css({
	// 		color:"black",
	// 		textDecoration:"none"
	// 	});		
	// }
	// else{
	// 	$(this).css({
	// 		color:"gray",
	// 		textDecoration:"line-through"
	// 	});
	// }

// 1. Efficient- Toggle class
	$(this).toggleClass("completed");

});
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();//to stop event bubbling
});
$("input[type='text']").keypress(function(event){
	if(event.which=== 13){
		var todoContent=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'	></i> </span>"+todoContent+"</li>");
	}
});
//toggle the form using icon
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});