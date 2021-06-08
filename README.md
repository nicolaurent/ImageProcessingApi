# ImageProcessingApi
This application is able to resize and saves images to user specification when visiting URL

## Installation
Install dependencies

  ```
  npm install
  ```

## Run test 

  ```
  npm run test
  ```
  
## How to use
### Run server
There are 2 ways to run the server

1. Build project and run js file

In root directory, run the following
  ```
  npm run build
  ```
`build` folder will be created upon successfull built. Go to `build` folder and run
  ```
  node .
  ```

2. Use nodemon

In root directory, run the following
  ```
  npm run start
  ```
  
Server will run on `http://localhost:3000/api`

### Resize image
To resize image, use the following URL

  ```
  http://localhost:3000/api/images?filename=<filename>&width=<width>&height=<height>
  ```

* filename = image filename inside `images/full` directory (no extension)

* width (optional) = width of the output image (in pixel). Default value 300

* height (optional) = height of the output image (in pixel). Default value 300

There are 5 sample images provided in this project. They are located in `images/full` directory.

#### Example
  ```
  http://localhost:3000/api/images?filename=encenadaport&width=250&height=250
  ```

Upon successfull resizing, the resized image will be shown on the screen.

A new folder `images/thumb` will be created and the resized image will be saved in the folder.

