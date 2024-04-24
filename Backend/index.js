

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const authRouter = require('./routes/auth');
const cookieParser=require('cookie-parser')
const userRouter = require('./routes/users')
const path = require("path")
const multer = require('multer')
const cors = require('cors');
const postsRouter = require('./routes/posts')
const commentsRouter = require('./routes/comments')
dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Database connection 
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Database Connection Successful");
    } catch (error) {
        console.error("Database Connection Error:", error);
        process.exit(1); // Exit the application on connection error
    }
}
// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGO_URL);
//         console.log("Database Connection Successful");
//     } catch (error) {
//         console.error("Database Connection Error:", error);
//         process.exit(1); // Exit the application on connection error
//     }
// }

// Connect to database before starting server
connectDB();

// Route for authentication
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173",credentials:true}))
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);


// ImageUpload

const storage = multer.diskStorage({
    destination: (req, file, fn) => {
        fn(null, "images");
    },
    filename: (req, file, fn) => {
        fn(null, req.body.img)
        // fn(null, "image1.jpg");
    }
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("file"), (req, res) => {
    // console.log(req.body);
    res.status(200).json("Image has been uploaded successfully!");
});



const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});