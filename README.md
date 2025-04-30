MultiContainer_Bakery

A containerized full-stack application simulating a bakery ordering system using Docker, PostgreSQL, Flask, HTML/CSS/JavaScript, Redis, and RabbitMQ. 
Built as part of an academic project to demonstrate multi-component orchestration using Docker Compose.

------------------------------------------------------------

System Architecture Overview

- Frontend: Static website (HTML/CSS/JS) served by Flask.
- Backend: Flask API.
- Database: PostgreSQL for storing products and orders.
- Cache: Redis for caching product list.
- Messaging: RabbitMQ for order processing simulation.
- Container Management: Docker Compose for orchestration.

------------------------------------------------------------

Setup Instructions

Prerequisites:
- Docker Desktop installed and running (Enable WSL2 backend for Windows users).
- Basic knowledge of Docker and containers.

------------------------------------------------------------

Folder Structure

bakery-system/
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── ...
├── frontend/
│   ├── index.html
│   ├── styles.css
│   └── ...
├── docker-compose.yml
├── README.md
└── ...

------------------------------------------------------------

Build and Run

Open terminal and run:

cd bakery-system
docker compose up --build

After successful build:

Website URL: http://localhost:8080
Backend API: http://localhost:5000
RabbitMQ UI: http://localhost:15672 (Username: guest, Password: guest)

------------------------------------------------------------

API Documentation

GET /products
- Returns list of available bakery items.
- Response is cached using Redis for faster performance.

POST /order
- Payload: Array of selected products
Example:

[
  { "name": "Chocolate Cake", "price": 300 },
  { "name": "Croissant", "price": 150 }
]

- Response:

{ "message": "Order placed successfully", "order_id": 1 }

- Note: Order details are also pushed into RabbitMQ.

GET /status/<order_id>
- Fetch the current status of an order.

Example Response:
{ "order_id": 1, "status": "confirmed" }

PUT /status/<order_id>
- Manually update the order status.
- Payload:

{ "status": "confirmed" }

GET /health
- Returns status of PostgreSQL, Redis, and RabbitMQ connectivity.
- Used for service health checks in Docker Compose.

------------------------------------------------------------

Screenshots

Home Page - Product List (Add image here)
Order Placement (Add image here)
Order Status (Add image here)
Docker Dashboard (Add image here)
RabbitMQ Queue (Add image here)

------------------------------------------------------------

Design Decisions

PostgreSQL used for reliable storage of orders and product data.
Flask (Python) chosen for lightweight REST API development.
Redis integrated to cache product listings and reduce PostgreSQL load.
RabbitMQ used for asynchronous order processing simulation.
Docker Compose used to orchestrate multiple interconnected services.
Health Checks added for frontend, backend, DB, Redis, and RabbitMQ.
Logging handled through Python logging in backend and container logs.

------------------------------------------------------------

Notes

To inspect and interact with the PostgreSQL database:

Run:

docker ps

Find the database container name, then:

docker exec -it <db-container-name> psql -U postgres -d bakery_db

Inside psql shell:

SELECT * FROM orders;

------------------------------------------------------------

