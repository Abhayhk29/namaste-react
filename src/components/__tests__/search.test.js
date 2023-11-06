import { fireEvent, render , screen} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json:() => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it('should render the body component ', async () => {
    
    await act( async () => render(<BrowserRouter>
            <Body />
        </BrowserRouter>
    ));

    const cardBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name: "Search"} );

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target: { value: "burger"}});
    fireEvent.click(searchBtn);
        // screen should render 2 card

    const cards = screen.getAllByTestId("resCard");
    // expect(searchBtn).toBeInTheDocument();
    expect(cards.length).toBe(1);
})