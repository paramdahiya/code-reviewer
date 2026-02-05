# CodeMuse - AI-Powered Code Reviewer

An intelligent code review tool powered by Google's Gemini AI. Submit your code and get instant, actionable feedback on bugs, performance issues, code style, and best practices.

**Live Demo:** [https://frontend-nine-peach-28.vercel.app/](https://frontend-nine-peach-28.vercel.app/)

---

## Features

✨ **AI-Powered Code Analysis**
- Detects bugs and logic errors
- Identifies performance issues
- Checks code style and readability
- Suggests security improvements
- Provides actionable recommendations
- corrects the original code in the editor itself

🎨 **Modern User Interface**
- Clean, intuitive design with dark theme
- Syntax-highlighted code editor (Monaco Editor)
- Real-time feedback display
- Responsive design (desktop and mobile)

🔒 **Smart Input Validation**
- Detects empty code submissions
- Validates that input is actual code
- Prevents API abuse with clear error messages

⚡ **Fast & Reliable**
- Instant AI analysis (2-5 seconds)
- Graceful error handling
- Loading states with visual feedback

🌐 **Multi-Language Support**
- JavaScript, Python, Java, C++, TypeScript, and more
- Auto-detected or user-selected language

---

## Tech Stack

### Frontend
- **React** - UI framework
- **Tailwind CSS** - Styling and responsive design
- **Monaco Editor** - Code editor with syntax highlighting
- **Axios** - HTTP requests
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime
- **Express.js** - Web framework
- **Google Gemini 2.0 Flash** - AI model for code analysis
- **Zod** - Schema validation
- **CORS** - Cross-origin resource sharing

### Deployment
- **Vercel** - Frontend and backend hosting

---

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Google Gemini API key ([Get one here](https://ai.google.dev/))

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/yourusername/codemuse.git
cd codemuse
```

**2. Set up Backend:**
```bash
cd backend
npm install
```

Create `.env` file:
```
API_KEY=your_gemini_api_key_here
SERVER_PORT=8000
```

**3. Set up Frontend:**
```bash
cd ../frontend
npm install
```

Create `.env.local` file:
```
VITE_SERVER_API_URL=http://localhost:8000
```

**4. Run locally:**

Terminal 1 (Backend):
```bash
cd backend
npm start
```

Terminal 2 (Frontend):
```bash
cd frontend
npm run dev
```

Visit `http://localhost:5173`

---

## How It Works

### User Flow
1. User selects programming language
2. Pastes code into the editor
3. Clicks "Review Code"
4. Backend sends code to Gemini AI with system instructions
5. AI analyzes code and returns structured JSON response
6. Frontend displays results with categorized issues

### API Endpoint

**POST `/api/get-response`**

Request:
```json
{
  "code": "function hello() { console.log('world'); }",
  "language": "javascript"
}
```

Response:
```json
{
  "issuesFound": 0,
  "criticalIssues": 0,
  "score": 95,
  "bugs": [],
  "performanceIssues": []
}
```

### AI System Prompt

The backend uses a carefully crafted system prompt to ensure consistent, high-quality code reviews:

```
You are a senior developer with 7+ years of experience. Review the code
in terms of functionality, quality and readability. Identify the total number of issues which is
equal to the sum of critical issues, performance issues and general info.For each issue provide a short description. Finally, give a score out of 100 to express how good the code is overall and also give the 
correct version of the code.Make sure that the descriptions are concise and only give the most relevant description.Additionally, give any general information related to the code based on coding practices and industry standards. Return the response in the following manner: {rating: number, code: string, issues: total number of issues found, criticalIssues: number of critical issues,bugs:[{desc: string}], performanceIssues:[{desc:string}], generalInfo: [ {desc:string} ]}. If you recieve something that is not a code snippet or any other input which is not a code return an empty json {}.
```

---

## Features Explained

### Error Handling

**Empty Code Detection:**
- Prevents submission of empty code
- Shows user-friendly error message

**Non-Code Input Validation:**
- Checks if input is actual code
- Rejects gibberish or natural language
- Provides feedback to user

**API Error Handling:**
- Graceful fallback on API failures
- Loading states during processing
- Timeout handling for slow responses

### Code Review Categories

| Category | Example | Severity |
|----------|---------|----------|
| **Bugs** | Missing null checks, logic errors | Critical |
| **Performance** | Inefficient loops, O(n²) algorithms | Warning |
| **Style** | Naming conventions, formatting | Info |
| **Security** | SQL injection risk, unsafe operations | Critical |
| **Best Practices** | Use const over var, error handling | Info |

---

## Project Structure

```
codemuse/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Bug.jsx
│   │   │   └── Card.jsx
|   |   |   └── EmptyReview.jsx
|   |   |   └── Error.jsx
|   |   |   └── Header.jsx
|   |   |   └── Info.jsx
|   |   |   └── Loader.jsx
|   |   |   └── PerformanceBug.jsx
|   |   |   └── Review.jsx
|   |   |   └── ReviewLoader.jsx
|   |   |   └── ReviewSummary.jsx
│   │   ├── App.jsx
│   │   └── index.css
│   │   └── main.jsx
│   ├── .env.local
│   └── package.json
│
├── backend/
│   ├── controller/
│   │   └── app.controller.js
│   ├── routes/
│   │   └── app.route.js
│   ├── services/
│   │   └── ai.service.js
│   ├── src/
│   │   └── app.js
│   ├── index.js
│   ├── .env
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## Environment Variables

### Backend (.env)
```
API_KEY=your_api_key_here
SERVER_PORT=8000
NODE_ENV=production
```

### Frontend (.env.local)
```
VITE_SERVER_API_URL=http://localhost:8000
```

---

## Usage Examples

### JavaScript Code Review
```javascript
function getData(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
```

**AI Feedback:**
- Use `for...of` or `forEach` instead of traditional loop
- Consider early return for performance
- Add input validation

### Python Code Review
```python
def calculate_sum(numbers):
  total = 0
  for num in numbers:
    total = total + num
  return total
```

**AI Feedback:**
- Use Python's built-in `sum()` function
- Add type hints
- Add docstring

---

## Future Improvements

- [ ] User authentication and review history
- [ ] Shareable review links
- [ ] Batch code file uploads
- [ ] GitHub integration for real repository reviews
- [ ] Custom review templates
- [ ] Team collaboration features
- [ ] API rate limiting and usage analytics

---

## Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Troubleshooting

### 503 Service Unavailable
- Check your `REACT_APP_SERVER_URL` is correct
- Verify backend is deployed on Vercel
- Check Vercel logs for errors

### Syntax Highlighting Not Working
Make sure Monaco Editor is installed:
```bash
npm install @monaco-editor/react
```

### Gemini API Errors
- Verify your API key in `.env`
- Check API rate limits
- Ensure you have Gemini 2.0 Flash access

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## Author

**Param Dahiya**
- GitHub: [@paramdahiya](https://github.com/paramdahiya)
- LinkedIn: [param-dahiya](https://linkedin.com/in/param-dahiya)

---

## Acknowledgments

- Google Gemini AI for powerful code analysis
- Monaco Editor for excellent code editing experience
- Vercel for seamless deployment
- The open-source community for amazing tools

---

## Support

Found a bug or have a feature request? 
- Open an [issue](https://github.com/paramdahiya/codemuse/issues)
- Check existing issues first

---

**Built with ❤️ for developers, by a developer**
