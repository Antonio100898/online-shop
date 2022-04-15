import { Spin } from "antd"
import styles from "./Preloader.module.css"

const Preloader = () => {
    return <div className={styles.spin_wrapper}><Spin/></div>
}
export default Preloader