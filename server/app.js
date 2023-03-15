const express = require('express');
const fs = require('fs');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.post('/api', (req, res) => {
  const form = req.body;
  console.log(form)
  fs.writeFile(`${__dirname}/server-ok.json`, JSON.stringify(form), () => { });
  res.send(req.body);
})
