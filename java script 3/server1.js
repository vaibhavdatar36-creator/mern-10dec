const express =require("express");
const app = express();
const PORT=4000;
const fruitArray = [
        { name: "Apple", color: "red", price: 100 },
        { name: "Banana", color: "yellow", price: 10 },
        { name: "Mango", color: "yellow", price: 50 },
        { name: "Stawberry", color: "red", price: 5 },
        { name: "Orange", color: "orange", price: 20 },
        { name: "Kiwi", color: "brown", price: 200 },
      ];


//GET method:
app.get("/test",(request,response)=>{
    response.send("Hello From express server");
});

//GET method:
app.get("/fruit",(request,response)=>{
    const fruits=[{
        name:"apple",color:"red",
        name:"mango",color:"green",
        name:"banana",color:"yellow",
    }]
    response.send({msg:"data sent successful",fruitArray:fruits});
});

//post
app.post("/login",(request,response)=>{
    response.send("Post method called");
});

//put
app.put("/update",(request,response)=>{
    response.send("put method called");
});

//delete
app.delete("/delete",(request,response)=>{
    response.send("delete method called");
});

app.listen(PORT , () => {
    console.log(`server started at port: ${PORT} `);
});