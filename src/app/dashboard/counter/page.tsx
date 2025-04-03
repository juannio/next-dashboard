import { CartCounter } from "@/shopping-cart/components/CartCounter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Shopping cart',
    description: 'Some desc'
}

const CounterPage = () => {

    return (
        <div className='flex flex-col items-center justify-center w-full h-full'>
            <span>Products in car</span>
            <CartCounter value={0} />
        </div>
    )
}

export default CounterPage;