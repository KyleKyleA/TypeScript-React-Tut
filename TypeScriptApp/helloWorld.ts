function greet(name: string): string {
    return `Hello,  ${name}!`;
}

const message: string = greet("World");
console.log(message)


function greeting(Firstname: string, age: int) {
    return `Hello, ${Firstname}! + ${age}`
}

const response: string = greeting("Hello their Kyle Angeles")
const age: int = greeting(19)
console.log(response + age)

const number = [
    '19',
    '20',
    '30',
]
console.log(number)

const user = {
    name: "Kyle",
    age: 19,
    isadmin = true,
    email: "kyleangeles2006@gmail.com"
};
console.log(user.name, user.age)
console.log(user.email)
console.log(user.isadmin)