# Node.js Crash Course Blog Project

This is a simple blog application built with Node.js, Express, MongoDB, and EJS templating, following the [Net Ninja Node.js Crash Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU).

## Features

- Create, read, and delete blog posts
- MongoDB database integration
- EJS templating for dynamic views
- Modular routing and controllers
- Static file serving (CSS, images)
- 404 error page
- Environment variable support for sensitive data

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account

### Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd node-crash-course
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Copy the environment template and fill in the required values:
   ```env
   PORT=3000
   MONGO_USER=yourUser
   MONGO_PASSWORD=yourPassword
   MONGO_HOST=your-cluster.mongodb.net
   MONGO_DB=yourDatabase
   MONGO_APP=node-app
   ```
4. For development (with auto-reload):
   ```sh
   npm run dev
   ```
   For production:
   ```sh
   npm start
   ```

### Usage

- Visit `http://localhost:3000` in your browser.
- Create new blog posts, view all posts, and delete posts.

## Project Structure

```
node-crash-course/
├── app.js
├── package.json
├── .env.example
├── public/
│   └── styles.css
├── views/
│   ├── 404.ejs
│   ├── about.ejs
│   ├── blogs/
│   │   ├── create.ejs
│   │   ├── details.ejs
│   │   └── index.ejs
│   └── partials/
│       ├── footer.ejs
│       ├── head.ejs
│       └── nav.ejs
├── routes/
│   └── blogRoutes.js
├── controllers/
│   └── blogController.js
└── models/
    └── blog.js
```

## Reference

This project is based on the [Net Ninja Node.js Crash Course](https://www.youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU). Check out the playlist for a step-by-step tutorial and explanations of Node.js capabilities.

## License

MIT
