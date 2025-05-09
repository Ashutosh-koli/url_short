const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB')
const authRoutes = require('./routes/auth.route');
const linkRoutes = require('./routes/link.route');
const redirectRoute = require('./routes/redirectRoute');

const cors = require('cors');
const userAgent = require("express-useragent");
const deviceType = require("./middlewares/deviceType");

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("trust proxy", true);
app.use(cors({
    origin: 'https://url-short-three-bice.vercel.app/login',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));



app.use(userAgent.express());
app.use(deviceType);
app.use('/', redirectRoute);
app.use('/api/user', authRoutes);
app.use('/api/links', linkRoutes);



const PORT = process.env.PORT || 8000;

connectDB().then(() => {
    app.listen(PORT, (err) => {
        if (err) {
            console.error(err);
        }
        console.log(`Server is running successfully on port: ${PORT}`);
    });
}).catch((err) => {
    console.error(err);
})
