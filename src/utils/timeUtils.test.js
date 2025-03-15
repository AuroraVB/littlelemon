import { initializeTimes, timesReducer } from "../utils/timesUtils";

// 🛠️ Mockeamos fetchAPI antes de cada prueba
beforeEach(() => {
  global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("initializeTimes devuelve la lista de horarios disponibles", () => {
  expect(initializeTimes()).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
});

test("updateTimes actualiza correctamente los horarios disponibles", () => {
  const initialState = ["17:00", "18:00"];
  const newTimes = ["19:00", "20:00"];
  const newState = timesReducer(initialState, { type: "UPDATE_TIMES", payload: newTimes });

  expect(newState).toEqual(newTimes);
});
