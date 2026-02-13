# Job Listing UI

## Live Demo

🔗 Deployed on Vercel:
https://cygnus-job-finder.vercel.app/

## Overview

This project is a **Job Listing User Interface** built using **React** and **Tailwind CSS**.
It allows users to browse, search, and filter job postings using a clean and responsive interface.

The application uses **mock data** and runs locally in the browser without any backend.

---

## Features

* Display a list of job postings
* Search jobs by title
* Filter jobs by:

  * Location
  * Job type
* Highlight searched keywords in job titles
* Responsive design for mobile and desktop
* Reusable and clean component structure

---

## Tech Stack

* React
* Tailwind CSS
* JavaScript (ES6+)

---

## Project Structure

```
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── Filter.jsx
│   ├── JobCard.jsx
│   └── JobList.jsx
│
├── pages/
│   └── Home.jsx
│
├── data/
│   └── jobs.js
│
├── App.jsx
└── main.jsx
```

---

## Job Object Structure

Each job follows this format:

```json
{
  "id": 1,
  "title": "Frontend Intern",
  "company": "Acme Corp",
  "location": "Remote",
  "type": "Internship"
}
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repository-link>
```

### 2. Navigate into the project folder

```bash
cd my-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser and go to:

```
http://localhost:5173
```

---

## Core Functionality

### Search

* Users can search jobs by title.
* Matching keywords are highlighted in job titles.

### Filtering

Users can filter jobs by:

* Location
* Job type

Multiple filters can be selected simultaneously.

---

---

## Assumptions

* Job data is static and stored locally as mock JSON.
* Only title-based search is required.
* Filters are applied on location and job type only.
* No backend or authentication is required for this task.

---

## Improvements With More Time

* Connect to a real backend API.
* Add job details page.
* Implement sorting (e.g., newest or highest paying).
* Add pagination or infinite scroll.
* Save/bookmark jobs feature.
* Add unit tests.
* Improve accessibility (ARIA labels, keyboard navigation).
* Add loading and empty state UI.

---

## Author

Your Name
GitHub: https://github.com/chandrasekhar-99
