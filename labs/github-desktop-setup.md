# GitHub and GitHub Desktop Setup Guide

**Type:** Lab (Complete/Incomplete)

## Overview
This guide will walk you through setting up GitHub and GitHub Desktop - a friendly visual application that makes working with version control easy. No scary command line required!

## What is Git and GitHub?

**Git** is like a time machine for your code. It:
- Saves different versions of your work
- Lets you go back if something breaks
- Helps you work with others on the same project

**GitHub** is a website where you can:
- Store your code online
- Share your work with others
- Collaborate on projects
- Show off your portfolio

**GitHub Desktop** is an app that:
- Makes Git visual and easy to use
- Works on both Mac and Windows
- Requires no command-line knowledge

---

## Part 1: Create a GitHub Account

### Step 1: Sign Up
1. Go to [github.com](https://github.com)
2. Click the **"Sign up"** button (top right)
3. Enter your email address
4. Create a password (write it down somewhere safe!)
5. Choose a username
   - **Tip:** This will be public! Use something professional like `firstname-lastname` or `firstnamelastname`
   - **Tip:** This will appear in URLs for your projects, like: `github.com/your-username`
6. Complete the verification (prove you're human)
7. Verify your email address (check your inbox for the confirmation email)

### Step 2: Customize Your Profile (Optional but Recommended)
1. Log into GitHub
2. Click your profile picture (top right) → **Settings**
3. Add a profile picture
4. Add your name
5. Add a bio (optional)

---

## Part 2: Install GitHub Desktop

### For Mac Users:
1. Go to [desktop.github.com](https://desktop.github.com)
2. Click **"Download for macOS"**
3. Open the downloaded file (`.dmg`)
4. Drag GitHub Desktop to your Applications folder
5. Open GitHub Desktop from Applications
6. If you see a security warning, go to:
   - System Preferences → Security & Privacy
   - Click "Open Anyway" at the bottom

### For Windows Users:
1. Go to [desktop.github.com](https://desktop.github.com)
2. Click **"Download for Windows"**
3. Run the installer file (`.exe`)
4. GitHub Desktop will install automatically
5. Open GitHub Desktop from the Start menu

### Step 3: Sign In to GitHub Desktop
1. When GitHub Desktop opens, click **"Sign in to GitHub.com"**
2. It will open your web browser
3. Click **"Authorize desktop"** in your browser
4. Return to GitHub Desktop - you should now be signed in!

### Step 4: Configure Git
GitHub Desktop will ask for your name and email:
- **Name:** Your real name (this will appear in your commit history)
- **Email:** Use the same email as your GitHub account
- Click **"Finish"**

---

## Part 3: Understanding the Basics

### Key Concepts (Simple Definitions)

**Repository (repo):** A folder that Git is watching. It contains your project files and the entire history of changes.

**Commit:** A snapshot of your work at a specific moment. Like clicking "Save" but better - it remembers what changed and when.

**Push:** Uploading your commits from your computer to GitHub (backing up to the cloud).

**Pull:** Downloading changes from GitHub to your computer (getting updates from the cloud or collaborators).

**Clone:** Making a copy of a repository from GitHub onto your computer.

---

## Part 4: Your First Repository

### Option A: Create a New Repository

1. Open GitHub Desktop
2. Click **"File"** → **"New Repository"**
3. Fill in the details:
   - **Name:** `my-first-repo` (no spaces!)
   - **Description:** "Learning GitHub Desktop"
   - **Local Path:** Choose where to save it on your computer
   - Check "Initialize this repository with a README"
   - Click **"Create Repository"**

4. Click **"Publish repository"** (top right)
   - This uploads it to GitHub
   - Keep "Keep this code private" checked if you want (you can change it later)
   - Click **"Publish Repository"**

5. Congratulations! Your repo is now on GitHub. Click **"View on GitHub"** to see it online.

### Option B: Clone an Existing Repository (for class projects)

1. Your teacher will give you a repository URL (looks like: `https://github.com/username/repo-name`)
2. Open GitHub Desktop
3. Click **"File"** → **"Clone Repository"**
4. Click the **"URL"** tab
5. Paste the repository URL
6. Choose where to save it on your computer
7. Click **"Clone"**

---

## Part 5: Making Your First Commit

Let's practice the basic workflow!

### Step 1: Make Changes
1. In GitHub Desktop, click **"Show in Finder"** (Mac) or **"Show in Explorer"** (Windows)
2. Open the `README.md` file in any text editor (VS Code, Notepad, TextEdit, etc.)
3. Add some text:
   ```markdown
   # My First Repository

   This is my first project on GitHub!

   ## About Me
   I'm learning web development.
   ```
4. Save the file

### Step 2: Review Changes in GitHub Desktop
1. Switch back to GitHub Desktop
2. You'll see `README.md` listed with changes
3. The right side shows what changed:
   - **Green lines:** What you added
   - **Red lines:** What you deleted (if any)

### Step 3: Commit Your Changes
1. At the bottom left, you'll see two text boxes:
   - **Summary:** Write a short description like "Update README with introduction"
   - **Description:** (Optional) Add more details if needed
2. Click the blue **"Commit to main"** button

**What just happened?** You created a snapshot (commit) of your changes!

### Step 4: Push to GitHub
1. At the top, you'll see "Push origin" with a number (like ↑1)
2. Click **"Push origin"**

**What just happened?** Your changes are now backed up online!

### Step 5: Verify on GitHub
1. Click **"View on GitHub"** (or refresh your repo page on github.com)
2. You should see your updated README!

---

## Part 6: The Everyday Workflow

Once you understand the basics, this is your daily routine:

### Working on Your Own Project:
1. **Open GitHub Desktop** and select your repository
2. **Make changes** to your files (edit, add, delete files)
3. **Review changes** in GitHub Desktop
4. **Commit** your changes (write a descriptive message!)
5. **Push** to GitHub (back it up!)

### Working on a Shared Project (like the poetry lab):
1. **Open GitHub Desktop** and select the repository
2. **Pull** to get the latest changes: Click **"Fetch origin"** then **"Pull"**
3. **Make your changes**
4. **Review, commit, and push** (same as above)

---

## Part 7: Tips for Success

### Writing Good Commit Messages
**Good commit messages:**
- "Add contact form to about page"
- "Fix broken navigation menu"
- "Update hero image with new design"

**Bad commit messages:**
- "changes"
- "stuff"
- "asdfasdf"

**Why it matters:** In the future, you'll want to find when you made specific changes. Good messages help!

### Best Practices
1. **Commit often:** Don't wait until you've changed 50 files. Commit every time you complete a small task.
2. **Pull before you push:** If working with others, always pull first to get their changes.
3. **Don't panic:** If something goes wrong, ask for help! Git is designed to be safe.

### Common Issues and Solutions

**"Push rejected" or "Merge conflict":**
- This means someone else changed the same file
- Pull first, resolve any conflicts, then push again
- Don't worry - we'll handle this together in class!

**"Can't find my repository":**
- Make sure you're signed in to GitHub Desktop
- Check that the repository was actually published to GitHub
- Look for it on github.com under your profile

**"GitHub Desktop won't open":**
- Mac: Check Security & Privacy settings
- Windows: Try running as administrator or reinstalling

---

## Completion Checklist

- [ ] Created a GitHub account
- [ ] Verified email address
- [ ] Installed GitHub Desktop
- [ ] Signed in to GitHub Desktop
- [ ] Configured name and email
- [ ] Created or cloned a repository
- [ ] Made a change to a file
- [ ] Committed the change
- [ ] Pushed to GitHub
- [ ] Verified changes appear on GitHub.com

---

## For the Git Poetry Lab

When we do the collaborative Git Poetry lab, you'll use GitHub Desktop to:

1. **Clone** the shared poetry repository
2. **Pull** to get the latest version of the poem
3. **Edit** the poem file to add your line
4. **Commit** with a message like "Add line about [your topic]"
5. **Push** your changes so the next person can continue

The workflow is exactly the same as your first commit!

---

## Additional Resources

### Official Documentation
- [GitHub Desktop Documentation](https://docs.github.com/en/desktop)
- [GitHub Guides](https://guides.github.com/)

### Video Tutorials
- [GitHub Desktop Tutorial (YouTube)](https://www.youtube.com/results?search_query=github+desktop+tutorial+for+beginners)

### Getting Help
- Ask your instructor or classmates
- [GitHub Community Forum](https://github.community/)
- Search Stack Overflow for specific questions

---

## What's Next?

Once you're comfortable with GitHub Desktop, you might want to learn:
- **Branches:** Work on features without affecting the main code
- **Issues:** Track bugs and feature requests
- **GitHub Pages:** Host websites for free directly from your repository
- **Command Line Git:** More power and flexibility (optional!)

For now, focus on the basics: commit, push, pull. You're doing great! 
