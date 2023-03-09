export default function getListStudentIds(x) {
    if (Array.isArray(x)) {
        const m = students.map((mappedObj) => mappedObj.id);
        return m;
    } else {
        return [];
    }
}
