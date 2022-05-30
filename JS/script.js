var table = document.getElementById("table"),rIndex;

for(var i=1; i < table.rows.length; i++){
 table.rows[1].onclick = function(){
      rIndex = this.rowIndex;
      Console.log(rIndex);

      document.getElementById("FullName").value = this.cells[1].innerHTML;
      document.getElementById("Address").value = this.cells[2].innerHTML;
      document.getElementById("Mobile/Email").value = this.cells[3].innerHTML;
      document.getElementById("Package").value = this.cells[4].innerHTML;

   };

     function editRow(){

     table.rows[rIndex].cells[1].innerHTML = document.getElementById("FullName").value;
     table.rows[rIndex].cells[2].innerHTML = document.getElementById("Address").value;
     table.rows[rIndex].cells[3].innerHTML = document.getElementById("Mobile/Email").value;
     table.rows[rIndex].cells[4].innerHTML = document.getElementById("Package").value;


     }
    function editTableDisplay(){
    	document.querySelector
    }




    	
    }

 