# 🔗 URL Shortener (MERN Stack)

A full-featured URL shortener built using the **MERN (MongoDB, Express, React, Node.js)** stack. Create short links, track click analytics, manage your links, and personalize your profile—all in one place.

## 🚀 Features

- 🔐 User Authentication (Register/Login)
- 📉 Click Tracking & Analytics
- 🌐 Custom Short URLs
- 📄 Pagination for links
- 📱 Fully responsive frontend

---

## 🛠️ Tech Stack

### Backend:
- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- bcrypt for password hashing

### Frontend:
- React (with Vite)
- React Router
- Axios
- Vanilla CSS (no Tailwind)
- Responsive Design

## ⚙️ Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Ashutosh-koli/url_short.git
cd url-short
```

### 2. Setup Backend
```bash
cd backend
npm install
```

- Create a `.env` file and add:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

- Start backend server:
```bash
npm run dev
```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

---

## ✅ Usage

1. Register an account or log in
2. Create a short URL by pasting a long one
3. View analytics on clicks
4. Manage, edit, or delete links
---

## 📸 Screenshots

> Add your screenshots in the `screenshots/` folder and reference them here:

```
![Dashboard Preview](screenshots/dashboard.png)
![Analytics](screenshots/analytics.png)
```

---

## 📦 API Endpoints

### Auth
- `POST /api/auth/register`
- `POST /api/auth/login`

### Links
- `POST /api/links/shorten`
- `GET /api/links/user`
- `GET /:shortId`

### User Profile
- `GET /api/user/profile`
- `PUT /api/user/profile`

---

## 🧑‍💻 Author

**Your Name**  
GitHub: [@yourusername](https://github.com/Ashutosh-koli)  
Email: ashutoshkoli568@gmail.com

---

## 📄 License

This project is licensed under the MIT License.
