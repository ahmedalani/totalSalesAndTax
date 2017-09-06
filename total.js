var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];
// Function signature:
// name: add
// arguments: two argument are numbers
// return: sum
// Given number , returns the sum
// Has no side-effects.
function add(a, b) {
  return a + b;
}
// Function signature:
// name: calculateSalesTax
// arguments: salesData, taxRates are objects
// return: object

// Given 2 object first one with sales data and second with tax rates, returns an object with total sales and tax for each company
// property set to the company name which are also object with property set to the numbers of total sales and tax
// Has no side-effects.
function calculateSalesTax(salesData, taxRates) {
  var output = {};
  for(var i = 0; i < salesData.length; i++) {
    var inObj = salesData[i];
    if (!(inObj.name in output)) {
      output[inObj.name] = {
        totalSales: 0,
        totalTaxes: 0
      };
    }
    var sumOfSales = inObj.sales.reduce(add, 0);
    var prov = inObj.province;
    var sumOfTaxes = sumOfSales * taxRates[prov];

    output[inObj.name].totalSales += sumOfSales;
    output[inObj.name].totalTaxes += sumOfTaxes;
     console.log(output[inObj.name]);
  }
  return output;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/