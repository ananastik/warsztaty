let stopSubmit = document.getElementById("formularz");

stopSubmit.addEventListener("submit", (e) => {
    e.preventDefault();
    let checkName = document.getElementsByName("fname")[0];
    let checkSurname = document.getElementsByName("lname")[0];
    console.log(checkName.value);
    console.log(checkSurname.value);
});
