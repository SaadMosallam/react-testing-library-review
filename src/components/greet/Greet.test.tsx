import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

test('Greet renders correctly', () => {
    render(<Greet />)
    const hello = screen.getByText(/hello/i);
    expect(hello).toBeInTheDocument()
})