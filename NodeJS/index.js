import http from "http"
import {gfName, gfName2, gfName3, gfName4} from "./feature.js"
import { lovePercentage } from "./feature2.js"

import fs from "fs"
import path from "path"

console.log(path.dirname('/index/random/https.js'))
// console.log(gfName)
// console.log(gfName2)
// console.log(lovePercentage())

const home = fs.readFileSync("./index.html");
const server = http.createServer((req, res)=>{
    // res.end("<h1>Noice</h1>")
    if(req.url === "/about") {
        res.end(`<h1> Love is ${lovePercentage()} </h1>`)
    } else if(req.url === "/") {
        // fs.readFile("./index.html", (err, data)=>{
        //     res.end(data)
        // })
        res.end(home)
    } else if(req.url === "/contact") {
        res.end("<h1>Contact Page</h1>")
    } else {
        res.end("Page not found")
    }
})

server.listen(5000, ()=>{
    console.log('Server is working')
})