// import cors from "cors"
// import express from "express"
// import { MongoClient } from "mongodb"
// import nodemailer from 'nodemailer'
// import fs from 'fs'
// import path from 'path'
// // mongo setup
// let url = "mongodb+srv://epikhriday:hriday1821@cluster0.6xvhuda.mongodb.net/test"
// const client = new MongoClient(url)
// const dataBase = "Portfolio"

// // express setup
// const app = express()
// app.use(cors())
// app.use(express.json())

// // data accept
// app.post("/store", async (req, res)=>{
//     let fullName = req.body[0]
//     var email = req.body[1]
//     let message = req.body[2]

//     console.log(fullName, email, message)
//     // storeDataDB(fullName, email, message)
//     // fs.readFile("confirmation.html", (err, data)=>{
//     //     if(err) throw err
//     //     // sendEmail(email, data.toString())
//     //     // console.log(data.toString())
//     // })
// })



// const _dirname = path.dirname("/Users/hridaygoswami/Downloads/Work/GRRAS/Practice/deployment/MERN/frontend/dist")

// // app.use(express.static(buildPath))
// app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
// });

// // // function to store data
// // let storeDataDB = async (fn, el, msg)=> {
// //     let result = await client.connect()
// //     let db = result.db(dataBase)
// //     let collection = db.collection('Contact_Me')
// //     let insertData = await collection.insertOne({
// //         "Full Name": fn,
// //         "E-mail": el,
// //         "Message": msg
// //     })
// //     console.log(insertData)
// // }

// // code for nodemailer
// // function sendEmail(email, htm) {
// //     console.log(htm)
// //     var transporter = nodemailer.createTransport({
// //         service: "gmail",
// //         auth: {
// //             user: "captaindeath123456@gmail.com",
// //             pass: "xeamxsbqdulmhllb"
// //         }
// //     })
    
// //     var mailOptions = {
// //         from: "captaindeath123456@gmail.com",
// //         to: email,
// //         subject: "Confirmation to the appointment",
// //         html: htm
// //     }

// //     transporter.sendMail(mailOptions, function(err, info){
// //         if(err) throw err
// //         console.log(info.response)
// //     })
// // }
    

// app.listen(5001, ()=>console.log("Backend is running"))

const express = require('express');
const path = require('path');

const app = express();

// Serve static files from the build folder of the React app
const buildPath = path.join(__dirname, '..', 'frontend', 'dist');
app.use(express.static(buildPath));

// Route all other requests to the React app's index.html
app.get('*', function(req, res) {
    res.sendFile(path.join(buildPath, 'index.html'));
});


app.post("/store", async (req, res)=>{
    let fullName = req.body[0]
    var email = req.body[1]
    let message = req.body[2]

    console.log(fullName, email, message)
})

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
