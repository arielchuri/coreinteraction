console.log("main menu");

const header= `
<header class="header">
<div class="headercontainer">
    <!-- Logo -->
    <a href="#" class="logo">AC</a>
    <!-- Hamburger icon -->
    <input class="side-menu" type="checkbox" id="side-menu"/>
    <label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
    <!-- Menu -->
    <nav class="nav">
        <ul class="menu">
            <li><a href="index.html" class="home">Home</a> </li>
            <li><a href="gallery.html" class="gallery">Gallery</a></li>
            <li><a href="about.html" class="about">About</a></li>
        </ul>
    </nav>
</div>
</header>
`
const footer= `
<footer>
    <div class="footercontainer">
        <p>footer</p>
    </div>
</footer>
`

document.querySelector("body").insertAdjacentHTML("afterbegin", header);
document.querySelector("body").insertAdjacentHTML("beforeend", footer);