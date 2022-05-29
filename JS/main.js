import productdb from './module.js'



productdb("productdb",{
     bulkcreate

	products:'++Idno,Fullname,seller,Price'

	});

const userid = document.getElementById("userid");
const Fullname = document.getElementById("Fullname");
const seller = document.getElementById("seller");
const Price = document.getElementById("Price");


const btncreate = document.getElementById("btn-Create");
const btncreate = document.getElementById("btn-Read");
const btncreate = document.getElementById("btn-Update");
const btncreate = document.getElementById("btn-Delete All");

btncreate.onclick=()=>{
	let flag = bulkcreate(db.product,{
		name: proname,value,
		seller: seller.value,
		price: price.value


	})

    console.log(flag)
}



