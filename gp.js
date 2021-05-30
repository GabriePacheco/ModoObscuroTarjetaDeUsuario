var app = document.getElementById('app');
var toggle = document.getElementById('toggle');
toggle.onclick = ()=> {
    app.classList.toggle('dark');
    if ( app.classList.contains('dark') ){
        toggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        toggle.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
}