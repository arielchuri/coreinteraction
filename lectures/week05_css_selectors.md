# Week 5: CSS Selectors

## Learning Objectives

- **LO4:** Conceptualize a product, object, or experience for the web and realize it through coding.
- **LO6:** Evaluate how typography and its variables are applied to interactive systems
- **LO10:** Demonstrate a comprehension of skills, methods, techniques and processes to realize interactive systems

## Topics Covered

### CSS Selector Types
- Element selectors
- Class selectors
- ID selectors
- Attribute selectors
- Universal selector

### Combinators
- Descendant selector (space)
- Child selector (`>`)
- Adjacent sibling selector (`+`)
- General sibling selector (`~`)

### Pseudo-classes
- `:hover`, `:focus`, `:active`
- `:first-child`, `:last-child`, `:nth-child()`
- `:not()`
- Link pseudo-classes (`:link`, `:visited`)

### Pseudo-elements
- `::before` and `::after`
- `::first-letter` and `::first-line`
- `::selection`

### The Cascade
- Specificity calculation
- Inheritance
- Source order
- `!important` (and why to avoid it)

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
- Calculate specificity for various selectors
- Experiment with pseudo-classes and pseudo-elements
- Refactor existing CSS to use better selectors

## Common Mistakes

- Using IDs when classes would work better
- Creating overly specific selectors
- Not understanding inheritance
- Overusing `!important`
- Not considering the cascade

## Resources

- [MDN: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
- [CSS Specificity Calculator](https://specificity.keegan.st/)
- [CSS Diner (Game)](https://flukeout.github.io/)

## For Next Week

- Begin working on the Flags assignment
- Experiment with different selectors
- Consider how to make reusable CSS code
