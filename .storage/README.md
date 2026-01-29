# .storage Folder

This folder contains private instructor materials that are not pushed to the public GitHub repository.

## Contents

### class-notes/
Instructor cheat sheets and detailed notes for teaching each week. These include:
- Pre-class prep checklists
- Detailed class timelines
- Name learning strategies
- Emergency backup plans
- Post-class tasks
- Observation notes templates

**Files:**
- `week-01-instructor-notes.md` - Asynchronous week prep
- `week-02-instructor-notes.md` - First in-person class

### week01/
HTML snippets ready to paste into Canvas LMS:
- `week01_homepage.html` - Week overview for Canvas homepage
- `week01_discussion_intro.html` - Introduction discussion post template
- `week01_resources.html` - Video resources and links

### week02/
HTML snippets for Week 2 Canvas modules:
- `week02_homepage.html` - Week overview with schedule
- `week02_discussion_partners.html` - Interview partner pairing announcement
- `week02_resources.html` - Git and file management resources

## Design Philosophy

**HTML snippets follow these principles:**
1. **Link to GitHub, don't duplicate** - Most content lives on GitHub where it can be updated once
2. **Minimal redundancy** - Only essential information is in Canvas
3. **Visual consistency** - Clean, accessible HTML formatting
4. **Easy to maintain** - Update GitHub files, Canvas stays in sync

## Usage

### For Canvas HTML Editor:
1. Open the HTML file you need
2. Copy all content
3. In Canvas, click "Edit" on the page/module
4. Click the HTML editor icon (`</>`)
5. Paste the HTML
6. Save

### For Instructor Notes:
- Review before each class
- Update with observations after class
- Use checklists to stay organized
- Add notes about specific students (but keep private!)

## File Naming Convention

- `week##_[purpose].html` for Canvas snippets
- `week-##-instructor-notes.md` for teaching notes
- Lowercase, hyphens for spaces
- Descriptive names

## Adding New Weeks

When creating materials for new weeks:
1. Create `class-notes/week-##-instructor-notes.md`
2. Create `week##/` folder
3. Add at least:
   - `week##_homepage.html` (overview)
   - `week##_resources.html` (videos/links)
   - Any discussion templates needed

## Security Note

This `.storage` folder should be in `.gitignore` to keep instructor notes private.
Never commit student information, grades, or personal observations to GitHub.
