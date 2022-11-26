//   This to update copyright year automatically.
let date = new Date();

let currYear = date.getFullYear();

const copyYear = document.querySelector("#copyYear");
copyYear.textContent = currYear;
