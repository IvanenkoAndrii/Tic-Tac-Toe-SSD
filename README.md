# ❌⭕ Tic-Tac-Toe Game

**Tic-Tac-Toe Game** is an interactive web application designed to play the classic Tic-Tac-Toe game with customizable settings and detailed statistics. This project was developed as part of the **"Component-Oriented Programming" (COP)** university course. It demonstrates modern UI development practices, robust state management, and strict adherence to privacy standards (GDPR).

---

## Author
* **Student:** Ivanenko Andrii
* **Group:** IPZ-23-5
* **University Year:** 2026

---

## 🛠 Tech Stack
* **Framework:** [React 19](https://react.dev/) + TypeScript
* **State Management:** Custom React Hooks / Context (e.g., `useGameLogic`, `useGameStorage`)
* **Form Handling:** [React Hook Form](https://react-hook-form.com/)
* **Styling:** CSS Modules & Global CSS
* **Build Tool:** Create React App

---

## Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation
```bash
npm install
```

### Run in Development Mode
```bash
npm start
```

### Build for Production
```bash
npm run build
```

---

## Project Requirements Checklist

### 1. License & Compliance
The project is officially distributed under the **MIT License**.
* **Audit:** A full dependency license audit was performed using `license-checker`.
* **Audit Report:** [`license-report.txt`](./license-report.txt)
* **License Text:** [`LICENSE`](./LICENSE)

### 2. Cookie Popup & GDPR
Implemented a custom **Cookie Consent Banner** to ensure transparency and user control.
* **Compliance:** Statistics and game results are recorded in cookies **only** if the user provides explicit "all" consent.
* **Storage:** Uses custom cookie management helpers with standard session policies.

### 3. Privacy Policy & Manual
A comprehensive document outlining data handling, user rights under GDPR, and technical instructions.
* **Document:** [`PRIVACY_POLICY.md`](./PRIVACY_POLICY.md)
* **In-app Access:** Users can view the policy and reset their consent at the Privacy Policy screen in the application.

### 4. Storybook
A dedicated environment for isolated component development, documentation, and interactive testing.
* **Base Components:** 
  * `Button` (with controls for sizes, variants, disabled states, and custom labels).
  * `Cell` (interactive grid cell rendering X, O, empty, and winning highlight states).
* **Complex Components:** 
  * `Board` (supporting dynamic sizes 3x3, 4x4, 5x5, custom grid layouts, and highlighted winning cell combinations).
  * `Modal` (overlay component with dynamic content and footers).
  * `GameInfo` (statistics panel: shows current turn, player scores, and win/draw messages).
  * `GameEndModal` (game results modal with statistics and restart buttons).
* **Command to run:**
```bash
npm run storybook
```

### 5. Generated Documentation
Automatically generated documentation using **TypeDoc**. It describes all components, types, interfaces, and React hooks in the project based on static code analysis.
* **Tool:** TypeDoc (generates an HTML website).
* **Configuration:** [`typedoc.json`](./typedoc.json)
* **Output Directory:** `docs/`
* **How to run generation:**
```bash
npm run docs
```

---

## ⚖️ Legal & Liability
This software is provided "as is", without warranty of any kind. All data processing (authentication, settings, and scores) occurs strictly on the client-side within the user's browser (Cookies). No data is transmitted to external servers.

---

Created for educational purposes @ 2026
