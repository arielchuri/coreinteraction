# **Lesson Plan: Learning CSS Grid with a Modern Gallery Project**

## **Objective:**  
By the end of the lesson, students will be able to use **CSS Grid** to create flexible and responsive layouts, culminating in building a **modern gallery page**.

## **Prerequisites:**  
- Basic understanding of **HTML & CSS**  
- Familiarity with **CSS Flexbox** is helpful but not required  

## **Lesson Duration:**  
**90 minutes** (1.5 hours)  

---

## **Lesson Outline:**

### **1. Introduction to CSS Grid (15 minutes)**  
#### **Discussion Questions:**
- What challenges exist with traditional layout techniques (e.g., float, flexbox)?  
- How does CSS Grid differ from Flexbox?  

#### **Key Concepts:**
- CSS Grid is a **two-dimensional layout system**, allowing control over both **rows and columns**.
- The `display: grid;` property defines a grid container.
- **Grid tracks** (rows & columns) are set using `grid-template-columns` and `grid-template-rows`.

---

### **2. Basic Grid Structure (20 minutes)**  
Students will create a **basic grid layout**.

#### **HTML Starter Code:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Grid</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        .container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: auto;
            gap: 10px;
            padding: 20px;
        }

        .box {
            background: lightblue;
            padding: 20px;
            text-align: center;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>

    <h1>Basic CSS Grid</h1>
    
    <div class="container">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
    </div>

</body>
</html>

