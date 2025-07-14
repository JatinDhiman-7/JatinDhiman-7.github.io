const toggleButton=document.getElementById("toggle-button-js");
const body=document.body;

if(localStorage.getItem("theme")==='dark'){
    body.classList.add("dark-mode");
    
}
toggleButton.addEventListener("click",()=>{
    body.classList.toggle("dark-mode");
    const isDark=body.classList.contains("dark-mode");

    toggleButton.textContent=isDark? "☀ Light Mode":"🌛 Dark Mode";
    localStorage.setItem("theme",isDark?"dark":"light");

 
});