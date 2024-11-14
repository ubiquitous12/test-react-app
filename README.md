
# TODO Application

This is a simple TODO application built with React, TypeScript, and Vite. The application allows users to add, remove, mark tasks as completed, and filter and sort tasks based on completion status and date or title. The task list is stored persistently in `localStorage`, ensuring data is retained even after a page refresh.

## Features

- **Add, remove, and mark tasks as completed**
- **Filter tasks** by status (all, completed, or incomplete)
- **Sort tasks** by title or date
- **Persistent storage** using `localStorage` to retain tasks, sorting, and filtering preferences even after refresh

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher recommended)
- **npm** (usually installed with Node.js) or **yarn** as the package manager

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or if you're using yarn
   yarn install
   ```

### Running the Project Locally

To run the project locally, follow these steps:

1. **Start the development server**:

   ```bash
   npm run dev
   # or with yarn
   yarn dev
   ```

2. **Open your browser** and navigate to `http://localhost:5173` (or the port specified in the console). You should see the TODO application running.

### Building for Production

To build the project for production, use the following command:

```bash
npm run build
# or with yarn
yarn build
```

This will generate a `dist` folder containing the optimized build for deployment.

### Dependencies

The application uses the following dependencies:

- **React**: Library for building the user interface.
- **TypeScript**: Adds static typing to JavaScript.
- **Vite**: Fast build tool optimized for modern web projects.
- **localStorage**: Browser API for persistent storage of tasks and preferences.

### Configuration

This project does not require any additional configuration, as it uses `localStorage` directly to manage persistent data, and does not rely on environment variables or external APIs.

## Testing

To execute the test suite, use the following command:

```bash
npm test
```


## Notes on Features and Limitations

- **Persistent Storage**: All tasks, filtering, and sorting preferences are stored in `localStorage`, which provides a simple form of persistence. This means that tasks will be retained even if the browser is refreshed, but they will be lost if the `localStorage` is cleared.
- **No Backend**: This application does not include a backend server; instead, it relies on `localStorage` as a mock API for storing tasks. Future versions could add a backend for user authentication and cloud storage of tasks.
- **Responsive Design**: The app is styled to be responsive for both desktop and mobile views, using CSS Flexbox for layout.
- **Filtering and Sorting**: Users can filter tasks by their completion status and sort them by title or date. These settings are stored in `localStorage` to ensure they are remembered across sessions.

