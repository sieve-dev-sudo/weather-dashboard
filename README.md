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

- ស្វែងរកទីក្រុងតាមឈ្មោះ (Search) ពី Mock Data, គ្របដណ្តប់ 24 ទីក្រុងជុំវិញពិភពលោក
- Ctrl+K keyboard shortcut ដើម្បី focus search ភ្លាមៗ
- Recent Searches, រក្សាទុក 5 ទីក្រុងចុងក្រោយបានស្វែងរក
- បង្ហាញអាកាសធាតុបច្ចុប្បន្ន (Temp, Feels Like, Humidity, Wind, Condition)
- Hourly Forecast (12-hour scrollable view)
- 7-Day Forecast ជាមួយ Animation Stagger ព្រមទាំង Highlight ថ្ងៃបច្ចុប្បន្ន
- Weather Details បន្ថែម, Sunrise, Sunset, Pressure, UV Index
- Weather Alert Banner (dismissible) សម្រាប់លក្ខខណ្ឌធ្ងន់ធ្ងរ
- ប្តូរឯកតា Celsius / Fahrenheit
- Dark Mode Toggle ព្រមទាំងចងចាំ Preference
- Dynamic Background Theme ប្តូរតាមអាកាសធាតុ
- រក្សាទុក Favorite Cities ដោយស្វ័យប្រវត្តិទៅ localStorage
- Skeleton Loading Placeholders (ដូច real API loading)
- Animation រលូនដោយ Framer Motion
- Responsive ពេញលេញ គ្រប់ទំហំអេក្រង់ (Mobile / Tablet / Desktop)
- Accessibility, Keyboard Navigation, ARIA Labels, Screen Reader Support
- Error Boundary និង Empty State Handling
- មាន Unit Test ដោយ Vitest + Testing Library
- Demo Frontend, ប្រើ Mock Data ទាំងស្រុង គ្មាន Real API Dependency

---

## 📁 Project Structure

```
weather-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Layout.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SearchBar.test.jsx
│   │   ├── CityList.jsx
│   │   ├── CurrentWeather.jsx
│   │   ├── CurrentWeather.test.jsx
│   │   ├── HourlyForecast.jsx
│   │   ├── Forecast.jsx
│   │   ├── ForecastCard.jsx
│   │   ├── WeatherDetails.jsx
│   │   ├── WeatherAlert.jsx
│   │   ├── UnitToggle.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── FavoriteButton.jsx
│   │   ├── FavoritesList.jsx
│   │   ├── RecentSearches.jsx
│   │   ├── EmptyState.jsx
│   │   ├── ErrorBoundary.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── SkeletonCurrentWeather.jsx
│   │   ├── SkeletonHourlyForecast.jsx
│   │   ├── SkeletonForecast.jsx
│   │   └── SkeletonWeatherDetails.jsx
│   ├── data/
│   │   └── mockWeatherData.js
│   ├── hooks/
│   │   ├── useSimulatedLoading.js
│   │   ├── useDarkMode.js
│   │   ├── useFavorites.js
│   │   ├── useRecentSearches.js
│   │   └── useKeyboardShortcut.js
│   ├── utils/
│   │   ├── convertTemp.js
│   │   ├── convertTemp.test.js
│   │   ├── weatherIcons.jsx
│   │   ├── weatherTheme.js
│   │   ├── getUvLabel.js
│   │   └── getToday.js
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

---

## 🚀 How to Run Locally

1. Clone Repository នេះ

```bash
git clone <url-repo>
cd weather-dashboard
```

2. ដំឡើង Dependencies

```bash
npm install
```

3. Run Development Server

```bash
npm run dev
```

4. បើក Browser ចូល `http://localhost:5173`

5. ដើម្បី Run Tests

```bash
npm run test
```

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
