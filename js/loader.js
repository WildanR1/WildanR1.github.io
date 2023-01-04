var myVar;

function loader() {
  myVar = setTimeout(showPage, 1000);
}

function showPage() {
  document.querySelector(".progress").style.display = "none";
  document.getElementById("content").style.display = "block";
}
