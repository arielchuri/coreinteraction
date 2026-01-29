# Week 7: Typography with HTML/CSS

## Learning Objectives

- **LO2:** Create compelling interactive experiences through more careful and inspired interpretation/translation of content
- **LO6:** Evaluate how typography and its variables are applied to interactive systems to facilitate orientation, support usability and create consistency.
- **LO9:** Combine your artistic creativity with technology related to the internet.

## Topics Covered

### Web Typography Basics
- Web-safe fonts
- Font stacks
- Web fonts (@font-face, Google Fonts, Adobe Fonts)
- Font formats (woff, woff2, ttf, otf)

### Typographic Properties
- `font-family`
- `font-size` (px, em, rem, %)
- `font-weight` and `font-style`
- `line-height`
- `letter-spacing` and `word-spacing`
- `text-transform` and `text-decoration`
- `text-align`

### Advanced Typography
- `font-variant` and OpenType features
- Variable fonts
- `text-indent`
- `white-space` and `word-break`
- Hyphenation
- Font loading strategies

### Typographic Hierarchy
- Creating visual hierarchy with type
- Contrast through size, weight, color
- Rhythm and vertical spacing
- Measure (line length)
- Scale and proportion

### Responsive Typography
- Relative units (em, rem, %)
- Viewport units (vw, vh)
- `clamp()` for fluid typography
- Media queries for typography

## Key Concepts

1. **Web Typography != Print Typography**
   - Different rendering on different devices
   - Screen resolution considerations
   - Font licensing for web use
   - Performance considerations

2. **Hierarchy Through Typography**
   - Size and scale
   - Weight and style
   - Color and contrast
   - Spacing (margin, padding, line-height)

3. **Readability and Legibility**
   - Optimal line length (45-75 characters)
   - Appropriate line height (1.4-1.6 for body text)
   - Sufficient contrast
   - Font choice for screen reading

## Code Examples

```css
/* Font stack */
body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

/* Web font import */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

/* @font-face */
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2'),
       url('myfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

/* Typographic hierarchy */
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  max-width: 65ch; /* Optimal reading width */
}

/* Responsive typography with clamp */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}

/* OpenType features */
.small-caps {
  font-variant: small-caps;
}

.proportional-nums {
  font-variant-numeric: proportional-nums;
}

/* Emphasis without italic */
em {
  font-style: normal;
  font-weight: 700;
  color: #c00;
}
```

## Activities

- Compare different web fonts
- Create a type specimen page
- Experiment with hierarchy using only typography
- Test readability at different sizes
- Explore variable fonts

## Typography Principles for Web

1. **Choose Appropriate Fonts**
   - Consider readability at different sizes
   - Limit number of fonts (2-3 maximum)
   - Ensure fonts support needed characters

2. **Establish Hierarchy**
   - Create clear visual distinction between levels
   - Use consistent spacing
   - Maintain rhythm

3. **Optimize for Reading**
   - Set appropriate line length
   - Use comfortable line height
   - Ensure sufficient contrast
   - Consider font size for body text (16-18px minimum)

4. **Performance**
   - Limit number of font weights/styles
   - Use modern font formats (woff2)
   - Consider font-display: swap
   - Subset fonts if possible

## Resources

- Robert Bringhurst, "The Elements of Typographic Style" (course reading)
- [Google Fonts](https://fonts.google.com/)
- [Adobe Fonts](https://fonts.adobe.com/)
- [Type Scale](https://typescale.com/)
- [Modular Scale](https://www.modularscale.com/)
- [Butterick's Practical Typography](https://practicaltypography.com/)
- [Professional Web Typography](https://prowebtype.com/)

## For Next Week

- Begin working on 25 Variations assignment
- Experiment with different typefaces
- Create a typographic system for your project
