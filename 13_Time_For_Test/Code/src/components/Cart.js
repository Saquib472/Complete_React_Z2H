import { useSelector } from "react-redux"
import { CDN_URL2 } from "../utils/constants"

const Cart = () => {
    const items = useSelector((state) => state.cart.items)
    return (
        <div className="mx-auto max-w-4xl mt-8 px-5">
            <h1 className="font-bold text-xl">Cart Summary</h1>
            <div className="shadow-lg p-4 rounded-lg">
                {
                    items.map((item , index) => (
                        <div data-testid="cartItems" key={index} className="flex justify-between items-center p-2.5 border-b border-blue-900">
                            <div className="flex items-center">
                                <img className="rounded-lg max-w-20 mr-2" src={CDN_URL2 + item.imageId}></img>
                                <p>{item.name}</p>
                            </div>
                            <div>{`₹${item.defaultPrice/100 || item.price/100}`}</div>
                        </div>
                    ))
                }
            </div>
            <div className="my-6">
                <h1 className="font-bold text-xl">Payment Details</h1>
                 <div className="shadow-lg p-4 rounded-lg flex justify-between">
                    <p>SubTotal</p>
                    <p>₹{items.reduce((acc,curr)=>{return acc + (curr.defaultPrice/100 || curr.price/100)},0)}</p>
                 </div>
            </div>
        </div>
    )
}

export default Cart