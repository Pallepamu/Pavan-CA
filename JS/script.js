function onformsubmit (){
 var formdata = readFormData();
 insertNewRecord(formData);
}
	

function readFormData(){

	var formData = {};

	formData["Full Name"] = document.getElementById("Full Name");
	formData["Address"] = document.getElementById("Address");
	formData["Mobile/Email"] = document.getElementById("Mobile/Email");
	formData["Booking dates/Package"] = document.getElementById("Booking dates/Package");

	return formData;

}

function insertNewRecord(data){
	var table = document.getElementById("FullName List").getElementByTagName('tbody')[0];
	var newrow = table.InsertRow(table.length);
	
	cell1 = newrow.insertCell(0);
	cell1.innerHTML = data.FullName

	cell2 = newrow.insertCell(1);
	cell2.innerHTML = data.FullName

	cell3 = newrow.insertCell(2);
	cell3.innerHTML = data.FullName

	cell4 = newrow.insertCell(3);
	cell4.innerHTML = data.FullName

	cell1 = newrow.insertCell(4);
	cell1.innerHTML = <a>Edit</a> 
	                  <a>Delete</a>;//"" ''''





}