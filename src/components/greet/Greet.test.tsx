// Greet should render with the text hello and if a name is passed into the component
// It should render render hello followed by the name
import { render, screen } from "@testing-library/react"
import Greet from "./Greet"

describe('Greet tests', () => {
    test('Greet renders correctly', () => {
        render(<Greet />)
        const hello = screen.getByText(/hello/i);
        expect(hello).toBeInTheDocument()
    })

    test('Greet renders with a name', () => {
        render(<Greet name="Saad" />)
        const textElement = screen.getByText('Hello Saad')
        expect(textElement).toBeInTheDocument()
    })
})
