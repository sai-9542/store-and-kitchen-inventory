import React, { useState } from "react";
import { useAuth } from "../axios/context/AuthContext";
import data from "../data/inventoty";
import Products from "../compoenents/Products";
import { useDispatch, useSelector } from "react-redux";
import { addItems, decreaseQty, deleteFromCart } from "../store/CartSlice";
import { formatCategoryName } from "../utilities/utility";

const Kitchen = () => {
  const { isAuthenticated } = localStorage.getItem("isAuthenticated");
  const cart = useSelector((state) => state.cart.items);
  console.log("cart", cart);
  const dispatch = useDispatch();

  // console.log(localStorage.getItem("isAuthenticated"));
  // const [items, setItems] = useState(inventory)

  const [items, setItems] = useState(data[0]);

  const handleAddProduct = (product) => {
    console.log(product);
    dispatch(addItems(product));
  };
  
  const handleDecrease = (name) => {
    dispatch(decreaseQty(name))
  }

  return (
    <>
      <div className={`bg-white ${cart.length > 0 ? "flex" : ""}`}>
        <div className={`${cart.length > 0 ? "w-9/12" : "w-full"}`}>
          {Object.entries(items.kitchen_essentials).map(
            ([categoryName, products]) => (
              <div key={categoryName} className="mb-5">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  {formatCategoryName(categoryName)}
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
                  {products.map((product, index) => (
                    <Products
                      key={product.id || index}
                      product={product}
                      onButtonClick={handleAddProduct}
                      onClickDescrease={handleDecrease}
                      cart={cart}
                    />
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart w-3/12 p-4 border-l border-gray-200 h-screen sticky top-20">
            {/* Replace with actual cart UI */}
            <h2 className="text-xl font-semibold mb-2">Cart</h2>
            <p>{cart.length} items</p>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    >
                      Item
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 bg-gray-50 dark:bg-gray-800"
                    >
                      Remove
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                    >
                     {item.name} <small>{item.unit}</small>
                    </th>
                    <td className="px-6 py-4">{item.cartQuantity}</td>
                    <td className="px-6 py-4"><button onClick={() => dispatch(deleteFromCart(item.name))}>Delete</button></td>
                  </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-center my-3">
                  <button className="text-center bg-gray-700 px-3 py-2 text-white">Request Send to Store</button>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Kitchen;
