import { BACK_END_URL } from "../constants/api";

export function generateRandomAdvice() {
  // Dodanie parametru ?timestamp=${Date.now()} do URL powoduje, że dla przeglądarki każde żądanie wygląda inaczej (ponieważ Date.now() zwraca aktualny czas w milisekundach), dzięki czemu unikamy cache'owania odpowiedzi.
  return fetch(`${BACK_END_URL}/advice?timestamp=${Date.now()}`)
    .then((response) => response.json())
    .then((advice) => {
      return advice.slip;
    });
}
