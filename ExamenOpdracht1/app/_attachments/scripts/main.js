function createOrder()
{
	// waarde van inputveld met id lastName opvragen
	//console.log($("#lastName").val());
	
	var course = = $("#course").val();
	var quantity = $("#quantity").val();
	var tableNumber = $("#tableNumber").val();
	var comments = $("#comments").val();
	var orderTime = $("#orderTime").val();
	
	// leeg JSON document
	var order = {};
	
	order.course = course;
	order.quantity = parseInt(quantity);
	order.tableNumber = tableNumber;
	order.comments = comments;
	order.orderTime = parseDate(orderTime);
	var json = JSON.stringify(order);
	
	$.ajax({
		// enige manier om document naam te kunnen geven. Post maakt zelf namen
		type: 			'PUT',
		// ../../ = 2 niveaus omhoog
		url: 			'../../' + tableNumber + course,
		data: 			json,
		contentType: 	'application/json',
		async: 			true,
		success: 		function(data)
						{
							alert("success");
						},
		error: 			function(XMLHttpRequest, textStatus, errorThrown)
						{
							console.log(errorThrown);
						}
	});
}