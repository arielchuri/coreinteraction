//get the pathname from the current url
const path = window.location.pathname

const header= `
    <header class="menu">
        <div class="menu-wrap">
            <div class="logo">
                <a href="index.html#top" style="text-decoration: none"> <h3>SiteTitle</h3></a>
            </div>
            <!-- This is a tricky way of doing the mobile menu in only CSS but it really only works for the type of full screen menus that you must either close by clicking or by navigating to another page. -->
            <input type="checkbox" id="checkbox">
            <nav>
                <ul>
                    <li><a href="index.html">home</a></li>
                    <li><a href="page01.html">page01</a></li>
                    <li><a href="page02.html">page02</a></li>
                </ul>
            </nav>
            <label for="checkbox">
                <!-- <i class="fa fa-bars menu-icon"></i> -->
                <i class="fas fa-caret-down menu-icon"></i>
            </label>
        </div>
    </header>`

document.querySelector("body").insertAdjacentHTML("afterbegin", header);

//add the active class to the anchor tag with the href === path
document.querySelector(`[href='${path}']`).classList.add('active')

//this code from here: https://stackoverflow.com/questions/70993254/how-do-i-create-a-js-file-that-creates-a-navigation-bar-in-html
