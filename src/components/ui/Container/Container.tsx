import { ReactNode } from "react"
import styles from './Container.module.scss'

interface IProps{
    children: ReactNode
}
export default function Container ({children}:IProps){
    return (
        <div className={styles.wrapper}>
            <div className={styles.shell}>{children}</div>
        </div>
    )
}