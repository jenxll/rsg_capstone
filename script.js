// const data = (async () => {
//   const userData = await fetch(
//     "https://devpipeline-mock-api.herokuapp.com/api/auth/login",
//     {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//     }
//   )
//     .then((res) => res.json())
//     .then((data) => data)
//     .catch((err) => console.log("DO SOMETHING HERE", err));

//   return userData;
// })();

const listOfStudents = document.getElementsByClassName("list-of-students");
const listOfStudentsDiv = listOfStudents.item(0);

const studentInfo = {
  message: "Logged In",
  user: { _id: 1, first_name: "Aiden", last_name: "Thomas", cohort: 3 },
  users: [
    { _id: 1, first_name: "lisa" },
    { _id: 2, first_name: "royeal", last_name: "dee" },
  ],
};

console.log(studentInfo);
console.log(studentInfo.users);
console.log(Object.keys(studentInfo));
function handleStudentsList() {
  let names = Object.keys(studentInfo.users[1]);
  console.log(names);
  for (student of studentInfo) {
    console.log(student.first_name);
    const containerDiv = document.createElement("div");
    const studentName = createTextNode(student);

    const redAddBtn = createElement("button");
    redAddBtn.classList.add("red-add-btn");
    redAddBtn.innerText = "+";
    redAddBtn.onclick = addToCount();

    const greenNegBtn = document.createElement("button");
    greenNegBtn.classList.add("green-neg-btn");
    greenNegBtn.innerText = "-";
    greenNegBtn.onclick = addToCount();

    containerDiv.appendChild(studentName);
    containerDiv.appendChild(redAddBtn);
    containerDiv.appendChild(greenNegBtn);

    listOfStudents.appendChild(containerDiv);
    console.log(containerDiv);
  }
}

handleStudentsList();
