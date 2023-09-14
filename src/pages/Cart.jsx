import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";


const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce( (acc, curr) => acc + curr.price, 0 ));
  }, [cart])

  return (
    <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
      {
        cart.length > 0 ?
        (
          <div className="flex">


            <div className="w-[100%] md:w-[60%] flex flex-col p-2">
              {
                cart.map( (item, index) => {
                  return <CartItem key={item.id} cart={cart} item={item} itemIndex={index}/>
                })
              }
            </div>

            <div className="w-[100%] md:w-[40%] mt-5 flex flex-col">
              <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">

                <div className="flex flex-col gap-5 ">
                  <div className="font-semibold text-xl text-green-800 uppercase">Your Cart</div>
                  <div className="font-semibold text-5xl text-green-700 uppercase -mt-5">Summary</div>
                  <p className="text-gray-700 font-semibold text-xl">
                    Total Items: <span className="text-xl font-normal">{cart.length}</span>
                  </p>
                </div>
                
                <div className="flex flex-col">
                  <p className="text-xl font-semibold text-gray-700">Total Amount: ${totalAmount}</p>
                  <button className="bg-green-700 hover:bg-purple-50 rounded-lg 
                  text-white transition duration-300 ease-linear mt-5 border-2 
                  border-green-600 font-bold hover:text-green-700 p-3 text-xl">CheckOut Now</button>
                </div>

              </div>
              
            </div>


          </div>
        )
        :
        (
          <div className="flex flex-col justify-center items-center min-h-[80vh]">
            <h1 className="text-2xl font-semibold">Your Cart is Empty!</h1>
            <NavLink to='/' className="w-full">
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg 
                  text-white transition duration-300 ease-linear mt-5 border-2 
                  border-green-600 font-bold hover:text-green-700 p-3 text-xl w-full">Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
};

export default Cart;
