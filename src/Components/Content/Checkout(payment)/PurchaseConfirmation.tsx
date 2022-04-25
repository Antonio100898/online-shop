import { BuyerValues } from "./BuyerDetailsForm";
import { Values } from "./CheckoutForm";
import styles from "./PurchaseConfirmation.module.css";
import { Descriptions, Button } from "antd";
import { CartItem } from "../../../redux/cartReducer";

type PropsType = {
  buyerDetails: BuyerValues;
  paymentDetails: Values;
  items: Array<CartItem>;
  total: number;
  setStep: (step: number) => void;
};

const PurchaseConfirmation: React.FC<PropsType> = ({
  buyerDetails,
  paymentDetails,
  items,
  total,
  setStep,
}) => {
  const { cardNumber } = paymentDetails;

  const newNumber = (number: string) => {
    const length = number.length;
    let numberArray = [] as Array<string>;
    for (let i = 0; i < length; i++) {
      numberArray.push(number[i]);
    }
    let digits = numberArray.slice(length - 4);
    let newArray = [];
    for (let j = 0; j < length - 4; j++) {
      newArray.push("*");
    }
    return newArray.concat(digits);
  };

  const strictedCardNumber = newNumber(cardNumber);
  const { firstName, lastName, email, adress } = buyerDetails;
  const onConfirmClick = () => {
    setStep(4);
  };
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <div>
            <Descriptions
              title="Purchase details:"
              bordered
              column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
            >
              <Descriptions.Item label="Customer">
                <span className={styles.description_info}>
                  {firstName + " " + lastName}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Email">
                <span className={styles.description_info}>{email}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Billing adress">
                <span className={styles.description_info}>
                  {adress.street + ", " + adress.city}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Amount">
                <span className={styles.description_info}>${total}</span>
              </Descriptions.Item>
              <Descriptions.Item label="Card">
                <span className={styles.description_info}>
                  {strictedCardNumber}
                </span>
              </Descriptions.Item>
              <Descriptions.Item label="Products">
                {items.map((item) => (
                  <div key={item.id} className={styles.description_item}>
                    <span className={styles.description_info}>
                      {item.title}
                    </span>
                  </div>
                ))}
              </Descriptions.Item>
            </Descriptions>
          </div>
          <div className={styles.confirm_btn}>
            <Button onClick={onConfirmClick} type="primary">
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseConfirmation;
