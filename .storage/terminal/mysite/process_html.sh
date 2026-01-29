#!/bin/bash

# filepath: /home/arielc/Documents/school/coreinteraction/terminal/process_html.sh

# Define paths to the partial files
HEAD_FILE="partials/head.html"
HEADER_FILE="partials/header.html"
FOOTER_FILE="partials/footer.html"

# Define the output directory
OUTPUT_DIR="output"
# 
# Define the input directory
INPUT_DIR="input"

# Check if all partial files exist
for FILE in "$HEAD_FILE" "$HEADER_FILE" "$FOOTER_FILE"; do
  if [[ ! -f "$FILE" ]]; then
    echo "Partial file not found: $FILE"
    exit 1
  fi
done

# Create the output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Loop through all .html files in the current directory
for HTML_FILE in "$INPUT_DIR"/*.html; do
  # Skip if no .html files are found
  if [[ ! -f "$HTML_FILE" ]]; then
    echo "No HTML files found in the current directory."
    exit 1
  fi

  # Create a temporary file
  TEMP_FILE=$(mktemp)

  # Process the HTML file
  awk -v head="$(cat "$HEAD_FILE")" \
      -v header="$(cat "$HEADER_FILE")" \
      -v footer="$(cat "$FOOTER_FILE")" '
    /<html lang="en">/ { print; print head; next }
    /<body>/ { print; print header; next }
    /<\/body>/ { print footer; print; next }
    { print }
  ' "$HTML_FILE" > "$TEMP_FILE"

  # Move the processed file to the output directory
  mv "$TEMP_FILE" "$OUTPUT_DIR/$(basename "$HTML_FILE")"
  echo "Processed: $HTML_FILE -> $OUTPUT_DIR/$(basename "$HTML_FILE")"
done
