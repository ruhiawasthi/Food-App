// import Body from "../Body";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
// import appStore from "../../utils/appStore";
// import MOCK_DATA from "../mocks/MOCK_DATA.json";
// import { act } from "react-dom/test-utils";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });

// it("Should Search Res list for burger text input", async () => {
//   await act(async () => {
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     );
//   });

//   const dat = screen.getAllByText("Search");
//   expect(dat).toBeInTheDocumnet();
// });
