import { fireEvent, render , screen} from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../../component/Header";
import { Provider } from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";


describe("just test header" , ()=>{
it("should render or working fine" , ()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const loginButton = screen.getByRole("button",{name: "Login"});

    expect(loginButton).toBeInTheDocument();
});


it("should render cart items 0" , ()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart - (0 Items)");

    expect(cartItems).toBeInTheDocument();
});

it("should render cart items 0" , ()=>{
    render(
    <BrowserRouter>
    <Provider store={appStore}>
    <Header/>
    </Provider>
    </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
});

it("should convert login to logout button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )

    const loginButton  = screen.getByRole("button",{name: "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button" , {name : "Logout"});
    expect(logoutButton).toBeInTheDocument();
})

});