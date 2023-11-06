import { render, screen } from "@testing-library/react"
import RestaurantCard, {withPromLavel} from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it('should render Resteraurant with props', () => {

    render(<RestaurantCard data={MOCK_DATA} />)

    const name = screen.getByText("McDonald's");

    expect(name).toBeInTheDocument();
})

it('should render Resteraurant card with promoted label', () => {

    const RestarurantCardPromoted = withPromLavel(RestaurantCard);
    render(<RestarurantCardPromoted data={MOCK_DATA} />)

    const name = screen.getByText("Promoted");

    expect(name).toBeInTheDocument();
})