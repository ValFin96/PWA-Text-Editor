# PWA-Text-Editor
This is a single-page application text editor that runs in the browser and meets the PWA criteria. It features a number of data persistence techniques that serve as redundancy in case one of the options is not supported by the browser. The application also functions offline. Find a deployed application [here]().

## Usage
Follow these steps to use the text editor app:

1. Clone this repository to your local machine.
2. Open a terminal and navigate to the root directory of the cloned repository.
3. Run `npm install` to install all the necessary dependencies.
4. Run `npm run start` to start the backend and serve the client.
5. Open your browser and navigate to http://localhost:3000/ to access the text editor.
6. Enter your notes or code snippets in the editor.
7. When you click off the DOM window, your content will be saved with IndexedDB.
8. If you close the text editor and reopen it, your content will be retrieved from IndexedDB.
9. Click on the Install button to download the web application as an icon on your desktop.
10. When you load the web application, you should have a registered service worker using Workbox.
11. Your static assets will be pre-cached upon loading along with subsequent pages and static assets.

## Dependencies
* Express.js
* idb
* Workbox
* Webpack

## Credits
This application was created as a project for a coding bootcamp. The original codebase was provided by the bootcamp, and modifications and additional functionality were added by me.

## Screenshots
![Screenshot 1](./client/src/images/Screenshot%201.jpg)

![Screenshot 2](./client/src/images/Screenshot%202.jpg)

![Screenshot 3](./client/src/images/Screenshot%203.jpg)
