# K-Buddy

K-Buddy is a responsive landing page prototype for a Seoul-based mini travel buddy service for international travelers.

> Choose one Seoul experience, find a traveler with the same schedule and interests, and confirm a short meetup at a public place.

## Project Status

This repository contains the Mission 5 landing page baseline, planning documents, design system, and accessible interaction requirements.

## Live Demo

Vercel deployment URL: `TBD`

## Core Concept

K-Buddy is not designed around browsing strangers first. Users begin with a specific Seoul experience such as a Seongsu cafe walk, Myeongdong beauty shopping, a Hongdae K-pop route, or a Han River picnic.

The MVP user flow is:

`Travel conditions -> Buddy plans -> Plan details -> Minimal profile -> Join request -> Meetup confirmation`

## Key Features

- Semantic HTML structure
- Responsive mobile, tablet, and desktop layouts
- Liquid-glass and pastel visual system
- Mobile navigation toggle
- Smooth section navigation
- Scroll reveal animation
- Experience card hover and keyboard focus states
- Accessible buddy-search dialog
- Sample matching feedback
- Reduced-motion support

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Vercel

## Project Structure

```text
K-Buddy/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── logo.svg
├── docs/
│   ├── working-skeleton.md
│   ├── wireframe-spec.md
│   ├── implementation-requirements.md
│   ├── design-system.md
│   └── competitor-and-risk-analysis.md
├── README.md
└── .gitignore
```

## Run Locally

No build step is required.

1. Clone the repository.
2. Open `index.html` in a browser.
3. For a local development server, use the VS Code Live Server extension or run a simple static server.

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Accessibility Baseline

- Skip link for keyboard users
- One page-level `h1`
- Semantic landmarks
- Visible focus indicators
- Form labels and validation messages
- `aria-expanded` for mobile navigation
- Native `<dialog>` for the search experience
- Descriptive image `alt` text
- `prefers-reduced-motion` support

## Documentation

Detailed product and implementation documents are available in the [`docs`](./docs) directory.

## Submission Checklist

- [ ] All code is pushed to the public repository
- [ ] Mobile and desktop layouts are verified
- [ ] Keyboard navigation is tested
- [ ] Vercel deployment is connected
- [ ] Vercel URL is added to this README
- [ ] GitHub and Vercel URLs open correctly in a private browser window
