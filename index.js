const express = require('express');
const PORT = 3000;
const app = express()

app.get("/",(req,res)=>{
    res.send("<h1>Sanika Dattu Mandlik</h1>")
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