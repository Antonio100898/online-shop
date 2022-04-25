import { useState } from "react";
import { connect } from "react-redux";
import { CartItem, clearCart } from "../../../redux/cartReducer";
import { State } from "../../../redux/Store";
import BuyerDetailsForm, { BuyerValues } from "./BuyerDetailsForm";
import CheckoutForm, { Values } from "./CheckoutForm";
import Gratitude from "./Gratitude";
import PurchaseConfirmation from "./PurchaseConfirmation";

const PaymentProcess: React.FC<PropsType> = ({ total, items, clearCart }) => {
  const [step, setStep] = useState(1);
  const [buyerDetails, setBuyerDetails] = useState({}) as BuyerValues | any;
  const [paymentDetails, setPaymentDetails] = useState({}) as Values | any;

  const handleBuyerDetails = (data: BuyerValues) => {
    setBuyerDetails(data);
  };
  const stepHandler = () => {
    switch (step) {
      case 1:
        return (
          <BuyerDetailsForm
            total={total}
            setStep={setStep}
            handleBuyerDetails={handleBuyerDetails}
          />
        );
      case 2:
        return (
          <CheckoutForm
            setPaymentDetails={setPaymentDetails}
            setStep={setStep}
            total={total}
          />
        );
      case 3:
        return (
          <PurchaseConfirmation
            setStep={setStep}
            total={total}
            items={items}
            buyerDetails={buyerDetails}
            paymentDetails={paymentDetails}
          />
        );
      case 4:
        return <Gratitude clearCart={clearCart} />;
    }
  };
  return <div>{stepHandler()}</div>;
};
type PropsType = {
  total: number;
  items: Array<CartItem>;
  clearCart: () => void;
};
const mapStateToProps = (state: State) => ({
  total: state.cart.total,
  items: state.cart.items,
});
export default connect(mapStateToProps, { clearCart })(PaymentProcess);
