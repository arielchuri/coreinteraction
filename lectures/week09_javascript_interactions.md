# Week 9: Programming Basic User Interactions

## Learning Objectives

- **LO2:** Create compelling interactive experiences through more careful and inspired interpretation/translation of content
- **LO3:** Demonstrate an understanding of the iterative making process in interaction design
- **LO4:** Conceptualize a product, object, or experience for the web and realize it through coding.
- **LO10:** Demonstrate a comprehension of skills, methods, techniques and processes to realize interactive systems

## Topics Covered

### Introduction to JavaScript
- What is JavaScript?
- Adding JavaScript to HTML
- The browser console
- Variables and data types
- Basic syntax

### DOM Manipulation
- What is the DOM?
- Selecting elements (`querySelector`, `getElementById`)
- Changing content (`innerHTML`, `textContent`)
- Changing styles and classes
- Creating and removing elements

### Events and Event Listeners
- What are events?
- Common events (click, mouseover, keypress)
- `addEventListener()`
- Event objects
- Event propagation (bubbling and capturing)

### CSS Hover vs. JavaScript Interaction
- When to use `:hover`
- When to use JavaScript
- Combining CSS and JavaScript

### Basic Interactivity Patterns
- Show/hide elements
- Toggle classes
- Change content on click
- Navigation menus
- Accordion patterns
- Tabs and panels

## Key Concepts

1. **Separation of Concerns**
   - HTML for structure
   - CSS for presentation
   - JavaScript for behavior

2. **Progressive Enhancement**
   - Start with working HTML
   - Enhance with CSS
   - Add JavaScript for interaction
   - Ensure graceful degradation

3. **User Feedback**
   - Visual feedback for interactions
   - Hover states
   - Active states
   - Loading states

## Code Examples

```javascript
// Selecting elements
const button = document.querySelector('.my-button');
const content = document.getElementById('content');

// Click event listener
button.addEventListener('click', function() {
  content.textContent = 'Button was clicked!';
});

// Toggle a class
button.addEventListener('click', function() {
  content.classList.toggle('active');
});

// Change styles
button.addEventListener('click', function() {
  content.style.backgroundColor = 'blue';
  content.style.color = 'white';
});

// Show/hide pattern
const toggleButton = document.querySelector('.toggle');
const panel = document.querySelector('.panel');

toggleButton.addEventListener('click', function() {
  if (panel.style.display === 'none') {
    panel.style.display = 'block';
    toggleButton.textContent = 'Hide';
  } else {
    panel.style.display = 'none';
    toggleButton.textContent = 'Show';
  }
});

// Better show/hide with classes
toggleButton.addEventListener('click', function() {
  panel.classList.toggle('hidden');
  toggleButton.textContent =
    panel.classList.contains('hidden') ? 'Show' : 'Hide';
});

// Multiple elements
const buttons = document.querySelectorAll('.tab-button');

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove active class from all
    buttons.forEach(b => b.classList.remove('active'));
    // Add to clicked button
    button.classList.add('active');
  });
});

// Mouseover event
const card = document.querySelector('.card');

card.addEventListener('mouseover', function() {
  card.classList.add('hover');
});

card.addEventListener('mouseout', function() {
  card.classList.remove('hover');
});

// Keyboard events
document.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    console.log('Enter key was pressed!');
  }
});
```

## Common Interaction Patterns

### 1. Toggle/Show-Hide
```javascript
element.classList.toggle('active');
```

### 2. Accordion
```javascript
headers.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    content.classList.toggle('open');
  });
});
```

### 3. Tabs
```javascript
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Hide all panels
    panels.forEach(panel => panel.classList.remove('active'));
    // Show clicked panel
    const target = document.querySelector(tab.dataset.target);
    target.classList.add('active');
  });
});
```

### 4. Modal/Dialog
```javascript
openButton.addEventListener('click', () => {
  modal.classList.add('open');
});

closeButton.addEventListener('click', () => {
  modal.classList.remove('open');
});
```

## Activities

- Add click interactions to an existing page
- Create a show/hide pattern
- Build a simple navigation menu
- Experiment with different event types
- Create an accordion or tabs interface

## Best Practices

1. **Use Classes, Not Inline Styles**
   - Define styles in CSS
   - Toggle classes with JavaScript
   - Keeps styling separate from behavior

2. **Use Event Delegation for Multiple Elements**
   - More efficient
   - Works with dynamically added elements

3. **Provide Clear Feedback**
   - Visual indication of interactivity
   - Hover states
   - Active/selected states
   - Loading/processing states

4. **Consider Accessibility**
   - Keyboard navigation
   - Focus states
   - ARIA attributes when needed
   - Semantic HTML

5. **Start Simple**
   - Get basic functionality working first
   - Add complexity gradually
   - Test frequently

## Debugging Tips

- Use `console.log()` to check values
- Check browser console for errors
- Verify selectors are finding elements
- Test events are firing
- Check CSS classes are defined

## Resources

- [MDN: Introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
- [MDN: Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [JavaScript30](https://javascript30.com/)

## For Next Week

- Begin Stories as Networks assignment
- Experiment with JavaScript interactions
- Think about how interaction enhances content
