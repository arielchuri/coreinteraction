# **Comprehensive CSS Grid Lesson Plan**

## **Objective:**  
By the end of this lesson, students will be able to use **CSS Grid** to create complex and responsive layouts using **all major grid properties**.

## **Prerequisites:**  
- Basic **HTML & CSS** knowledge  
- Familiarity with **CSS Flexbox** is helpful but not required  

## **Lesson Duration:**  
**2 hours**  

---

## **Lesson Outline:**

### **1. Introduction to CSS Grid (15 minutes)**  
#### **Discussion:**
- How does CSS Grid differ from Flexbox?  
- What are the key benefits of using Grid for layout?  

#### **Key Concepts:**
- **Grid Container vs. Grid Items**  
- **Implicit vs. Explicit Grids**  
- **Grid Tracks (Rows & Columns)**  

---

## **2. Setting Up a Basic Grid (20 minutes)**  
#### **HTML:**

```html
<div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
</div>
```

#### **CSS:**
```css
.grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
    padding: 20px;
}

.grid-item {
    background: lightblue;
    padding: 20px;
    text-align: center;
    border: 1px solid #ccc;
}
```

#### **Key Takeaways:**
- `display: grid;` enables **CSS Grid**.  
- `grid-template-columns: 1fr 1fr 1fr;` creates three equal columns.  
- `gap: 10px;` adds spacing between items.  

---

## **3. Controlling Column and Row Sizes (15 minutes)**  
#### **CSS:**
```css
.grid-container {
    display: grid;
    grid-template-columns: 100px 200px 1fr;
    grid-template-rows: 50px 100px auto;
}
```

#### **Key Takeaways:**
- Fixed sizes (`100px, 200px`) define **specific** widths.  
- `1fr` makes columns **flexible** and takes remaining space.  
- `auto` adjusts row height based on content.  

---

## **4. Using `repeat()`, `minmax()`, and `auto-fit/auto-fill` (20 minutes)**  
#### **CSS:**
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
    grid-template-rows: repeat(2, minmax(100px, auto)); /* Rows grow with content */
}
```
#### **Key Takeaways:**
- `repeat(3, 1fr);` is shorthand for `1fr 1fr 1fr`.  
- `minmax(100px, auto);` prevents shrinking below 100px.  

#### **Dynamic Responsive Grids with Auto-fit:**
```css
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}
```

- `auto-fit` **shrinks** empty columns when there aren’t enough items.  

---

## **5. Grid Item Placement and Spanning (20 minutes)**  
#### **CSS:**
```css
.grid-item:first-child {
    grid-column: span 2;
    grid-row: span 2;
}
```
#### **Key Takeaways:**
- `grid-column: span 2;` makes the item **wider**.  
- `grid-row: span 2;` makes the item **taller**.  

---

## **6. Explicit Placement with `grid-column` & `grid-row` (15 minutes)**  
#### **CSS:**
```css
.grid-item:nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
}
```

#### **Key Takeaways:**
- `grid-column: 1 / 3;` places the item **from column 1 to 3**.  
- `grid-row: 1 / 2;` places the item **from row 1 to 2**.  

---

## **7. Named Grid Areas for Complex Layouts (20 minutes)**  
#### **CSS:**
```css
.grid-container {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar content"
        "footer footer";
}

.header {
    grid-area: header;
}

.sidebar {
    grid-area: sidebar;
}

.content {
    grid-area: content;
}

.footer {
    grid-area: footer;
}
```

#### **Key Takeaways:**
- `grid-template-areas` simplifies layout readability.  
- Assigns sections like **header, sidebar, content, and footer**.  

---

## **8. Aligning Items and Justification (15 minutes)**  
#### **CSS:**
```css
.grid-container {
    display: grid;
    justify-items: center;
    align-items: center;
}
```

#### **Key Takeaways:**
- `justify-items: center;` centers items **horizontally**.  
- `align-items: center;` centers items **vertically**.  

#### **Aligning the Entire Grid:**
```css
.grid-container {
    display: grid;
    justify-content: center;
    align-content: center;
}
```

- `justify-content: center;` centers the **whole grid**.  
- `align-content: center;` centers rows **within the grid**.  

---

## **9. Creating a Modern Gallery Page (30 minutes)**  

### **HTML:**
```html
<div class="gallery">
    <div class="item item-1">1</div>
    <div class="item item-2">2</div>
    <div class="item item-3">3</div>
    <div class="item item-4">4</div>
    <div class="item item-5">5</div>
    <div class="item item-6">6</div>
</div>
```

### **CSS:**
```css
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
}

.item {
    background: #3498db;
    color: white;
    padding: 20px;
    text-align: center;
    border-radius: 10px;
}

.item-1 {
    grid-column: span 2;
}

.item-3 {
    grid-row: span 2;
}
```

#### **Key Takeaways:**
- `auto-fit` makes the gallery **responsive**.  
- `grid-column: span 2;` and `grid-row: span 2;` create **dynamic sizing**.  

---

## **10. Wrapping Up & Final Exercises (20 minutes)**  
#### **Discussion:**
- When should you use **CSS Grid** instead of **Flexbox**?  
- How does `auto-fill` differ from `auto-fit`?  

#### **Final Exercise:**
Students will modify their gallery by **adding hover effects** and **animations**.  

---

## **Assessment & Homework**
- **In-class Task:** Build a **portfolio layout** using **named grid areas**.  
- **Homework:** Create a **3-column blog layout** using CSS Grid.  

---

## **Conclusion**
This lesson provides a **deep dive** into **CSS Grid**, covering **every major feature**.  
Mastering Grid layouts allows for **powerful and flexible** web designs. 🚀  

Would you like any refinements? 😃  

