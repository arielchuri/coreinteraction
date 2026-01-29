# **Lesson Plan: Building a Grid-Based Layout Using Flexbox and CSS Positioning**

## **Objective:**  
By the end of the lesson, students will be able to create a structured webpage layout using Flexbox and other CSS techniques, mimicking a grid system without using CSS Grid.

## **Prerequisites:**  
- Basic HTML & CSS knowledge  
- Familiarity with CSS Flexbox  
- Understanding of `position`, `float`, and `display` properties  

## **Lesson Duration:**  
**90 minutes** (1.5 hours)  

---

## **Lesson Outline:**

### **1. Introduction (15 minutes)**
#### **Discussion Questions:**
- What are common ways to structure a webpage layout?  
- What is a grid system, and why is it useful?  
- What are the alternatives to CSS Grid for building structured layouts?  

#### **Key Concepts:**
- Flexbox is powerful for **one-dimensional layouts** (either rows or columns).
- Floats and positioning can still be useful for layout control.
- Combining Flexbox and other techniques allows for a flexible **grid-like** system.

---

### **2. Setting Up the Basic Layout (20 minutes)**  
**Activity:** Students create a basic **HTML structure** for a webpage.  

#### **HTML Starter Code:**

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Grid Layout with Flexbox</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
        }

        .container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }

        .box {
            background: lightblue;
            padding: 20px;
            text-align: center;
            border: 1px solid #ccc;
        }

        /* Responsive 3-column layout */
        .col-1 { flex: 1; }
        .col-2 { flex: 2; }
        .col-3 { flex: 3; }
    </style>
</head>
<body>

    <h1>Simple Grid-Like Layout</h1>
    
    <div class="container">
        <div class="box col-1">Column 1</div>
        <div class="box col-2">Column 2</div>
        <div class="box col-3">Column 3</div>
    </div>

</body>
</html>
```

#### **Key Takeaways:**
- The `.container` is a **Flexbox container**.
- `flex-wrap: wrap;` allows responsiveness.
- `gap: 10px;` adds spacing between elements.
- `flex: X;` determines how much space each column takes.

---

### **3. Creating a Multi-Row Layout (20 minutes)**
Students modify their code to create a **multi-row layout**.

#### **Updated CSS:**

```css
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}

.row {
    display: flex;
    width: 100%;
}

.box {
    background: lightblue;
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc;
    flex: 1;
}

/* Responsive Design */
@media (max-width: 600px) {
    .row {
        flex-direction: column;
    }
}

#### **Updated HTML:**
<div class="container">
    <div class="row">
        <div class="box">Row 1, Column 1</div>
        <div class="box">Row 1, Column 2</div>
    </div>
    
    <div class="row">
        <div class="box">Row 2, Column 1</div>
        <div class="box">Row 2, Column 2</div>
        <div class="box">Row 2, Column 3</div>
    </div>
</div>
```

#### **Key Takeaways:**
- Rows are created using **nested Flexbox containers**.
- The layout remains **responsive**, adjusting to smaller screens.
- `flex: 1;` ensures equal column widths in a row.

---

### **4. Advanced Layout Techniques (20 minutes)**
#### **Floating Elements for Sidebar Layout**

```css
.sidebar {
    float: left;
    width: 30%;
    height: 100vh;
    background: gray;
    padding: 10px;
}

.content {
    float: left;
    width: 70%;
    padding: 10px;
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

<div class="clearfix">
    <div class="sidebar">Sidebar</div>
    <div class="content">Main Content</div>
</div>
```

- **Using `float`** creates a traditional sidebar layout.
- **Adding `.clearfix`** prevents collapsing issues.

---

### **5. Wrapping Up (15 minutes)**
#### **Discussion:**
- When would you use Flexbox over Grid?  
- How does `flex-wrap` help with responsive layouts?  
- Why is `float` still useful in some cases?  

#### **Final Exercise:**  
Students build a **3-row, 3-column responsive layout** using Flexbox.

---

## **Assessment & Homework**
- **In-class Task:** Build a simple homepage layout using these techniques.
- **Homework:** Create a **multi-section website** (e.g., header, main, sidebar, footer) without using the `<grid>` tag.

---

### **Conclusion**
This lesson introduces a **grid-like system without using CSS Grid**, utilizing **Flexbox, floats, and positioning techniques** to structure layouts effectively.

Would you like me to refine any section or add specific challenges? 🚀

