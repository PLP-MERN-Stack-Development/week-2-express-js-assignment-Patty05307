[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19732008&assignment_repo_type=AssignmentRepo)

# Express.js RESTful API Assignment

This assignment focuses on building a RESTful API using Express.js, implementing proper routing, middleware, and error handling.

## Assignment Overview

You will:
1. Set up an Express.js server  
2. Create RESTful API routes for a product resource  
3. Implement custom middleware for logging, authentication, and validation  
4. Add comprehensive error handling  
5. Develop advanced features like filtering, pagination, and search  

## Getting Started

1. Accept the GitHub Classroom assignment invitation  
2. Clone your personal repository that was created by GitHub Classroom  
3. Install dependencies:
   ```bash
   npm install

Run the server:

bash
Copy
Edit
npm start
Files Included
Week2-Assignment.md: Detailed assignment instructions

server.js: Starter Express.js server file

.env.example: Example environment variables file

Requirements
Node.js (v18 or higher)

npm or yarn

Postman, Insomnia, or curl for API testing

API Endpoints
The API will have the following endpoints:

GET /api/products: Get all products

GET /api/products/:id: Get a specific product

POST /api/products: Create a new product

PUT /api/products/:id: Update a product

DELETE /api/products/:id: Delete a product

Submission
Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

Complete all the required API endpoints

Implement the middleware and error handling

Document your API in the README.md

Include examples of requests and responses

Resources
Express.js Documentation

RESTful API Design Best Practices

HTTP Status Codes

🛍️ Product API Documentation (By Patience Ibitokun)
This is a simple RESTful API built with Express.js that allows you to manage products in memory. Authentication, routing, and error handling are included.

🔐 Authentication
All routes under /api/products require an authorization header:

makefile
Copy
Edit
Authorization: Bearer secret-token
📦 API Endpoints
Method	Endpoint	Description
GET	/api/products	Get all products
GET	/api/products/:id	Get product by ID
POST	/api/products	Create a new product
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product

🧪 How to Test the API (with curl or Postman)
✅ Get All Products
bash
Copy
Edit
curl -H "Authorization: Bearer secret-token" http://localhost:3000/api/products
🔍 Get Product by ID
bash
Copy
Edit
curl -H "Authorization: Bearer secret-token" http://localhost:3000/api/products/<product_id>
Replace <product_id> with a real product ID.

🆕 Add a New Product
bash
Copy
Edit
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer secret-token" \
  -d '{"name":"Tablet","description":"Android tablet","price":500}'
✏️ Update a Product
bash
Copy
Edit
curl -X PUT http://localhost:3000/api/products/<product_id> \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer secret-token" \
  -d '{"price": 700, "inStock": false}'
🗑️ Delete a Product
bash
Copy
Edit
curl -X DELETE http://localhost:3000/api/products/<product_id> \
  -H "Authorization: Bearer secret-token"
📄 Sample Product Object
json
Copy
Edit
{
  "id": "c45c5321-0547-434c-87fa-e27a1a7d492a",
  "name": "Tablet",
  "description": "Android tablet",
  "price": 500,
  "category": "general",
  "inStock": true
}
👤 Author
Name: Ibitokun Patience
GitHub: @Patty05307
Email: ibitokunpatience05@gmail.com
