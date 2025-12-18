import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import '@testing-library/jest-dom'

describe('Contact Us Page Test Cases', ()=>{

    // beforeAll(() => {
    //   console.log("Before All");
    // });

    // beforeEach(() => {
    //   console.log("Before Each");
    // });

    // afterAll(() => {
    //   console.log("After All");
    // });

    // afterEach(() => {
    //   console.log("After Each");
    // });

    test('Should load contact us component', () => { 
        render(<ContactUs />)

        // Querying
        const heading = screen.getByRole('heading')

        //Assertion
        expect(heading).toBeInTheDocument()
        
    })

    // we can use it Instead of test

    it('Should load button inside Contact us component' , ()=>{
        render(<ContactUs/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()

    })

    it('Should load input name inside Contact us Component' , ()=>{
        render(<ContactUs/>)
        const inputName = screen.getByPlaceholderText('Name')
        expect(inputName).toBeInTheDocument()
    })

    it('Should load 2 input boxes inside Contact Us Component', ()=>{
        render(<ContactUs/>)
        const inputBoxes = screen.getAllByRole('textbox')
        expect(inputBoxes.length).toBe(2)
    })
})