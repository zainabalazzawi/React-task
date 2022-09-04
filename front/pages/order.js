import Header from "../components/Header/Header";
import FormFields from "../components/FormFields/FormFields";

export default function Order() {
  return (
    <div className={styles.container}>
      <Header title="Order" />

      <main className={styles.main}>
        Order
        <FormFields />
      </main>
    </div>
  );
}
