import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header"
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it.skip("should load header Component with a login Button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:'login'});
    // const loginButton = screen.getByText("login");

    expect(loginButton).toBeInTheDocument();
})

it.skip("should load header Component with a cart items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByText(/Cart/)
    // const loginButton = screen.getByText("Cart (0 items)")
    // const loginButton = screen.getByText("login");

    expect(loginButton).toBeInTheDocument();
})

it("should change login button to logout", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name:'Login'});
    fireEvent.click(loginButton)
    const logOutButton = screen.getByRole("button", {name:'Logout'});
    
    // const loginButton = screen.getByText("login");

    expect(logOutButton).toBeInTheDocument();
})