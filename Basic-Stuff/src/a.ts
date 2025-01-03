// const x: number = 2;
// console.log(x);

// functions in TS
function greet(firstname: String){
    console.log(`Hello ${firstname}`);
}
greet('Aniket');

function sum(num1: number, num2: number): number{
    return num1 + num2
}
const value = sum(1,3)
console.log(value);

function isLegal(age: number): boolean{
    if(age >= 18){
        return true;
    } else {
        return false;
    }
}
isLegal(16)

function runAfter1s(fn: () => void){
    setTimeout(fn, 1000)
}

runAfter1s(function () {
    console.log("HELLO");
})

// Interface in TS
// Defining Interface
interface User{
    firstname: string,
    lastname: string,
    age: number
}
// creating function
function IsLegal(user: User){
    if(user.age > 18){
        return true
    } else {
        return false
    }
}
// Calling function while passing arguments to an object (i.e Interface)
IsLegal({
    firstname: "Aniket",
    lastname: "Chavan",
    age: 20
})

// Enums in TS
enum Direction {
    up,
    down,
    left,
    right
}
function doSomething(keyPressed: Direction){
    if(keyPressed === Direction.up){
        // do something
    }
}
doSomething(Direction.down);
console.log(Direction.up);

// Common useCase in express
const app = express();
enum ResponseStatus {
    Success = 200,
    NotFound = 404,
    Error = 500
}

app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })