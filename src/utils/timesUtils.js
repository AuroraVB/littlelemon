export const initializeTimes = () => {
  if (typeof window.fetchAPI === "function") {
    return window.fetchAPI(new Date()); // Llama a la API con la fecha de hoy
  } else {
    console.error("fetchAPI no está disponible en window");
    return [];
  }
};

export const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload || state; // Usa los datos recibidos o mantiene el estado actual
    default:
      return state;
  }
};
