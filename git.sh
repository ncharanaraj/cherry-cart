#!/bin/bash

git add -A

echo "Enter the commit Message: "
read message

git commit -m "$message"

git push -u origin main