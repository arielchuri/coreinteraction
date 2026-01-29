# File Naming Conventions - Quick Reference

## 🚫 The Cardinal Rules

### 1. ALWAYS USE LOWERCASE
```
✅ index.html
❌ Index.html
❌ INDEX.html
❌ InDeX.html
```

**Why?**
- Linux/Unix servers are case-sensitive
- `Index.html` and `index.html` are different files on many servers
- Prevents broken links when you deploy

### 2. NO SPACES EVER
```
✅ about-me.html
✅ about_me.html
❌ about me.html
❌ About Me.html
```

**Why?**
- Spaces become `%20` in URLs: `about%20me.html`
- Causes linking errors
- Looks unprofessional
- Hard to work with in command line

### 3. BE DESCRIPTIVE
```
✅ contact-form.html
✅ portfolio-gallery.css
✅ main-navigation.js
❌ page2.html
❌ style.css
❌ file.js
```

**Why?**
- Future you (and others) will thank you
- Makes project navigation easier
- Professional practice

---

## ✅ Three Acceptable Styles

### Option 1: kebab-case (Recommended for Web)
```
all-lowercase-with-hyphens.html
about-me.html
contact-form.css
main-script.js
logo-design-final.jpg
```
- Most common in web development
- Easy to read
- Works great in URLs

### Option 2: snake_case
```
all_lowercase_with_underscores.html
about_me.html
contact_form.css
main_script.js
logo_design_final.jpg
```
- Common in programming (Python, etc.)
- Also very readable

### Option 3: mixed (for versions/numbers)
```
project-name_version01.html
logo-design_final.jpg
site-mockup_v03.pdf
homepage-draft_2024-01-15.html
```
- Useful when you need to number things
- Combines readability with organization

---

## 📋 Common File Types & Naming

### HTML Files
```
index.html          (homepage - MUST be lowercase)
about.html
contact.html
portfolio.html
project-1.html
```

### CSS Files
```
styles.css          (if only one CSS file)
main.css
layout.css
typography.css
navigation.css
```

### JavaScript Files
```
script.js           (if only one JS file)
main.js
navigation.js
form-validation.js
```

### Image Files
```
logo.png
hero-image.jpg
profile-photo.jpg
icon-home.svg
background-pattern.png
```

### Folder/Directory Names
```
images/
css/
js/
assets/
projects/
about-page/
```

---

## ❌ Characters to AVOID

```
Spaces          about me.html
Capitals        AboutMe.html
Special chars   about@me.html
                about#me.html
                about%me.html
                about&me.html
Punctuation     about!me.html
                about?.html
                about,me.html
```

---

## 🎯 Project Structure Example

```
my-portfolio/
├── index.html
├── about.html
├── contact.html
├── css/
│   ├── main.css
│   ├── layout.css
│   └── typography.css
├── js/
│   ├── main.js
│   └── navigation.js
├── images/
│   ├── logo.png
│   ├── hero-image.jpg
│   └── profile-photo.jpg
└── projects/
    ├── project-1.html
    ├── project-2.html
    └── project-3.html
```

---

## 💡 Pro Tips

### Tip 1: Pick ONE convention and stick with it
```
✅ CONSISTENT:
   about-me.html
   contact-form.html
   portfolio-gallery.html

❌ INCONSISTENT:
   about-me.html
   contact_form.html
   PortfolioGallery.html
```

### Tip 2: Use numbers for ordering
```
✅ project-01.html, project-02.html, project-03.html
✅ lesson-1.html, lesson-2.html, lesson-3.html

❌ project-1.html, project-2.html, project-10.html
   (10 comes before 2 alphabetically!)
```

### Tip 3: Date formats (if needed)
```
✅ YYYY-MM-DD format (sorts chronologically)
   notes-2024-01-15.html
   draft-2024-02-03.html

❌ MM-DD-YYYY (doesn't sort well)
   notes-01-15-2024.html
```

### Tip 4: Test your file names
Before committing to a naming scheme, try:
- Typing the name in a URL
- Saying it out loud
- Explaining it to someone else

If it's awkward, change it now!

---

## 🚨 Common Student Mistakes

### Mistake 1: "I'll fix it later"
```
❌ page1.html, page2.html, page3.html
```
You won't remember what these are in a week!

### Mistake 2: "My computer works fine with spaces"
```
❌ My Website/My Page.html
```
Works on your Mac/Windows, **breaks on the web server**!

### Mistake 3: "Capital letters look nicer"
```
❌ HomePage.html, AboutMe.html
```
They might, but they cause problems!

### Mistake 4: "I'll just use special characters"
```
❌ about&me.html, my-site!.html
```
Nope. Just don't.

---

## ✅ Quick Checklist Before Saving

- [ ] All lowercase?
- [ ] No spaces?
- [ ] Descriptive name?
- [ ] File extension included?
- [ ] No special characters?
- [ ] Consistent with my other file names?

---

## 🎓 Remember

**Good file naming is:**
- A professional habit
- A sign of attention to detail
- Essential for web development
- Something that becomes automatic with practice

**Bad file naming causes:**
- Broken links
- Deployment headaches
- Wasted time debugging
- Embarrassment when sharing work

---

## 📚 Further Reading

- MDN: [Dealing with Files](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files)
- [The Art of Naming Files](https://speakerdeck.com/jennybc/how-to-name-files)
