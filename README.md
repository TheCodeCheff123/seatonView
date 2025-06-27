**Express API**

This project is an Express.js-based API designed to handle backend operations for the SeatonView application. It provides a set of endpoints to interact with the application's data and perform CRUD (Create, Read, Update, Delete) operations.

### Features
- RESTful API design.
- Easy integration with frontend applications.
- Handles JSON-based requests and responses.
- Scalable and modular codebase.

---

## Endpoints

### 1. **GET /api/items**
- **Description**: Fetch a list of all items.
- **Response**: 
    - Status: `200 OK`
    - Body: 
        ```json
        [
            {
                "id": 1,
                "name": "Item Name",
                "description": "Item Description",
                "price": 100
            }
        ]
        ```

### 2. **GET /api/items/:id**
- **Description**: Fetch details of a specific item by ID.
- **Response**:
    - Status: `200 OK`
    - Body:
        ```json
        {
            "id": 1,
            "name": "Item Name",
            "description": "Item Description",
            "price": 100
        }
        ```

### 3. **POST /api/items**
- **Description**: Create a new item.
- **Request Body**:
    ```json
    {
        "name": "New Item",
        "description": "New Item Description",
        "price": 150
    }
    ```
- **Response**:
    - Status: `201 Created`
    - Body:
        ```json
        {
            "id": 2,
            "name": "New Item",
            "description": "New Item Description",
            "price": 150
        }
        ```

### 4. **PUT /api/items/:id**
- **Description**: Update an existing item by ID.
- **Request Body**:
    ```json
    {
        "name": "Updated Item",
        "description": "Updated Description",
        "price": 200
    }
    ```
- **Response**:
    - Status: `200 OK`
    - Body:
        ```json
        {
            "id": 1,
            "name": "Updated Item",
            "description": "Updated Description",
            "price": 200
        }
        ```

### 5. **DELETE /api/items/:id**
- **Description**: Delete an item by ID.
- **Response**:
    - Status: `204 No Content`

---

## How to Interact with the Backend

### Prerequisites
- Node.js installed on your system.
- A tool like Postman or cURL for testing API endpoints.

### Steps
1. Clone the repository:
     ```bash
     git clone <repository-url>
     ```
2. Navigate to the project directory:
     ```bash
     cd seatonView
     ```
3. Install dependencies:
     ```bash
     npm install
     ```
4. Start the server:
     ```bash
     npm start
     ```
5. Use Postman or cURL to interact with the API endpoints.

---

## Example cURL Commands

### Fetch all items
```bash
curl -X GET http://localhost:3000/api/items
```

### Fetch a specific item
```bash
curl -X GET http://localhost:3000/api/items/1
```

### Create a new item
```bash
curl -X POST http://localhost:3000/api/items \
-H "Content-Type: application/json" \
-d '{"name": "New Item", "description": "New Item Description", "price": 150}'
```

### Update an item
```bash
curl -X PUT http://localhost:3000/api/items/1 \
-H "Content-Type: application/json" \
-d '{"name": "Updated Item", "description": "Updated Description", "price": 200}'
```

### Delete an item
```bash
curl -X DELETE http://localhost:3000/api/items/1
```

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

