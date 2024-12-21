import { render , screen, fireEvent} from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter} from "react-router-dom";
import "@testing-library/jest-dom";
import Header from "../Header";
import appStore from "../../utils/appStore";



it("should render header and check login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login = screen.getByRole("button");
  expect(login).toBeInTheDocument();
  
});

it("shshould render header and check login button, logout button",()=>{
    render(<BrowserRouter><Provider store={appStore}><Header/></Provider></BrowserRouter>);

    const loginButton = screen.getByRole("button", {name:"login"});
    //with fireevent you can simulate a click and many things.
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name:"logout"});
    expect(logoutButton).toBeInTheDocument;
})

it("should render header and check cart is present or not.", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  // using regex it will check where is cart written
    const Cart = screen.getByText(/Cart/);
    expect(Cart).toBeInTheDocument();
    
  });
  

  