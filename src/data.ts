import { Question } from './types';

export const questions: Question[] = [
  {
    id: 1,
    title: "JavaScript Question - Memoize",
    question: "Given a function fn, return a memoized version of that function. \nA memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value. \nYou can assume there are 3 possible input functions: sum, fib, and factorial. \nsum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.",
    answer: "function memoize(fn) {\n  const cache = new Map();\n\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n}"    
  },
  {
    id: 2,
    title: "Filtered Array",
    question: "Given an integer array arr and a filtering function fn, return a filtered array filteredArr. \nThe fn function takes one or two arguments: \narr[i] - number from the arr \ni - index of arr[i] \nfilteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true. \nPlease solve it without the built-in Array.filter method.",
    answer: "function filter(arr, fn) {\n  const filteredArr = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (fn(arr[i], i)) {\n      filteredArr.push(arr[i]);\n    }\n  }\n  return filteredArr;\n}"
  },
  {
    id: 3,
    title: "Create a simple Express server",
    question: "Write code to create an Express server that listens on port 3000 and has a single route '/' which returns 'Hello, World!'",
    answer: "const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello, World!');\n});\n\napp.listen(3000, () => console.log('Server started on port 3000'));"
  },
  {
    id: 4,
    title: "Create a POST route to register a user",
    question: "Write a POST endpoint '/register' that accepts 'email' and 'password' and returns them in response (assume JSON input).",
    answer: "app.use(express.json());\n\napp.post('/register', (req, res) => {\n  const { email, password } = req.body;\n  res.json({ email, password });\n});"
  },
  {
    id: 5,
    title: "Hash the password using bcrypt",
    question: "Modify the above '/register' endpoint to hash the password using bcrypt.",
    answer: "const bcrypt = require('bcrypt');\n\napp.post('/register', async (req, res) => {\n  const { email, password } = req.body;\n  const hashedPassword = await bcrypt.hash(password, 10);\n  res.json({ email, hashedPassword });\n});"
  },
  {
    id: 6,
    title: "Create a Mongoose User model",
    question: "Create a Mongoose model for User with fields: fullName, email, password, createdAt",
    answer: "const mongoose = require('mongoose');\nconst userSchema = new mongoose.Schema({\n  fullName: String,\n  email: { type: String, unique: true },\n  password: String,\n  createdAt: { type: Date, default: Date.now }\n});\n\nconst User = mongoose.model('User', userSchema);"
  },
  {
    id: 7,
    title: "Save a user to MongoDB",
    question: "Modify the register route to save the user in MongoDB.",
    answer: "app.post('/register', async (req, res) => {\n  const { fullName, email, password } = req.body;\n  const hashedPassword = await bcrypt.hash(password, 10);\n  const user = new User({ fullName, email, password: hashedPassword });\n  await user.save();\n  res.json({ message: 'User registered successfully' });\n});"
  },
  {
    id: 8,
    title: "Create a login route using JWT",
    question: "Implement '/login' endpoint that verifies user credentials and returns a JWT token.",
    answer: "const jwt = require('jsonwebtoken');\nconst JWT_SECRET = 'mysecret';\n\napp.post('/login', async (req, res) => {\n  const { email, password } = req.body;\n  const user = await User.findOne({ email });\n  if (!user) return res.status(404).json({ error: 'User not found' });\n  const isMatch = await bcrypt.compare(password, user.password);\n  if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });\n  const token = jwt.sign({ id: user._id }, JWT_SECRET);\n  res.json({ token });\n});"
  },
  {
    id: 9,
    title: "Create middleware to verify JWT",
    question: "Write a middleware function that verifies JWT and adds user info to req.user",
    answer: "function authMiddleware(req, res, next) {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'No token' });\n  try {\n    const decoded = jwt.verify(token, JWT_SECRET);\n    req.user = decoded;\n    next();\n  } catch (err) {\n    res.status(403).json({ error: 'Invalid token' });\n  }\n}"
  },
  {
    id: 10,
    title: "Create a protected route",
    question: "Create a GET '/me' route that returns user ID from the token using authMiddleware",
    answer: "app.get('/me', authMiddleware, (req, res) => {\n  res.json({ userId: req.user.id });\n});"
  },
  {
    id: 11,
    title: "Create a Post model",
    question: "Define a Post schema with title, content, author (user ID), and timestamps",
    answer: "const postSchema = new mongoose.Schema({\n  title: String,\n  content: String,\n  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }\n}, { timestamps: true });\n\nconst Post = mongoose.model('Post', postSchema);"
  },
  {
    id: 12,
    title: "Create a route to add a post",
    question: "Create a POST '/posts' route to create a post (authenticated user only)",
    answer: "app.post('/posts', authMiddleware, async (req, res) => {\n  const { title, content } = req.body;\n  const post = new Post({ title, content, author: req.user.id });\n  await post.save();\n  res.json(post);\n});"
  },
  {
    id: 13,
    title: "Get all posts for a user",
    question: "Create a GET '/myposts' route to return all posts by the authenticated user",
    answer: "app.get('/myposts', authMiddleware, async (req, res) => {\n  const posts = await Post.find({ author: req.user.id });\n  res.json(posts);\n});"
  },
  {
    id: 14,
    title: "Update a post by ID",
    question: "Create a PUT '/posts/:id' route that updates a post only if it belongs to the current user",
    answer: "app.put('/posts/:id', authMiddleware, async (req, res) => {\n  const post = await Post.findOneAndUpdate(\n    { _id: req.params.id, author: req.user.id },\n    req.body,\n    { new: true }\n  );\n  if (!post) return res.status(404).json({ error: 'Post not found or not yours' });\n  res.json(post);\n});"
  },
  {
    id: 15,
    title: "Delete a post",
    question: "Create a DELETE '/posts/:id' route to delete a post by ID only if owned by the user",
    answer: "app.delete('/posts/:id', authMiddleware, async (req, res) => {\n  const result = await Post.findOneAndDelete({ _id: req.params.id, author: req.user.id });\n  if (!result) return res.status(404).json({ error: 'Post not found or not yours' });\n  res.json({ message: 'Post deleted' });\n});"
  },
  {
    id: 16,
    title: "Add pagination to post list",
    question: "Modify GET '/posts' to support pagination with query params: page, limit",
    answer: "app.get('/posts', async (req, res) => {\n  const page = parseInt(req.query.page) || 1;\n  const limit = parseInt(req.query.limit) || 10;\n  const posts = await Post.find().skip((page - 1) * limit).limit(limit);\n  res.json(posts);\n});"
  },
  {
    id: 17,
    title: "Add a timestamp filter",
    question: "Modify '/posts' to allow filtering posts created after a given date via query param ?after=",
    answer: "app.get('/posts', async (req, res) => {\n  const { after } = req.query;\n  const filter = after ? { createdAt: { $gt: new Date(after) } } : {};\n  const posts = await Post.find(filter);\n  res.json(posts);\n});"
  },
  {
    id: 18,
    title: "Add request validation",
    question: "Add validation to the register endpoint to ensure email and password are provided",
    answer: "app.post('/register', async (req, res) => {\n  const { fullName, email, password } = req.body;\n  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });\n  const hashedPassword = await bcrypt.hash(password, 10);\n  const user = new User({ fullName, email, password: hashedPassword });\n  await user.save();\n  res.json({ message: 'User registered' });\n});"
  },
  {
    id: 19,
    title: "Prevent duplicate registration",
    question: "Modify the register route to check if the email is already registered",
    answer: "app.post('/register', async (req, res) => {\n  const { fullName, email, password } = req.body;\n  const existing = await User.findOne({ email });\n  if (existing) return res.status(400).json({ error: 'Email already registered' });\n  const hashedPassword = await bcrypt.hash(password, 10);\n  const user = new User({ fullName, email, password: hashedPassword });\n  await user.save();\n  res.json({ message: 'User registered' });\n});"
  },
  {
    id: 20,
    title: "Create a logout route",
    question: "Simulate a logout by returning a success response (no real token revocation)",
    answer: "app.post('/logout', authMiddleware, (req, res) => {\n  res.json({ message: 'Logged out (client should delete token)' });\n});"
  },
  {
    id: 21,
    title: "Handle MongoDB connection error",
    question: "Connect to MongoDB and log error if connection fails",
    answer: "mongoose.connect('mongodb://localhost:27017/test')\n  .then(() => console.log('MongoDB connected'))\n  .catch(err => console.error('MongoDB connection error:', err));"
  },
  {
    id: 22,
    title: "Add helmet for security headers",
    question: "Add helmet to your Express app for basic security",
    answer: "const helmet = require('helmet');\napp.use(helmet());"
  },
]; 