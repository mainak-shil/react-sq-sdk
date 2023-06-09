// Dependencies
import * as React from "react";
import { CreditCard, PaymentForm } from "react-square-web-payments-sdk";
// const REACT_APP_SQUARE_URL=https://js.squareup.com/v2/paymentform
const REACT_APP_SQUARE_APP_ID = "sandbox-sq0idb-q2q-tylxR9DQ2GQodP7MdQ";
const REACT_APP_LOCATION_ID = "LVAWCPCSSWABF";

const SquarePaymentForm = () => (
  <PaymentForm
    /**
     * Identifies the calling form with a verified application ID generated from
     * the Square Application Dashboard.
     */
    applicationId={REACT_APP_SQUARE_APP_ID}
    /**
     * Invoked when payment form receives the result of a tokenize generation
     * request. The result will be a valid credit card or wallet token, or an error.
     */
    cardTokenizeResponseReceived={async (token, buyer) => {
      console.info({ token, buyer });
      let body = JSON.stringify({
        sourceId: token.token,
      });
      // const paymentResponse = await fetch('http://localhost:3001/pay', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body,
      // });

      // if (paymentResponse.ok) {
      //   return paymentResponse.json();
      // }
    }}
    /**
     * This function enable the Strong Customer Authentication (SCA) flow
     *
     * We strongly recommend use this function to verify the buyer and reduce
     * the chance of fraudulent transactions.
     */
    createVerificationDetails={() => ({
      amount: "1.00",
      /* collected from the buyer */
      billingContact: {
        addressLines: ["123 Main Street", "Apartment 1"],
        familyName: "Doe",
        givenName: "John",
        countryCode: "GB",
        city: "London",
      },
      currencyCode: "GBP",
      intent: "CHARGE",
    })}
    /**
     * Identifies the location of the merchant that is taking the payment.
     * Obtained from the Square Application Dashboard - Locations tab.
     */
    locationId={REACT_APP_LOCATION_ID}
  >
    <CreditCard />
  </PaymentForm>
);

export default SquarePaymentForm;
