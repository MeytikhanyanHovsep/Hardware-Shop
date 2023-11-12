"use client";
import { useSelector } from 'react-redux';
import CartThead from '@/components/CartDetails/CartThead';
import CartTfoot from '@/components/CartDetails/CartTfoot';
import EmptyCart from '@/components/CartDetails/EmptyCart';
import CartItem from '@/components/CartDetails/CartItem';

function Cart() {
    const cartData = useSelector(state => state.cart);
    const prodsData = useSelector(state => state.products.data)
    const totalPrice = cartData.reduce((sum, elm) => sum + elm.qty * prodsData.find(el => +el.prodId === +elm.id).prodPrice, 0)

    return (
        <section className='mt-[60px] w-full'>
            { cartData.length > 0 ?
                <table className="container mx-auto bg-white rounded-lg overflow-hidden">
                    <CartThead />
                    <tbody>
                        { cartData.map((elm, ind) => {
                            return <CartItem key={ ind } prod={ ...elm }></CartItem>
                        }) }
                    </tbody>
                    <CartTfoot totalPrice={ totalPrice } />
                </table> : <>
                    <EmptyCart />
                </> }
        </section>
    )
}; export default Cart