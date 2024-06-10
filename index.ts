import inquirer from "inquirer";

const currency: any = {
     USD: 1.00,// Base currency
     INR: 83.50,
    EUR: 0.93,
    BOB : 6.69,
    PKR: 279.93,
    GBP : 0.80,
   JPY: 140.00,
   AUD: 1.50,
    CAD: 1.32,
    CNY: 7.10,   

};
let ans= await inquirer.prompt(
    [{
     name:"from_convert",
     type:"list",
     message:"kindly select only one option : ",
     choices:['USD','INR','EUR','BOB','PKR','GBP','JPY','AUD','CAD','CNY']
    },
    {
        name:"to_Desire",
        type:"list",
        message:"kindly select only one option : ",
        choices:['USD','INR','EUR','BOB','PKR','GBP','JPY','AUD','CAD','CNY']
    },
    {
        name:"money",
        type:"number",
        message:"Enter your money  : ",
    }
    ]
);
let from=currency[ans.from_convert];
let to=currency[ans.to_Desire];
let money=ans.money;
let basevalue=money/from;
let convert=basevalue*to;
console.log("your converted mney is : " + convert)
