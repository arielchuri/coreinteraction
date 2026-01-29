#!/bin/bash

# filepath: /home/arielc/Documents/school/coreinteraction/terminal/firsttwo.sh

# Default number of lines to extract
lines=${1:-1}

# Create the output directory if it doesn't exist
mkdir -p output

# Loop through all .txt files in the current directory
for file in *.txt; do
  # Check if there are any .txt files
  if [[ -f "$file" ]]; then
    # Extract the specified number of lines and write them to a new file with the _f2.txt suffix
    base_name=$(basename "$file" .txt)
    head -n "$lines" "$file" > "output/${base_name}_f2.txt"
    echo "Processed $file -> output/${base_name}_f2.txt"
  fi
done

echo "All files processed. Check the 'output' directory."