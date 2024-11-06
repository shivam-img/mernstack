const author = require("../models/author.model");
const Books = require("../models/books.model");
const Data = require("../models/data.model");



const authorcollectionData = (async (req, res) => {
    try {
      
        const  data  = req.body
        console.log( "datadatadata" , data);

        const result = await author.insertMany(data);

        console.log("resultresult" , result);
        
    } catch (error) {

        console.log("eororrr" , error);
        
    }
});


const bookcollectionData = (async (req, res) => {
    try {
      
        const  data  = req.body
        console.log( "datadatadata" , data);

        const result = await Books.insertMany(data);

        console.log("resultresult" , result);
        
    } catch (error) {

        console.log("eororrr" , error);
        
    }
});

const DatacollectionData = (async (req, res) => {
    try {
      
        const  data  = req.body
        // console.log( "datadatadata" , data);

        const result = await Data.insertMany(data);

        console.log("resultresult" , result);
        
    } catch (error) {

        console.log("eororrr" , error);
        
    }
});


module.exports = { authorcollectionData , bookcollectionData , DatacollectionData }