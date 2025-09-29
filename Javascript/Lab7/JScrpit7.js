// 1- Write a function that greets a user, using a default parameter for the name.
    function greetUser(userName = "Kareem"){
        return `Hello ${userName}`;
    }
// 2- Write a function that calculates the total price with a default tax rate parameter.
    function calculateTotalPrice(price , taxR = 0.2){
        return price = price + price * taxR
    }
// 3- Write a function that creates a user object, using a default role parameter.
    function CreateUser( username , role = "user"){
        return {username , role}
    }
// 4- Write a function that multiplies any number of arguments using the rest operator.
    function Multiply(...numbers){
        return numbers.reduce((acc, num) => acc * num, 1);
    }
// 5- Write a function that multiplies the first argument by the sum of all the rest using the rest operator.
    function MultiplyFirstAndSumRest(first,...rest){
        let sum = rest.reduce((acc, num) => acc + num, 0)
        return first * sum
    }
// 6- Write a function that takes a variable number of strings and returns them as a single array using the rest operator.
    function stringNo(...strings){
        return strings
    }
// 7- Create a new array by combining two arrays using the spread operator.
    const arr1 = [1, 2 , 3]
    const arr2 = [4, 5, 6]
    const combinedArray = [...arr1, ...arr2]
// 8- Copy an array using the spread operator.
    const OrigArr = ['a','b','c']
    const copyArr = [...OrigArr]
// 9- Merge two objects into one using the spread operator.
    const obj1 = {a:1,b:2}
    const obj2 = {c:3,d:4}
    const MergedObj = {...obj1,...obj2}
// 10- Update a property in an object using the spread operator to create a new object.
    const user = {name:"Kareem",age:25}
    const updatedUser = {...user,age:29}
// 11- Destructure an array to get the first and second elements into variables.
    const nums = [100,200,300]
    const [fnum,snum] = nums
// 12- Destructure an array to get the first element and the rest into another array.
    const [fElemnt, ...restOfElements] = nums
// 13- Destructure an object to extract two properties into variables.
    const me = {fname:"Kareem",lname:"El Sebaiy",age:29}
    const {fname, lname} = me
// 14- Destructure an object and rename the extracted properties.
    const { fname: firstName, lname: lastName } = me
// 15- Write a function that takes an object as a parameter and uses destructuring in the parameter list to extract specific properties.
    function userinfo({fname ,lname}){
        return `name: ${fname} ${lname}`
    }




