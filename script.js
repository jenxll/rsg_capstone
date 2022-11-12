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

function updateCount(e, amt) {
  // How to grab the weight per student
  console.dir(e.target);
  // Convert that text to a number, add 1, then set the innertext to the new number
  // weight text.innerText = Number(weight text.innerText) + amt
}

const sideBarList = document.querySelector(".student-list");

const studentInfo = {
  message: "Logged In",
  user: { _id: 10, first_name: "Lisa", last_name: "Jenkins", cohort: 3 },
  users: [
    { _id: 1, first_name: "Aiden", last_name: "Thomas" },
    { _id: 2, first_name: "Amanda", last_name: "Leech" },
    { _id: 3, first_name: "Brett", last_name: "Wheeler" },
    { _id: 4, first_name: "Courtney", last_name: "Robertson" },
    { _id: 5, first_name: "Crystal", last_name: "Sorensen" },
    { _id: 6, first_name: "Enoka", last_name: "Silipa" },
    { _id: 7, first_name: "Jackson", last_name: "Danise" },
    { _id: 8, first_name: "Karely", last_name: "Ramirez" },
    { _id: 9, first_name: "Kassidy", last_name: "Price" },
    { _id: 10, first_name: "Lisa", last_name: "Jenkins" },
    { _id: 11, first_name: "Lizzy", last_name: "Johnson" },
    { _id: 12, first_name: "Madelyn", last_name: "Huntley" },
    { _id: 13, first_name: "Matt", last_name: "Caldwell" },
    { _id: 14, first_name: "Michael", last_name: "Alder" },
    { _id: 15, first_name: "Olivia", last_name: "Marolf" },
    { _id: 16, first_name: "Royeal", last_name: "Dee" },
    { _id: 17, first_name: "Tallon", last_name: "Wanless" },
  ],
};

function handleStudentsList() {
  for (student of studentInfo.users) {
    const firstName = student.first_name;
    const containerDiv = document.createElement("div");
    const studentName = document.createTextNode(firstName);

    const redAddBtn = document.createElement("button");
    redAddBtn.classList.add("red-add-btn");
    redAddBtn.innerText = "+";
    // redAddBtn.onclick = addToCount();

    const greenNegBtn = document.createElement("button");
    greenNegBtn.classList.add("green-neg-btn");
    greenNegBtn.innerText = "-";
    // greenNegBtn.onclick = minusfrom;

    containerDiv.appendChild(studentName);
    containerDiv.appendChild(redAddBtn);
    containerDiv.appendChild(greenNegBtn);

    sideBarList.appendChild(containerDiv);
  }
}

handleStudentsList();

whoIsItGonna.addEventListener("click", (e) => {
  const randomNumber = Math.floor(Math.random(users) * 17);
});
