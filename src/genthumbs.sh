#!/bin/bash
# need to have ImageMagick installed, run on ubuntu with:
# $ chmod u+x genthumbs.sh
# $ cd ./src/
# $ ./genthumbs.sh
thumbs_folder=./aesthetic-images/thumbnails
mkdir -p "$thumbs_folder"
for file in ./aesthetic-images/*; do
    # next line checks the mime-type of the file
    image_type=$(file --mime-type -b "$file")
    if [[ $image_type = image/* ]]; then
        image_size=$(identify -format "%[fx:w]x%[fx:h]" "$file")
        IFS=x read -r width height <<< "$image_size"
        # If the image width is greater that 200 or the height is greater that 150 a thumb is created
        if (( width > 200 || height > 150 )); then
            #This line convert the image in a 200 x 150 thumb 
            filename=$(basename "$file")
            extension="${filename##*.}"
            filename="${filename%.*}"
            convert -sample 200x150 "$file" "${thumbs_folder}/${filename}_thumb.${extension}"
        fi
    fi
done
