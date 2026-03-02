# Week 5: CSS Selectors

## Learning Objectives

- **LO4:** Conceptualize a product, object, or experience for the web and realize it through coding.
- **LO6:** Evaluate how typography and its variables are applied to interactive systems
- **LO10:** Demonstrate a comprehension of skills, methods, techniques and processes to realize interactive systems

## Topics Covered

### CSS Selector Types
- Element selectors
  - Example: `p { color: blue; }` - targets all `<p>` elements
  - Example: `h1 { font-size: 2em; }` - targets all `<h1>` elements
- Class selectors
  - Example: `.warning { color: red; }` - targets all elements with `class="warning"`
  - Example: `.btn-primary { background: blue; }` - targets elements with that class
- ID selectors
  - Example: `#header { height: 100px; }` - targets the element with `id="header"`
  - Example: `#main-content { max-width: 960px; }` - targets that specific ID
- Attribute selectors
  - Example: `[type="text"] { border: 1px solid gray; }` - targets inputs with type="text"
  - Example: `a[target="_blank"] { color: purple; }` - targets links that open in new tab
- Universal selector
  - Example: `* { margin: 0; padding: 0; }` - targets all elements
  - Example: `*.highlight { font-weight: bold; }` - all elements with that class

### Combinators
- Descendant selector (space)
  - Example: `article p { line-height: 1.6; }` - targets all `<p>` inside `<article>`
  - Example: `nav a { text-decoration: none; }` - all links within nav
- Child selector (`>`)
  - Example: `ul > li { list-style: square; }` - only direct `<li>` children of `<ul>`
  - Example: `div > p { margin-top: 0; }` - only `<p>` that are direct children of `<div>`
- Adjacent sibling selector (`+`)
  - Example: `h2 + p { font-weight: bold; }` - only `<p>` immediately after `<h2>`
  - Example: `label + input { margin-left: 10px; }` - input directly after label
- General sibling selector (`~`)
  - Example: `h2 ~ p { color: gray; }` - all `<p>` siblings after `<h2>`
  - Example: `input:checked ~ label { color: green; }` - all labels after checked input

### Pseudo-classes
- `:hover`, `:focus`, `:active`
  - Example: `a:hover { color: red; }` - link changes color when mouse hovers
  - Example: `input:focus { border-color: blue; }` - input border when focused
  - Example: `button:active { transform: scale(0.95); }` - button pressed state
- `:first-child`, `:last-child`, `:nth-child()`
  - Example: `li:first-child { font-weight: bold; }` - first list item
  - Example: `p:last-child { margin-bottom: 0; }` - last paragraph
  - Example: `tr:nth-child(even) { background: #f0f0f0; }` - zebra striping
- `:not()`
  - Example: `p:not(.intro) { font-size: 14px; }` - all paragraphs except intro class
  - Example: `input:not([type="submit"]) { width: 100%; }` - all inputs except submit
- Link pseudo-classes (`:link`, `:visited`)
  - Example: `a:link { color: blue; }` - unvisited links
  - Example: `a:visited { color: purple; }` - visited links

### Pseudo-elements
- `::before` and `::after`
  - Example: `p::before { content: "→ "; }` - adds arrow before paragraphs
  - Example: `a::after { content: " ↗"; }` - adds icon after links
  - Example: `.quote::before { content: '"'; font-size: 2em; }` - decorative quote mark
- `::first-letter` and `::first-line`
  - Example: `p::first-letter { font-size: 3em; float: left; }` - drop cap effect
  - Example: `p::first-line { font-weight: bold; }` - emphasize first line
- `::selection`
  - Example: `::selection { background: yellow; color: black; }` - custom text selection
  - Example: `p::selection { background: lightblue; }` - selection for paragraphs

### The Cascade
- Specificity calculation
  - Example: `#nav .link { }` has specificity (1,1,0) - 1 ID, 1 class
  - Example: `div p { }` has specificity (0,0,2) - 2 elements
  - Example: `.button { }` has specificity (0,1,0) - 1 class
- Inheritance
  - Example: `body { color: #333; }` - text color inherited by all descendants
  - Example: `body { font-family: Arial; }` - font inherited throughout page
  - Example: `border` and `margin` do NOT inherit (must be set explicitly)
- Source order
  - Example: `.text { color: red; } .text { color: blue; }` - blue wins (later rule)
  - Example: Multiple stylesheets - last loaded stylesheet takes precedence
- `!important` (and why to avoid it)
  - Example: `p { color: red !important; }` - overrides all other color rules
  - Avoid because it breaks natural cascade and makes debugging difficult
  - Better to increase specificity or reorganize CSS instead

## Key Concepts

1. **Specificity Hierarchy**
   - Inline styles (highest)
   - IDs
   - Classes, attributes, pseudo-classes
   - Elements and pseudo-elements (lowest)

2. **Cascade Rules**
   - More specific selectors override less specific
   - Later rules override earlier ones (if equal specificity)
   - Inherited properties can be overridden

3. **Selector Strategy**
   - Use classes for reusable styles
   - Keep specificity low when possible
   - Organize selectors logically
   - Avoid overly complex selectors

## Code Examples

```css
/* Element selector */
p {
  color: blue;
}

/* Class selector */
.highlight {
  background-color: yellow;
}

/* ID selector */
#header {
  font-size: 2em;
}

/* Descendant selector */
article p {
  line-height: 1.6;
}

/* Child selector */
nav > ul {
  list-style: none;
}

/* Pseudo-class */
a:hover {
  text-decoration: underline;
}

/* Pseudo-element */
p::first-letter {
  font-size: 2em;
  float: left;
}

/* Combining selectors */
.card:hover .card-title {
  color: red;
}

/* nth-child examples */
li:nth-child(odd) {
  background-color: #f0f0f0;
}

tr:nth-child(3n) {
  background-color: lightblue;
}
```

## Activities

- Practice writing different types of selectors
  - Example: Write selectors to target every other row in a table
  - Example: Create a selector for links within navigation that aren't external
- Calculate specificity for various selectors
  - Example: Compare `.nav li a` (0,1,2) vs `#menu a` (1,0,1) - which wins?
  - Example: Calculate specificity for `div.container > p:first-child` (0,1,3)
- Experiment with pseudo-classes and pseudo-elements
  - Example: Create a hover effect that changes multiple properties
  - Example: Use `::before` to add decorative elements without extra HTML
- Refactor existing CSS to use better selectors
  - Example: Replace `#header #nav ul li a` with `.nav-link` (lower specificity)
  - Example: Consolidate repeated styles into reusable classes

## Common Mistakes

- Using IDs when classes would work better
  - Bad: `#button1 { }` `#button2 { }` - not reusable
  - Good: `.btn { }` - can be applied to multiple buttons
- Creating overly specific selectors
  - Bad: `body div.container section.main article.post p.text { }` - too specific
  - Good: `.post-text { }` - simple and maintainable
- Not understanding inheritance
  - Mistake: Setting `font-family` on every element individually
  - Better: Set on `body` or parent container and let it inherit
- Overusing `!important`
  - Bad: `.text { color: blue !important; }` - hard to override later
  - Good: Increase specificity naturally or reorganize source order
- Not considering the cascade
  - Mistake: Wondering why styles don't apply due to specificity issues
  - Solution: Use browser DevTools to check which rules are being applied

## Resources

- [MDN: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS Specificity Calculator](https://specificity.keegan.st/)
- [CSS Diner (Game)](https://flukeout.github.io/)

## For Next Week

- Begin working on the Flags assignment
- Experiment with different selectors
- Consider how to make reusable CSS code
