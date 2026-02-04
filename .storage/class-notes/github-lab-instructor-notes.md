# GitHub Lab — Instructor Notes

**Labs:** GitHub Desktop Setup & Quick Start
**Focus:** Handling common issues (merge conflicts, deleted files)
**Skill Level:** Beginner-friendly with troubleshooting guidance

---

## Overview

These notes cover the most common scenarios students will encounter during collaborative work, especially during the Git Poetry lab and ongoing assignments. Each scenario includes **both GitHub Desktop and command line** instructions.

---

## Pre-Lab Instructor Prep

### Before Class:
- [ ] Create shared repository for Git Poetry lab
- [ ] Add all students as collaborators
- [ ] Test merge conflict scenario yourself
- [ ] Prepare examples of good commit messages
- [ ] Have backup plan if GitHub is down (local-only workflow)
- [ ] Review student GitHub usernames

### Materials:
- [ ] Shared repository URL ready to share
- [ ] Backup internet connection
- [ ] Command line cheat sheet printed (optional)
- [ ] Example merge conflict files

---

## Common Scenario 1: Merge Conflicts

**When This Happens:**
Two students edit the same line(s) of a file. When the second person tries to push, Git doesn't know which version to keep.

### Signs of a Merge Conflict:

**GitHub Desktop:**
- Push button fails
- Error message: "Can't push to remote"
- Message: "Pull before pushing"
- After pulling: "Resolve conflicts before continuing"

**Command Line:**
```bash
! [rejected]        main -> main (fetch first)
error: failed to push some refs
# Or after pulling:
CONFLICT (content): Merge conflict in poem.txt
```

---

### Resolving Merge Conflicts: GitHub Desktop Method

**Step 1: Pull First**
1. Click **"Fetch origin"** button (top)
2. If updates exist, click **"Pull origin"**
3. GitHub Desktop will show conflict notification

**Step 2: Identify Conflicts**
1. Conflicted files appear with warning icon (⚠️)
2. Files are listed in the left panel
3. Click on a conflicted file to see details

**Step 3: Open and Edit the File**
1. Click **"Open in [Your Editor]"** or right-click → Open with VS Code
2. Look for conflict markers in the file:
   ```
   <<<<<<< HEAD
   Your version of the line
   =======
   Their version of the line
   >>>>>>> branch-name
   ```

**Step 4: Resolve the Conflict**
1. **Decide what to keep:**
   - Keep your version only
   - Keep their version only
   - Combine both versions
   - Write something entirely new

2. **Edit the file:**
   - Delete the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
   - Keep/combine the content you want
   - Save the file

   **Example Before:**
   ```
   <<<<<<< HEAD
   Roses are red, violets are blue
   =======
   Roses are crimson, violets are navy
   >>>>>>> main
   ```

   **Example After (combined):**
   ```
   Roses are red and crimson, violets are blue and navy
   ```

**Step 5: Mark as Resolved in GitHub Desktop**
1. After saving, return to GitHub Desktop
2. The conflict markers disappear automatically
3. File moves to "Changes" section
4. Click checkmark to stage the resolved file

**Step 6: Commit the Merge**
1. Add commit message: "Resolve merge conflict in poem.txt"
2. Click **"Commit to main"**
3. Click **"Push origin"**

---

### Resolving Merge Conflicts: Command Line Method

**Step 1: Pull and See the Conflict**
```bash
git pull origin main
```
Output will show:
```
CONFLICT (content): Merge conflict in poem.txt
Automatic merge failed; fix conflicts and then commit the result.
```

**Step 2: Check Which Files Have Conflicts**
```bash
git status
```
Shows:
```
Unmerged paths:
  both modified:   poem.txt
```

**Step 3: Open and Edit the Conflicted File**
```bash
# Open in your editor
code poem.txt
# or
vim poem.txt
# or
nano poem.txt
```

Look for conflict markers (same as Desktop method above).

**Step 4: Resolve the Conflict**
- Edit the file to keep/combine the versions you want
- Delete all conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`)
- Save the file

**Step 5: Stage the Resolved File**
```bash
git add poem.txt
```

**Step 6: Complete the Merge**
```bash
git commit -m "Resolve merge conflict in poem.txt"
```
(Git may open an editor with a default merge message — you can accept it or edit it)

**Step 7: Push the Changes**
```bash
git push origin main
```

---

### Teaching Tips for Merge Conflicts:

**Make It Less Scary:**
- "Merge conflicts are NORMAL — they're Git protecting your work!"
- "You're not breaking anything — Git is just asking for your help"
- "Professional developers deal with these daily"

**Common Student Mistakes:**
1. **Leaving conflict markers in the file** (`<<<<<<<`, etc.)
   - This will make the file invalid/broken
   - Always do a final check before committing

2. **Forgetting to save the file** after editing
   - GitHub Desktop won't see changes until file is saved
   - Check for unsaved indicator in your editor

3. **Not pulling before pushing**
   - Always **Fetch/Pull → Edit → Commit → Push**
   - Make it a mantra!

4. **Panicking and closing everything**
   - Reassure them: their work is safe
   - They can start over with `git status` to see what's happening

---

## Common Scenario 2: Deleted Files Not Staged

**When This Happens:**
Student deletes a file in Finder/Explorer (not through Git), and GitHub Desktop shows it as a change, but they're not sure what to do.

### Signs:

**GitHub Desktop:**
- Deleted file appears in "Changes" with a red minus icon (−)
- File shows in the changes list even though it doesn't exist anymore

**Command Line:**
```bash
git status
# Shows:
Changes not staged for commit:
  deleted:    old-draft.txt
```

---

### Handling Deleted Files: GitHub Desktop Method

**If the deletion was intentional:**

1. File appears in "Changes" list with red minus (−)
2. **Check the checkbox** next to the deleted file (yes, you stage deletions!)
3. Write commit message: "Remove old-draft.txt"
4. Click **"Commit to main"**
5. Push normally

**If the deletion was accidental:**

1. Right-click the deleted file in "Changes" list
2. Select **"Discard Changes"**
3. The file will be restored from the last commit

---

### Handling Deleted Files: Command Line Method

**If the deletion was intentional:**

```bash
# Check what's deleted
git status

# Stage the deletion
git add old-draft.txt
# or stage all deletions:
git add -u

# Commit
git commit -m "Remove old-draft.txt"

# Push
git push origin main
```

**If the deletion was accidental:**

```bash
# Restore the deleted file from last commit
git restore old-draft.txt

# Or restore all deleted files
git restore .
```

**Alternative (older Git versions):**
```bash
git checkout -- old-draft.txt
```

---

### Teaching Tips for Deleted Files:

**Key Concepts:**
- "Deletions are changes too! Git tracks what's removed."
- "You need to 'add' deletions just like additions"
- "Git is your safety net — you can restore deleted files"

**Common Student Confusion:**
1. **"Why do I have to 'add' something I deleted?"**
   - Explain: `git add` means "stage this change"
   - Deletions are changes, so they need staging

2. **"The file is gone — how can Git see it?"**
   - Git compares your working directory to the last commit
   - It notices the file is missing and marks it as deleted

3. **Accidentally deleting important files:**
   - Reassure: nothing is lost until you commit and push
   - Show them `git restore` immediately
   - This is why we commit often!

---

## Common Scenario 3: "Everything is Broken, Help!"

**When Students Panic:**

### Triage Questions to Ask:

1. **"Did you push yet?"**
   - No → Easy to fix locally
   - Yes → Still fixable, but need to be more careful

2. **"What were you trying to do?"**
   - Helps you understand the context
   - Often they misunderstood a step

3. **"What does `git status` say?"**
   - Always start here for command line
   - GitHub Desktop equivalent: look at "Changes" tab

### Safe Commands to Run (Won't Lose Work):

**Command Line:**
```bash
git status                    # See current state
git log --oneline -5          # See recent commits
git diff                      # See unstaged changes
git diff --staged             # See staged changes
git reflog                    # See recent actions (advanced)
```

**GitHub Desktop:**
- "Show in Finder/Explorer" → verify files exist
- "Repository" → "View on GitHub" → check remote
- "History" tab → see past commits

### Emergency Escapes:

**If they're in a weird state (command line):**
```bash
# Cancel a merge in progress
git merge --abort

# Unstage everything (but keep changes)
git reset

# Discard all local changes (WARNING: loses unsaved work!)
git reset --hard HEAD
```

**If they committed something wrong:**
```bash
# Undo last commit, keep changes
git reset --soft HEAD~1

# Undo last commit, discard changes (DANGEROUS)
git reset --hard HEAD~1
```

**GitHub Desktop:**
- Right-click recent commit → "Revert this commit"
- Or: "Repository" → "Undo commit" (only if not pushed)

---

## Collaborative Lab Flow (Git Poetry)

### Recommended Process:

**Option 1: One at a Time (Safest)**
1. Student 1: Clone → Edit → Commit → Push
2. Everyone else: Pull
3. Student 2: Edit → Commit → Push
4. Everyone else: Pull
5. Repeat

**Option 2: Simultaneous (Teaches Conflict Resolution)**
1. Everyone clones
2. Everyone edits different parts at the same time
3. Student 1 pushes (succeeds)
4. Student 2 pushes (CONFLICT!)
5. Walk through resolution together
6. Continue

### Teaching the Second Option:

**Set Expectations:**
- "Some of you will get conflicts — this is PLANNED"
- "We'll solve them together — don't worry!"
- "This is how real teams work"

**Debrief Questions:**
- Who had a conflict?
- How did it feel?
- What did you learn?
- Why is pulling first important?

---

## Quick Reference: Command Line Git

### Basic Workflow:
```bash
# See current status
git status

# Pull latest changes
git pull origin main

# Stage changes
git add filename.txt          # Stage specific file
git add .                     # Stage all changes
git add -u                    # Stage updates & deletions only

# Commit changes
git commit -m "Your message"

# Push to remote
git push origin main
```

### Viewing History:
```bash
# See commit history
git log                       # Full history
git log --oneline             # Compact view
git log --oneline -5          # Last 5 commits

# See changes
git diff                      # Unstaged changes
git diff --staged             # Staged changes
git diff HEAD                 # All local changes
```

### Undoing Changes:
```bash
# Discard changes to file (NOT staged)
git restore filename.txt

# Discard ALL unstaged changes
git restore .

# Unstage a file (keep changes)
git restore --staged filename.txt

# Restore deleted file
git restore filename.txt
```

### Working with Remotes:
```bash
# See remote URLs
git remote -v

# Fetch updates (don't merge)
git fetch origin

# Pull updates (fetch + merge)
git pull origin main

# Push changes
git push origin main
```

### Merge Conflicts:
```bash
# During a conflict:
git status                    # See conflicted files
# ... edit files to resolve ...
git add filename.txt          # Stage resolved files
git commit -m "Resolve conflict"
git push origin main

# Abort a merge
git merge --abort
```

### Branches (Advanced):
```bash
# See branches
git branch                    # Local branches
git branch -a                 # All branches (including remote)

# Create and switch to new branch
git checkout -b new-feature

# Switch branches
git checkout main

# Merge branch into current branch
git merge feature-branch
```

### Getting Help:
```bash
# Help for any command
git help <command>
git <command> --help

# Example:
git help commit
```

---

## Quick Reference: GitHub Desktop

### Basic Workflow:
1. **Fetch origin** → Check for updates
2. **Pull origin** → Download updates
3. Make changes to files
4. Review changes in "Changes" tab
5. Write commit message
6. **Commit to main**
7. **Push origin**

### Key Interface Elements:

**Top Bar:**
- Current repository dropdown
- Current branch dropdown
- **Fetch/Pull origin** button
- **Push origin** button

**Left Panel:**
- **Changes** tab: Files you've modified
- **History** tab: Past commits

**Right Panel:**
- Diff view: Shows what changed
- Line-by-line additions (green) and deletions (red)

**Bottom Left:**
- Commit message boxes
- **Commit to main** button

### Keyboard Shortcuts (Mac):
- `⌘T` = New repository
- `⌘O` = Add local repository
- `⌘S` = Open settings
- `⌘,` = Preferences
- `⌘⇧F` = Fetch
- `⌘R` = Refresh

### Keyboard Shortcuts (Windows):
- `Ctrl+N` = New repository
- `Ctrl+O` = Add local repository
- `Ctrl+,` = Preferences
- `Ctrl+Shift+F` = Fetch
- `Ctrl+R` = Refresh

---

## Troubleshooting Quick Guide

| Problem | Desktop Solution | Command Line Solution |
|---------|------------------|----------------------|
| **Can't push** | Fetch → Pull first, then push | `git pull origin main` → `git push origin main` |
| **Merge conflict** | Pull → Open file → Edit → Save → Commit | `git pull` → Edit file → `git add file` → `git commit` → `git push` |
| **Deleted file shown** | Check box → Commit | `git add filename` → `git commit -m "Remove file"` |
| **Restore deleted file** | Right-click → Discard Changes | `git restore filename` |
| **Undo last commit (not pushed)** | Repository → Undo commit | `git reset --soft HEAD~1` |
| **Discard all changes** | Right-click → Discard all changes | `git restore .` |
| **Wrong commit message** | Right-click commit → Revert (if pushed) | `git commit --amend -m "New message"` (if not pushed) |
| **Don't see my repo** | File → Add Local Repository | `cd /path/to/repo` → `git status` |

---

## Post-Lab Follow-Up

### After Class:
- [ ] Check that all students successfully pushed to shared repo
- [ ] Review commit messages (teach good practices next class if needed)
- [ ] Note which students struggled (offer office hours)
- [ ] Update Canvas with any additional resources
- [ ] Post command line cheat sheet to Canvas

### Common Issues to Email About:
- Students who didn't complete setup
- Students who had persistent errors
- Students who didn't push successfully
- Reminders about good commit messages

---

## Additional Resources for Students

**Official Docs:**
- [GitHub Desktop Docs](https://docs.github.com/en/desktop)
- [Git Documentation](https://git-scm.com/doc)
- [Git Cheat Sheet (PDF)](https://education.github.com/git-cheat-sheet-education.pdf)

**Video Tutorials:**
- GitHub Desktop tutorials on YouTube
- Git conflict resolution videos

**Practice:**
- [Learn Git Branching](https://learngitbranching.js.org/) (interactive)
- [Oh My Git!](https://ohmygit.org/) (game)

---

## Notes & Observations

**Students who struggled:**
-
-

**Successful strategies:**
-
-

**Merge conflicts encountered:**
-
-

**Adjust for next time:**
-
-
