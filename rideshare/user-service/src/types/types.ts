export interface User {
    id: string
    email: string
    name: string
    role: 'rider' | 'driver' | 'admin'
    createdAt: Date
}

export interface RegisterBody {
    email: string
    name: string
    password: string
    role: 'rider' | 'driver' | 'admin'
}