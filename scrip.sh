#!/usr/bin/env bash
random_number=$((1 + $RANDOM % 100))

for(( i=1;i<=random_number;i++)); do
  echo "This is commit $i" >> sample2.txt
  git add .
  git commit -m "random commit $i"
done

git push -u origin main 
