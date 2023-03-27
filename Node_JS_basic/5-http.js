const http = require('http');
const countStudents = require('./3-read_file_async.js');
const db = process.argv[2];

const hostname = 'localhost';
const port = 1245;

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students}');
    try {
      const students = await countStudents(db);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.end();
});

app.listen(port, hostname, () => {

});
module.exports = app;
