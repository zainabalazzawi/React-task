import React from "react";

const FormFields = () => {
  return (
    <div className="bg-emerald-700   rounded-2xl">
      <form className="inline-grid grid-rows-4 gap-5  p-20 ">
        <input className="p-3 px-6  " placeholder="FirstName" />
        <input className="p-3 px-6 " placeholder="SurName" />
        <input className="p-3 px-6  " placeholder="City" />
        <input className="p-3 px-6 " placeholder="Postal Code" />
        <button className="mt-8 bg-zinc-400 py-3 rounded-2xl">
          Order & Pay
        </button>
      </form>
    </div>
  );
};

export default FormFields;
