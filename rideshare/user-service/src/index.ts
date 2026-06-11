import e from "express";
import type { RegisterBody, User } from "./types/types.js";
// import express from "express";
 
const app = e();
const PORT = 3001

app.use(e.json())

const users: User[] = [];

app.get('/health', (_req, res) => {
    res.json({ status: 'ok', service: 'user-service' })
})

app.post('/register', (req, res) => {
    const body = req.body as RegisterBody;

    if (!body.email || !body.name || !body.password || !body.role) {
        res.status(400).json({ error: 'All fields are required' })
        return;
    }

    const existingUser = users.find(user => user.email === body.email);
    if (existingUser) {
        res.status(409).json({ error: 'Email already in use' })
        return
    }

    const newUser: User = {
        id: crypto.randomUUID(),
        email: body.email,
        name: body.name,
        role: body.role,
        createdAt: new Date()
    }
    users.push(newUser)

    res.status(201).json({ user: newUser })
})


app.listen(PORT, () => {
    console.log(`User service is running on port ${PORT}`)
})