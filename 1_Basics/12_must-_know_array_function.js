//Array functions
let iveMembers =[ 'yujin', 'andrew', 'eliana'];

//push()
iveMembers.push('jackson');  // add 'jackson' at the end

//pop()
iveMembers.pop(); //delete the last item 'jackson'

//shift()
iveMembers.shift(); //delete the first item, 'yujin'

//unshift()
iveMembers.unshift('jackson'); //add 'jackson at the beginning. 

//splice(0,3)
iveMembers.splice(0,3); //delete the first 3 items 



//concat()
//the difference between push() and concat() is that concat() doesn't change the original array. 
iveMembers.concat('mimi');  // 'mimi' is added at the end. 

//slice() - like concat(), slice() doesn't change the original array
iveMembers.slice(0,3) 

//spread operator
let iveMembers2 [ 
    ...iveMembers, //if you skip ... another array will be created within an array.
];

//join() - return string connected by the divider
iveMembers.join(); // default divider is comma.
iveMembers.join('/'); //write as string with slash between items

//sort() reverse()
let numbers =[1,9,7,5,3];

iveMembers.sort(); 
iveMembers.reverse();

/**compare a and b  
 * 1) if return value is greater than 0, arrange a after b
 * 2) if return value is less than 0, arrange b after a
 * 3) if return value is 0, leave the order as-is.
*/

numbers.sort((a,b)=>{
    return a>b ? 1 : -1;
})

console.log(numbers); //return [1,3,5,7,9] ascending order

numbers.sort((a,b)=>{return a>b? -1:1})//descending orders


//filter() - return x if it's ture. 
numbers = [1,8,7,6,3];

console.log(numbers.filter(x=>x%2===0)); //return [8,6]

//more filter examples
// Filtering an array of numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]

// Filtering an array of strings
const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
const longWords = words.filter(word => word.length > 5);
console.log(longWords); // Output: ['banana', 'orange']

// Filtering an array of objects
const products = [
    { name: 'apple', price: 1.99 },
    { name: 'banana', price: 0.99 },
    { name: 'orange', price: 2.49 },
    { name: 'kiwi', price: 3.29 }
];
const expensiveProducts = products.filter(product => product.price > 2);
console.log(expensiveProducts);
// Output:
// [
//     { name: 'orange', price: 2.49 },
//     { name: 'kiwi', price: 3.29 }
// ]


//find() - same as filter() but only return the first value when the condition is met. 

//reduce() - important
//(p,n)=> p+n is callback function, 0 is the initial value
//0+1, 1+8, 9+7, 16+6, 22+3
console.log(numbers.reduce((p, n) =>p+n,0));

//reduce with length
console.log(iveMembers.reduce((p,n)=>p+n.length,0)); //return the total string length of iveMember array.



//more about Reduce - can perform complex data transformation, such as grouping and aggregating data.
//this is more advanced example of reduce.
const orders = [
    { id: 1, customer: 'Alice', items: [{ name: 'Laptop', quantity: 1, price: 1200 }, { name: 'Mouse', quantity: 2, price: 25 }] },
    { id: 2, customer: 'Bob', items: [{ name: 'Keyboard', quantity: 1, price: 75 }, { name: 'Monitor', quantity: 1, price: 300 }] },
    { id: 3, customer: 'Alice', items: [{ name: 'Headphones', quantity: 1, price: 100 }] },
  ];
  
  const customerOrderSummary = orders.reduce((acc, order) => {
    const { customer, items } = order;
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
  
    //acc array is empty. this will create key:value and initialize.
    if (!acc[customer]) {
      acc[customer] = { totalOrders: 0, totalItems: 0, totalPrice: 0 };
    }
  
    acc[customer].totalOrders++;
    acc[customer].totalItems += totalItems;
    acc[customer].totalPrice += totalPrice;
    return acc;
  }, {});
  
  console.log(customerOrderSummary);
  // Expected output:
  // {
  //   Alice: { totalOrders: 2, totalItems: 4, totalPrice: 1350 },
  //   Bob: { totalOrders: 1, totalItems: 2, totalPrice: 375 }
  // }