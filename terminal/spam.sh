#!/bin/bash

# filepath: /home/arielc/Documents/school/coreinteraction/terminal/mailinglist.sh

# Create the output directory if it doesn't exist
mkdir -p output/mailinglist

# Input files
file1="fruits.txt" # File containing lines to prepend
file2="animals.txt" # File to prepend to

# Check if both input files exist
if [[ ! -f "$file1" || ! -f "$file2" ]]; then
  echo "Error: Both $file1 and $file2 must exist in the current directory."
  exit 1
fi

# Loop through each line in file1
while IFS= read -r line; do
  # Remove spaces from the line to create a valid filename
  sanitized_line=$(echo "$line" | tr -d '[:space:]')

  # Prepend the line to file2 and write to the output file
  {
    echo "$line"
    cat "$file2"
  } > "output/mailinglist/${sanitized_line}.txt"

  echo "Created output/mailinglist/${sanitized_line}.txt"
done < "$file1"

echo "All lines processed. Check the 'output/mailinglist' directory."