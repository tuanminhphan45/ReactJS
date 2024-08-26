for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}
const student = { title: " evondev" };
const test = student;
student.title = "be";
console.log(test.title);
new Promise((resolve) => resolve()).then(() => console.log("start"));
new Promise((resolve) => resolve()).then(() => console.log("end"));
