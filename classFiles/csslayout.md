**CSS Positioning and Layout**



## **Lesson Objectives:**
By the end of the lesson, students will be able to:
- Understand different CSS positioning properties (static, relative, absolute, fixed, sticky).
- Apply CSS positioning to elements effectively.
- Utilize CSS layout techniques such as Flexbox and Grid.

---

## **Lesson Outline:**

### **1. Introduction to CSS Positioning (15 minutes)**
- Overview of CSS positioning properties:
  - `static` (default positioning)
  - `relative`
  - `absolute`
  - `fixed`
  - `sticky`
- Live coding demonstration:
  - Show how each property affects an element’s position in relation to its parent and the document flow.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .relative-box {
            position: relative;
            left: 20px;
            top: 10px;
            background-color: lightblue;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="relative-box">This is a relatively positioned box.</div>
</body>
</html>
```

### **2. Hands-on Exercise: Positioning Elements (15 minutes)**
- Students apply different positioning properties to elements in a simple HTML document.
- Example: Create a navigation bar that stays fixed at the top.
- Discussion on common use cases.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .fixed-nav {
            position: fixed;
            top: 0;
            width: 100%;
            background-color: black;
            color: white;
            padding: 10px;
        }
    </style>
</head>
<body>
    <div class="fixed-nav">Fixed Navigation Bar</div>
</body>
</html>
```

### **3. CSS Layout Techniques: Flexbox (20 minutes)**
- Explanation of the Flexbox model:
  - `display: flex;`
  - `justify-content`
  - `align-items`
  - `flex-direction`
  - `flex-wrap`
- Live demo: Create a flexible navbar and content layout.
- Hands-on exercise: Build a simple two-column layout using Flexbox.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .flex-container {
            display: flex;
            justify-content: space-between;
        }
        .box {
            background-color: lightcoral;
            padding: 20px;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div class="flex-container">
        <div class="box">Box 1</div>
        <div class="box">Box 2</div>
    </div>
</body>
</html>
```

### **4. CSS Layout Techniques: Grid (20 minutes)**
- Introduction to CSS Grid layout:
  - `display: grid;`
  - `grid-template-columns` & `grid-template-rows`
  - `gap`
  - `align-items` & `justify-items`
- Live demo: Create a card layout.
- Hands-on exercise: Design a three-column webpage section using Grid.

**Example:**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .grid-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
        }
        .grid-item {
            background-color: lightgreen;
            padding: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="grid-container">
        <div class="grid-item">Item 1</div>
        <div class="grid-item">Item 2</div>
        <div class="grid-item">Item 3</div>
    </div>
</body>
</html>
```


---

## **Common Webpage Layouts (HTML with Inline CSS):**

### **1. Simple Header, Content, Footer Layout**
```html
<!DOCTYPE html>
<html>
<head></head>
<body>
    <div style="background-color: lightblue; padding: 20px; text-align: center;">Header</div>
    <div style="background-color: lightgray; padding: 20px; text-align: center;">Content</div>
    <div style="background-color: lightgreen; padding: 20px; text-align: center;">Footer</div>
</body>
</html>
```

### **2. Two-Column Layout**
```html
<!DOCTYPE html>
<html>
<head></head>
<body>
    <div style="display: flex;">
        <div style="background-color: lightpink; width: 30%; padding: 20px;">Sidebar</div>
        <div style="background-color: lightyellow; width: 70%; padding: 20px;">Main Content</div>
    </div>
</body>
</html>
```

### **3. Three-Column Layout**
```html
<!DOCTYPE html>
<html>
<head></head>
<body>
    <div style="display: flex;">
        <div style="background-color: lightcoral; width: 25%; padding: 20px;">Left</div>
        <div style="background-color: lightcyan; width: 50%; padding: 20px;">Center</div>
        <div style="background-color: lightgoldenrodyellow; width: 25%; padding: 20px;">Right</div>
    </div>
</body>
</html>
```

### **4. Grid-Based Layout**
```html
<!DOCTYPE html>
<html>
<head></head>
<body>
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
        <div style="background-color: lightblue; padding: 20px;">Box 1</div>
        <div style="background-color: lightgreen; padding: 20px;">Box 2</div>
        <div style="background-color: lightpink; padding: 20px;">Box 3</div>
        <div style="background-color: lightgray; padding: 20px;">Box 4</div>
    </div>
</body>
</html>
```


