# CD Foundations: Interaction

- Category: school
- Tags:
- Created: 2021-04-16T20:52:16-04:00

# Spring 2025

## Roll Call

| First Name          | Last Name  | Preferred Name | email | N00#      |
| ------------------- | ---------- | -------------- | ----- | --------- |
| reem                | alshoaibi  | reem           |       | N00780598 |
| ![](alshoaibi.jpg)  |            |                |       |           |
| Ruoqing             | Zhang      | Lucy           |       | N00797305 |
| ![](Zhang.jpg)      |            |                |       |           |
| Betesha             | Bloise     |                |       | 7882210   |
| ![](Bloise.jpg)     |            |                |       |           |
| Annabel             | Demarino   |                |       | N00807207 |
| ![](Demarino.jpg)   |            |                |       |           |
| Vicky               | Tang       |                |       | N00318333 |
| ![](Tang.jpg)       |            |                |       |           |
| Alifia              | Bandukwala | Alifia         |       | N00770039 |
| ![](Bandukwala.jpg) |            |                |       |           |
| Jarmila             | Skare      | Mila           |       | N00783022 |
| ![](Skare.jpg)      |            |                |       |           |
| sherifa             | kanoo      | Sherifa        |       | N00770398 |
| ![](kanoo.jpg)      |            |                |       |           |
| Shaikha             | Boodai     |                |       | 771157    |
| ![](Boodai.jpg)     |            |                |       |           |
| Michelle            | Kim        | Michelle       |       | N00789070 |
| ![](Kim.jpg)        |            |                |       |           |
| Seah                | Jung       | Seah           |       | N00769509 |
| ![](JungS.jpg)       |            |                |       |           |
| Jiwon               | Hwang      |                |       | N00747838 |
| ![](Hwang.jpg)      |            |                |       |           |
| Hiew                | Lee        | Olivia         |       | 768905    |
| ![](Lee.jpg)        |            |                |       |           |
| Harlow              | Johnston   | Harlow         |       | N00807671 |
| ![](Johnston.jpg)   |            |                |       |           |
| jireh               | jung       | ireh jung      |       | N00808783 |
| ![](jung.jpg)       |            |                |       |           |
| Myra                | Kao        |                |       | N00763690 |
| ![](Kao.jpg)        |            |                |       |           |

"Alshoaibi, Reem",
"Bandukwala, Alifia",
"Bloise Ponciano, Betesha",
"Boodai, Shaikha",
"Demarino, Annabel",
"Hwang, Jiwon",
"Johnston, Harlow",
"Jung, Jireh",
"Jung, Seah",
"Kanoo, Sherifa",
"Kim, Michelle",
"Lee, Hiew",
"Skare, Jarmila",
"Tang, Vicky",
"Zhang, Ruoqing",

## Calendar

### 01:1/27

Directories and the terminal
Organizing Files
Intro to HTML
Html file structure
Collect FTP data

**Assignment:**
_Recipe Page_

**Media:**
[_What is Code?_, Paul Ford](http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)
[freeCodeCamp](https://www.freecodecamp.org/challenges/say-hello-to-html-elements)

### 2/3

css
Recipe Style

### 2/10

css page layout
flex box
Recipe Layout

### 2/17 NO CLASS President's Day

### 2/24

### 3/3 Online Classes (NO)

### 3/10 NO CLASS Spring Break

### 3/17

### 3/31 //Mid Semester

/ Planning your final project and figma

### 4/7

### 4/14

### 4/21

### 4/28

### 5/5

### 5/12

### 5/13

### Week 01

### Week 02

    Cleaning text files
    Links, anchors, and images
    Intro to CSS

    **Assignment:**
    Short Story

### Week 03

    CSS and styles
    Code editors
    Examening a webpage
    Browser dev tools
    Layout and type
    pixels, em spaces, percentages

    Assignment: StyleGuide Check-in

### Week 04

    Programming basics (Processing)
    Variables

    Assignment: StyleGuide
    Assignment: Processing Experiment (2 weeks)

### Week 05

    If statements
    Comments and whitespace
    For loops

### Week 06

    External style sheets
    CSS reset
    Margins and padding
    The box model
    arrays and strings
    File Transfer Protocol
    Assignment: Processing Final Project

### Week 07

    Javascript and the web

### Week 08

    No Class Today

### Week 08

    1on1 Meetings
    Appointment link: <pending>
    Location: <pending>

### Week 09

    - CSS animations
    - CSS gradients
    - Web design process and UX
    - Final project

# Interaction Design 2021

- List outcomes
- Create weekly schedule
- decide delivery format of each topic
- decide feedback opportunities for the students
- Create clear guidelines and expectations for participation

## media

_Thinking With Type_:  
https://ebookcentral-proquest-com.libproxy.newschool.edu/lib/newschool/detail.action?docID=3387329

## Code Snippets

### Snippets

#### insert element with javascript

<!-- (A) HTML -->
<div id="first">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
</div>
 
<!-- (B) CREATE & INSERT ELEMENT -->
<script>
window.addEventListener("load", function(){
  // (B1) CREATE NEW HTML ELEMENT
  var element = document.createElement('strong');
  element.innerHTML = "FOO BAR!";
 
  // (B2) ATTACH TO <DIV>
  document.getElementById("first").appendChild(element);
 
  // (B3) TO ATTACH NEW ELEMENT TO <BODY>
  element = document.createElement('p');
  element.innerHTML = "Lorem ipsum dolor sit amet.";
  document.body.appendChild(element);
});
</script>
#### Flex box CSS columns
     <!DOCTYPE html>
     <html>
     <head>
     <style>
     .flex-container {
     display: -webkit-flex;
     display: flex;
     width: 100%;
     height: 250px;
     background-color: lightgrey;
     }

     .flex-item {
     background-color: cornflowerblue;
     width: 33%;
     height: 100px;
     margin: 10px;
     }
     </style>
     </head>
     <body>

     <div class="flex-container">
     <div class="flex-item">flex item 1</div>
     <div class="flex-item">flex item 2</div>
     <div class="flex-item">flex item 3</div>
     </div>

     </body>
     </html>

#### Javascript Main Menu

     If your page is strictly HTML+JavaScript, you can use HTML DOM innerHTML Property. Here is an example:

     index.html
     <body>
     <nav id="navMenu"></nav>
     <div> rest of web page body here </div>
     <script src="script.js"></script>
     </body>
     about.html

     <body>
     <nav id="navMenu"></nav>
     <div> rest of web page body here </div>
     <script src="script.js"></script>
     </body>
     script.js

     document.getElementById("navMenu").innerHTML =
     '<ul>'+
     '<li><a href="index.html">Home</a></li>'+
     '<li><a href="services.html">Services</a></li>'+
     '<li><a href="about.html">About</a></li>'+
     '</ul>';
     Important line here is nav tag, and all you need to do is to add this line in other pages in this example about.html.

#### Load external html in a div

With javascript:
var xhr= new XMLHttpRequest();
xhr.open('GET', 'x.html', true);
xhr.onreadystatechange= function() {
if (this.readyState!==4) return;
if (this.status!==200) return; // or whatever error handling you want
document.getElementById('y').innerHTML= this.responseText;
};
xhr.send();
With Jquery:
$("#y").load("x.html");

#### Archive :ARCHIVE:

##### DONE Other Javascript Main Menu

      CLOSED: [2017-02-24 Fri 09:33]
      :PROPERTIES:
      :ID:       92d368b6-6fd3-4238-932b-36686eb400fa
      :ARCHIVE_TIME: 2017-10-25 Wed 17:35
      :END:

      document.getElementById("myHead").innerHTML =
      "<span id='headerText'>Title</span>"
      + "<span id='headerSubtext'>Subtitle</span>";
        document.getElementById("myNav").innerHTML =
        "<ul id='navLinks'>"
        + "<li><a href='index.html'>Home</a></li>"
        + "<li><a href='about.html'>About</a>"
        + "<li><a href='donate.html'>Donate</a></li>"
        + "</ul>";
          document.getElementById("myFooter").innerHTML =
          "<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " You. All"
          + " rights reserved.</p>"
          + "<p id='credits'>Layout by You</p>"
          + "<p id='contact'><a href='mailto:you@you.com'>Contact Us</a> / "
          + "<a href='mailto:you@you.com'>Report a problem.</a></p>";

### FTP info

    The following Art, Media and Technology B.PARSONS.EDU user account has been setup for you:

    Username:churia
    Password:pkJpm5ywiPMpasU

    User Control Panel URL:http://user.b.parsons.edu

    Website URL:http://b.parsons.edu/~churia
    Website Home Directory:/u/wdb201617/churia/public_html

    SSH/SFTP Host:                          b.parsons.edu
    SSH/SFTP Port:                          222

    MySQL database:churia
    MySQL login:churia
    MySQL password:pkJpm5ywiPMpasU

    IMPORTANT: You must login to http://user.b.parsons.edu and navigate to "Applications -> MySQL Database" and login. After you have logged into your database your MySQL and user account passwords will be synced. Your MySQL database will not be accessible until you sync your passwords.

    You will not be able to use FTP, you need to use SFTP.  The syntax for using sftp in a terminal window should be: sftp -P 222 churia@b.parsons.edu.

**\* Lessons
\*\*** Javascript

<h2>
**_ Central art board
#artboard {
background-color: #fff;
margin: 0;
position: absolute;
top: 50%;
left: 50%;
width: 2000px;
height: 1000px;
-ms-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
}
_** Responsive triangle
.tri {
width: 0;
height: 0;
border-style: solid;
border-color: transparent transparent rgb(36,91,135) transparent;
border-width: 0 10vh calc(1.732 \* 10vh) 10vh;
}

# Modules

## Week 01

- format of the class
- review syllabus
- How Computers Work and Organizing your Files
  - files and folders
- plain text
- Markup languages and HTML. What it is and what it is not
- The Development Environment: Browser Web Developer Tools and Text Editors
  - Firefox developer edition
  - Atom
- browsers
- html
- ftp access
- HTML Syntax and writing for computers
- Coding an HTML page
- turning in assignments

### html tags

- html, head, body, div, p, ol, ul, h1

### assignment

Recipe
HTML elements specimen

## Week 02

### topics

- css
- inline and blocks
- units of measure
- margins and padding
- setting type
  - review Lupton 1 & 2

### typography

- text face / display
- typeface
- type size
- x-height
- leading (line height)
- paragraphs
- line length
- justification

### assignment

Poem
us paper.html as a basis to typset some poems.  
Choose 3 poems and typeset each one 3 different ways in your paper.html document.

## Week 03

- Flexbox
- tables
- lists
- links and anchors
- git
  - did you set up a git account
  - add learing git to assignments?

## Week 04

- Review student work

## Week 05

- FTP
- Responsive Design

# Assignments

## Final Project

### Website creation process

1. The design brief
   - Why is this product being created?
   - Who is the target audience?
   - What is the state of the art (competitive analysis)?
   - It what context will they access the product?
   - What are the goals?
   - How will success be measured?
1. Content
   - Content audit (what content is available already)
   - Copy
   - Images
   - Interaction
1. User Experience
   - Who are the users?
   - What are the user's motivations?
   - How will the user access the information?
   - Information architecture
1. Create user profiles
1. Create user journeys
1. Wireframes
   1. Style
   - Mood board
   - Color palette
   - Typeface
   - imagery
   - motion design
   - micro interactions
1. Prototype (testing)
1. Development
1. Testing
1. QA
1. Metrics (testing)

# Javascript

https://www.codecademy.com/learn/introduction-to-javascript

#### Assignment

- **_CSS Gallery_**

### Week 10

#### Individual meetings

Please book a meeting during this week
[Office Hours](https://doodle.com/mm/1586524042/office-hours)

#### Assignment

### Week 11

    - CSS Variables
    - Changing classes with javascript to change styles
    - Responsive navigation with javascript

#### Assignment

### Week 12

    - Downloading and using Javascript libraries
        - jQuery
        - lightbox.js

### Week 13

    - Javascript functions with arguments
    -  Javascript page events

#### Assignment

### Week 14

#### Individual meetings

Please book a meeting during this week  
[Office Hours](https://doodle.com/mm/1586524042/office-hours)

## Week 15

    Final Project Presentation

## Required Reading / Media

    [How to / Why Make Internet Art](http://netart.rocks)

    [*What is Code?*, Paul Ford](http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/)

    [*Paragraphs on Conceptual Art*, Sol Lewitt](https://www.dropbox.com/s/civ8ofgp13opp7v/Paragraphs_on_Conceptual_Art_Sol_LeWitt.pdf?dl=0)

    [Guide to Website Navigation]( http://sixrevisions.com/user-interface/navigation-design-patterns/)

    [Web Design: The First 100 Years, Maciej Cegłowski](http://idlewords.com/talks/web_design_first_100_years.htm)

    *Toward Aesthetic Guidelines for Paintings with the Aid of a Computer*, Vera Molnar

    *Hackers and Painters*, Paul Graham

    *The Library of Babel*, Jorge Luis Borges

    *The Garden of Forking Paths*, Jorge Luis Borges

## Materials and Supplies

    -Access to your FTP server.

## Class Resources

    [Resources file](https://gitlab.com/arielchuri/creativecomputing/blob/master/resources.md)

    [W3 Schools](http://www.w3schools.com/)

    [freeCodeCamp]( https://www.freecodecamp.org/challenges/say-hello-to-html-elements )

    [Unix for Mac Users](https://www.lynda.com/Mac-OS-X-10-6-tutorials/Unix-for-Mac-OS-X-Users/78546-2.html)

    [Git on Lynda.com](https://www.lynda.com/GitHub-training-tutorials/1384-0.html)

    [Special Characters](http://www.w3schools.com/charsets/ref_utf_latin1_supplement.asp)

    [CSS Tools: Reset CSS](http://meyerweb.com/eric/tools/css/reset/)

    [Javascript Reference]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference )

    [Get Started with the Google Fontns API](https://developers.google.com/fonts/docs/getting_started)

    [Introduction to jQuery](https://www.edx.org/course/introduction-jquery-microsoft-dev208x-3)

    [Interactivity with JavaScript | Coursera](https://www.coursera.org/learn/javascript#%20)

    [HTML, CSS, and Javascript for Web Developers | Coursera](https://www.coursera.org/learn/html-css-javascript-for-web-developers)

    [Full Stack Web and Multiplatform Mobile App Development | Coursera](https://www.coursera.org/specializations/full-stack-mobile-app-development)

    [Intro to JavaScript | Udacity](https://www.udacity.com/course/intro-to-javascript--ud803)

    [A-Frame](https://aframe.io)

# links

    Creating VR websites with [A-Frame](https://aframe.io)
    [jQuery Introduction] (http://www.w3schools.com/jquery/jquery_intro.asp)

https://internetingishard.com/html-and-css/?utm_source=share&utm_medium=ios_app&utm_name=iossmf
~/Dropbox/Notes/orgmode/teaching.org

## Syllabus examples

http://b.parsons.edu/~dejongo/
[CC / Creative Computing] (http://cc.andydayton.com/*homework)
[PUCD2035_Creative Computing] (https://docs.google.com/document/d/1_oeDGtzUMirRQTYip1uU629Z7N1J4NAcx5B7eFh_GZY/mobilebasic)
