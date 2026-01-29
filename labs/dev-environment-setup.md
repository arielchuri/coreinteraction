# Development Environment Setup

**Type:** Lab (Complete/Incomplete)

## Overview
Set up your development environment for web development using Visual Studio Code (VS Code). This lab will help you install the essential tools and extensions for creating HTML, CSS, and JavaScript projects.

## Requirements

### 1. Install Visual Studio Code
- **Download:** [code.visualstudio.com](https://code.visualstudio.com/)
- Available for Windows, macOS, and Linux
- Install using default settings

### 2. Install Essential VS Code Extensions for Web Development

**Method 1: Within VS Code**
1. Open VS Code
2. Click the Extensions icon in the sidebar (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for and install each of these extensions

**Method 2: Direct Links**
- Click the links below to open directly in VS Code

#### Required Extensions:

**Live Server**
- **Purpose:** Launch a local development server with live reload
- **Link:** [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- **Why:** Opens your HTML files in a browser and automatically refreshes when you save changes
- **Usage:** Right-click any HTML file → "Open with Live Server"

**Prettier - Code Formatter**
- **Purpose:** Automatically format your code consistently
- **Link:** [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- **Why:** Keeps your HTML, CSS, and JavaScript formatted and readable
- **Setup:** After installing, enable "Format On Save" in VS Code settings

#### Highly Recommended Extensions:

**HTML CSS Support**
- **Purpose:** IntelliSense for CSS class names in HTML
- **Link:** [HTML CSS Support](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)
- **Why:** Auto-completes CSS class names while typing in HTML

**Auto Rename Tag**
- **Purpose:** Automatically rename paired HTML tags
- **Link:** [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- **Why:** When you rename an opening tag, the closing tag updates automatically

**Color Highlight**
- **Purpose:** Highlight colors in your CSS
- **Link:** [Color Highlight](https://marketplace.visualstudio.com/items?itemName=naumovs.color-highlight)
- **Why:** See color previews directly in your code

**indent-rainbow**
- **Purpose:** Makes indentation more readable with colors
- **Link:** [indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow)
- **Why:** Helps visualize code structure and nesting

### 3. Configure VS Code Settings

**Enable Format on Save:**
1. Open Settings (`Ctrl+,` / `Cmd+,`)
2. Search for "format on save"
3. Check the box for "Editor: Format On Save"

**Set Prettier as Default Formatter:**
1. Open Settings
2. Search for "default formatter"
3. Select "Prettier - Code formatter"

### 4. Install a Modern Web Browser

**Recommended:**
- [Firefox Developer Edition](https://www.mozilla.org/en-US/firefox/developer/)
- [Google Chrome](https://www.google.com/chrome/)
- [Microsoft Edge](https://www.microsoft.com/en-us/edge) (Chromium-based)

**Why:** Modern browsers have excellent developer tools for inspecting HTML, debugging CSS, and testing JavaScript.

### 5. Install Git (Version Control)

- **Download:** [git-scm.com/downloads](https://git-scm.com/downloads)
- **Important:** On Windows, use default settings during installation

**Verify installation:**
```bash
git --version
```

### 6. Create and Test Your First HTML File

1. Create a new folder for your web projects (e.g., `coreinteraction`)
2. Open the folder in VS Code (`File → Open Folder`)
3. Create a new file called `index.html`
4. Type `!` and press `Tab` (this is an Emmet shortcut that generates HTML boilerplate)
5. Add some content inside the `<body>` tag:
```html
<h1>Hello, Web Development!</h1>
<p>This is my first HTML page.</p>
```
6. Save the file (`Ctrl+S` / `Cmd+S`)
7. Right-click in the editor and select "Open with Live Server"
8. Your page should open in your browser!

## VS Code Keyboard Shortcuts to Learn

| Windows/Linux | Mac | Action |
|--------------|-----|--------|
| `Ctrl+S` | `Cmd+S` | Save file |
| `Ctrl+Shift+P` | `Cmd+Shift+P` | Command Palette |
| `Ctrl+B` | `Cmd+B` | Toggle sidebar |
| `Ctrl+/` | `Cmd+/` | Toggle comment |
| `Alt+Up/Down` | `Option+Up/Down` | Move line up/down |
| `Ctrl+D` | `Cmd+D` | Select next occurrence |
| `Ctrl+Shift+X` | `Cmd+Shift+X` | Extensions |

## Additional Resources

### VS Code Documentation
- [VS Code User Interface](https://code.visualstudio.com/docs/getstarted/userinterface)
- [HTML in VS Code](https://code.visualstudio.com/docs/languages/html)
- [Emmet in VS Code](https://code.visualstudio.com/docs/editor/emmet)

### Web Development Learning Resources
- [MDN: Getting Started with the Web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)
- [HTML Elements Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)

### Troubleshooting
- [VS Code Troubleshooting](https://code.visualstudio.com/docs/supporting/faq)
- [Live Server FAQ](https://github.com/ritwickdey/vscode-live-server/wiki/FAQ)

## Completion Criteria
- [ ] VS Code installed
- [ ] Live Server extension installed
- [ ] Prettier extension installed
- [ ] HTML CSS Support extension installed
- [ ] Auto Rename Tag extension installed
- [ ] "Format On Save" enabled in settings
- [ ] Modern web browser installed
- [ ] Git installed and version verified
- [ ] Successfully created and viewed an HTML file using Live Server

## Optional: Customize Your Setup

**Themes:**
- Search "theme" in Extensions to find color themes you like
- Popular themes: One Dark Pro, Dracula Official, Night Owl

**Font:**
- Many developers use monospace fonts like [Fira Code](https://github.com/tonsky/FiraCode) or [JetBrains Mono](https://www.jetbrains.com/lp/mono/)
- Enable font ligatures for prettier code display

**Icons:**
- Search "icons" in Extensions
- Popular: Material Icon Theme, VSCode Icons

---

**Remember:** Your development environment is a personal workspace. As you learn, you'll discover what works best for you. Start with these essentials and customize as you go!
