
const Transaction = require("../models/Transaction");

exports.addTransaction = async(req,res)=>{

const transaction = new Transaction({
userId:req.user.id,
amount:req.body.amount,
category:req.body.category,
date:new Date()
});

await transaction.save();

res.json(transaction);

};

exports.getTransactions = async(req,res)=>{

const data = await Transaction.find({userId:req.user.id});

res.json(data);

};
