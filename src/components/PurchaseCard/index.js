import ImageAvatar from "../ImageAvatar";
import { parseDate } from "../../utils";
import "./style.scss";

const PurchaseCard = ({ purchase }) => {
  return (
    <div className="purchase-card">
      <div className="card-left">
        <div className="image-name">
          <ImageAvatar location={purchase.location} />
          <div className="name">{purchase.name}</div>
        </div>
        <div className="description">
          {purchase.description.replace("&#x27;", `'`)}
        </div>
        <div className="purchase-date">
          <div className="label">Purchase Date</div>
          <div>{parseDate(purchase.purchaseDate)}</div>
        </div>
      </div>
      <div className="price">${purchase.price / 100}</div>
    </div>
  );
};

export default PurchaseCard;
