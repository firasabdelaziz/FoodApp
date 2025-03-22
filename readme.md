# 🍽️ Food App

## 🔍 Overview
Food is a React Native mobile application designed for food delivery and pickup services. The app allows users to browse restaurants, filter by categories, toggle between delivery and pickup modes, and view restaurant details such as ratings, distance, and preparation time.

https://github.com/user-attachments/assets/3990ff60-dbef-468d-9391-bdfcf22ae178


## ✨ Features
- **🏪 Restaurant Listing**: Browse restaurants with details like name, rating, distance, and preparation time
- **🔖 Category Filtering**: Filter restaurants by food categories with an intuitive UI
- **🔄 Delivery/Pickup Toggle**: Switch between delivery and pickup modes
- **🔍 Search Functionality**: Find restaurants and food items (UI implemented)
- **📱 Responsive Design**: Consistent UI across different screen sizes
- **🔔 Toast Notifications**: User-friendly error handling
- **💫 Lottie Animations**: Enhanced visual experience

## 🛠️ Tech Stack
- ⚛️ React Native
- 📱 Expo
- 🧭 React Navigation
- 🔄 Redux Toolkit
- 📝 React Native Paper
- 🌐 Axios
- 🎬 Lottie
- ⚡ FlashList
- 📘 TypeScript

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone git@github.com:firasabdelaziz/FoodApp.git
cd FoodApp
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add:
```
BASE_URL=https://your-api-url
```

### 4. Run the App
```bash
npm start
```
Use the Expo Go app on your mobile device to scan the QR code, or run on an emulator/simulator.

## 📁 Project Structure
```
sparrow-food-app/
├── assets/                  # Static assets (fonts, images)
├── src/
│   ├── components/          # Reusable UI components
│   ├── hooks/               # Custom hooks
│   ├── navigation/          # Navigation setup
│   ├── screens/             # Screen components
│   ├── store/               # Redux store and slices
│   ├── styles/              # Styles and theme
│   ├── types/               # TypeScript type definitions
│   └── App.tsx              # Main app entry point
├── .gitignore
├── app.json                 # Expo app configuration
├── package.json             # Dependencies and scripts
└── README.md
```

## 💡 Best Practices Implemented
- ✅ Type safety with TypeScript
- ✅ Modular code structure
- ✅ Efficient state management with Redux Toolkit
- ✅ Performance optimization with FlashList and memoization
- ✅ Responsive design with normalize utility
- ✅ Custom hooks for better code organization
- ✅ Consistent styling with a custom theme
- ✅ Comprehensive error handling

## 🔮 Future Improvements
- 🔍 Implement search functionality with debouncing
- 🍔 Add more screens (Restaurant Details, Cart)
- 📍 Integrate real-time location services
- 🧪 Add unit tests with Jest and React Native Testing Library

## 📄 License
This project is licensed under the MIT License.