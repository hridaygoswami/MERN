import cors from "cors"
import express from "express"
import { MongoClient } from "mongodb"
import nodemailer from 'nodemailer'
import fs from 'fs'

// mongo setup
let url = "mongodb://127.0.0.1:27017/"
const client = new MongoClient(url)
const dataBase = "Practice"

// express setup
const app = express()
app.use(cors())
app.use(express.json())

// data accept
app.post("/store", async (req, res)=>{
    let fullName = req.body[0]
    var email = req.body[1]
    let message = req.body[2]

    console.log(fullName, email, message)
    storeDataDB(fullName, email, message)
    fs.readFile("confirmation.html", (err, data)=>{
        if(err) throw err
        sendEmail(email, data.toString())
        console.log(data.toString())
    })
})


// function to store data
let storeDataDB = async (fn, el, msg)=> {
    let result = await client.connect()
    let db = result.db(dataBase)
    let collection = db.collection('Vishwesh')
    let insertData = await collection.insertOne({
        "Full Name": fn,
        "E-mail": el,
        "Message": msg
    })
    console.log(insertData)
}

// code for nodemailer
function sendEmail(email, htm) {
    console.log(htm)
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "youremail",
            pass: "yourpassword"
        }
    })
    
    var mailOptions = {
        from: "youremail",
        to: email,
        subject: "Confirmation to the appointment",
        html: htm
    }

    transporter.sendMail(mailOptions, function(err, info){
        if(err) throw err
        console.log(info.response)
    })
}
    

app.listen(5001, ()=>console.log("Backend is running"))
