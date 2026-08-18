const express = require("express");
const app = express();
const booksRouter = require("./routes/books.routes")


const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3000;

//Middeleware
app.use(express.json());

//Health
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

//routes
app.use("/books", booksRouter);

app.use((req, res) => {
  res.status(404).json({
    status: "Server is Generated"
  });
});

const server = app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});