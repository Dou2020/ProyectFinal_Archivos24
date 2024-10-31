export {}; // Asegura que esto sea un módulo
// src/global.d.ts
declare global {
    interface Window {
      env: {
        apiUrl: string;
      };
    }
  }
  