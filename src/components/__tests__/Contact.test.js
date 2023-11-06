import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe.skip("Contact us page Test Cases", () => {

    beforeAll(() => {
        console.log("before all")
    })

    beforeEach(() => {
        console.log("before each")
    })

    afterAll(() => {
      console.log("After all")  
    })

    afterEach(() => {
      console.log("After Each")  
    })
    it('should load contact us component', () => {
        render(<Contact />);
    
        const heading  = screen.getByRole("heading");
    
        // Assetion
        expect(heading).toBeInTheDocument();
    })
    
    it('should load button in contact us component', () => {
        render(<Contact />);
    
        // const button  = screen.getByRole("button");
        const button  = screen.getByText("Submit");
    
        // Assetion
        expect(button).toBeInTheDocument();
    })
    
    it('should load input text in contact us component', () => {
        render(<Contact />);
    
        // const button  = screen.getByRole("button");
        const homepage  = screen.getByPlaceholderText("home");
    
        // Assetion
        expect(homepage).toBeInTheDocument();
    });
    
    it('should load 2 inout based on the contact component', () => {
        render(<Contact />);
    
        // Querying
        const inputBoxes = screen.getAllByRole("textbox");
        // inputboxex return the react element that is JSX 
        // virtual object dom
    
        // assertion
        expect(inputBoxes.length).toBe(2);
    })
});


