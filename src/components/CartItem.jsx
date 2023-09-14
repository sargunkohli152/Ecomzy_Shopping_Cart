import { toast } from "react-hot-toast";
import {MdDelete} from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item}) => {

  const dispatch = useDispatch((state) => state);
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }

  return (
    // <div className={`p-2 md:p-5 border-b-2 border-slate-500 mt-2 mb-2 md:mx-5`}>

      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className=" w-[30%]">
          <img src={item.image} className=" object-cover"/>
        </div>

        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{item.title}</h1> 
          <p className="text-base text-slate-700 font-medium">{item.description.split(" ").slice(0, 15).join(" ") + "..."}</p>
          <div className="flex items-center justify-between">
            <p className="text-green-600 text-lg font-bold">${item.price}</p>
            <div
            onClick={removeFromCart}
            className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
              <MdDelete className=" text-red-800"/>
            </div>
          </div>
        </div>

      </div>


    /* </div> */
  )
};

export default CartItem;
