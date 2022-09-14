const express = require("express")
const app = express()
const mysql = require("mysql2")
const bodyParser = require("body-parser")
const cors = require('cors')

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Nithish0207@",
  database: "crud"
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/api/getUser",(req,res) => {
  const sqlSelect = "SELECT * FROM user_details";
  db.query(sqlSelect, (err,result) => {
    res.send(result)
  })
  
})


app.post("/api/sendUser", (req,res)=> {
  const username = req.body.username
  const password = req.body.password
  const sqlInsert = "INSERT INTO user_details (username,password) VALUES (?,?)"
  db.query(sqlInsert,[username,password], (err,result) => {
      console.log(result)
  })
})

app.listen(3002, () => {
  console.log("Running on port 3002")
})