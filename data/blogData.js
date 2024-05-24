const initialBlogData = [
    {
      "title": "Getting Started with MERN Stack",
      "author": "John Doe",
      "date": "2024-05-01",
      "content": "In this blog post, we'll explore the basics of MERN stack development and how to get started building web applications using MongoDB, Express.js, React, and Node.js.",
      "category": "Web Development"
    },
    {
      "title": "Mastering React Hooks",
      "author": "Jane Smith",
      "date": "2024-04-25",
      "content": "Learn everything you need to know about React Hooks in this comprehensive guide. We'll cover useState, useEffect, useContext, and more!",
      "category": "React"
    },
    {
      "title": "Express.js Fundamentals",
      "author": "Chris Johnson",
      "date": "2024-04-18",
      "content": "Discover the core concepts of Express.js and how to build powerful APIs and web servers with this beginner-friendly tutorial.",
      "category": "Node.js"
    },
    {
      "title": "MongoDB Best Practices",
      "author": "Emily Brown",
      "date": "2024-04-10",
      "content": "Learn how to optimize your MongoDB database performance and ensure data integrity with these best practices and tips.",
      "category": "Databases"
    },
    {
      "title": "Authentication and Authorization in Node.js",
      "author": "Michael Wilson",
      "date": "2024-04-02",
      "content": "Secure your Node.js applications with robust authentication and authorization techniques. We'll cover JWT, Passport.js, and more!",
      "category": "Security"
    },
    {
      "title": "React Router Dom: Navigating in React Apps",
      "author": "Laura Garcia",
      "date": "2024-03-27",
      "content": "Get to grips with React Router Dom and learn how to implement client-side routing in your React applications for a seamless user experience.",
      "category": "React"
    },
    {
      "title": "RESTful API Design Principles",
      "author": "David Lee",
      "date": "2024-03-20",
      "content": "Design scalable and maintainable RESTful APIs with these essential principles and best practices. Includes tips for versioning, pagination, and error handling.",
      "category": "APIs"
    },
    {
      "title": "State Management with Redux",
      "author": "Sarah Martinez",
      "date": "2024-03-15",
      "content": "Learn how to manage complex application state with Redux, the predictable state container for JavaScript apps. Includes middleware, actions, and reducers.",
      "category": "React"
    },
    {
      "title": "Asynchronous JavaScript: Promises and Async/Await",
      "author": "Daniel White",
      "date": "2024-03-08",
      "content": "Master asynchronous programming in JavaScript with Promises and Async/Await. Say goodbye to callback hell and write cleaner, more maintainable code.",
      "category": "JavaScript"
    },
    {
      "title": "Deploying MERN Stack Apps to Heroku",
      "author": "Sophia Taylor",
      "date": "2024-03-01",
      "content": "Take your MERN stack applications live with Heroku! This step-by-step guide covers deployment, environment variables, and best practices for production.",
      "category": "Web Development"
    },
    {
      "title": "Optimizing Performance in React Applications",
      "author": "Ethan Clark",
      "date": "2024-02-22",
      "content": "Speed up your React applications and deliver a snappy user experience with these performance optimization techniques. Includes code splitting, memoization, and more!",
      "category": "React"
    },
    {
      "title": "CRUD Operations with MongoDB and Mongoose",
      "author": "Olivia Adams",
      "date": "2024-02-15",
      "content": "Learn how to perform CRUD operations with MongoDB and Mongoose, the elegant MongoDB object modeling for Node.js. Includes schema design and data validation.",
      "category": "Databases"
    },
    {
      "title": "Styling React Components with Styled Components",
      "author": "Nathan Thompson",
      "date": "2024-02-08",
      "content": "Create beautiful and reusable React components with Styled Components, the CSS-in-JS library. Say goodbye to global stylesheets and hello to component-based styling!",
      "category": "React"
    },
    {
      "title": "Form Handling in React: Best Practices",
      "author": "Ava Wilson",
      "date": "2024-02-01",
      "content": "Master form handling in React with these best practices and tips. Includes controlled components, form validation, and handling form submission.",
      "category": "React"
    },
    {
      "title": "Real-Time Web Applications with Socket.io",
      "author": "Noah Garcia",
      "date": "2024-01-25",
      "content": "Build real-time web applications with Socket.io, the leading JavaScript library for real-time bidirectional event-based communication.",
      "category": "Web Development"
    },
    {
      "title": "JSON Web Tokens (JWT) for Secure Authentication",
      "author": "Liam Moore",
      "date": "2024-01-18",
      "content": "Implement secure authentication in your Node.js applications with JSON Web Tokens (JWT). Includes token-based authentication and protecting routes.",
      "category": "Security"
    },
    {
      "title": "Introduction to GraphQL",
      "author": "Ella Robinson",
      "date": "2024-01-11",
      "content": "Discover the power of GraphQL, the modern alternative to REST APIs. Learn how to query and mutate data with GraphQL and integrate it into your MERN stack apps.",
      "category": "APIs"
    },
    {
      "title": "Global State Management with Context API",
      "author": "Lucas Brown",
      "date": "2023-12-28",
      "content": "Manage global application state with React's Context API. Say goodbye to prop drilling and simplify state management in your React applications.",
      "category": "React"
    },
    {
      "title": "Testing React Components with Jest and Enzyme",
      "author": "Chloe Rodriguez",
      "date": "2023-12-21",
      "content": "Ensure the reliability of your React components with unit tests. Learn how to write tests with Jest and Enzyme and make testing an integral part of your development workflow.",
      "category": "Testing"
    },
    {
      "title": "Building a Full-Stack Blog with MERN",
      "author": "Henry Evans",
      "date": "2023-12-14",
      "content": "Follow this tutorial to build a full-stack blog with MongoDB, Express.js, React, and Node.js. Includes CRUD operations, authentication, and deployment.",
      "category": "Web Development"
    }
  ]
module.exports = initialBlogData  