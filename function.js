// function add(a,b)
// {
//  sum=a+b;
//  console.log(sum);
// }
// add(10,10);


// function detail(name,age){
//     return 'My name is '+ name +'and my age is '+ age;
// }
// let Myname= detail('Kiran',19);
// console.log(Myname);

// const info = (name, age) => {
//   //   return "My name is " + name + ". My age is " + age;
//   return `My name is ${name}. My age is ${age}`;
// };
// const a = info("KIran", 19);
// console.log(a);

// function multiply(a,b,c=5)
// {
//  product=a*b*c;
//  console.log(product);
// }
// multiply(10,10);

// function to pass array and sum each element
// const num=[1,2,3,4];
// let add=0;
// function sum(num)
// {
//     for(let i=0;i<num.length;i++)
//     {
//         add=add+num[i];
//     }
//     return add;
// }
// let Sum=sum(num);
// console.log(Sum);

const myarray=[1,2,3];
function print(num1,...rest)
{
  console.log(num1*(rest));
}



