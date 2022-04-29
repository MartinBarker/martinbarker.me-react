#!/bin/bash
# must install imagemagick
THUMBS_FOLDER=./aesthetic-images/thumbnails
for file in ./aesthetic-images/*

do
  # next line checks the mime-type of the file
  IMAGE_TYPE=`file --mime-type -b "$file" | awk -F'/' '{print $1}'`
  if [ x$IMAGE_TYPE = "ximage" ]; then
      IMAGE_SIZE=`file -b $file | sed 's/ //g' | sed 's/,/ /g' | awk  '{print $2}'`
      WIDTH=`echo $IMAGE_SIZE | sed 's/x/ /g' | awk '{print $1}'`
      HEIGHT=`echo $IMAGE_SIZE | sed 's/x/ /g' | awk '{print $2}'`           
      # If the image width is greater that 200 or the height is greater that 150 a thumb is created
     if [ $WIDTH -ge  201 ] || [ $HEIGHT -ge 151 ]; then
        #This line convert the image in a 200 x 150 thumb 
        filename=$(basename "$file")
        extension="${filename##*.}"
        filename="${filename%.*}"
        convert -sample 200x150 "$file" "${THUMBS_FOLDER}/${filename}_thumb.${extension}"   
     fi
  fi     
done