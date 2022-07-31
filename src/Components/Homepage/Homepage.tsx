import styles from "./Homepage.module.css"

const Homepage = () => {
    return <>
    <div className={styles.wrapper}>
    <div className={styles.welcome}>
    Welcome to Anton's E-shop project made with React, Redux, Typescript and Ant Design
    </div>
    <div className={styles.welcome}>Hope you'll enjoy!</div>
    </div>
    </>
};

export default Homepage;