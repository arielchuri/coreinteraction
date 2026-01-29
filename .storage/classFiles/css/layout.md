# CSS Layout

[HTML version](layout.html)

## CSS Flexbox

### 1. Enable Flexbox

To use Flexbox, set `display: flex;` on a container.

```html
      <div class="flex-container" style="display: flex">
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
      </div>
```

### 2. Flex Direction

Controls the primary axis (row or column):

-   `row` (default) - left to right.
-   `row-reverse` - right to left.
-   `column` - top to bottom.
-   `column-reverse` - bottom to top.

```html
      <p>Controls the primary axis (row or column):</p>
      <ul>
        <li><code>row</code> (default) - left to right.</li>
        <li><code>row-reverse</code> - right to left.</li>
        <li><code>column</code> - top to bottom.</li>
        <li><code>column-reverse</code> - bottom to top.</li>
      </ul>

      <div
        class="flex-container"
        style="display: flex; flex-direction: row-reverse"
      >
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
      </div>
```


### 3. Justify Content

Aligns items along the main axis:

-   `flex-start` (default) - items at the beginning.
-   `flex-end` - items at the end.
-   `center` - items in the center.
-   `space-between` - even spacing, no gap at edges.
-   `space-around` - even spacing, gaps at edges.
-   `space-evenly` - equal space everywhere.

```html
      <div
        class="flex-container"
        style="display: flex; justify-content: space-around"
      >
        <div class="flex-item">Item 1</div>
        <div class="flex-item">Item 2</div>
        <div class="flex-item">Item 3</div>
      </div>
```

### 4. Align Items

Aligns items along the cross axis:

-   `stretch` (default) - items fill container height.
-   `flex-start` - items align at the top.
-   `flex-end` - items align at the bottom.
-   `center` - items align in the middle.
-   `baseline` - items align by text baseline.

```html
      <div
        class="flex-container"
        style="display: flex; align-items: center; height: 100px"
      >
        <div class="flex-item" style="height: 50px">Item 1</div>
        <div class="flex-item" style="height: 70px">Item 2</div>
        <div class="flex-item" style="height: 30px">Item 3</div>
      </div>
```

### 5. Flex Wrap

Controls whether items wrap to a new row or column:

-   `nowrap` (default) - items stay in one row.
-   `wrap` - items wrap to a new row.
-   `wrap-reverse` - items wrap in reverse order.


```html
      <div
        class="flex-container"
        style="display: flex; flex-wrap: wrap; width: 300px"
      >
        <div class="flex-item" style="width: 100px">Item 1</div>
        <div class="flex-item" style="width: 100px">Item 2</div>
        <div class="flex-item" style="width: 100px">Item 3</div>
        <div class="flex-item" style="width: 100px">Item 4</div>
      </div>
```

### 6. Align Content

Controls spacing when items wrap to new rows:

-   `flex-start` - packed at the top.
-   `flex-end` - packed at the bottom.
-   `center` - centered.
-   `space-between` - even spacing.
-   `space-around` - space around each row.
-   `stretch` (default) - rows stretch.


```html
      <div
        class="flex-container"
        style="
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          height: 200px;
        "
      >
        <div class="flex-item" style="width: 100px">Item 1</div>
        <div class="flex-item" style="width: 100px">Item 2</div>
        <div class="flex-item" style="width: 100px">Item 3</div>
        <div class="flex-item" style="width: 100px">Item 4</div>
      </div>
```

### 7. Flex Grow, Shrink, and Basis

These control item sizing:

-   `flex-grow`: Defines how much an item should expand.
-   `flex-shrink`: Defines how much an item should shrink.
-   `flex-basis`: Sets a starting size.


```html
      <div class="flex-container" style="display: flex">
        <div class="flex-item" style="flex-grow: 1">Grow 1</div>
        <div class="flex-item" style="flex-grow: 2">Grow 2</div>
        <div class="flex-item" style="flex-grow: 1">Grow 1</div>
      </div>
```

### 8. Order Property

Controls the order of flex items:

```html
      <div class="flex-container" style="display: flex">
        <div class="flex-item" style="order: 3">Item 1 (order 3)</div>
        <div class="flex-item" style="order: 1">Item 2 (order 1)</div>
        <div class="flex-item" style="order: 2">Item 3 (order 2)</div>
      </div>
```

## CSS Positioning and Float

### 1. Static Position (Default)

All elements are positioned `static` by default, meaning they follow the
normal document flow.


```html
      <div class="container">
        <div class="box">Static Position (Default)</div>
      </div>
```

### 2. Relative Positioning

`relative` positioning moves an element relative to its normal position.


```html
      <div class="container">
        <div class="box relative">Relative Positioned</div>
      </div>
```

### 3. Absolute Positioning

`absolute` removes the element from normal flow and positions it
relative to the nearest `relative` ancestor (or the viewport if none
exists).


```html
      <div class="container">
        <div class="box absolute">Absolute Positioned</div>
      </div>
```

### 4. Fixed Positioning

`fixed` positions an element relative to the viewport. It stays in place
when scrolling.


```html
      <div class="container">
        <div class="box fixed">Fixed Positioned</div>
      </div>
```

### 5. Sticky Positioning

`sticky` behaves like relative until a certain scroll point, then it
sticks to that position.

```html
      <div class="box sticky">Sticky Positioned (Scroll Down)</div>
```

### 6. Floating Elements

`float` is used to position elements to the left or right, allowing text
to wrap around them.


```html
      <div class="container clearfix">
        <div class="box float-left">Float Left</div>
        <p>
          Text wrapping around the floated element. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>

      <div class="container clearfix">
        <div class="box float-right">Float Right</div>
        <p>
          Text wrapping around the floated element. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>
      </div>
```

### 7. Clearing Floats

To prevent float issues, use `clearfix` or `clear: both;`.

```html
      <div class="container clearfix">
        <div class="box float-left">Float Left</div>
        <div class="box float-right">Float Right</div>
      </div>
      <div style="height: 400px"></div>
```
