
const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://pwr:CKJxki16@swt.2utpf.mongodb.net/test";

app.post('/users/create', async (req, res) => {
  const user = req.body;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db('mydb').collection('users').insertOne({
    id: parseInt(user.id),
    vaccine: user.vaccine,
    pname: user.pname,
    fname: user.fname,
    lname: user.lname,
    type_identity: user.type_identity,
    identity: user.identity,
    dob: user.dob,
    address: user.address,
    province: user.province,
    district: user.district,
    zone: user.zone,
    phone: user.phone

  });
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "User with ID = " + user.id + " is created",
    "user": user
  });
})

app.post('/appointment', async (req, res) => {
  const user = req.body;
  const client = new MongoClient(uri);
  await client.connect();
  await client.db('mydb').collection('appointment').insertOne({
    id: parseInt(user.id),
    date: user.date

  });
  await client.close();
  res.status(200).send({
    "status": "ok",
    "message": "Your ID is " + user.id + " Your Appointment is " + user.date,
    "user": user
  });
})