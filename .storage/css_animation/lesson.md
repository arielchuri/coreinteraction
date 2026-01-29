**Lesson Plan: Mastering CSS Animations**

**Lesson Title:** Bringing Websites to Life with CSS Animations

**Lesson Duration:** 90 minutes

---

## **Lesson Objectives:**
By the end of the lesson, students will be able to:
- Understand the basic properties of CSS animations.
- Differentiate between `transition` and `@keyframes` animations.
- Apply CSS animations to web elements.
- Integrate animations into real-world projects like loading screens, hover effects, and interactive UI components.

---

## **Lesson Outline:**

### **1. Introduction to CSS Animations (15 minutes)**
- Explanation of why animations enhance user experience.
- Differences between CSS animations and JavaScript-based animations.
- Overview of two main animation techniques:
  - **CSS Transitions**
  - **CSS Animations (Keyframes)**

#### **Example: Basic Hover Transition**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .button {
            background-color: blue;
            color: white;
            padding: 10px 20px;
            border: none;
            transition: background-color 0.5s ease-in-out;
        }
        .button:hover {
            background-color: red;
        }
    </style>
</head>
<body>
    <button class="button">Hover Me</button>
</body>
</html>
```



<html>
<head>
    <style>
        .button {
            background-color: blue;
            color: white;
            padding: 10px 20px;
            border: none;
            transition: background-color 0.5s ease-in-out;
        }
        .button:hover {
            background-color: red;
        }
    </style>
</head>
<body>
    <button class="button">Hover Me</button>
</body>
</html>

---

### **2. Understanding CSS Transitions (15 minutes)**
- Breakdown of the `transition` property:
  - `transition-property`
  - `transition-duration`
  - `transition-timing-function`
  - `transition-delay`
- Hands-on activity: Students apply transitions to buttons, images, and text elements.

---

### **3. CSS Animations with Keyframes (20 minutes)**
- Explanation of `@keyframes` and its syntax.
- How to create multi-step animations.
- Examples of applying animations to elements.

#### **Example: Bouncing Box Animation**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .box {
            width: 100px;
            height: 100px;
            background-color: green;
            position: relative;
            animation: bounce 2s infinite alternate;
        }
        @keyframes bounce {
            0% { top: 0px; }
            100% { top: 100px; }
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

---

### **4. Applying Animations to Real-World Scenarios (20 minutes)**
- **Loading Spinners**
- **Notification Alerts**
- **Animated Buttons & Menus**
- **Hero Section Text Animations**

#### **Example: Loading Spinner**
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .spinner {
            width: 50px;
            height: 50px;
            border: 5px solid lightgray;
            border-top: 5px solid blue;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div class="spinner"></div>
</body>
</html>
```

---

### **5. Recap and Q&A (10 minutes)**
- Summary of key concepts.
- Open discussion on best practices.
- Quick review of how animations impact performance.
- Resources for further study.

---

## **Assessment:**
- Students will create a small animated webpage integrating different animation techniques.
- Peer review and feedback session.

---

## **Homework/Extra Practice:**
- Recreate a website header animation inspired by a real-world example.
- Experiment with different easing functions and delays to create smooth effects.
- Implement a fully animated navigation menu using transitions and keyframes.


