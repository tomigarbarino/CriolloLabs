#!/usr/bin/env bash
# Simple crawl script for localhost:3000
# Collects internal links up to depth 2 and writes to routes.txt
BASE_URL="http://localhost:3000"
OUTPUT_FILE="routes.txt"
> $OUTPUT_FILE

# Function to fetch a page and extract hrefs
fetch_links() {
  local url=$1
  curl -s "$url" | grep -Eo 'href="[^"]+"' | sed -E 's/href="([^#?]+).*/\1/' | while read -r link; do
    # Normalize relative URLs
    if [[ $link == http* ]]; then
      full=$link
    else
      full="$BASE_URL$link"
    fi
    echo $full >> $OUTPUT_FILE
  done
}

# Crawl home page
fetch_links $BASE_URL

# Crawl second level (unique URLs from first pass)
uniq_urls=$(cat $OUTPUT_FILE | sort -u)
for u in $uniq_urls; do
  fetch_links $u
done

# Deduplicate final list
sort -u $OUTPUT_FILE -o $OUTPUT_FILE

echo "Crawl completed. URLs saved to $OUTPUT_FILE"
