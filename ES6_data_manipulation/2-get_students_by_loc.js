export default function getStudentsByLocation (students, city) {
  if (!Array.isArray(students)) {
    return [];
  }

  const res = students.filter((item) => item.location === city);

  return res;
}
