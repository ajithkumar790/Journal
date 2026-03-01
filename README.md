# Journal of Academic Research - Website

A full-stack academic journal website built with React, Node.js, Express, and MongoDB.

## Features

- **Home Page**: Journal information, search functionality, upcoming events
- **Call for Papers**: Submission guidelines, important dates, indexing info
- **Editorial Board**: Editor profiles and board members
- **Guidelines**: Detailed author submission guidelines (2000+ words)
- **Submit**: Online submission form with email submission option
- **Current Issues**: Database-connected current issue display
- **Archives**: Volume/issue navigation with search functionality
- **Indexing**: List of indexing databases (Google Scholar, Web of Science, etc.)
- **Fees**: Publication charges and payment information
- **Reviewers**: Reviewer panel with profiles

## Tech Stack

- **Frontend**: React 18, React Router, Axios
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Styling**: CSS3

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (v4.4 or higher)
- npm or yarn

## Installation

1. Clone the repository
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. Install frontend dependencies:
   ```bash
   cd client
   npm install
   ```

## Running the Application

### Development Mode (Both frontend and backend)
```bash
npm run dev
```

### Running Backend Only
```bash
npm run server
```
Server runs on http://localhost:5000

### Running Frontend Only
```bash
npm run client
```
Client runs on http://localhost:3000

## MongoDB Setup

1. Install MongoDB Community Server
2. Start MongoDB service
3. Create a database named `journal_db`
4. Update the connection string in `.env` if needed

## Project Structure

```
journal-website/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Header, Footer, Sidebar
│   │   ├── pages/          # All page components
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   └── package.json
├── server/                 # Node.js backend
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API routes
│   ├── index.js
│   └── package.json
├── .env                    # Environment variables
├── package.json
└── README.md
```

## API Endpoints

- `GET /api/articles` - Get all articles
- `GET /api/articles/:id` - Get article by ID
- `POST /api/articles` - Create new article
- `GET /api/issues` - Get all issues
- `GET /api/issues/current` - Get current issue
- `GET /api/issues/volumes` - Get all volumes
- `GET /api/issues/:volume/:issue` - Get specific issue
- `GET /api/search?q=query` - Search articles

## Default Pages Navigation

All pages include:
- Header with search functionality
- Navigation buttons (Home, Call for Papers, Editorial Board, Guidelines, Submit, Current Issues, Archives, Index, Fees, Reviewers)
- Right sidebar with banner and upcoming events
- Footer with contact information

## Contact

- Email: kungumaraj@gmail.com
- Phone: +91 79045620167

## License

MIT License
