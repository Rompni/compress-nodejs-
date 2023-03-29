
# COMPRESS IMAGE NODEJS

This project is a simple example of how to compress a image using the following technologies:
- NodeJS
- Express
- Multer
- Sharp

The main endpoint is _`/upload`_, this endpoint receive a image and compress it with the webp format.

## How to run
1. Clone this repository.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the server.
4. Open your Postman and send a POST request to `http://localhost:${port}/upload` with a image in the body.
5. The response will be the image compressed in webp format, that will be saved in the `uploads` folder. 


## Environment variables
- PORT: Port where the server will run. Default: 3000

## License
MIT





