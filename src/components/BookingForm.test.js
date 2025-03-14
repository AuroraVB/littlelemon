import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renderiza el título del formulario de reservas", () => {
    render(<BookingForm availableTimes={[]} />);
    const headingElement = screen.getByText(/choose date/i);
    expect(headingElement).toBeInTheDocument();
});