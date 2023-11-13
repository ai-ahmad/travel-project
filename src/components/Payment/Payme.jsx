import React, { useState, useEffect } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    merchant: "654b6de51165466b837678fe",
    amount: "10",
  });

  const [buttonStyle, setButtonStyle] = useState({
    cursor: "pointer",
    border: "1px solid #ebebeb",
    borderRadius: "6px",
    background: "linear-gradient(to top, #f1f2f2, white)",
    width: "54px",
    height: "54px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  useEffect(() => {
    // You can use Axios here to send a POST request when the button is clicked.
    const handleSubmit = async () => {
      try {
        const response = await axios.post(
          "https://checkout.paycom.uz",
          formData
        );
        // Handle the response as needed
        console.log(response);
      } catch (error) {
        // Handle errors here
        console.error(error);
      }
    };

    // Attach the submit handler to the form
    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);

    // Clean up the event listener when the component unmounts
    return () => {
      form.removeEventListener("submit", handleSubmit);
    };
  }, [formData]);

  return (
    <div>
      <form method="POST" action="https://checkout.paycom.uz">
        {Object.entries(formData).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} />
        ))}
        <button type="submit" style={buttonStyle}>
          <img
            style={{ width: "42px", height: "42px" }}
            src="https://cdn.payme.uz/help/payme-business-help/ru/resources/payme_01_small.png#pd"
          />
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
