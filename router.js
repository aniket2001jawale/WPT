const express=require("express")
const  myrouter=express.Router()
const connection=require('../db/dbconnect')

//get all products
myrouter.get("/course",function(req,res){
    connection.query("select * from course",function(err,data,fields){
       if(err){
           res.status(500).send("data not found")
       }
       else{
           //will return the data in json format
           res.json(data)
       }
    })
})
//add new object in the database
myrouter.post("/course/:id",function(req,res){
    connection.query("insert into course values (?,?,?,? )",[req.body.cid,req.body.cname,req.body.fees,req.body.duration],function(err,result){
       if(err){
           res.status(500).send("data not inserted")
       }
       else{
            
           //will return the data in json format
           res.status(200).send("data inserted")
       }
    })
})

//update new object in the database
myrouter.put("/course/:id",function(req,res){
    connection.query("update course set cname=?, fees=?,duration=? where cid=?",[req.body.cname,req.body.fees,req.body.duration,req.body.cid],function(err,result){
       if(err){
           res.status(500).send("data not found")
       }
       else{
           //will return the data in json format
           res.status(200).send("data updated successfully!!")
       }
    })
})
//delete the  object in the database
myrouter.delete("/course/:id",function(req,res){
    connection.query("delete from course where cid=?",[req.params.id],function(err,data,fields){
       if(err){
           res.status(500).send("data not deleted")
       }
       else{
           //will return the data in json format
           res.status(200).send("data deleted succesfully!!")
       }
    })
})
module.exports=myrouter