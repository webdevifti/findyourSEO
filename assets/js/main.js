
document.getElementById('banner-title').innerHTML = 'Welcome Back';
document.getElementById('login').style.display = "block";
document.getElementById('login').className += " active";

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    if (tabName == 'signup') {
        document.getElementById('banner-title').innerHTML = 'New Here!';
    } else {
        document.getElementById('banner-title').innerHTML = 'Welcome Back!';
    }
    tabcontent = document.getElementsByClassName("signup-page-tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// 
function showNav() {
    var close = document.querySelector('.bar-close-icon');
    var icon = document.querySelector('.bar-icon');
    var nav = document.querySelector('#nav');
        nav.style.display = 'block';
        close.style.display = 'block';
        icon.style.display = 'none';
}

function closeNav() {
    var bar = document.querySelector('.bar-icon');
    var close = document.querySelector('.bar-close-icon');
    var nav = document.querySelector('#nav');
        nav.style.display = 'none';
        bar.style.display = 'block';
        close.style.display = 'none';
}

function showFilter(){
    let widget = document.querySelector('.left-side-widgets');
    let closeIcon = document.querySelector('.filter-close-icon');
    let Icon = document.querySelector('.filter-icon');
    widget.style.display = 'block';
    closeIcon.style.display = 'block';
    Icon.style.display = 'none';
}
function closeFilter(){
    let widget = document.querySelector('.left-side-widgets');
    let Icon = document.querySelector('.filter-icon');
    let closeIcon = document.querySelector('.filter-close-icon');
    widget.style.display = 'none';
    closeIcon.style.display = 'none';
    Icon.style.display = 'block';
}