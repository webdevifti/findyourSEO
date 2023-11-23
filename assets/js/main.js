
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
    var bar = document.querySelector('.bar-icon');
    var nav = document.querySelector('#nav');

    bar.addEventListener('click', function () {
        nav.style.display = 'block';
        close.style.display = 'block';
        this.style.display = 'none';
    });

}

function closeNav() {
    var close = document.querySelector('.bar-close-icon');
    var bar = document.querySelector('.bar-icon');
    var nav = document.querySelector('#nav');

    close.addEventListener('click', function () {
        nav.style.display = 'none';
        bar.style.display = 'block';
        this.style.display = 'none';
    });
}