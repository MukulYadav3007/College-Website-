const express = require("express");
const path = require("path");
require("./db/conn");
const User = require("./models/usermessage")
const hbs = require("hbs");
const { registerPartials } = require("hbs");
const app = express();
const port = process.env.PORT || 3000;
// setting path
const staticpath = path.join(__dirname,"../public");
const templatepath = path.join(__dirname,"../templates/views");
const partialpath = path.join(__dirname,"../templates/partials");
//middleware 

app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery")));

app.use(express.urlencoded({extended : false}))


app.use(express.static(staticpath))
app.set("view engine","hbs");
app.set("views",templatepath);
hbs.registerPartials(partialpath)


// using images 


app.use(express.static("eduford_img"));


app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/index",(req,res)=>{
    res.render("index");
})

app.get("/course",(req,res)=>{
    res.render( "course");
})

app.get("/contact",(req,res)=>{
    res.render("contact");
})

// app.get("/blog",(req,res)=>{
//     res.render("blog");
// })

app.get("/admission",(req,res)=>{
    res.render( "admission")
})

app.get("/about",(req,res)=>{
    res.render( "about")
})


app.post("/admission",async(req,res)=>{
     try {
        res.send( req.body)
     } catch (error) {
        res.status(500).send(error);
     }
})


app.listen(port , ()=>{
    console.log("server connected ...") ;
})
