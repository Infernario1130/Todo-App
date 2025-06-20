# React Todo App (Vite)

A simple Todo app built with React and Vite. Users can add todos and view the list of existing todos fetched from a backend API.

---

## How to Run

1. **Install dependencies**  
```bash
npm install
Start the app
npm run dev
The app runs at http://localhost:5173
Backend API (Required)
Make sure you have a backend running at:
http://localhost:3000/todo
GET /todo should return:
{
  "Todo": [
    {
      "id": "1",
      "title": "Sample Todo",
      "description": "This is a sample task"
    }
  ]
}
POST /todo should accept:
{
  "id": "2",
  "title": "New Task",
  "description": "Do something important"
}
.gitignore (Important)
Make sure your .gitignore includes:
.env
.env.*
This keeps your private config safe.
Folder Structure
src/
├── App.jsx
├── TodoCreator.jsx
├── TodoRenderer.jsx
├── main.jsx
Done ✅
That’s it. The app should now work as expected.