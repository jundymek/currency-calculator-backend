# Currency calculator - backend

Zadanie rekrutacyjne polegające na napisaniu aplikacji Reactowej - kalkulator wymiany walut z zapisywaniem historii obliczeń. Część frontendowa projektu.

## Technologie i biblioteki użyte w projekcie 🚀

- Nest.js
- Typescript
- PostgreSQL
- wykorzystane API - https://free.currencyconverterapi.com

### Instrukcja uruchomienia

1. Klonujemy repozytorium poleceniem

```
git clone https://github.com/jundymek/currency-calculator-backend.git
```

2. Wchodzimy do katologu z repozytorium i instalujemy niezbędne zależności

```
npm install lub yarn
```

3. Zmieniamy nazwę pliku `.env-example` na `.env` i modyfikujemy jego zawartość podając swoje wartości:

- `API_KEY=YOUR_API_KEY // KLUCZ API ze strony https://free.currencyconverterapi.com`
- `POSTGRES_USER=DB_USER // nazwa użytkownika bazy danych`
- `POSTGRES_PASSWORD=DB_PASSWORD // hasło do bazy danych`
- `POSTGRES_DATABASE=DB_NAME // nazwa bazy danych`

```
npm install lub yarn
```

4. Tworzymy bazę danych (wymagany [Docker](https://www.docker.com))

```
npm start:dev:db lub yarn start:dev:db
```

3. Uruchamiamy aplikację (backend działający na porcie 3001)

```
npm start:dev lub yarn start:dev
```
