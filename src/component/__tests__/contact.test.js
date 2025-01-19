import {render , screen} from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"
 // describe block is used to group the test cases
describe("Contact Component" , () =>{

    // beforeAll(()=>{
    //     console.log("before All");
    // });

    // beforeEach(()=>{
    //     console.log("Before Each");
    // });

    // afterAll(()=>{
    //     console.log("After All");
    // });

    // afterEach(()=>{
    //     console.log("After Each");
    // })

    // test block is used to write the test cases
    // it block is used to write the test cases (it is alias of test i.e it = test);

    test("is contact loaded or not" , ()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    
    
    test("is button loaded or not" , ()=>{
        render(<Contact/>);
    
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    
    
    });
    
    it(" count the boxes" , ()=>{
    
        render(<Contact/>);
        const input = screen.getAllByRole("textbox");
    
        // console.log(input.length);
        expect(input.length).toBe(3);
        // expect(input.length).not.toBe(2);
        
    });


});