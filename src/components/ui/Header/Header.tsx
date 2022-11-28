import styles from './Header.module.scss';
import logo from '../../../assets/images/logo.png';
import { HeaderCart } from './HeaderCart';

const CART_SUM=520
const CART_QUANTITY=3
const title="REACT PIZZA"

export default function Header(){
    return (
        <div className={styles.header}>
            <div className={styles.logoBlock}>
                <img src={logo} alt="logo"/>
                <div>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.miniTitle}>самая вкусная пицца во вселенной</div>
                </div>
            </div>
            <HeaderCart
              sum={CART_SUM}
              quantity={CART_QUANTITY}
            />
        </div>
    )
}