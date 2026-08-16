const express = require('express');
const app = express();

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 3000;

//Middeleware
app.use(express.json());

app.get ('/', (req, res) => {
    res.status(200).json({
    status: "ok"
  });
    res.send('hello world');
})

const server = app.listen(PORT, hostname, () => {
  console.log(`Server running at http://${hostname}:${PORT}/`);
});