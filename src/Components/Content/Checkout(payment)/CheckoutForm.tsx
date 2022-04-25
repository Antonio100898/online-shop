import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from "react";
import styles from "./Form.module.css";
import { Button } from "antd";
import { validators } from "../Validators/Validators";

export interface Values {
  cardNumber: string;
  expirationDate: {
    month: string;
    year: string;
  };
  cvv: string;
  name: string;
}
type PropsType = {
  setPaymentDetails: (values: Values) => void;
  setStep: (step: number) => void;
  total: number;
};

const CheckoutForm: React.FC<PropsType> = ({
  total,
  setStep,
  setPaymentDetails,
}) => {
  const [cardTypeValue, setCardTypeValue] = useState("");

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const handleCardTypeChange = (e: any) => {
    setCardTypeValue(e.target.value);
  };

  const cardNumberValidation = (value: string) => {
    let error: string | undefined;
    if (!value) {
      error = "required";
    }
    if (cardTypeValue === "visa") {
      if (!/^4[0-9]{12}(?:[0-9]{3})?$/.test(value)) {
        error = "invalid card number (visa)";
      }
    }
    if (cardTypeValue === "masterCard") {
      if (
        !/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/.test(
          value
        )
      ) {
        error = "invalid card number (MasterCard)";
      }
    }
    if (cardTypeValue === "americanExpress") {
      if (!/^3[47][0-9]{13}$/.test(value)) {
        error = "invalid card number (American Express)";
      }
    }
    return error;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topic}>Now, let's start a payment process!</div>
      <hr className={styles.hr} />
      <div className={styles.current_total}>
        Current payment details: total <strong>{total} $</strong>
      </div>
      <div>
        <label htmlFor="cardType">Choose type of credit/debit card: </label>
        <div className={styles.radio_wrapper} onChange={handleCardTypeChange}>
          <div>
            <input
              readOnly
              checked={cardTypeValue === "visa"}
              value="visa"
              type="radio"
            />{" "}
            Visa
          </div>
          <div>
            <input
              readOnly
              checked={cardTypeValue === "masterCard"}
              value="masterCard"
              type="radio"
            />
            MasterCard
          </div>
          <div>
            <input
              readOnly
              checked={cardTypeValue === "americanExpress"}
              value="americanExpress"
              type="radio"
            />
            American Express
          </div>
        </div>
      </div>
      <div className={styles.checkout_form}>
        <Formik
          onSubmit={async (values: Values, { setSubmitting }) => {
            await sleep(2000);
            setPaymentDetails(values);
            setSubmitting(false);
            setStep(3);
          }}
          initialValues={{
            cardNumber: "",
            expirationDate: {
              month: "",
              year: "",
            },
            cvv: "",
            name: "",
          }}
        >
          {({ handleChange, values, isSubmitting }) => (
            <Form className={styles.grid}>
              <label className={styles.grid_1} htmlFor="cardNumber">
                Number
              </label>
              <Field
                disabled={cardTypeValue === ""}
                validate={cardNumberValidation}
                className={styles.grid_2}
                name="cardNumber"
                type="text"
              />
              <ErrorMessage
                className={styles.error}
                name="cardNumber"
                component="span"
              />
              <label className={styles.grid_1} htmlFor="expirationDate">
                Expiration date
              </label>
              <div className={styles.date}>
                Month
                <select
                  value={values.expirationDate.month}
                  onChange={handleChange}
                  name="expirationDate.month"
                >
                  <option value="">select month</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                </select>
                Year
                <select
                  value={values.expirationDate.year}
                  onChange={handleChange}
                  name="expirationDate.year"
                >
                  <option value="">select year</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>
              <ErrorMessage
                className={styles.error}
                name="expirationDate"
                component="span"
              />
              <label className={styles.grid_1} htmlFor="cvv">
                CVV
              </label>
              <Field
                validate={validators.cvv}
                className={styles.grid_2}
                name="cvv"
                type="text"
              />
              <ErrorMessage
                className={styles.error}
                name="cvv"
                component="span"
              />
              <label className={styles.grid_1} htmlFor="name">
                Name of cardholder
              </label>
              <Field
                validate={validators.string}
                className={styles.grid_2}
                name="name"
                type="text"
              />
              <ErrorMessage
                className={styles.error}
                name="name"
                component="span"
              />
              <Button
                className={styles.chekout_btn}
                disabled={
                  isSubmitting ||
                  values.expirationDate.month === "" ||
                  values.expirationDate.year === "" ||
                  values.cardNumber === "" ||
                  values.cvv === "" ||
                  values.name === ""
                }
                htmlType="submit"
                type="primary"
              >
                {" "}
                Submit{" "}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CheckoutForm;
