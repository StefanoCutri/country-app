# Country Info App

A modern full-stack application that provides detailed information about countries, including population statistics and flags. The backend handles API calls and serves the frontend built with React and Next.js.

## Features

- List of countries with codes and detailed pages
- Population statistics displayed using charts
- Responsive design for a smooth user experience on all devices
- Data fetched from multiple APIs and integrated on the backend

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Running the App](#running-the-app)
- [API Configuration](#api-configuration)

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/get-npm) (comes with Node.js)
- [Git](https://git-scm.com/)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/StefanoCutri/country-app.git
    cd country-info-app
    ```

### Backend Setup

2. Navigate to the backend folder and install dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Create an `.env` file at the root of the `backend` folder with the necessary environment variables (e.g., port, API keys):
    ```bash
    PORT=5000
    ```

4. Start the backend server:
    ```bash
    npm run dev
    ```

The backend should now be running on `http://localhost:5000`.

### Frontend Setup

5. Navigate to the frontend folder and install dependencies:
    ```bash
    cd frontend
    npm install
    ```

6. Create an `.env` file at the root of the `frontend` folder to configure the environment:
    ```bash
    NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
    ```

7. Start the frontend server:
    ```bash
    npm run dev
    ```

The frontend should now be running on `http://localhost:3000`.

## Running the App

After completing the installation steps for both backend and frontend:

1. Ensure the backend is running:
    ```bash
    cd backend
    npm run dev
    ```

2. Ensure the frontend is running:
    ```bash
    cd frontend
    npm run dev
    ```

Open your browser and navigate to `http://localhost:3000` to view the application.


## Additional Notes

- The app is set up with a `react-chartjs-2` library for chart rendering and supports responsive layouts.


