import PurchaseTable from "../components/PurchaseTable";
import PurchaseCard from "../components/PurchaseCard";

import useFetchPurchases from "../hooks/useFetchPurchases";
import useWindowSize from "../hooks/useWindowSize";

const Purchases = () => {
  const { purchases } = useFetchPurchases();
  const { isMobileSize } = useWindowSize();

  return (
    <div>
      <h1>Purchases</h1>

      {isMobileSize ? (
        <div>
          {purchases.map((purchase) => (
            <PurchaseCard key={purchase.id} purchase={purchase} />
          ))}
        </div>
      ) : (
        <PurchaseTable purchases={purchases} />
      )}
    </div>
  );
};

export default Purchases;
