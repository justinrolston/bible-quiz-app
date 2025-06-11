# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Development server
```bash
npm run dev
```

### Testing
```bash
npm test              # Run all tests
npm test -- --watch   # Run tests in watch mode
```

### Build and linting
```bash
npm run build         # Production build
npm run lint          # ESLint checks
```

## Project Architecture

This is a React-based Bible quiz application built with Vite. The app generates random questions about the order of Bible books.

### Core Structure
- **Quiz System**: Main quiz logic in `src/components/Quiz/` with three components:
  - `Quiz.jsx` - Main quiz controller managing state and flow
  - `QuizQuestion.jsx` - Individual question display
  - `QuizScore.jsx` - Final score display

- **Question Generation**: `src/components/Quiz/utils/generateQuestions.js` creates random "before/after" questions using the Bible books data

- **Data Layer**: Bible book lists in `src/components/Data/`:
  - `bibleBooks.js` - Complete 66-book list
  - `otBooks.js` - Old Testament books
  - `ntBooks.js` - New Testament books

- **Routing**: React Router setup in `main.jsx` with routes:
  - `/` - Main quiz
  - `/ot` - Old Testament quiz
  - `/nt` - New Testament quiz

### Testing Setup
- Uses Vitest with React Testing Library
- Test environment configured for jsdom in `vite.config.js`
- Existing tests in `src/components/Quiz/utils/__tests__/`

### Key Libraries
- React 18 with hooks-based state management
- React Router DOM for navigation
- Styled Components for styling
- React Icons for UI elements

### Question Logic
Questions ask "What book comes before/after [book]?" with randomized multiple choice options. The `generateQuestions` function handles edge cases for first/last books automatically.

## Rule to Follow
- Always write secure best practice javascript code
- Always write tests for new functions and features
- Always use GitHub Actions for CI/CD
- Always use GitHub Pages for deployment