import Header from "../components/Header/Header";
import FormFields from "../components/FormFields/FormFields";

export default function Orders() {
  return (
    <div className="">
      <Header title="Orders" />

      <main className=" inline-grid  grid-cols-[1fr,1fr] p-5 justify-items-center items-centers w-full">
        <div
          className="justify-self-start ml-3
        mt-3 text-lg "
        >
          your Order
        </div>
        <div className=" ">
          <FormFields />
        </div>
      </main>
    </div>
  );
}
