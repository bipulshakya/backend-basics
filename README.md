# backend-basics

**Books RESt API**

**Overview**
This project is a simple REST API built with Node.js and Express.js for managing a collection of books.

The application stores data in a plain javascript array instead of database, Because no database is being used, all data is reset whenever the server is restarted.

**Features**
i.Get all books
ii.Get a single book
iii.Create a new book
iv.Update an existing book
v.Delete a book
vi.Filter books by availability
vii.Health check endpoint
viii.Server-side ID generation
ix.Request validation
x.Consistent JSON responses

**Installation**

**Clone the repository**
git clone <repository-url>

**Navigate to the project directory**
cd backend-basics

**Install dependencies**

npm init -y

npm install express

npm install --save-dev nodemon

**Add these Script in the package.json file**

"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js"
}