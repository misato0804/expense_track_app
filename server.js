import express from 'express';
import bodyParser from 'body-parser';
import {AccountData} from "./src/AccountData.js";
import {CategoryData} from "./src/CategoryData.js";
import {History} from "./public/js/Histry.js";
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
  res.status(200).json(accountDataBase.data);
})

app.post('/data', (req, res) => {
  accountDataBase.addData(req.body)
  console.log(accountDataBase)
  res.status(200).json(accountDataBase.data)
})

app.put("/data", (req, res) => {
  const obj = accountDataBase.findObj(accountDataBase.data, req.body.id);
  const amount = Number(req.body.amount);
  if (req.body.transaction === "deposit") {
    obj.saving += amount;
    obj.history.push(new History(new Date(), req.body.transaction, amount));
    console.log(obj)
    res.status(200).json(accountDataBase.data)
  } else if (req.body.transaction === "Withdraw") {
    accountDataBase.canWithdraw(obj, amount)
    obj.saving -= amount;
    obj.history.push(new History(new Date(), req.body.transaction, -amount))
    res.status(200).json(accountDataBase.data)
  } else if (req.body.transaction === "Transfer") {
    const from_obj = accountDataBase.findObj(accountDataBase.data, req.body.from_user);
    const to_obj = accountDataBase.findObj(accountDataBase.data, req.body.to_user);
    accountDataBase.canWithdraw(from_obj, amount)
    from_obj.saving -= amount;
    to_obj.saving += amount;
    from_obj.history.push(new History(new Date(), req.body.transaction, -amount));
    to_obj.history.push(new History(new Date(), req.body.transaction, amount))
    res.status(200).json(accountDataBase.data)
  }
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