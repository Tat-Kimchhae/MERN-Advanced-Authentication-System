<h1 align="center">Advanced Auth Tutorial 🔒 </h1>

This project is a login application with secure email verification. It provides a complete authentication flow where users can:

- Register an account with their email and password

- Receive a verification email with a unique token link

- Verify their email address before gaining full access

- Login securely with JWT-based authentication

- Access protected routes only after successful verification

The app is designed with scalability and security in mind, using modern best practices such as hashed passwords, token-based verification, and middleware protection.

### Setup .env file

```bash
MONGO_URI=your_mongo_uri
PORT=5000
JWT_SECRET=your_secret_key
NODE_ENV=development

MAILTRAP_TOKEN=your_mailtrap_token
MAILTRAP_ENDPOINT=https://send.api.mailtrap.io/

CLIENT_URL= http://localhost:5173
```

### Run this app locally

```shell
npm run build
```

### Start the app

```shell
npm run start
```
## Demo

🚀 [Click here to view the live demo](https://mern-advanced-authentication-system-xolg.onrender.com/login)
