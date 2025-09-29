// 1. Create a module file called 'utils.js' that exports a function named 'greetUser' which takes a name parameter and returns "Hello, [name]!". Then import and use this function in another file.
    import { greetUser } from './utils.js'
    console.log(greetUser("Kareem"))
// 2. Promise that resolves after 2 seconds
    const taskPromise = new Promise(resolve => {
    setTimeout(() => resolve("Task completed!"), 2000);
    });
    taskPromise.then(console.log);

// 3. Create an async function called 'waitAndGreet' that uses setTimeout with a Promise to wait 1 second, then returns "Welcome!".
    async function waitAndGreet() {
        await new Promise(resolve => setTimeout(resolve,1000))   //
        return "Welcome!"
    }
    waitAndGreet().then(console.log);
// 4. Write an async function that fetches user data from 'https://jsonplaceholder.typicode.com/users/1' and logs the user's name and email to the console.
    async function fetchUserData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        const user = await response.json()
        console.log(`Name: ${user.name}, Email: ${user.email}`);
    }
    fetchUserData();
// 5. Create a function that fetches the first 3 posts from 'https://jsonplaceholder.typicode.com/posts' and returns only their titles as an array.
    async function getFirstThreePostTitles() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        return posts.slice(0, 3).map(post => post.title);
    }
    getFirstThreePostTitles().then(console.log)
// 6. Create a simple timer function using Promise that counts from 1 to 3, logging each number after 1 second intervals.
    async function timer() {
        for (let i = 1; i <= 3; i++) {
            await new Promise(res => setTimeout(res, 1000));
            console.log(i);
        }
    }
    timer();

// 7. Write a function that safely parses JSON data with try/catch. Test it with both valid JSON string '{"name": "Omar"}' and invalid JSON '{name: Omar}'.
    function safeParse(STR){
        try{
            return JSON.parse(STR);
        } catch (e) {
            return `Error: ${e.message}`;
        }
    }
    console.log(safeParse('{"name": "Omar"}'))
    console.log(safeParse('{name: Omar}'))
// 8. Create an async function that fetches data from 'https://jsonplaceholder.typicode.com/users/1/todos', converts it to JSON, and returns the count of completed todos.
    async function completedTodoCount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        const todos = await res.json()
        return todos.filter(t => t.completed === true).length
    }
    completedTodoCount().then(console.log)
// 9. Build a simple module that exports a default class called 'DataFetcher' with a method 'getUser(id)' that fetches and returns user data from the JSONPlaceholder API.
    import DataFetcher from './DataFetcher.js';
    const df = new DataFetcher();
    df.getUser(1).then(console.log);