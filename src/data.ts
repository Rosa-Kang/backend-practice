import { Question } from './types';

export const questions: Question[] = [
  {
    id:0,
    title: "JavaScript & React - REST API",
    question: "Give a simple case of data fetching in React App. Say it as an example of REST API data fetching",
    answer: "import { useState, useEffect } from 'react'; \n export default function App() {\n   const [advice, setAdvice] = useState('');\n   const fetchAdvice = async () => {\n    try {\n      const res = await axios.get('https://api.adviceslip.com/advice');\n      setAdvice(res.data.slip.advice);\n    } catch (error) {\n       console.error('Error fetching advice:', error);\n    }\n   };\n   useEffect(() => {\n   fetchAdvice();\n   }, []); \n   return \n       <div className='app'>\n         <div className='card'> \n           <h1 className='heading'>{advice}</h1> \n           <button className='button' onClick={fetchAdvice}>\n            <span>GIVE ME ADVICE!</span>\n           </button>\n         </div> \n       </div> \n     ); \n   }",
    topic: "React API fetch with axios"
  },
  {
    id: 1,
    title: "JavaScript Question - Counter",
    question: "Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).",
    answer: "var createCounter = function(n) {\n   let count = 0;\n    return function() {\n     const result = n + count;\n     count ++;\n     return result;\n     };\n};\n \nor, \n \nvar createCounter = function(n) {\n   let counter = n;\n   return function() {\n     return counter++;\n   };\n};",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 2,
    title: "JavaScript Question - CounterII",
    question: "Write a function createCounter. It should accept an initial integer init. It should return an object with three functions. The three functions are:increment() increases the current value by 1 and then returns it. decrement() reduces the current value by 1 and then returns it. reset() sets the current value to init and then returns it.",
    answer: "var createCounter = function(init) {\n   let curr = init;\n   return {\n     increment: () =>  ++curr,\n     decrement: () =>  --curr,\n     reset: () => (curr = init),\n   }\n};",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 3,
    title: "JavaScript Question - Memoize",
    question: "Given a function fn, return a memoized version of that function. \nA memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value. \nYou can assume there are 3 possible input functions: sum, fib, and factorial. \nsum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.",
    answer: "function memoize(fn) {\n  const cache = new Map();\n\n  return function(...args) {\n    const key = JSON.stringify(args);\n    if (cache.has(key)) return cache.get(key);\n    const result = fn(...args);\n    cache.set(key, result);\n    return result;\n  };\n}",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 4,
    title: "JavaScript Question - Filtered Array",
    question: "Given an integer array arr and a filtering function fn, return a filtered array filteredArr. \nThe fn function takes one or two arguments: \narr[i] - number from the arr \ni - index of arr[i] \nfilteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true. \nPlease solve it without the built-in Array.filter method.",
    answer: "function filter(arr, fn) {\n  const filteredArr = [];\n  for (let i = 0; i < arr.length; i++) {\n    if (fn(arr[i], i)) {\n      filteredArr.push(arr[i]);\n    }\n  }\n  return filteredArr;\n}",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 5,
    title: "JavaScript Question - Array Reduce Transformation",
    question: "Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element. \nThis result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned. \nIf the length of the array is 0, the function should return init. \nPlease solve it without using the built-in Array.reduce method.",
    answer: "var reduce = function(nums, fn, init) {\n  for (let i = 0; i < nums.length; i++) {\n    init = fn(init, nums[i]);\n  }\n  return init;\n};",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 6,
    title: "JavaScript Question - Function Composition",
    question: "Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions. The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).",
    answer: "var compose = function(functions) { \n   let length = functions.length; \n   return function(x) { \n   for(let i=length-1; i>=0; i--) { \n   x = functions[i](x);\n } \n   return x;\n   }\n };",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 7,
    title: "JavaScript Question - Allow One Function Call",
    question: "Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once. \nThe first time the returned function is called, it should return the same result as fn. \nEvery subsequent time it is called, it should return undefined.",
    answer: "var once = function(fn) {\n    let called = false;\n    return function(...args){\n        if(!called) {\n            called = true;\n            return fn(...args);\n        } else {\n            return undefined;\n        }\n    }\n};",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 8,
    title: "JavaScript Question - Sleep",
    question: "Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.",
    answer: "async function sleep(millis) {\n    return new Promise((resolve, reject) => {\n    setTimeout(()=>{\n     resolve();\n       }, millis);\n });",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 9,
    title: "JavaScript Question - Timeout Cancellation",
    question: "Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.\nAfter a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.\nInitially, the execution of the function fn should be delayed by t milliseconds.\n \nIf, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.",
    answer: "var cancellable = function(fn, args, t) {\n  //setTimeout function returns an id, let's save it. \n   const id = setTimeout(()=> fn(...args), t)\n\n  //clearTimeout function can use the id to clear setTimeout \n   const cancelFn = () => clearTimeout(id);\n\n   return cancelFn;\n};",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 10,
    title: "JavaScript Question - Interval Cancellation",
    question: "Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn. After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.",
    answer: "var cancellable = function(fn, args, t) {\n   fn(...args);\n\n   const id = setInterval(()=>fn(...args), t);\n\n   const cancelFn = () => {\n      clearInterval(id)\n    }\n  return cancelFn;\n};\n\n Or,\n\nvar cancellable = function(fn, args, t) {\n    fn(...args);\n    const interval = setInterval(()=>{fn(...args)},t);\n    return ()=> clearInterval(interval);\n};",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 11,
    title: "JavaScript Question - Promise Time Limit",
    question: "Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function. The time limited function should follow these rules: If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result. If the execution of the fn exceeds the time limit, the time limited function should reject with the string 'Time Limit Exceeded'.",
    answer: "const timeLimit = (fn, t) => {\n   return async (...args) => {\n     return Promise.race([\n       fn(...args),\n       new Promise((_, reject) => setTimeout(() => reject('Time Limit Exceeded'), t))\n     ]);\n   };\n };\n\n\n#Promise 와 Promise.race 이론#\n\nconst p1 = new Promise((res, rej) => setTimeout(() => rej('🔥 에러!'), 500));\nconst p2 = new Promise((res) => setTimeout(() => res('✅ 성공'), 1000))\nPromise.race([p1, p2])\n  .then(console.log)\n  .catch(console.error); ",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 12,
    title: "JavaScript Question - Cache with Time Limit",
    question: "Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key. The class has three public methods: set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists. get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1. count(): returns the count of un-expired keys.",
    answer: "\nclass TimeLimitedCache {\n   constructor() {\n     this.store = new Map();\n   }\n\n  set(key, value, duration) {\n      const currentTime = Date.now();\n      const isExisting = this.store.has(key) && this.store.get(key).expiryTime > currentTime;\n      const expiryTime = currentTime + duration;\n      this.store.set(key, { value, expiryTime });\n      return isExisting;\n      }\n\n  get(key) {\n   const currentTime = Date.now();\n   if (this.store.has(key)) {\n      const { value, expiryTime } = this.store.get(key);\n      if (expiryTime > currentTime) {\n        return value;\n      }\n   }\n   return -1;\n   }\n\n  count() {\n   const currentTime = Date.now();\n   let count = 0;\n   for (const { expiryTime } of this.store.values()) {\n      if (expiryTime > currentTime) {\n        count++;\n      }\n   }\n   return count;\n   }\n}\n\n  OR,\n\nfunction TimeLimitedCache() {\n  this.store = new Map();\n}\n\nTimeLimitedCache.prototype.set = function(key, value, duration) {\n   const currentTime = Date.now();\n   const isExisting = this.store.has(key) && this.store.get(key).expiryTime > currentTime;\n   const expiryTime = currentTime + duration;\n   this.store.set(key, { value, expiryTime });\n   return isExisting;\n};\n\nTimeLimitedCache.prototype.get = function(key) {\n   const currentTime = Date.now();\n   if (this.store.has(key)) {\n   const { value, expiryTime } = this.store.get(key);\n   if (expiryTime > currentTime) {\n   return value;\n   }\n  }\n   return -1;\n};\n\nTimeLimitedCache.prototype.count = function() {\n    const currentTime = Date.now();\n    let count = 0;\n    for (const { expiryTime } of this.store.values()) {\n     if (expiryTime > currentTime) {\n     count++;\n     }\n    }\n  return count;\n};\n",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 13,
    title: "JavaScript Question - Debounce (반동제어)",
    question: "Given a function fn and a time in milliseconds t, return a debounced version of that function. A debounced function is a function whose execution is delayed by t milliseconds and whose execution is cancelled if it is called again within that window of time. The debounced function should also receive the passed parameters. For example, let's say t = 50ms, and the function was called at 30ms, 60ms, and 100ms. The first 2 function calls would be cancelled, and the 3rd function call would be executed at 150ms. If instead t = 35ms, The 1st call would be cancelled, the 2nd would be executed at 95ms, and the 3rd would be executed at 135ms.",
    answer: "const debounce = (fn, t) => {\n   let timeoutId;\n   return (...args) => {\n         clearTimeout(timeoutId);\n         timeoutId = setTimeout(() => fn(...args), t);\n    };\n};",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 14,
    title: "JavaScript Question - Execute Asynchronous Function",
    question: "Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.",
    answer: "var promiseAll = function(functions) {\n    let promises = functions.map((fn)=> fn())\n   return Promise.all(promises);\n };",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 15,
    title: "JavaScript Question - Is Object Empty",
    question: "Given an object or an array, return if it is empty. An empty object contains no key-value pairs. An empty array contains no elements. You may assume the object or array is the output of JSON.parse.",
    answer: "var isEmpty = function(obj) {\n   if(Array.isArray(obj)) {\n     return obj.length === 0;\n   } else {\n     return Object.keys(obj).length === 0;\n   }\n}\n\nOR,\n\nvar isEmpty = function(obj) {\n   if (Object.keys(obj).length === 0){\n     return true;\n   }\n  return false;\n}",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 16,
    title: "JavaScript Question - Chunk Array",
    question: "Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size. You may assume the array is the output of JSON.parse. In other words, it is valid JSON. Please solve it without using lodash's _.chunk function.",
    answer: "var chunk = function(arr, size) {\n   let subArr = [];\n   for(let i=0; i < arr.length; i+=size) {\n     subArr.push(arr.slice(i, i+size))\n   }\n  return subArr;\n};",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 17,
    title: "JavaScript Question - Array Prototype Last",
    question: "Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1. You may assume the array is the output of JSON.parse.",
    answer: "Array.prototype.last = function() {\n   return this.length === 0 ? -1 : this[this.length - 1];\n };",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 18,
    title: "JavaScript Question - Group By",
    question: "Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array. A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array which generate that key. The provided callback fn will accept an item in the array and return a string key. The order of each value list should be the order the items appear in the array. Any order of keys is acceptable. Please solve it without lodash's _.groupBy function.",
    answer: "Array.prototype.groupBy = function(fn) {\n //grouped(array) is an object where each key is the output of fn(arr[i])\n //item is the item inside this array\n  return this.reduce((grouped, item) => {\n     let key = fn(item);\n     if(!grouped[key]) grouped[key] = [];\n     grouped[key].push(item);\n     return grouped;\n  } , {})\n};",
    topic: "JavaScript Fundamentals"
  },
   {
    id: 19,
    title: "JavaScript Question - Sort By",
    question: "Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.  You may assume that fn will never duplicate numbers for a given array.",
    answer: "var sortBy = function(arr, fn) {\n   return arr.slice().sort((a,b) => fn(a) - fn(b));\n };",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 20,
    title: "JavaScript Question - Join Two Arrays By ID",
    question: "Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key. If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification. If two objects share an id, their properties should be merged into a single object: If a key only exists in one object, that single key-value pair should be included in the object. If a key is included in both objects, the value in the object from arr2 should override the value from arr1",
    answer: "var join = function(arr1, arr2) {\n   const map = new Map();\n\n   for(const obj of arr1) {\n     map.set(obj.id, {...obj});\n  }\n\n   for(const obj of arr2) {\n   if(map.has(obj.id)){\n      map.set(obj.id, {...map.get(obj.id), ...obj})\n   } else {\n      map.set(obj.id, {...obj})\n   }\n }\n  return Array.from(map.values()).sort((a,b) => a.id - b.id)\n};",
    topic: "JavaScript Fundamentals"
  },
   {
    id: 21,
    title: "JavaScript Question - Recursive Function/Deeply Nested Array",
    question: "Given a multi-dimensional array arr and a depth n, return a flattened version of that array. A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays. A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0. Please solve it without the built-in Array.flat method.",
    answer: "var flat = function (arr, n) {\n   if(n<=0) return arr;\n   const result = [];\n   for(const item of arr) {\n     if(Array.isArray(item) && n>0) {\n        result.push(...flat(item, n-1));\n     } else {\n       result.push(item)\n       }\n    }\n   return result;\n};",
    topic: "JavaScript Fundamentals"
  },
 {
    id: 22,
    title: "JavaScript Question - Compact Object",
    question: "Given an object or array obj, return a compact object.  A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false. You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.",
    answer: "var compactObject = function(obj) {\n  if (obj === null || obj === 0 || obj === false || obj === "") return null;\n\n  if (Array.isArray(obj)) return obj.map(compactObject).filter(val => val !== null);\n\n  if (typeof obj === 'object') {\n     return Object.fromEntries(\n       Object.entries(obj)\n         .map(([k, v]) => [k, compactObject(v)])\n         .filter(([_, v]) => v !== null)\n     );\n}\n\nreturn obj;\n};",
    topic: "JavaScript Fundamentals"
  },
  {
    id: 1,
    title: "Create a simple Express server",
    question: "Write code to create an Express server that listens on port 3000 and has a single route '/' which returns 'Hello, World!'",
    answer: "const express = require('express');\n const app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello, World!');\n});\n\napp.listen(3000, () => console.log('Server started on port 3000'));",
    topic: "Express Server Basics"
  },
  {
    id: 2,
    title: "Create a POST route to register a user",
    question: "Write a POST endpoint '/register' that accepts 'email' and 'password' and returns them in response (assume JSON input).",
    answer: "app.use(express.json());\n app.post('/register', (req, res) => {\n  const { email, password } = req.body;\n  res.json({ email, password });\n});",
    topic: "Express Server Basics"
  },
  {
    id: 1,
    title: "Hash the password using bcrypt",
    question: "Modify the above '/register' endpoint to hash the password using bcrypt.",
    answer: "const bcrypt = require('bcrypt');\n\napp.post('/register', async (req, res) => {\n  const { email, password } = req.body;\n  const hashedPassword = await bcrypt.hash(password, 10);\n  res.json({ email, hashedPassword });\n});",
    topic: "Authentication & Security"
  },
  {
    id: 2,
    title: "Create a login route using JWT",
    question: "Implement '/login' endpoint that verifies user credentials and returns a JWT token.",
    answer: "const jwt = require('jsonwebtoken');\nconst JWT_SECRET = 'mysecret';\n\napp.post('/login', async (req, res) => {\n  const { email, password } = req.body;\n  const user = await User.findOne({ email });\n  if (!user) return res.status(404).json({ error: 'User not found' });\n  const isMatch = await bcrypt.compare(password, user.password);\n  if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });\n  const token = jwt.sign({ id: user._id }, JWT_SECRET);\n  res.json({ token });\n});",
    topic: "Authentication & Security"
  },
  {
    id: 3,
    title: "Create middleware to verify JWT",
    question: "Write a middleware function that verifies JWT and adds user info to req.user",
    answer: "function authMiddleware(req, res, next) {\n  const token = req.headers.authorization?.split(' ')[1];\n  if (!token) return res.status(401).json({ error: 'No token' });\n  try {\n    const decoded = jwt.verify(token, JWT_SECRET);\n    req.user = decoded;\n    next();\n  } catch (err) {\n    res.status(403).json({ error: 'Invalid token' });\n  }\n}",
    topic: "Authentication & Security"
  },
  {
    id: 4,
    title: "Create a protected route",
    question: "Create a GET '/me' route that returns user ID from the token using authMiddleware",
    answer: "app.get('/me', authMiddleware, (req, res) => {\n  res.json({ userId: req.user.id });\n});",
    topic: "Authentication & Security"
  },
  {
    id: 1,
    title: "Create a Mongoose User model",
    question: "Create a Mongoose model for User with fields: fullName, email, password, createdAt",
    answer: "const mongoose = require('mongoose');\nconst userSchema = new mongoose.Schema({\n  fullName: String,\n  email: { type: String, unique: true },\n  password: String,\n  createdAt: { type: Date, default: Date.now }\n});\n\nconst User = mongoose.model('User', userSchema);",
    topic: "Database & Models"
  },
  {
    id: 2,
    title: "Save a user to MongoDB",
    question: "Modify the register route to save the user in MongoDB.",
    answer: "app.post('/register', async (req, res) => {\n  const { fullName, email, password } = req.body;\n  const hashedPassword = await bcrypt.hash(password, 10);\n  const user = new User({ fullName, email, password: hashedPassword });\n  await user.save();\n  res.json({ message: 'User registered successfully' });\n});",
    topic: "Database & Models"
  },
  {
    id: 3,
    title: "Create a Post model",
    question: "Define a Post schema with title, content, author (user ID), and timestamps",
    answer: "const postSchema = new mongoose.Schema({\n  title: String,\n  content: String,\n  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }\n}, { timestamps: true });\n\nconst Post = mongoose.model('Post', postSchema);",
    topic: "Database & Models"
  },
  {
    id: 1,
    title: "Create a route to add a post",
    question: "Create a POST '/posts' route to create a post (authenticated user only)",
    answer: "app.post('/posts', authMiddleware, async (req, res) => {\n  const { title, content } = req.body;\n  const post = new Post({ title, content, author: req.user.id });\n  await post.save();\n  res.json(post);\n});",
    topic: "CRUD Operations"
  },
  {
    id: 2,
    title: "Get all posts for a user",
    question: "Create a GET '/myposts' route to return all posts by the authenticated user",
    answer: "app.get('/myposts', authMiddleware, async (req, res) => {\n  const posts = await Post.find({ author: req.user.id });\n  res.json(posts);\n});",
    topic: "CRUD Operations"
  },
  {
    id: 3,
    title: "Update a post by ID",
    question: "Create a PUT '/posts/:id' route that updates a post only if it belongs to the current user",
    answer: "app.put('/posts/:id', authMiddleware, async (req, res) => {\n  const post = await Post.findOneAndUpdate(\n    { _id: req.params.id, author: req.user.id },\n    req.body,\n    { new: true }\n  );\n  if (!post) return res.status(404).json({ error: 'Post not found or not yours' });\n  res.json(post);\n});",
    topic: "CRUD Operations"
  },
  {
    id: 4,
    title: "Delete a post",
    question: "Create a DELETE '/posts/:id' route to delete a post by ID only if owned by the user",
    answer: "app.delete('/posts/:id', authMiddleware, async (req, res) => {\n  const result = await Post.findOneAndDelete({ _id: req.params.id, author: req.user.id });\n  if (!result) return res.status(404).json({ error: 'Post not found or not yours' });\n  res.json({ message: 'Post deleted' });\n});",
    topic: "CRUD Operations"
  },
  {
    id: 1,
    title: "Add pagination to post list",
    question: "Modify GET '/posts' to support pagination with query params: page, limit",
    answer: "app.get('/posts', async (req, res) => {\n  const page = parseInt(req.query.page) || 1;\n  const limit = parseInt(req.query.limit) || 10;\n  const posts = await Post.find().skip((page - 1) * limit).limit(limit);\n  res.json(posts);\n});",
    topic: "Advanced Features"
  },
  {
    id: 2,
    title: "Add a timestamp filter",
    question: "Modify '/posts' to allow filtering posts created after a given date via query param ?after=",
    answer: "app.get('/posts', async (req, res) => {\n  const { after } = req.query;\n  const filter = after ? { createdAt: { $gt: new Date(after) } } : {};\n  const posts = await Post.find(filter);\n  res.json(posts);\n});",
    topic: "Advanced Features"
  },
  {
    id: 3,
    title: "Add request validation",
    question: "Add validation to the register endpoint to ensure email and password are provided",
    answer: "app.post('/register', async (req, res) => {\n  const { fullName, email, password } = req.body;\n  if (!email || !password) return res.status(400).json({ error: 'Email and password required' });\n  const hashedPassword = await bcrypt.hash(password, 10);\n  const user = new User({ fullName, email, password: hashedPassword });\n  await user.save();\n  res.json({ message: 'User registered' });\n});",
    topic: "Advanced Features"
  },
  {
    id: 4,
    title: "Prevent duplicate registration",
    question: "Modify the register route to check if the email is already registered",
    answer: "app.post('/register', async (req, res) => {\n  const { fullName, email, password } = req.body;\n  const existing = await User.findOne({ email });\n  if (existing) return res.status(400).json({ error: 'Email already registered' });\n  const hashedPassword = await bcrypt.hash(password, 10);\n  const user = new User({ fullName, email, password: hashedPassword });\n  await user.save();\n  res.json({ message: 'User registered' });\n});",
    topic: "Advanced Features"
  },
  {
    id: 5,
    title: "Create a logout route",
    question: "Simulate a logout by returning a success response (no real token revocation)",
    answer: "app.post('/logout', authMiddleware, (req, res) => {\n  res.json({ message: 'Logged out (client should delete token)' });\n});",
    topic: "Advanced Features"
  },
  {
    id: 6,
    title: "Handle MongoDB connection error",
    question: "Connect to MongoDB and log error if connection fails",
    answer: "mongoose.connect('mongodb://localhost:27017/test')\n  .then(() => console.log('MongoDB connected'))\n  .catch(err => console.error('MongoDB connection error:', err));",
    topic: "Advanced Features"
  },
  {
    id: 7,
    title: "Add helmet for security headers",
    question: "Add helmet to your Express app for basic security",
    answer: "const helmet = require('helmet');\napp.use(helmet());",
    topic: "Advanced Features"
  }
]; 
