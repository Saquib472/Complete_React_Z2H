import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import RestuarantMenuList from "../RestuarantMenuList";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <RestuarantMenuList menuData={MOCK_DATA_NAME.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards}/>
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getAllByTestId("accord");
  fireEvent.click(accordionHeader[1]);

  expect(screen.getAllByTestId("foodItems").length).toBe(3);

  expect(screen.getByText("0")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add+" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("1")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("2")).toBeInTheDocument();

  expect(screen.getAllByTestId("cartItems").length).toBe(2);

//   fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

//   expect(screen.getAllByTestId("foodItems").length).toBe(5);

//   expect(
//     screen.getByText("Cart is empty. Add Items to the cart!")
//   ).toBeInTheDocument();
});