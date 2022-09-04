import Header from "../components/Header/Header";
import FormFields from "../components/FormFields/FormFields";

export default function Order() {
  return (
    <div className="">
      <Header title="Order" />

      <main>
        Order
        <FormFields />
      </main>
    </div>
  );
}
