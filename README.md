<div align="center">

# Weather Dashboard

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Tested](https://img.shields.io/badge/Tested-Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)
![Responsive](https://img.shields.io/badge/Responsive-Yes-brightgreen?style=for-the-badge)

</div>

---

## ✨ Features

- ស្វែងរកទីក្រុងតាមឈ្មោះ (Search) ពី Mock Data
- បង្ហាញអាកាសធាតុបច្ចុប្បន្ន (Temp, Humidity, Wind, Condition)
- Forecast ៥ ថ្ងៃ ជាមួយ Animation Stagger
- ប្តូរឯកតា Celsius / Fahrenheit
- Dark Mode Toggle ព្រមទាំងចងចាំ Preference
- រក្សាទុក Favorite Cities ដោយស្វ័យប្រវត្តិទៅ localStorage
- Loading State Simulation ដូច Real API
- Animation រលូនដោយ Framer Motion
- Responsive ពេញលេញ គ្រប់ទំហំអេក្រង់ (Mobile / Tablet / Desktop)
- មាន Unit Test ដោយ Vitest + Testing Library
- **Demo Frontend**: ប្រើ Mock Data ទាំងស្រុង គ្មាន Real API Dependency

---

## 📁 Project Structure

```
weather-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx              → Navbar + Unit Toggle + Theme Toggle
│   │   ├── Layout.jsx              → Layout Wrapper (Header + Main)
│   │   ├── SearchBar.jsx           → Search Input
│   │   ├── SearchBar.test.jsx      → Unit Test សម្រាប់ SearchBar
│   │   ├── CityList.jsx            → List City ពី Search Result
│   │   ├── CurrentWeather.jsx      → Card អាកាសធាតុបច្ចុប្បន្ន
│   │   ├── CurrentWeather.test.jsx → Unit Test សម្រាប់ CurrentWeather
│   │   ├── Forecast.jsx            → List Forecast ៥ ថ្ងៃ
│   │   ├── ForecastCard.jsx        → Card Forecast មួយថ្ងៃ
│   │   ├── UnitToggle.jsx          → ប៊ូតុងប្តូរ °C / °F
│   │   ├── DarkModeToggle.jsx      → ប៊ូតុងប្តូរ Dark/Light Mode
│   │   ├── FavoriteButton.jsx      → ប៊ូតុង Favorite (⭐/☆)
│   │   └── FavoritesList.jsx       → List Favorite Cities
│   ├── data/
│   │   └── mockWeatherData.js      → Mock Data សម្រាប់ 5 ទីក្រុង
│   ├── hooks/
│   │   ├── useSimulatedLoading.js  → Custom Hook Simulate Loading
│   │   ├── useDarkMode.js          → Custom Hook Dark Mode + localStorage
│   │   └── useFavorites.js         → Custom Hook Favorites + localStorage
│   ├── utils/
│   │   ├── convertTemp.js          → Utility បំលែងសីតុណ្ហភាព
│   │   └── convertTemp.test.js     → Unit Test សម្រាប់ convertTemp
│   ├── test/
│   │   └── setup.js                → Test Setup (jest-dom)
│   ├── App.jsx                     → Main App Component
│   ├── App.css                     → (មិនប្រើទៀត — ជំនួសដោយ Tailwind)
│   ├── index.css                   → Tailwind Import + Dark Variant
│   └── main.jsx                    → App Entry Point
├── .gitignore
├── eslint.config.js                → ESLint Configuration
├── index.html                      → HTML Entry Point
├── LICENSE                         → MIT License
├── package.json                    → Dependencies + Scripts
├── package-lock.json
├── README.md
└── vite.config.js                  → Vite + Tailwind + Vitest Configuration
```

---

## 🚀 How to Run

1. Clone Repository នេះ:
```bash
git clone <url-repo>
cd weather-dashboard
```
2. ដំឡើង Dependencies:
```bash
npm install
```
3. Run Development Server:
```bash
npm run dev
```
4. បើក Browser ចូល `http://localhost:5173`
5. ដើម្បី Run Tests:
```bash
npm run test
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
