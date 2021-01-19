const swichOn = document.querySelector('#theme-switch-toggle')
console.log(swichOn);
const bodyRef = document.querySelector('body')
console.log(bodyRef);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
if (localStorage.getItem("theme")) {
    const checked =JSON.parse( localStorage.getItem("theme"))
    swichOn.checked = checked
    swichOn.checked
         ? darkThemeOn() : lightThemeOn ()
}

 function checkboxStatus(event) {
     localStorage.setItem("theme",JSON.stringify(event.target.checked))
     event.target.checked
          ? darkThemeOn() : lightThemeOn()
          console.log(event);
}
 
function darkThemeOn() {
    bodyRef.classList.add(Theme.DARK)
    bodyRef.classList.remove(Theme.LIGHT)
}


function lightThemeOn() {
    bodyRef.classList.add(Theme.LIGHT)
    bodyRef.classList.remove(Theme.DARK)
}
swichOn.addEventListener('change', checkboxStatus)
