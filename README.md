# Color Clock

Color Clock is a dynamic clock application built with React and Vite. It displays the current date and time and updates every second.

## Features

- Displays the current date and time
- Updates the time every second
- Formats the date and time using date-fns
- Uses React state to dynamically update the UI
- Includes custom CSS styling

## Technologies Used

- React
- JavaScript
- JSX
- Vite
- npm
- date-fns
- CSS

## Getting Started

Install the project dependencies:

npm install

Start the development server:

npm run dev

Open the local URL provided by Vite in your browser.

## How It Works

The `App` component stores the current date and time using React's `useState` hook.

A `useEffect` hook creates an interval that updates the current time every second. Updating the state causes React to re-render the component with the new time.

The `format` function from the `date-fns` package formats the JavaScript `Date` object into a readable date and time.

## Project Structure

- `src/App.jsx` - Contains the clock component and clock logic
- `src/App.css` - Contains the clock styling
- `src/main.jsx` - Renders the React application
- `src/index.css` - Contains global styles

## Author

a-gbatie