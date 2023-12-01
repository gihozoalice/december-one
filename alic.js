 let testObj = {
a : 56,
b : "alice"
 }

console.log(testObj); // -> object
console.log( testObj .a);
console.log( testObj . b);



let firstname = "gihozo";
console.log( firstname)
let sencd ="alice";
console.log ( sencd );
let email =" alicegihozo13@gamail.com";
console.log( email);
let age = 22;
console.log( age);
let user1= {
    firstname:"gihozo",
    secendname : "alice",
    age:45,
    email: "alicegihozo13.gmail.com"
};
console.log(user1.firstname);
user1.firstname="gihozo";
console.log( user1.secendname);
user1.secendname= "alicde";

console.log(user1.age);
user1.age=45;
console.log(user1.email);
user1.emai="alicegihozo13.gmail.com";
delete user1.email;
delete user1.firstname;
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
console.log(days[0]);
console.log(days[1]);
console.log(days[2]);
console.log(days[3]);
console.log(days[4]);
console.log(days[5]);
days[0]= "sun";
console.log( days[0]);

let animals = [];
console.log(animals[0]); // -> undefined
   
animals[0] = "dog";
animals[2] = "cat";
animals[1]="loin";

 console.log(animals[0]); // -> dog
 console.log(animals[1]); // -> undefined
console.log(animals[2]); // -> cat

 let values = ["Test", 7, 12.3, false];
console.log(delete values[1]);
console.log(values);
let names = [["Olivia", "Emma", "Mia", "Sofia"], ["William", "James", "Daniel"]];
console.log(names[0]); // -> ["Olivia", "Emma", "Mia", "Sofia"]
 console.log(names[0][3]); // -> Emma
 console.log(names[1][1]); // -> James
   
 let femaleNames = names[1][1];
 console.log(names[0][1]); // -> Olivia
 console.log(names[0][3]); // -> Mia



 let users =[
    {
 name: "Calvin",
   surname: "Hart",
   age: 66,
        email: "CalvinMHart@teleworm.us"
       },
       {
        name: "Mateus",
        surname: "Pinto",
        age: 21,
        email: "MateusPinto@dayrep.com"
      
    },
    {
    name :"gihozo",
    surname : " alice"
    }
        

    
    ];
      
    console.log(users[0].name); // -> Calvin
    console.log(users[2].surname); // -> 21
