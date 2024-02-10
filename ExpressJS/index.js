import express from "express";
import fs from "fs";
import path from "path";
const app = express();

const val = express.static(path.join(path.resolve(), "public"));
// setting up view engine
app.set("view engine", "ejs")



// use
const users = []
app.use(val)

app.get("/", (req, res)=>{
    res.render("index", {name: "Saksham"});

    // res.sendFile("index.html")
})

app.get("/success", (req, res)=>{
    res.render("success");

    // res.sendFile("index.html")
})

// using middlewares
app.use(express.urlencoded({extended: true}))

app.post("/", (req, res)=> {
    // console.log(req.body)
    users.push({username: req.body.name, email: req.body.email});

    res.redirect("/success")
})
// app.get("/getproduct", (req, res)=>{
//     // res.send("<h1>HI</hi>")
//     // res.sendStatus(200)
//     // res.json({
//     //     succes: 'True',
//     //     products: []
//     // })
//     // res.status(404).send("meri marzi")
//     // let pathLocation = path.resolve();
//     // console.log(pathLocation)
    
//     // res.sendFile(path.join(pathLocation, "./index.html"))

    


// })

app.listen(5000, ()=>{
    console.log("app is working");
})