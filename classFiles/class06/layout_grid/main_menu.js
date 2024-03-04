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
`

document.querySelector("body").insertAdjacentHTML("afterbegin", header);