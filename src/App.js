import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import { Routes, Route, useNavigate } from 'react-router-dom'; 
import { useReducer, useState, useEffect } from 'react';

// Función para generar horarios aleatorios (Simulación de API)
const seededRandom = (seed) => {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
};

// Función para obtener horarios disponibles
const fetchAPI = (date) => {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
        if (random() < 0.5) result.push(i + ':00');
        if (random() < 0.5) result.push(i + ':30');
    }
    return result;
};

// Función para enviar datos del formulario (Simulación de API)
const submitAPI = (formData) => {
    console.log("Enviando reserva:", formData);
    return true; // Simula una respuesta exitosa
};

// Reducer para manejar horarios disponibles
const timesReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_TIMES":
            return action.payload;
        default:
            return state;
    }
};

function App() {
    // Estado global de reservas
    const [availableTimes, dispatch] = useReducer(timesReducer, []);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    const navigate = useNavigate(); // 👈 Ahora está dentro del componente

    const submitForm = (formData) => {
        if (submitAPI(formData)) { // 👈 Cambiado de window.submitAPI() a solo submitAPI()
            navigate("/confirmed"); // Redirige a la página de confirmación
        }
    };

    // Inicializa los horarios al cargar la app
    useEffect(() => {
        const today = new Date();
        setDate(today.toISOString().split("T")[0]); // Guarda la fecha en formato YYYY-MM-DD
        const initialTimes = fetchAPI(today);
        console.log("Horarios iniciales:", initialTimes);
        dispatch({ type: "UPDATE_TIMES", payload: initialTimes });
    }, []);

    // Actualiza los horarios al cambiar la fecha
    const updateTimes = (selectedDate) => {
        console.log("Fecha seleccionada:", selectedDate);
        const dateObj = new Date(selectedDate);
        const times = fetchAPI(dateObj);
        console.log("Horarios recibidos:", times);
        dispatch({ type: "UPDATE_TIMES", payload: times });
    };

    // Props compartidas entre los componentes
    const bookingProps = { 
        date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, 
        availableTimes, updateTimes, submitForm // 👈 Ahora pasamos submitForm en lugar de handleSubmit
    };

    return (
      <>
        <Nav />
          <Routes>
            <Route path="/" element={<Main {...bookingProps} />} />
            <Route path="/booking" element={<BookingPage {...bookingProps} />} />
            <Route path="/confirmed" element={<ConfirmedBooking />} />
          </Routes>
          <Footer />
      </>
    );
}

export default App;





