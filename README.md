# Optimizer - Frontend Challenge

This project is a multi-step form application built with React and TypeScript. It allows users to select products, provide client information, and view a summary before submitting the form.

## Features

- Product selection with search functionality.
- Client information form with validation.
- Summary step displaying selected products and total price.
- Multi-step navigation with validation checks.
- Styled using SCSS.

## Project Structure

The project is organized as follows:

- **`src/components`**: Contains reusable React components.
- **`src/context`**: Context for managing global form state.
- **`src/hooks`**: Custom hooks for managing form steps.
- **`src/services`**: API service for fetching products.
- **`src/types`**: Type definitions for TypeScript.
- **`src/utils`**: Utility functions for validation.
- **`src/styles.scss`**: Global styles.

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [Yarn](https://yarnpkg.com/) (preferred package manager)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/optimizer-tech-challenge.git
   cd optimizer-tech-challenge
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn start
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Integration

The project fetches product data from the [DummyJSON API](https://dummyjson.com/). Ensure you have an active internet connection for the API calls to work.

## Author

- Developed by [@franciscorg7](https://github.com/franciscorg7)
