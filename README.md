# Yi Backend

This is the backend for the Yi application, built with Node.js, Express, and MongoDB.

## Features
- RESTful API for managing notes
- MongoDB database with Mongoose ORM
- CORS enabled for frontend communication

## Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/Yi-Backend.git
   cd Yi-Backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory and add the following:
   ```env
   PORT=5000
   DB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/Yi
   ```
   Replace `<username>` and `<password>` with your MongoDB credentials.

## Running the Server

To start the backend server, run:
```sh
npm run dev
```
The server will be running on `http://localhost:5000/`

## API Endpoints

### Notes
- **GET** `/api/notes` - Fetch all notes
- **POST** `/api/notes` - Create a new note
- **DELETE** `/api/notes/:id` - Delete a note
