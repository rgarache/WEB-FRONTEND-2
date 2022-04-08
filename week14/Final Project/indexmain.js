const d = new Date();
const year = d.getFullYear();
const fulldate = `${year}`;
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};
const date = d.toLocaleDateString(undefined, options);
document.getElementById("updated").innerHTML = date;
document.querySelector("#year").textContent = fulldate;