# Neighborhood Help – Project Structure

Folder layout and where to find things.

```
project/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   ├── manifest.json
│   └── ...
├── src/
│   ├── assets/
│   │   └── icons/
│   │       └── index.js          # Shared SVG icons (Envelope, Lock, Confirm)
│   ├── components/
│   │   ├── auth/
│   │   │   ├── AuthTabs.js       # Log In / Register tabs
│   │   │   ├── AuthTabs.css
│   │   │   ├── LoginForm.js
│   │   │   ├── LoginForm.css
│   │   │   ├── RegisterForm.js
│   │   │   └── RegisterForm.css
│   │   ├── common/
│   │   │   ├── InputField.js     # Email, password, confirm inputs with icons
│   │   │   ├── InputField.css
│   │   │   ├── NeighborhoodSelector.js
│   │   │   ├── NeighborhoodSelector.css
│   │   │   ├── SocialLoginButtons.js   # Google, Apple
│   │   │   └── SocialLoginButtons.css
│   │   └── layout/
│   │       ├── Header.js           # Auth header (back, logo, "Neighborhood Help")
│   │       ├── Header.css
│   │       ├── NavBar.js           # Top nav (Back + Brand; minimal on landing/auth)
│   │       ├── NavBar.css
│   │       ├── BottomNav.js        # App bottom nav: Home, Explore, Messages, Profile
│   │       ├── BottomNav.css
│   │       ├── IntroHeader.js      # Intro page: Welcome, avatar, location, map
│   │       ├── IntroHeader.css
│   │       ├── CategoryFilters.js  # All, Yard Work, Pet Care, Groceries, …
│   │       ├── CategoryFilters.css
│   │       ├── HelpRequestCard.js  # Feed card (image, category, status, View Details)
│   │       └── HelpRequestCard.css
│   ├── data/
│   │   └── feedData.js            # CATEGORIES, HELP_REQUESTS, DEFAULT_DISTRICT
│   ├── pages/
│   │   ├── AuthPage.js
│   │   ├── AuthPage.css
│   │   ├── IntroductionPage.js    # Feed: header, filters, cards, FAB
│   │   ├── IntroductionPage.css
│   │   ├── ExplorePage.js
│   │   ├── ExplorePage.css
│   │   ├── MessagesPage.js
│   │   ├── MessagesPage.css
│   │   ├── ProfilePage.js
│   │   ├── ProfilePage.css
│   │   ├── RequestHelpPage.js
│   │   └── AdminPage.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── PROJECT_STRUCTURE.md
```

## Folders

| Folder | Purpose |
|--------|---------|
| `src/assets` | Static assets (icons, images) |
| `src/assets/icons` | Reusable SVG icons |
| `src/components` | UI components |
| `src/components/auth` | Auth-related pieces (tabs, login, register) |
| `src/components/common` | Shared form and UI elements |
| `src/components/layout` | Layout (header, nav, etc.) |
| `src/pages` | Page-level components (AuthPage, etc.) |

## Adding new pieces

- **New page:** Add a component under `src/pages/` and wire it in `App.js` (or your router).
- **New shared component:** Add under `src/components/common/` (or `layout/` if it’s layout).
- **New auth-specific component:** Add under `src/components/auth/`.
- **New icon:** Add to `src/assets/icons/index.js` and import where needed.
