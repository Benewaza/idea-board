# Idea Board Application

This project is a version of the task outlined at [https://github.com/D-Pagey/idea-board](https://github.com/D-Pagey/idea-board). It is a simple and responsive idea board application that allows users to create, edit, delete, and manage ideas effectively. The application is styled with Tailwind CSS.

## Features

- **Add New Ideas:** Users can create new ideas with a title and description. The title field is automatically focused upon creation to prompt the user to start typing immediately.
- **Edit Existing Ideas:** Inline editing of both the title and description is supported. The description is limited to a maximum of 140 characters.
- **Delete Ideas:** Each idea tile includes a delete button to remove the idea from the board.
- **Sort Ideas:** Users can sort ideas by creation date or alphabetically.
- **Persistent State:** Utilizes the `localStorage` API to retain the current state of ideas when the page is refreshed.
- **Character Countdown:** A character countdown is displayed as users approach the 140-character limit for the description.
- **Notifications:** Displays unobtrusive notifications for updates made to idea tiles using `react-toastify`.

## Running the App

Start the development server:

```
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## Building for Production

Generate a production build:

```
npm run build

```

## Known Limitations

- This project does not include a test suite as suggested in the task description.
