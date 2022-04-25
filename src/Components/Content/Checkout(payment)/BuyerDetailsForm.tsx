import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Form.module.css";
import { Button } from "antd";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { validators } from "../Validators/Validators";

export interface BuyerValues {
  firstName: string;
  lastName: string;
  email: string;
  adress: {
    city: string;
    street: string;
  };
}
type PropsType = {
  handleBuyerDetails: (data: BuyerValues) => void;
  setStep: (step: number) => void;
  total: number;
};

const BuyerDetailsForm: React.FC<PropsType> = ({
  handleBuyerDetails,
  setStep,
  total,
}) => {
  useEffect(() => {
    return () => {
      <Navigate to="/cart" />;
    };
  });
  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  return (
    <div className={styles.wrapper}>
      <div className={styles.topic}>Now, let's start a payment process!</div>
      <hr className={styles.hr} />
      <div className={styles.current_total}>
        Current payment details: total <strong>{total} $</strong>
      </div>
      <div className={styles.checkout_form}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            adress: {
              city: "",
              street: "",
            },
          }}
          onSubmit={async (values: BuyerValues, { setSubmitting }) => {
            await sleep(1000);
            handleBuyerDetails(values);
            setSubmitting(false);
            setStep(2);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.grid}>
              <label className={styles.grid_1} htmlFor="firstName">
                First name
              </label>
              <Field
                className={styles.grid_2}
                validate={validators.string}
                type="text"
                name="firstName"
              />
              <ErrorMessage
                className={styles.error}
                name="firstName"
                component="span"
              />
              <label className={styles.grid_1} htmlFor="lastName">
                Last name
              </label>
              <Field
                className={styles.grid_2}
                validate={validators.string}
                type="text"
                name="lastName"
              />
              <ErrorMessage
                className={styles.error}
                name="lastName"
                component="span"
              />
              <label className={styles.grid_1} htmlFor="email">
                Email
              </label>
              <Field
                className={styles.grid_2}
                validate={validators.email}
                type="email"
                name="email"
              />
              <ErrorMessage
                className={styles.error}
                name="email"
                component="span"
              />
              <label className={styles.grid_1} htmlFor="adress.city">
                City
              </label>
              <Field
                className={styles.grid_2}
                validate={validators.string}
                type="text"
                name="adress.city"
              />
              <ErrorMessage
                className={styles.error}
                name="adress.city"
                component="span"
              />
              <label className={styles.grid_1} htmlFor="adress.street">
                Street
              </label>
              <Field
                className={styles.grid_2}
                validate={validators.string}
                type="text"
                name="adress.street"
              />
              <ErrorMessage
                className={styles.error}
                name="adress.street"
                component="span"
              />
              <Button
                className={styles.btn_submit}
                disabled={isSubmitting}
                type="primary"
                htmlType="submit"
              >
                OK
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BuyerDetailsForm;
