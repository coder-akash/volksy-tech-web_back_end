const express = require('express');

const countStudents = require('./3-read_file_async.js');

const db = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  try {
    const students = await countStudents(db);
    res.send(`This is the list of our students\n${students.join('\n')}`);
  } catch (error) {
    res.send(`This is the list of our students\n${error.message}`);
  }
});
app.listen(1245, () => {
});

module.exports = app;
