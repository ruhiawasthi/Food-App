import { render ,screen} from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import mockRestaurantdata from "../mocks/mockRestaurantdata.json";
import "@testing-library/jest-dom";

test("Should Render the card", ()=>{
    // this is how you pass mock data in you ahve props
    render(<RestaurantCard resData={mockRestaurantdata}/>);

    const text = screen.getByText("Chinese Wok");
    expect(text).toBeInTheDocument();

})
