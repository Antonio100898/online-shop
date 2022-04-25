import styles from "./PurchaseConfirmation.module.css";
import { Alert } from "antd";
import { useEffect } from "react";

type PropsType = {
  clearCart: () => void;
};
const Gratitude: React.FC<PropsType> = ({ clearCart }) => {
  useEffect(() => {
    clearCart();
  }, []);
  return (
    <>
      <div className={styles.wrapper}>
        <Alert
          type="success"
          message="Thank you for purchase! All the upcoming details about delivery you will see on your email soon."
        />
      </div>
    </>
  );
};

export default Gratitude;
