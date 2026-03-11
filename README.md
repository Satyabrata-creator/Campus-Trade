# Campus-Trade
Learning MernStack


# Campus Trade Backend

A RESTful backend API for a **Campus Marketplace System** where students can list items for sale, upload images, and manage listings.

This backend is built using **Node.js, Express.js, MongoDB, and Multer** for file uploads.

---

## 🚀 Features

* User registration and management
* Create listings for items
* Upload images for listings
* Retrieve all listings with owner details
* Retrieve single listing details
* Update listing information
* Update listing image
* Delete listings
* MongoDB database integration
* Image storage using Multer

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Multer** (for image upload)
* **Postman** (API testing)
* **Git & GitHub**

---

## 📂 Project Structure

```
CAMPUS-TRADE
│
├── controllers
│     ├── listing.controller.js
│     └── user.controller.js
│
├── model
│     ├── listing.model.js
│     └── user.model.js
│
├── middleware
│     └── fileUpload.middleware.js
│
├── routers
│     ├── listing.router.js
│     └── user.router.js
│
├── uploads
│     └── (uploaded images stored here)
│
├── .env
├── package.json
└── server.js
```

---

## 📦 Installation

Clone the repository:

```
git clone https://github.com/yourusername/CAMPUS-TRADE.git
```

Navigate to the project folder:

```
cd CAMPUS-TRADE
```

Install dependencies:

```
npm install
```

---

## ▶️ Running the Server

Start the server:

```
npm start
```

Server runs on:

```
http://localhost:5000
```

---

## 📡 API Endpoints

### User APIs

| Method | Endpoint           | Description                   |
| ------ | ------------------ | ----------------------------- |
| POST   | `/users`           | Add a new user                |
| GET    | `/users`           | Retrieve all users            |
| GET    | `/users/:id`       | Retrieve user by ID           |
| GET    | `/users/diff/:sen` | Find user by email/mobile/SIC |
| PUT    | `/users/:id`       | Update user                   |
| DELETE | `/users/:id`       | Delete user                   |

---

### Listing APIs

| Method | Endpoint              | Description               |
| ------ | --------------------- | ------------------------- |
| POST   | `/listings`           | Add a listing with image  |
| GET    | `/listings`           | Retrieve all listings     |
| GET    | `/listings/:id`       | Retrieve a single listing |
| PUT    | `/listings/:id`       | Update listing details    |
| PUT    | `/listings/image/:id` | Update listing image      |
| DELETE | `/listings/:id`       | Delete a listing          |

---

## 📷 Image Upload

Images are uploaded using **Multer** and stored in:

```
uploads/
```

Images can be accessed via:

```
http://localhost:5000/uploads/<imageName>
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

---

## 🧪 API Testing

You can test the APIs using:

* **Postman**
* **Thunder Client**

---

## 📌 Future Improvements

* User authentication (JWT)
* Listing search & filters
* Image deletion on update
* Pagination
* Frontend integration (React)

---

## 👨‍💻 Author

Satyabrata Mohapatra

---

## 📄 License

This project is open-source and available for educational purposes.
