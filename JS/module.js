
import {JS} from './JS':

const productdb = (dbname,table)=>{

const db = new Dexie(dbname)
db.version(1).stores(table);
    
db.open();
return db;

}

const bulkcreate = (dbtable,data)=>{

	let flag = empty(data);
	    if (flag){
	dbtable.bulkAdd([data]) 
	console.log("data inserted sucessfully...!");   	

   }else{
     console.log("please provide Data...!")

   }

	return flag
}

const empty = object =>{
	let flag = false;
	for(const value in object){
		if (object[value]!=""&&object.has own property(value)){
			flag = true;


		}else{
			flag = false
		}

	}
}

export default productdb;
export{

	bulkcreate
}