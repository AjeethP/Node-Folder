import express from "express"
// const { request } = require("express");
import { MongoClient } from "mongodb";

const app=express();

const users=[
    {
     "createdAt": "2021-08-25T04:29:40.123Z",
     "name": "Margaret Daniel",
     "avatar": "https://cdn.fakercloud.com/avatars/praveen_vijaya_128.jpg",
     "id": "1"
    },
    {
     "createdAt": "2021-08-25T03:04:31.857Z",
     "name": "Mona Marks",
     "avatar": "https://cdn.fakercloud.com/avatars/pierre_nel_128.jpg",
     "id": "2"
    },
    {
     "createdAt": "2021-08-25T07:03:31.001Z",
     "name": "Mr. Gwendolyn Krajcik",
     "avatar": "https://cdn.fakercloud.com/avatars/dannol_128.jpg",
     "id": "3"
    },
    {
     "createdAt": "2021-08-24T15:58:19.670Z",
     "name": "Rita Tremblay",
     "avatar": "https://cdn.fakercloud.com/avatars/petebernardo_128.jpg",
     "id": "4"
    },
    {
     "createdAt": "2021-08-24T19:24:10.817Z",
     "name": "Joseph Keeling",
     "avatar": "https://cdn.fakercloud.com/avatars/bobwassermann_128.jpg",
     "id": "5"
    },
    {
     "createdAt": "2021-08-24T23:02:40.642Z",
     "name": "Whitney Schultz",
     "avatar": "https://cdn.fakercloud.com/avatars/jasonmarkjones_128.jpg",
     "id": "6"
    },
    {
     "createdAt": "2021-08-24T21:50:50.823Z",
     "name": "Becky Kiehn",
     "avatar": "https://cdn.fakercloud.com/avatars/kevinoh_128.jpg",
     "id": "7"
    }
   ]

   const MONGO_URL="mongodb://localhost"

   async function createConnection(){
       const client=new MongoClient(MONGO_URL);
       await client.connect();
       const result=await client.db("flipkart").collection("brands").find({}).toArray()
       console.log(result)

   }

   createConnection()


   app.use(express.json())

app.get("/",(request,response)=>{
    response.send("Hello Ajeethkumar")
});

app.get("/users",(request,response)=>{
    response.send(users);
})

app.post("/user",(request,response)=>{
    console.log(request.body)
    response.send({msg:"hello"});
})

app.get("/users/:id",(request,response)=>{
    const {id}=request.params
    console.log("Requesting for id",id)
    const searchedUser=users.filter((user)=>user.id==id);
    const msg={msg:"user not found"}
    if(searchedUser.length>0){
       response.send(searchedUser);
    }
    else{
        response.send(msg)
    }
})

app.listen(4000,()=>console.log("The server is started"))















