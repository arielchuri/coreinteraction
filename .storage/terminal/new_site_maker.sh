#!/bin/bash

# Usage: ./newsite.sh project-name [optional-path]

# Check for required argument
if [ -z "$1" ]; then
  echo "Usage: $0 project-name [optional-path]"
  exit 1
fi

PROJECT_NAME="$1"
LOCATION="${2:-.}"
PROJECT_DIR="$LOCATION/$PROJECT_NAME"

# Create folder structure
mkdir -p "$PROJECT_DIR/css"
mkdir -p "$PROJECT_DIR/js"
mkdir -p "$PROJECT_DIR/images"

# Create index.html with boilerplate
cat > "$PROJECT_DIR/index.html" <<EOF
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>$PROJECT_NAME</title>
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>

  <h1>Welcome to $PROJECT_NAME</h1>
  <script src="js/myscript.js"></script>
</body>
</html>
EOF

# Create styles.css with boilerplate and color variables
cat > "$PROJECT_DIR/css/styles.css" <<EOF
:root {
  --color-black: #00000a;
  --color-white: #fefeff;
  --color-secondary: #2ecc71;
  --color-primary: #3498db;
  --color-secondary: #2ecc71;
  --color-accent: #e74c3c;
  --color-link: #2980b9;
  --color-hover: #1abc9c;
  --color-visited: #8e44ad;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  background: #f5f5f5;
  color: #333;
}

a {
  color: var(--color-link);
}

a:hover {
  color: var(--color-hover);
}

a:visited {
  color: var(--color-visited);
}
EOF

# Create myscript.js with console log
cat > "$PROJECT_DIR/js/myscript.js" <<EOF
console.log("Hello, world!");
EOF

echo "Website boilerplate for '$PROJECT_NAME' created at '$PROJECT_DIR'"

