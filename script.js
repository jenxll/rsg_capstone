const users = async () => {
  const response = await fetch("https://devpipeline-mock-api.herokuapp.com/api/auth/login"; {
  method: "GET",
  headers: {
    Accept: "application/json"
  }
});

const jsonData = await response.jsonData();
console.log(jsonData.users);
}

users();

function handleStudentsList(){
  const StudentList = users.value
  const student-list-container = document.createElement("div")
  const postiveBox = document.createElement
}