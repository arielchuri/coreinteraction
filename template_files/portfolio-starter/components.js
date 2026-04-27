class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <div class="container nav-content">
                <a href="index.html" class="logo">PORTFOLIO</a>
                
                <!-- Hamburger Menu Button -->
                <button class="menu-toggle" aria-label="Toggle Menu">
                    <span class="hamburger"></span>
                </button>

                <ul class="nav-links">
                    <li><a href="index.html#projects">Work</a></li>
                    <li><a href="design-system.html">Design</a></li>
                    <li><a href="index.html#about">About</a></li>
                    <li><button id="theme-toggle" aria-label="Toggle Dark Mode">🌓</button></li>
                </ul>
            </div>
        </nav>
        `;
        
        const btn = this.querySelector('#theme-toggle');
        const menuToggle = this.querySelector('.menu-toggle');
        const navLinks = this.querySelector('.nav-links');

        // Dark Mode Logic
        btn.addEventListener('click', () => {
            let theme = document.documentElement.getAttribute('data-theme');
            let newTheme = theme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });

        // Mobile Menu Logic
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
}

class FooterBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="container">
            <p>Built with Vanilla Web Tech.</p>
            <div class="footer-spacer"></div>
        </footer>
        `;
    }
}

customElements.define('nav-bar', NavBar);
customElements.define('footer-bar', FooterBar);
