import ControllerIcon from "../icons/svg/ControllerIcon";
import ImageAvatar from "../ImageAvatar";
import { parseDate } from "../../utils";

import "./style.scss";

export const CategoryWidget = ({ category }) => {
  return (
    <span data-testid="category-widget" className={`category-cell ${category}`}>
      {category}
    </span>
  );
};

export const headers = [
  "Name",
  "Location",
  "Purchase Date",
  "Category",
  "Description",
  "Price",
];

const PurchaseTable = ({ purchases }) => {
  return (
    <div className="table">
      <div className="table-head">
        <div className="table-row">
          <div />
          {headers.map((item) => (
            <div key={item} className={`th-${item}`}>
              {item}
            </div>
          ))}
          <div />
        </div>
      </div>
      <div className="table-body">
        {purchases.map((item) => (
          <div key={item.id} className="table-row">
            <div />
            <div className="name">{item.name}</div>
            <div>
              <ImageAvatar location={item.location} />
            </div>
            <div className="purchase-date">{parseDate(item.purchaseDate)}</div>
            <div className="category">
              <CategoryWidget category={item.category} />
            </div>
            <div className="description">
              {item.description.replace("&#x27;", `'`)}
            </div>
            <div className="price">${item.price / 100}</div>
            <div className="controller">
              <ControllerIcon />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseTable;
