import express from 'express';
import bodyParser from 'body-parser';
import {AccountData} from "./src/AccountData.js";
import {CategoryData} from "./src/CategoryData.js"
import cors from "cors";

const app = express();
const SERVER_PORT = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

/**
 *Account Server
 */
let accountDataBase = new AccountData();

app.get('/data', (req, res) => {
  console.log(accountDataBase.data)
  res.status(200).json(accountDataBase.data);
})

app.post('/data', (req, res) => {
  accountDataBase.addData(req.body)
  console.log(accountDataBase)
  res.status(200).json(accountDataBase.data)
})

/**
 *Category Server
 */
let categoriesData = new CategoryData()

app.get('/categories', (req, res) => {
  res.status(200).json(categoriesData.getData());
})

app.post('/categories', (req, res) => {
  categoriesData.addData(req.body)
  console.log(categoriesData)
  res.status(200).json(categoriesData.data)
})


app.listen(SERVER_PORT, () => {
  console.log("LOG IN")
})