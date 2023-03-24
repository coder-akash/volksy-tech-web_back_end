const fs = require('fs');

function countStudents(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, (err, data) => {
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      let msg;
      const res = [];
      let a_data = data.toString().split('\n').slice(1,-1);
      msg = `Number of students: ${a_data.length}`;
      console.log(msg);
      res.push(msg);
      const dict = {};

      for (let i = 0; i < a_data.length; i += 1) {
        const field = a_data[i].slice(a_data[i].lastIndexOf(',') + 1);
        if (field in dict === false) {
          dict[field] = a_data.filter((i) => (i.endsWith(field))).map((j) => (j.slice(0, j.indexOf(','))));
        }
      }

      for (const x of Object.keys(dict)) {
        msg = `Number of students in ${x}: ${dict[x].length}. List: ${dict[x].join(', ')}`;
        console.log(msg);
        res.push(msg);
      }
      resolve(res);
    });
  });
}
module.exports = countStudents;
