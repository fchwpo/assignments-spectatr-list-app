# Spectatr User List App

This assignment app shows a list of people that was retrieved from an API. It has a search tool that lets you sort people by name, and as you asked, it is fully mobile, meaning it works well on all screen sizes.

## Features

- Shows a list of people it got from an API
- A search tool that lets you sort people by name
- Responsive design (views on phone, tablet, and computer)
- States for loading and handling errors
- Debounced search input to improve speed - Animations to make the user experience smooth

## Technology Stack

- Next.js with TypeScript
- Tailwind CSS for styling
- Framer Motion for animations
- pnpm as package manager

## Setup and Installation

1. Clone the repository:
   ```
   git clone [repository-url] user-list-app
   cd user-list-app
   ```

2. Install dependencies:
   ```
   pnpm install
   ```

3. Run the development server:
   ```
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `pages/index.tsx`: Main page component
- `components/`: 
  - `Navbar.tsx`: Responsive navigation bar
  - `SearchBar.tsx`: Search input with debounce functionality
  - `UserList.tsx`: Displays the list of users
  - `UserCard.tsx`: Individual user card component
- `utils/`:
  - `api.ts`: API utility for fetching users
  - `debounce.ts`: Debounce utility function
  - `filterUsers.ts`: Util funtion that returns a filtered set of users
- `hooks/`:
  - `useSearch.ts`: Search and filtering logic generic 
- `styles/globals.css`: Global styles and responsive design rules

## Key Design Decisions

1. **Responsive Design**: Tailwind CSS is used for a mobile-first approach. The layout adjusts for different screen sizes:
   - Mobile (< 600px): Single column layout
   - Tablet (600px - 1024px): Two-column layout
   - Desktop (> 1024px): Three-column layout

2. **Performance Optimization**: 
   - Debounce function on search input to reduce unnecessary API calls
   - Efficient rendering of user list using React's key prop

3. **User Experience**: 
   - Loading and error states for better feedback
   - Animations for smooth transitions and a modern feel

4. **Code Organization**: 
   - Separation of concerns with modular components
   - Utility functions for reusable logic (API calls, debounce)