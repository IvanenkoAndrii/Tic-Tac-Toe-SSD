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

---

## ⚖️ Legal & Liability
This software is provided "as is", without warranty of any kind. All data processing (authentication, settings, and scores) occurs strictly on the client-side within the user's browser (Cookies). No data is transmitted to external servers.

---

Created for educational purposes @ 2026
