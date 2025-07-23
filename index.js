const express = require('express');
const dotenv = require('dotenv')
dotenv.config()
const PORT = 3000 || process.env.PORT;
const app = express()
const path=require('path')

app.use(express.static(path.join(__dirname,'./Frontend/dist')))
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./Frontend/dist","index.html"))
})


app.get("/api/data",(req,res)=>{
    const data =[{
        "name":"Sanika",
        "age":20
    },
    {
        "name":"Sakshi",
        "age":16
    },
    {
        "name":"Kartik",
        "age":12
    }
    ]
    res.json(data)
})
app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})