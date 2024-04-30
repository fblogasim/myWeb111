const viewportSize = window.innerWidth;
const scrollDiv = document.getElementById("scroll");
if (viewportSize < 758){
  scrollDiv.setAttribute("data-bs-target", "#navbar");
  
}
else{
  scrollDiv.setAttribute("data-bs-target", "#navbar1");
  
}


function openNav() {
  document.getElementById("mySidebar").style.width = "100vw";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0vw";
}

