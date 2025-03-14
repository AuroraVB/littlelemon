import { initializeTimes, timesReducer } from "../utils/timesUtils"

test("initializeTimes devuelve la lista de horarios disponibles", () => {
  const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toEqual(expectedTimes);
});

test("updateTimes devuelve el mismo estado cuando se llama con 'UPDATE_TIMES'", () => {
  const initialState = initializeTimes();
  const newState = timesReducer(initialState, { type: "UPDATE_TIMES" });

  expect(newState).toEqual(initialState);
});
