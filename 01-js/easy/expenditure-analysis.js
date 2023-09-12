/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) 
{
    var spend={};//empty object right now but if category of our iterations is
    // not there then it creates a new key
    for(let i=0;i<transactions.length;i++)
    {
        var t=transactions[i];
        if(spend[t.category]){//spend[x] means returns value at key x
          //means category already exist
          spend[t.category]+=t.price;
        }
        else{
          spend[t.category]=t.price;
        }
    }
    
    let ans=[]//convert obj t array
    var keys=Object.keys(spend)
    for(var i=0;i<keys.length;i++)
    {
      var category=keys[i];
      var obj={
        category:category,
        amountSpend:spend[category]
      }
      ans.push(obj)
    }
    return ans
}
var transactions=[
  {
    item:"pepsi",
    category:"Drink",
    price:20,
    timestamp:"12-june-2023"
  },
  {
    item:"mirinda",
    category:"Drink",
    price:20,
    timestamp:"12-june-2023"
  },
  {
    item:"samosa",
    category:"food",
    price:20,
    timestamp:"12-june-2023"
  },
  {
    item:"ladoo",
    category:"food",
    price:20,
    timestamp:"12-june-2023"
  }

]
console.log(calculateTotalSpentByCategory(transactions));



//module.exports = calculateTotalSpentByCategory;
