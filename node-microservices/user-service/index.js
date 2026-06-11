// import express from "express"
// import mongoose from "mongoose"
// import bodyParser from "body-parser"

// const app = express()
// const PORT = 3001

// app.use(bodyParser.json())
// app.use(express.json())

// mongoose.connect('mongodb://localhost:27017/users').then(() => console.log('Connected to MongoDB')).catch(err => console.error('Could not connect to MongoDB', err))  

// const userSchema = new mongoose.Schema({
//    name: String,
//    email: String
// })

// const User = mongoose.model('User', userSchema);

// app.post('/users', async (req, res) => {
//    const {name, email} = req.body;

//    try {
//       const user = new User({ name, email });
//       await user.save();
//       res.status(201).json(user);

//    } catch (error) {
//       console.error('Error creating user:', error);
//       res.status(500).json({ message: 'Internal server error' });
//    }
// })

// app.get('/', (req, res) => {
//   res.json({ message: 'Hello, World!' })
// })

// app.listen(PORT, () => {
//    console.log(`User service is running on port ${PORT}`)
// });
import express from "express";

const app = express();

app.post("/users", (req, res) => {
    res.json({ message: "working" });
});

app.listen(3001, () => {
    console.log("running");
});