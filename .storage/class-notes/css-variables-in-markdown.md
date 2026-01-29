# Using CSS Variables in Markdown Files

## Overview

When creating styled markdown files that will be converted to HTML (via Pandoc or Canvas), you can use CSS custom properties (variables) to maintain consistent styling throughout the document. This allows you to define colors, fonts, and spacing values once at the top of the file, then reference them throughout.

## Why Use CSS Variables?

**Before (hardcoded values):**
```markdown
::: {style="background-color: #008ee2; color: white;"}
...
:::

::: {style="border-left: 4px solid #008ee2;"}
...
:::
```
To change the blue color, you'd need to find and replace `#008ee2` in multiple places.

**After (CSS variables):**
```markdown
::: {style="background-color: var(--primary-color); color: white;"}
...
:::

::: {style="border-left: 4px solid var(--primary-color);"}
...
:::
```
Change `--primary-color` once at the top, and it updates everywhere!

## Benefits

- ✅ **Single source of truth:** Change a color once, updates everywhere
- ✅ **Consistent design:** All padding, margins, colors use same values
- ✅ **Easier maintenance:** No need for search/replace
- ✅ **Pandoc compatible:** Converts cleanly between .md ↔ .html
- ✅ **Self-documenting:** Variables have meaningful names like `--primary-color`

---

## The CSS Variables Snippet

### Version 1: With Comments (For Understanding)

Copy this to the **top** of your markdown file:

```html
<style>
:root {
  /* Colors */
  --primary-color: #008ee2;
  --text-color: #2d3b45;
  --text-light: #666;
  --bg-light: #f7f9fa;
  --bg-blue: #e3f2fd;
  --bg-yellow: #fff4e5;
  --border-blue: #2196f3;
  --border-orange: #ff9800;

  /* Typography */
  --font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-size-large: 32pt;
  --font-size-xlarge: 28pt;
  --font-size-medium: 16pt;
  --font-size-base: 14pt;
  --font-size-small: 13pt;

  /* Spacing */
  --padding-standard: 20px;
  --padding-large: 30px;
  --border-radius: 4px;
  --border-radius-large: 8px;
}
</style>
```

### Version 2: Without Comments (Clean Copy)

```html
<style>
:root {
  --primary-color: #008ee2;
  --text-color: #2d3b45;
  --text-light: #666;
  --bg-light: #f7f9fa;
  --bg-blue: #e3f2fd;
  --bg-yellow: #fff4e5;
  --border-blue: #2196f3;
  --border-orange: #ff9800;

  --font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  --font-size-large: 32pt;
  --font-size-xlarge: 28pt;
  --font-size-medium: 16pt;
  --font-size-base: 14pt;
  --font-size-small: 13pt;

  --padding-standard: 20px;
  --padding-large: 30px;
  --border-radius: 4px;
  --border-radius-large: 8px;
}
</style>
```

---

## How to Use the Variables

After adding the `<style>` block at the top, use `var(--variable-name)` anywhere in inline styles:

### Example 1: Background Color

**Before:**
```markdown
::: {style="background-color: #008ee2; padding: 20px;"}
Content here
:::
```

**After:**
```markdown
::: {style="background-color: var(--primary-color); padding: var(--padding-standard);"}
Content here
:::
```

### Example 2: Border and Text Color

**Before:**
```markdown
### Heading {style="color: #008ee2; border-bottom: 2px solid #008ee2;"}
```

**After:**
```markdown
### Heading {style="color: var(--primary-color); border-bottom: 2px solid var(--primary-color);"}
```

### Example 3: Multiple Variables

**Before:**
```markdown
::: {style="background-color: #f7f9fa; padding: 20px; border-left: 4px solid #008ee2; border-radius: 4px;"}
Content
:::
```

**After:**
```markdown
::: {style="background-color: var(--bg-light); padding: var(--padding-standard); border-left: 4px solid var(--primary-color); border-radius: var(--border-radius);"}
Content
:::
```

---

## Common Variables Reference

| Variable Name | Default Value | Usage |
|--------------|---------------|-------|
| `--primary-color` | `#008ee2` | Main brand color (buttons, headings, borders) |
| `--text-color` | `#2d3b45` | Main text color |
| `--text-light` | `#666` | Secondary/muted text |
| `--bg-light` | `#f7f9fa` | Light gray background |
| `--bg-blue` | `#e3f2fd` | Light blue callout boxes |
| `--bg-yellow` | `#fff4e5` | Warning/tip boxes |
| `--border-blue` | `#2196f3` | Blue accent borders |
| `--border-orange` | `#ff9800` | Orange accent borders |
| `--font-family` | `'Helvetica Neue', ...` | Main font stack |
| `--padding-standard` | `20px` | Standard padding |
| `--padding-large` | `30px` | Large padding |
| `--border-radius` | `4px` | Standard rounded corners |

---

## Converting with Pandoc

### Markdown → HTML
```bash
pandoc input.md -f markdown -t html -o output.html
```

### HTML → Markdown
```bash
pandoc input.html -f html -t markdown -o output.md
```

The `<style>` block will be preserved in both directions!

---

## Customizing for Different Courses

You can create different color schemes by changing just a few variables:

### Core Interaction (Blue)
```css
--primary-color: #008ee2;
--bg-blue: #e3f2fd;
--border-blue: #2196f3;
```

### Emergent Objects (Could be Green)
```css
--primary-color: #4caf50;
--bg-blue: #e8f5e9;
--border-blue: #66bb6a;
```

### Another Course (Could be Purple)
```css
--primary-color: #9c27b0;
--bg-blue: #f3e5f5;
--border-blue: #ba68c8;
```

---

## Tips & Best Practices

1. **Always place `<style>` block first** in your markdown file
2. **Use descriptive variable names:** `--primary-color` is better than `--blue`
3. **Group related variables:** Colors together, typography together, etc.
4. **Don't overuse:** Not everything needs to be a variable, just repeated values
5. **Test after changes:** Convert with pandoc to verify it works
6. **Keep a template:** Save a blank .md file with your standard variables

---

## Troubleshooting

**Q: Variables not working after converting?**
A: Make sure the `<style>` block is at the very top of the markdown file.

**Q: Canvas not showing styles?**
A: Canvas may strip some CSS. Test by pasting the HTML into Canvas's HTML editor.

**Q: Want to add a new variable?**
A: Add it to the `:root {}` block, then use `var(--your-variable)` where needed.

**Q: Can I use CSS calc() with variables?**
A: Yes! Example: `width: calc(50% - var(--padding-standard));`

---

## Example: Complete Markdown File Structure

```markdown
<style>
:root {
  --primary-color: #008ee2;
  --bg-light: #f7f9fa;
  --padding-standard: 20px;
}
</style>

# My Document Title

::: {style="background-color: var(--bg-light); padding: var(--padding-standard);"}
This box uses variables for consistent styling.
:::

## Section Heading {style="color: var(--primary-color);"}

More content here...
```

---

## Further Reading

- [MDN: CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Pandoc Manual](https://pandoc.org/MANUAL.html)
- [CSS Variables Browser Support](https://caniuse.com/css-variables) (97%+ support)
