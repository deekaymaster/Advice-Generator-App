ADVICE GENERATOR APP

Aplikacja zbudowana w React, która integruje się z API, by wyświetlać losowe porady.

Funkcjonalności

    Pobieranie i wyświetlanie losowych porad za pomocą przycisku
    Integracja z API dla dynamicznych danych
    Interaktywny interfejs z przyciskiem odświeżania
    Responsywny design dostosowany do różnych rozdzielczości ekranu

Wymagania

    Node.js (>= 14.x) oraz npm (>= 6.x)

Instalacja

    Sklonuj repozytorium:

git clone https://github.com/deekaymaster/Advice-Generator-App.git
cd advice-generator-app

Zainstaluj zależności:

npm install

Uruchom aplikację lokalnie:

    npm run dev

    Aplikacja będzie dostępna pod adresem http://localhost:5173.

Technologie

    React - framework do budowy interfejsów użytkownika
    CSS Modules - modularne style CSS
    JavaScript (ES6) - składnia ES6+ dla nowoczesnego kodu JavaScript
    Fetch API - do pobierania danych z zewnętrznego API

Struktura projektu

├── public
│ ├── index.html
├── src
│ ├── api
│ │ └── generateRandomAdvice.js # funkcja do integracji z API
│ ├── assets # ikony, grafiki
│ ├── components
│ │ └── AdviceCard.jsx # główny komponent aplikacji
│ ├── App.js
│ ├── index.js
│ └── styles
│ └── AdviceCard.module.css # styl dla komponentu AdviceCard
└── README.md

Przykłady użycia

Po uruchomieniu aplikacji użytkownik widzi losową poradę oraz przycisk, który umożliwia wygenerowanie nowej porady. Za każdym kliknięciem przycisku aplikacja pobiera i wyświetla nowe dane z API.
