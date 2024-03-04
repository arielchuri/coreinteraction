console.log("main menu");

const header= `
<header>
    <nav>
        <ul>
            <li><a href="index.html" class="home">home</a></li>
            <li><a href="grid.html" class="projects">projects</a></li>
            <li><a href="contact.html" class="contact">contact</a></li>
        </ul>
    <nav>
</header>
<label for="checkbox">
<!-- <i class="fa fa-bars menu-icon"></i> -->
<i class="fas fa-caret-down menu-icon"></i>
</label>
`

document.querySelector("body").insertAdjacentHTML("afterbegin", header);