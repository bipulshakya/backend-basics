6.)**What is a REST API?**

Ans.REST stands for representational state transfer. Yelai chai hamle set of Guidelines or Set of rules haru vanera pani bujhna sakinxa. It Describes how wbe clients and servers should communicate with each other over the internet.

REST defines a way for different systems to interact by using standard web technologies. With REST, clients such as web browsers, mobile apps, and APIs communicate with a server using common HTTP methods like GET, POST, PUT, PATCH, and DELETE, which we discussed in a previous lesson.

**Resources**

In REST, everything is treated as a resource. A resource is a piece of data that can be accessed or modified. Each resource is identified by a URL, such as /products for all products, or /products/1 for a specific product.


**statelessness**:

Statelessness means that each request a client sends to the server is handled independently. The server does not remember previous requests. Because of this, every request must include all the information needed to process it. For example, if a user is authenticated, their authentication token must be sent with each request

**why URLs are nouns and not verbs.**

URLs are designed as nouns because they act as identifiers for resources (things) rather than the actions performed on them. . The HTTP Methods already provides explicit verbs like GET, POST, PUT, and DELETE to handle the actions. Separating the "thing" (the URL noun) from the "action" (the HTTP verb) creates a clean, predictable, and standardized system.

**Why is GET /users/5 better than GET /getUser?id=5?**

The URL GET /users/5 follows REST rules by using nouns to name a resource and path parameters for identification.
GET /getUser?id=5 uses a verb based Remote Procedure Call (RPC) style with query parameters, making it less standard, harder to scale, and less clear.


7.)**What is a database?**

Ans.A database is a digital repository for storing, managing and securing organized collections of data. 
Different types of databases store data in different ways. For example, relational databases store it in defined tables with rows and columns, while nonrelational databases can store it as a variety of data structures, including key-value pairs or graphs.

**Why don't we just store data in a file or in a variable?**

Ans.We do store data in variables and files for short-term use, but they fail for permanent storage, large scale, sharing between users, and safe updates. Variables disappear when code stops. Files get messy, slow to search, and break if two people change them at the exact same time.

**What's the difference between a relational (SQL) database and a non-relational (NoSQL) one?**

Ans.Relational (SQL) databases use rigid tables with rows and columns, while non-relational (NoSQL) databases use flexible formats like key-value pairs, documents, or graphs.


##SQL: 

Situation: A banking system where customers, accounts, and transactions have well-defined relationships and data consistency is critical.

##NoSQL:

Situation: A social media application where user profiles or posts may have different fields and the data structure can change frequently.

8.)**What is an ORM?**

Ans. An ORM (Object-Relational Mapping) is a tool that lets you write code in languages like JavaScript to talk to a database. It turns database tables into objects. It solves the impedance mismatch problem, bridging the gap between flat relational tables and nested code objects so you do not write manual SQL.

**What problem does it solve?**

Ans. ORM bina chai hamile SQl query aafai lekhnu parthiyo yesari
Example: SELECT * FROM users WHERE email = 'bipul@gmail.com';

ORM use garesi such as prisma hamile SQL query lekhnu pardaina simple jun language use garexau tehi language ma code lekhasi ORM le chai telai translate gardinxa SQL ma ani database sanga communicate garna milxa 
Example:
const user = await prisma.user.findUnique({
  where: {
    email: "bipul@example.com"
  }
});

**Show a rough side-by-side: a raw SQL query vs. what the same thing looks like through an ORM.**

Raw SQL: SELECT * FROM users WHERE email = 'bipul@gmail.com';
Prisma ORM: prisma.user.findUnique({ where: { email: 'bipul@gmail.com' } })

**What's the trade-off — what do you give up by using one?**

Ans. The One thing we give up with using an ORM is some direct control over Database.
ORM use garnu vaneko Kehi kura pako bafat kehi kura haru gumaunu

Advantages:

Less repetitive SQL
Easier to work with in JavaScript/TypeScript
Type safety with tools like Prisma
Easier CRUD operations
Helps reduce some common SQL mistakes

Disadvantages:

Complex queries can become harder to express
Ywe may not know exactly what SQL is being generated
Some ORM operations can be less efficient than carefully optimized SQL
we still need to understand databases and SQL for advanced work

**What's the difference between JSON and a JavaScript object?**

Dubai aautai dekhinxa tara aautai chai haina kaam haru xuttai xuttai xan.

##JSON:
JSON is a text format used for storing and exchanging data. It uses double quotes around property names and strings.It cannot hold functions or dates. It moves data across the web.
Example:
{
  "name": "Bipul",
  "age": 22
}

##JavaScript object
It is an actual data structure that exists inside a running JavaScript program.It can hold functions, dates, and variable values. It runs actions in code.
Example:
const user = {
  name: "Bipul",
  age: 22
};


9.)**Languages and frameworks Which languages are commonly used for backends, and what's a well-known framework for each?**

Ans.The most common backend languages and their well-known frameworks include Python (Django), JavaScript (Express), Java (Spring Boot), PHP (Laravel), and C# (ASP.NET Core).

**what is Node.js?**

Ans.It is a JavaScript runtime environment. It's officially defined as “an open-source and cross-platform JavaScript runtime environment.”

Let's see what this means:

Node.js is open source because its code is publicly available and maintained by a large community of developers.
It's cross-platform because it works on any operating system, including Windows, macOS, and Linux.
And it's a JavaScript runtime environment because it allows you to run JavaScript code outside of a browser.

Normally Javascript chai browser ma run hunxa 
Browser --> Javascript --> Web Page
Tara with Node.js, Javascript server ma ni run hunxa
Client -→ HTTP Request -→ Node.js Server -→ Database
                         ↓
                    HTTP Response


**what is Express?**

Ans.It is a minimal and flexible web framework built on top of Node.js. It simplifies the process of building web servers and APIs.

Instead of writing tons of boilerplate code with Node’s native http module, Express lets you create robust web applications with just a few lines.

We can think of it as the fast, unopinionated layer that makes Node.js easier and more powerful.

With Express, you can create:

Web apps
RESTful APIs
Single Page Application (SPA) backends
Middleware-heavy services
Anything server-side with HTTP

10.)**JavaScript and TypeScript**

**What is TypeScript and what problem does it solve? Give a concrete bug that TypeScript catches and plain JavaScript doesn't.**

Ans.TypeScript is a superset of the JavaScript language that has a single open-source compiler and is developed mainly by a single vendor: Microsoft. The goal of TypeScript is to help catch mistakes early through a type system and to make JavaScript development more efficient.

JavaScript is the language of the web. It runs in every browser, powers every frontend, and increasingly runs on servers too. But JavaScript has a well-known problem: it has no type system. You can pass a string where a number belongs, call a method on undefined, or misspell a property name — and nothing stops you until the code runs and something breaks.

TypeScript exists to fix that. It’s a superset of JavaScript that adds static types, letting you catch errors before runtime instead of after. It’s one of the most widely adopted languages in modern software development, and understanding why developers reach for it — and when — matters if you’re building anything serious.

##The Bug Example:
Imagine We have a function that prints a user's age in capital letters:

function printUpperAge(user) {
  console.log(user.age.toUpperCase());
}
printUpperAge({ age: 30 });

Kina yesma Js fail hunxa ta 
ysema number 30 sanga chai .toUpperCase() tool xaina tyo tool navaye pani javascript le tyo program run garxa run vayesi tyo program crash hunxa with runtime error as TypeError: user.age.toUpperCase is not a function.

Yesama typescript le kasari fix garxa ta 
typescript le tyo age lai as a number label gareko herxa age: number tyo number le chai .toUpperCase() use garna mildaina vanxa ani instantly error show garxa hamro code editor ma hamile tyo code run garnu vanda aagadi nai.


**What does "compiled to JavaScript" mean — what does the browser or Node actually run?**

Ans."Compiled to JavaScript" means another programming language turns into JavaScript text before it runs.. The browser or Node.js never sees the original language. They only read, parse, and execute standard JavaScript files.

Browser or node le acutally ma Standard file plain .js run garxa jun ma chai functions, variables, and objects haru hunxa. Tespaxi engine's parser javascript text lai aauta fast internal machine code ma convert garxa junlai hamile bytecode pani vanxau. Ani tespaxi JIT(just-in-Time) compiler le chai byte code lai real machine instructions ma convert garxa jun chai hamro computer ko cpu le read garna sakxa.

**Explain in your own words: var / let / const, and why we basically stopped using var.**

In JavaScript, var, let, and const are keywords used to declare variables.

##Var:Is's declarations are globally scoped or function/locally scoped.The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.Is is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

To understand further, look at the example below.

    var greeter = "hey hi";

    function newFunction() {
        var hello = "hello";
    }
Here, greeter is globally scoped because it exists outside a function while hello is function scoped. So we cannot access the variable hello outside of a function. So if we do this:

var greeter = "hey hi";

    function newFunction() {
        var hello = "hello";
    }
    console.log(hello); // error: hello is not defined
We'll get an error which is as a result of hello not being available outside the function.

var variables can be re-declared and updated
This means that we can do this within the same scope and won't get an error.

    var greeter = "hey hi";
    var greeter = "say Hello instead";

##Let: It is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var that we just covered. Let's consider why this is so.

let is block scoped
A block is a chunk of code bounded by {}. A block lives in curly braces. Anything within curly braces is a block.

So a variable declared in a block with let is only available for use within that block. Let me explain this with an example:

let greeting = "say Hi";
   let times = 4;

   if (times > 3) {
        let hello = "say Hello instead";
        console.log(hello);// "say Hello instead"
    }
   console.log(hello) // hello is not defined

let can be updated but not re-declared.
Just like var, a variable declared with let can be updated within its scope. Unlike var, a let variable cannot be re-declared within its scope. So while this will work:

let greeting = "say Hi";
    greeting = "say Hello instead";
this will return an error:

    let greeting = "say Hi";
    let greeting = "say Hello instead"; // error: Identifier 'greeting' has already been declared

##Const: Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

const declarations are block scoped
Like let declarations, const declarations can only be accessed within the block they were declared.

const cannot be updated or re-declared
This means that the value of a variable declared with const remains the same within its scope. It cannot be updated or re-declared. So if we declare a variable with const, we can neither do this:

const greeting = "say Hi";
    greeting = "say Hello instead";// error: Assignment to constant variable.

nor this:

const greeting = "say Hi";
const greeting = "say Hello instead";// error: Identifier 'greeting' has already been declared