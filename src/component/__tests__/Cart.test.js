import RestaurantMenu from "../RestaurantMenu";
import {act} from "react";
import Header from "../Header";
import {fireEvent, render , screen} from "@testing-library/react";
import MOCK_DATA from "../mocks/mockResMenu.json";
import {Provider} from "react-redux";
import appStore from "../../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=> Promise.resolve({
    json : () => Promise.resolve(MOCK_DATA),
}));

it("should render res menu" , async()=>{
    await act(async () => render(
        <BrowserRouter>
    <Provider store={appStore}>
    <RestaurantMenu/>
    <Header/>
    </Provider>
    </BrowserRouter>
    ))

    const accordionHeader = screen.getByText("New Thin n Crispy Pizzas(6)");
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(12);

    expect(screen.getByText("Cart - (0 Items)")).toBeInTheDocument();

    const addBtns = screen.getAllByRole("button" , {name : "Add +"});
    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (1 Items)")).toBeInTheDocument();

    fireEvent.click(addBtns[0]);
    expect(screen.getByText("Cart - (2 Items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(12);

});