
window.addEventListener('scroll', honeyscroll, false)
window.addEventListener('scroll', coldhoneyscroll, false)
window.addEventListener('scroll', warmhoneyscroll, false)

function honeyscroll() {
    var honeyspeed = document.getElementById('honeyspeed');
    
    honeyspeed.style.top = (window.pageYOffset / 3) + 'px';
}
function coldhoneyscroll() {
    var coldhoneyspeed = document.getElementById('coldhoneyspeed');
    
    coldhoneyspeed.style.top = (window.pageYOffset / 8) + 'px';
}
function warmhoneyscroll() {
    var warmhoneyspeed = document.getElementById('warmhoneyspeed');
    
    warmhoneyspeed.style.top = (window.pageYOffset / 2) + 'px';
}