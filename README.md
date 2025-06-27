# MUI Practice – React + FastAPI Weight Converter

This is a full-stack web app that uses **React with Material UI** on the frontend and **FastAPI** on the backend. It lets users:

- Input their name and age
- View a summary card
- Convert weight between **kilograms and pounds**

---

## 🚀 Tech Stack

**Frontend:**
- React
- Material UI (MUI)

**Backend:**
- FastAPI
- Python
- Uvicorn (ASGI server)

---

## 📂 Project Structure

mui-practice/
├── backend/
│ ├── main.py # FastAPI backend logic
│ └── venv/ # Python virtual environment (should be gitignored)
├── public/
├── src/
│ ├── App.js # Main React component
│ └── index.js # Entry point
├── package.json
├── README.md
└── ... other files

yaml
Copy
Edit

---

## 🧪 Features

- ✅ Material UI AppBar and Tabs
- ✅ Snackbar and Alert for form feedback
- ✅ Summary card for user input
- ✅ Real-time weight conversion (kg ↔ lbs) using FastAPI
- ✅ Clean, beginner-friendly React layout

---

## 🧰 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/mui-practice.git
cd mui-practice
2. Install Frontend Dependencies
bash
Copy
Edit
npm install
3. Start the React Frontend
bash
Copy
Edit
npm start
4. Set Up the Backend
bash
Copy
Edit
cd backend
python -m venv venv               # Create virtual environment (optional but recommended)
venv\Scripts\activate             # Activate on Windows
# source venv/bin/activate        # Use this line instead on macOS/Linux

pip install fastapi uvicorn
5. Start the Backend Server
bash
Copy
Edit
uvicorn main:app --reload
The FastAPI server will be running on:
📡 http://127.0.0.1:8000

🌐 API Endpoints
POST /convert-to-lbs
Request:

json
Copy
Edit
{ "weight": 70 }
Response:

json
Copy
Edit
{ "pounds": 154.32 }
POST /convert-to-kg
Request:

json
Copy
Edit
{ "weight": 154 }
Response:

json
Copy
Edit
{ "kilograms": 69.85 }
✍️ Author
Made with ❤️ by Zainulabdin Bughio

📜 License
MIT – free to use, modify, and share. Credit appreciated.

yaml
Copy
Edit
