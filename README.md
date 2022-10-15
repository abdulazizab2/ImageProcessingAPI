# Introduction

The project spins up a local that does minimum image processing functionality. For now, it has only one feature which resizing and only handles jpg format images.

There are two routes only:

1- /api: Main page. No functionality, only a placeholder.
2- /api/images: More details in [Usage Guide](#How-To) section

# Installation

```bash
git clone https://github.com/abdulazizab2/ImageProcessingAPI.git
npm i package.json
```
# Usage Guide {#How-To}

## Spinning up the server

To spin up the server simply run:
```bash
npm run build && node dist/
```

A port ```8000``` will be exposed in your localhost. You can navigate to the available routes in the browser.
## Resizing Images

Before trying to utilize the API functionality. Make sure to have an image in ```images``` directory with jpg extension then use this endpoint by either making a GET request from POSTMAN or pasting it in the browser or any method you prefer:
```bash
localhost:8000/api/images?filename=${IMAGE_NAME_WITHOUT_EXTENSION}&width=${NEW_WIDTH}&height=&{NEW_HEIGHT}
```
**Note:** ${} is a placeholder for a variable that you should replace with

```IMAGE_NAME_WITHOUT_EXTENSION```: Name of the image inside ```images``` directory without typing the extension

```NEW_WIDTH```: The width you'd like to resize your image to
```NEW_HEIGHT```: The height you'd like to resize your image to

The resized image will be shown in the browser and it will be sized inside ```outputs``` directory