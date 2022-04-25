import styles from "./Homepage.module.css"

const Homepage = () => {
    return <>
    <div className={styles.wrapper}>
    <div className={styles.welcome}>
    Welcome to my e-Shop project (made with React, Redux, Typescript, Ant Design)
    </div>
    <div className={styles.welcome}>Hope you'll enjoy!</div>
    </div>
    </>
};

export default Homepage;