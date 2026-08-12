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
