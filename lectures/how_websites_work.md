# How Websites Work: From HTML to Web Apps

## Learning Objectives

- **LO4:** Conceptualize a product, object, or experience for the web and realize it through coding.
- **LO9:** Combine your artistic creativity with technology related to the internet.
- **LO10:** Demonstrate a comprehension of skills, methods, techniques and processes to realize interactive systems

## Overview

This lecture traces the evolution from a simple HTML file to a full-fledged web application. Understanding this progression helps you choose the right tools and technologies for your projects.

---

## Stage 1: Pure HTML (Static Files)

### What it is:
A website made of `.html` files with content marked up using HTML tags. No styling, no interactivity beyond links.

### How it works:
```
Your Computer
  └── index.html ─────> Browser reads file
                        Browser displays content
```

### Example:
```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Page</title>
</head>
<body>
  <h1>Welcome</h1>
  <p>This is a pure HTML page.</p>
  <a href="about.html">About Me</a>
</body>
</html>
```

### Characteristics:
- ✅ Simple, fast to create
- ✅ Works by just opening the file
- ✅ Easy to understand
- ❌ Looks plain (browser default styles)
- ❌ Every page needs full HTML structure
- ❌ Hard to maintain consistency across pages

### Use cases:
- Learning HTML
- Very simple sites
- Documentation that needs to work offline

---

## Stage 2: HTML + CSS (Styled Static Sites)

### What it is:
HTML files linked to CSS files that control appearance and layout.

### How it works:
```
Your Computer
  ├── index.html ────┐
  └── styles.css ────┤──> Browser reads both files
                     └──> Browser applies styles
                          Browser displays styled content
```

### Example:
**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>My Styled Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Welcome</h1>
  <p>This is a styled page.</p>
</body>
</html>
```

**styles.css:**
```css
body {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  color: #2c3e50;
}
```

### Characteristics:
- ✅ Looks professional
- ✅ Separation of content (HTML) and presentation (CSS)
- ✅ One CSS file can style many HTML pages
- ✅ Responsive design possible with media queries
- ❌ Still no interactivity
- ❌ Content updates require editing HTML files

### Use cases:
- Portfolio sites
- Blogs (static site generators)
- Landing pages
- Documentation sites

---

## Stage 3: Local Server vs. Web Server

### Opening files directly (file://):
```
file:///Users/yourname/Desktop/project/index.html
```
- Works for simple sites
- **Problem:** Can't make HTTP requests, can't test real web features
- **Problem:** Different paths than on real server

### Local development server (http://localhost):
```
http://localhost:8000/index.html
```

**Why use a local server?**
- Simulates real web environment
- Allows testing features that need HTTP
- Shows how your site will behave when deployed
- Catches path/linking issues early

**Simple local server options:**
```bash
# Python (Python 3)
python3 -m http.server 8000

# Node.js (if you have it installed)
npx http-server

# VS Code extension
# Install "Live Server" extension, right-click HTML file → "Open with Live Server"
```

### Real web server (http://example.com):
```
Internet
  └── example.com ───> Your Server
                         ├── index.html
                         ├── styles.css
                         └── images/
```

**How it works:**
1. You type URL in browser
2. Browser asks DNS "Where is example.com?"
3. DNS responds with server IP address
4. Browser requests files from that server
5. Server sends files back
6. Browser displays the page

### Characteristics:
- ✅ Accessible from anywhere
- ✅ Has a real domain name
- ✅ Can be indexed by search engines
- ✅ Professional hosting options available
- ❌ Costs money (domain + hosting)
- ❌ Requires deployment process

---

## Stage 4: HTML + CSS + JavaScript (Interactive Sites)

### What it is:
Adding JavaScript for interactivity, user input, and dynamic changes without page reload.

### How it works:
```
Your Computer / Server
  ├── index.html ────┐
  ├── styles.css ────┤──> Browser loads all files
  └── script.js ─────┘    JavaScript runs in browser
                          Can modify HTML/CSS in real-time
                          Responds to user interactions
```

### Example:
**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Interactive Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Click Counter</h1>
  <button id="myButton">Click me!</button>
  <p>Clicks: <span id="counter">0</span></p>

  <script src="script.js"></script>
</body>
</html>
```

**script.js:**
```javascript
let count = 0;
const button = document.getElementById('myButton');
const counter = document.getElementById('counter');

button.addEventListener('click', function() {
  count++;
  counter.textContent = count;
});
```

### What JavaScript can do:
- ✅ Respond to user interactions (clicks, typing, scrolling)
- ✅ Modify page content without reloading
- ✅ Validate forms
- ✅ Create animations
- ✅ Make calculations
- ✅ Store data in browser (localStorage)
- ❌ Can't permanently save data to a database
- ❌ Resets when you refresh the page (unless using localStorage)

### Use cases:
- Interactive portfolios
- Client-side calculators/tools
- Games
- Dynamic interfaces
- Single-page applications (SPAs)

---

## Stage 5: Adding a Database (Dynamic Content)

### What it is:
Using a server-side language and database to store and retrieve data permanently.

### The Architecture:
```
Browser                Server                     Database
  │                      │                           │
  │ 1. Request page      │                           │
  ├─────────────────────>│                           │
  │                      │ 2. Query database         │
  │                      ├──────────────────────────>│
  │                      │ 3. Return data            │
  │                      │<──────────────────────────┤
  │ 4. Send HTML with    │                           │
  │    data embedded     │                           │
  │<─────────────────────┤                           │
  │                      │                           │
```

### Common stacks:

**Traditional:**
- **Backend:** PHP, Python, Ruby, Node.js
- **Database:** MySQL, PostgreSQL, MongoDB
- **Example:** WordPress (PHP + MySQL)

**Modern (API-based):**
- **Frontend:** HTML/CSS/JS (runs in browser)
- **Backend API:** Node.js, Python, Go
- **Database:** PostgreSQL, MongoDB, Firebase
- **Communication:** JSON over HTTP/HTTPS

### Example flow (Blog):

**User visits blog homepage:**
1. Browser requests `example.com`
2. Server runs code: "SELECT * FROM posts ORDER BY date DESC"
3. Database returns list of posts
4. Server generates HTML with post data
5. Browser receives and displays HTML

**User submits comment:**
1. Browser sends POST request with comment data
2. Server validates data
3. Server runs: "INSERT INTO comments (text, author) VALUES (...)"
4. Database stores comment
5. Server responds "Success"
6. Browser updates page

### Characteristics:
- ✅ Data persists across sessions
- ✅ Multiple users can interact with same data
- ✅ Content managed through admin interface
- ✅ User accounts, authentication possible
- ✅ Dynamic content generation
- ❌ More complex to build and maintain
- ❌ Requires server infrastructure
- ❌ Security concerns (SQL injection, authentication, etc.)

### Use cases:
- Blogs and content management systems
- E-commerce sites
- Social networks
- Booking systems
- Anything with user accounts or data persistence

---

## Stage 6: Modern Web Apps (Component-Based)

### What it is:
Using frameworks to build complex, app-like experiences with reusable components.

### Popular frameworks:
- **React** (Facebook)
- **Vue** (Independent)
- **Svelte** (Independent)
- **Angular** (Google)

### Component-based thinking:

Instead of pages, you build **components** that can be reused:

```
Webpage
  ├── <Header />
  ├── <Navigation />
  ├── <ArticleList>
  │     ├── <Article />
  │     ├── <Article />
  │     └── <Article />
  ├── <Sidebar>
  │     ├── <SearchBox />
  │     └── <TagCloud />
  └── <Footer />
```

### Example (React):
```jsx
// Button component
function Button({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

// Use the component multiple times
function App() {
  return (
    <div>
      <Button text="Save" onClick={() => save()} />
      <Button text="Cancel" onClick={() => cancel()} />
      <Button text="Delete" onClick={() => delete()} />
    </div>
  );
}
```

### How it works:
```
Developer writes code in:
  └── Components (JSX, Vue templates, etc.)

Build tool compiles to:
  └── Optimized JavaScript, HTML, CSS

Browser receives:
  └── Single-page app that feels instant
      (No page reloads, routes handled by JS)
```

### Characteristics:
- ✅ Reusable components = less code duplication
- ✅ Fast, app-like user experience
- ✅ State management (data flows through app)
- ✅ Large ecosystem of tools and libraries
- ✅ Hot reloading during development
- ❌ Steep learning curve
- ❌ Build process adds complexity
- ❌ Overkill for simple sites
- ❌ SEO challenges (solved with SSR/SSG)

### Modern architecture (JAMstack):
```
Frontend (React/Vue/Svelte)
  ↓ Deployed to CDN (Netlify, Vercel)
  ↓ Makes API requests to:
    ↓
Backend API (Node.js, Python, Go)
  ↓ Queries/Updates:
    ↓
Database (PostgreSQL, MongoDB, Supabase)
```

### Use cases:
- Complex web applications
- Dashboards and admin panels
- Real-time collaborative tools
- Anything that feels like a "native app"

---

## Summary: When to Use What?

| Your Need | Use This | Example |
|-----------|----------|---------|
| Simple info page | HTML + CSS | Personal page, resume |
| Styled multi-page site | HTML + CSS + organization | Portfolio, documentation |
| Need interactivity | + JavaScript | Interactive art, calculators |
| Need to save data | + Backend + Database | Blog, e-commerce |
| Complex app experience | + Framework | Gmail, Figma, Notion |

---

## The Full Stack (Modern Web App)

```
┌─────────────────────────────────────────────────┐
│  FRONTEND (Browser)                             │
│  ┌───────────────────────────────────────────┐  │
│  │  React/Vue/Svelte Components              │  │
│  │  ├── HTML (structure)                     │  │
│  │  ├── CSS (styling)                        │  │
│  │  └── JavaScript (logic, state)            │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                     ↕ HTTP/HTTPS
┌─────────────────────────────────────────────────┐
│  BACKEND (Server)                               │
│  ┌───────────────────────────────────────────┐  │
│  │  API (Node.js, Python, Go, etc.)          │  │
│  │  ├── Routes (URLs)                        │  │
│  │  ├── Controllers (logic)                  │  │
│  │  ├── Authentication                       │  │
│  │  └── Business logic                       │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
                     ↕ SQL/NoSQL
┌─────────────────────────────────────────────────┐
│  DATABASE                                       │
│  ┌───────────────────────────────────────────┐  │
│  │  PostgreSQL / MongoDB / MySQL             │  │
│  │  └── Tables/Collections of data           │  │
│  └───────────────────────────────────────────┘  │
└─────────────────────────────────────────────────┘
```

---

## Key Takeaways

1. **Start simple:** You don't need a framework to make a website
2. **Add complexity only when needed:** Each stage adds capabilities but also complexity
3. **Understand the basics:** HTML/CSS/JS fundamentals apply everywhere
4. **Local server is your friend:** Test in an environment similar to production
5. **Separation of concerns:** HTML (structure), CSS (style), JS (behavior), Backend (data)

---

## Resources

- [MDN: How the Web Works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- [Introduction to the Server Side](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Introduction)
- [Web Architecture 101](https://engineering.videoblocks.com/web-architecture-101-a3224e126947)
- [The Modern JavaScript Tutorial](https://javascript.info/)

---

## For Your Projects

**This semester, you'll work through stages 1-4:**
- Pure HTML (Interview assignment)
- HTML + CSS (All HTML, Expressive Text, Flags)
- HTML + CSS + more complexity (25 Variations, Stories as Networks)
- HTML + CSS + JavaScript (Living Collection)

**You won't need:**
- Backend/Database (unless you choose to for Living Collection)
- Frameworks (we're learning fundamentals first)

Understanding these stages helps you make informed decisions about tools and approaches for future projects!
