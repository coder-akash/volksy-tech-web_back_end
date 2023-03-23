const fs = require('fs');

function countStudents(file) {
  try {
    const f = fs.readFileSync(file);
    const data = f.toString().split('\n').slice(1, -1);
    console.log('Number of students:', data.length);
    const dict = {};

    for (let i = 0; i < data.length; i += 1) {
      const field = data[i].slice(data[i].lastIndexOf(',') + 1);
      if (field in dict === false) {
        dict[field] = data.filter((i) => (i.endsWith(field))).map((j) => (j.slice(0, j.indexOf(','))));
      }
    }

    for (const x of Object.keys(dict)) {
      console.log(`Number of students in ${x}: ${dict[x].length}. List: ${dict[x].join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
