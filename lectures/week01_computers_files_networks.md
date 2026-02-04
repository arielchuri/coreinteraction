# Week 1: Computers, Files, and Networks

## Learning Objectives

- **LO1:** Use a basic vocabulary of interactive media to both give and respond to critique productively.
- **LO7:** Research historic and current design precedents to contextualize your own work.
- **LO9:** Combine your artistic creativity with technology related to the internet.

## Topics Covered

### Understanding Computers
- What is a computer?
- Hardware vs. software
- How computers process information
- The role of designers in computing

### File Systems
- File naming conventions
- File organization strategies
- File paths (absolute vs. relative)
- File extensions and types
- Working with directories/folders

### Networks and the Internet
- What is the internet?
- How the web works
- Clients and servers
- URLs and domains
- Brief history of the web

### Files for the Web
- HTML, CSS, JavaScript files
- Image formats (JPG, PNG, GIF, SVG)
- How browsers read files
- Local vs. remote files

## Key Concepts

1. **File Naming Best Practices**

**Why naming matters:**
- Web servers are often case-sensitive (Linux/Unix systems)
- URLs can't contain spaces without encoding (`%20`)
- Consistency prevents linking errors
- Good names make projects maintainable

**The Rules:**

- **Always use lowercase:** `index.html` not `Index.html` or `INDEX.html`
- **No spaces:** Use hyphens or underscores instead
- **Be descriptive:** `contact-page.html` not `page2.html`
- **Use consistent separators:** Pick hyphens OR underscores and stick with it
- **Include file extensions:** `.html`, `.css`, `.js`, `.jpg`, etc.
- **Avoid special characters:** No @, #, %, &, *, spaces, etc.

**Recommended conventions:**

```
Option 1 (kebab-case): all-lowercase-with-hyphens.html
   - Most common for URLs
   - Easy to read
   - Examples: about-me.html, contact-form.css

Option 2 (snake_case): all_lowercase_with_underscores.html
   - Common in programming
   - Examples: contact_form.html, main_styles.css

Option 3 (mixed): lowercase-with-hyphens_version01.html
   - Useful for numbering/versions
   - Examples: project-draft_v01.html, logo-design_final.jpg
```

**Good vs. Bad examples:**

```
 BAD:
- My Page.html         (spaces)
- ContactForm.html     (mixed case)
- page2.html           (not descriptive)
- about me!.html       (spaces and special char)
- HOMEPAGE.HTML        (all caps)

 GOOD:
- my-page.html
- contact-form.html
- about-page.html
- about-me.html
- homepage.html
```

2. **File Paths**
   - Absolute paths: Full path from root directory
   - Relative paths: Path relative to current location
   - Understanding `./` and `../`

3. **The Request/Response Cycle**
   - Browser requests a file
   - Server sends response
   - Browser renders the content

## Activities

- Organize your project files
- Practice writing file paths
- Explore your computer's file system
- Understand how browsers request web pages

## Resources

- [MDN: What is a web server?](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server)
- [How the Internet Works in 5 Minutes](https://www.youtube.com/watch?v=7_LPdttKXPc)
- Paul Ford, "What is Code?" (from course readings)

## For Next Week

- Set up your development environment
- Create a project folder structure
- Begin thinking about the Interview assignment
