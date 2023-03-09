export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const res = students.reduce((tot, num) => tot + num);

  return res;
}
