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

const links = [{
    label: "Week1",
    url: "week1/index.html"},
    {label: "Week2",
    url: "week2/index.html"},
    {label: "Week3",
    url: "week3/index.html"},
    {label: "Week4",
    url: "week4/index.html"},
    {label: "week5",
    url: "week5/index.html"},
    {label: "week6",
    url: "week6/index.html"},
    {label: "week7",
    url: "week7/index.html"},
    {label: "week8",
    url: "week8/index.html"},
    {label: "week9",
    url: "week9/index.html"},
    {label: "week10",
    url: "wekk10/index.html"},
    {label: "week14",
    url: "week14/index.html"}
]

function inner() {
    const ol = document.getElementById("list")

    links.forEach(link => {

        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", link.url);
        a.innerText = link.label;

        li.appendChild(a);
        ol.appendChild(li);
    })

}