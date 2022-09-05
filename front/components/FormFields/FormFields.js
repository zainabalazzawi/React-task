import React from "react";

const FormFields = () => {
  return (
    <div>
      <form className="inline-grid grid-rows-4 gap-4 ">
        <input placeholder="FirstName" />
        <input placeholder="SurName" />
        <input placeholder="City" />
        <input placeholder="Postal Code" />
        <button>Order & Pay</button>
      </form>
    </div>
  );
};

export default FormFields;
