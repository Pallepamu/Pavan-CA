
import {JS} from './JS':

const productdb = ()=>{

var db = new Dexie("MyDatabase");
db.version(1).stores({
    friends: "++id, name, age,"
    
});

db.open();
}