# Trika Technologies

This project is a simple product management interface for Trika Technologies, allowing users to view, search, select, and delete products fetched from a mock API.

### Table of Contents
<ul dir="auto">
 <ol dir="auto">◉ Overview</ol>
 <ol dir="auto">◉ Features</ol>
 <ol dir="auto">◉ Project Structure</ol>
 <ol dir="auto">◉ Installation</ol>
 <ol dir="auto">◉ Usage</ol>
 <ol dir="auto">◉ Folder Structure</ol>
</ul>

## Overview
This application consists of a Node.js JSON Server backend and a React frontend. 
The backend provides a mock API endpoint, /products, returning a list of products. 
The frontend fetches and displays these products, allowing for searching, selecting, and pagination.

## Features
 <ul dir="auto">
 <ol dir="auto"> 1. Search Products: Real-time product filtering using a search bar.</ol>
 <ol dir="auto"> 2. Select Products: Select individual or all products.</ol>
 <ol dir="auto"> 3. Delete Selected Products: Delete selected rows temporarily (client-side only).</ol>
 <ol dir="auto"> 4. Pagination: Displays 10 products per page, with pagination controls.</ol>
 <ol dir="auto"> 5. Responsive UI: Built with a responsive design for usability on different screen sizes.</ol>
 </ul>
 
## Project Structure

Trika
├── backend
│   ├── db.json            # Mock data for products
│   ├── server.js          # JSON Server setup for backend
├── my-app
│   ├── public             # Public assets
│   ├── src
│   │   ├── components     # React components
│   │   │   ├── Products.jsx       # Main product component
│   │   │   ├── Pagination.jsx     # Pagination component
│   │   ├── styles
│   │   │   ├── products.css       # Styling for the Products component
└── README.md              # Project documentation

## Installation
### Backend Setup (JSON Server)

 <ul dir="auto">
   <li> Navigate to the backend folder: <code>cd backend</code></li>
   <li> Initialize the project : <code>npm init -y</code></li>
   <li> Install json-server : <code>npm install json-server</code></li>
   <li> Start the JSON Server : <code>node server.js</code></li>
   JSON Server should now be running on :http://localhost:8000.
 </ul>

 ### Frontend Setup (React)

 
 <ul dir="auto">
   <li> Navigate to the my-app folder: <code>cd my-app</code></li>
   <li> Install dependencies: : <code>npm install</code></li>
   <li> Start the React application : <code>npm start</code></li>
   The React app should now be running on http://localhost:3000.
 </ul>

## Usage
 <ul dir="auto">
<ol dir="auto"> 1. Viewing Products: Products will be displayed in a paginated table.</ol>
<ol dir="auto"> 2. Searching Products: Use the search bar to filter products by title.</ol>
<ol dir="auto"> 3. Selecting Products: Use checkboxes to select or deselect products. A checkbox at the top can be used to select all visible products.</ol>
<ol dir="auto"> 4. Deleting Products: Click "Delete Selected" to remove selected products (deletion is only in memory).</ol>
 </ul>

![Screenshot (8)](https://github.com/user-attachments/assets/8bccfc97-d193-48b2-9e7e-4bd34f901004)


