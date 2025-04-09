import 'boxicons/css/boxicons.min.css';
import './cart.css'
import { useEffect, useState } from 'react';

{/*A close ikonra kattintva zárja be a cartot */}

{/* Mind a három óra esetében a plusz és mínusz ikonra kattintva növelni és csökkenteni tudjuk az mennyiségeket */}

{/* Lent számolja ki a végleges összeget és hogy hány darab órát rendel*/}

{/*Ha nullára csökken a mennyiség nem kell eltünnie, de 0 alá ne menjen az értéke */}

export type CartProps = {
    open: boolean
}

const Cart = ({open}: CartProps) => {

    const [showCart, setShowCart] = useState<boolean>(false);
    const [amounts, setAmounts] = useState<number[]>([1, 1, 1]);
    useEffect(() => {
        setShowCart(open)
    }, [open])

    const setAmount = (index: number, plus: boolean) => {
        const amountsList = [...amounts];
        amountsList[index] += plus ? 1 : amountsList[index] == 0 ? 0 : -1;
        setAmounts(amountsList);
    }
  
    return (
    <div className={`cart ${showCart && "show-cart"}`} id="cart">
    <i className='bx bx-x cart__close' id="cart-close" onClick={() => setShowCart(false)}></i>

    <h2 className="cart__title-center">My Cart</h2>

    <div className="cart__container">
        <article className="cart__card">
            <div className="cart__box">
                <img src="/img/featured1.png" alt="" className="cart__img"/>
            </div>

            <div className="cart__details">
                <h3 className="cart__title">Jazzmaster</h3>
                <span className="cart__price">$1050</span>

                <div className="cart__amount">
                    <div className="cart__amount-content">
                        <span className="cart__amount-box">
                            <i className='bx bx-minus' onClick={() => setAmount(0, false)}></i>
                        </span>

                        <span className="cart__amount-number">{amounts[0]}</span>

                        <span className="cart__amount-box">
                            <i className='bx bx-plus' onClick={() => setAmount(0, true)}></i>
                        </span>
                    </div>

                    <i className='bx bx-trash-alt cart__amount-trash' ></i>
                </div>
            </div>
        </article>
        
        <article className="cart__card">
            <div className="cart__box">
                <img src="/img/featured3.png" alt="" className="cart__img"/>
            </div>

            <div className="cart__details">
                <h3 className="cart__title">Rose Gold</h3>
                <span className="cart__price">$850</span>

                <div className="cart__amount">
                    <div className="cart__amount-content">
                        <span className="cart__amount-box">
                            <i className='bx bx-minus' onClick={() => setAmount(1, false)}></i>
                        </span>

                        <span className="cart__amount-number">{amounts[1]}</span>

                        <span className="cart__amount-box">
                            <i className='bx bx-plus' onClick={() => setAmount(1, true)}></i>
                        </span>
                    </div>

                    <i className='bx bx-trash-alt cart__amount-trash' ></i>
                </div>
            </div>
        </article>

        <article className="cart__card">
            <div className="cart__box">
                <img src="/img/new1.png" alt="" className="cart__img"/>
            </div>

            <div className="cart__details">
                <h3 className="cart__title">Longines Rose</h3>
                <span className="cart__price">$980</span>

                <div className="cart__amount">
                    <div className="cart__amount-content">
                        <span className="cart__amount-box">
                            <i className='bx bx-minus' onClick={() => setAmount(2, false)}></i>
                        </span>

                        <span className="cart__amount-number">{amounts[2]}</span>

                        <span className="cart__amount-box">
                            <i className='bx bx-plus' onClick={() => setAmount(2, true)}></i>
                        </span>
                    </div>

                    <i className='bx bx-trash-alt cart__amount-trash' ></i>
                </div>
            </div>
        </article>
    </div>

    <div className="cart__prices">
        <span className="cart__prices-item">{amounts.reduce((a, b) => a+b, 0)} items</span>
        <span className="cart__prices-total">${amounts[0] * 1050 + amounts[1] * 850 + amounts[2] * 980}</span>
    </div>
</div>
  )
}

export default Cart