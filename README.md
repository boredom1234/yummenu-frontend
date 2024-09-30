# YumMenu Frontend Application

## Features

- React.js setup with functional components and hooks
- Routing with `react-router-dom`
- State management
- API integration
- Responsive design using CSS/SCSS
- Shadcn UI

## Prerequisites

Make sure you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/boredom1234/yummenu-frontend.git
    cd yummenu-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory and add the necessary environment variables (e.g., API URL).
    ```env
    VITE_API_BASE_URL
    VITE_AUTH0_DOMAIN
    VITE_AUTH0_CLIENT_ID
    VITE_AUTH0_CALLBACK_URL
    VITE_AUTH0_AUDIENCE
    ```

## Running the Application

To start the development server, run:

```bash
npm run dev
