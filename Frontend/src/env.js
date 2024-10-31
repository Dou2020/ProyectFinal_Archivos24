export {}; // Asegura que esto sea un módulo
// env.js
(function(window) {
    window["env"] = window["env"] || {};
    window["env"]["apiUrl"] = "${API_URL}";
  })(this);
  