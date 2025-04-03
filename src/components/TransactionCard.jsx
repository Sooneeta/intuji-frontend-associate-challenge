import { Card } from "./Card";
import GalleryIcon from "../assets/icons/gallery.svg";

export const TransactionCard = ({ items }) => {
  return (
    <Card title="Recent Transaction">
      <span
        style={{
          position: "absolute",
          color: "#4745A4",
          fontSize: "1rem",
          fontWeight: "500",
          right: 20,
        }}
      >
        See All
      </span>
      <hr
        style={{
          width: "100%",
          border: "1px solid #0D163A",
          opacity: "10%",
          margin: "0.75em auto",
        }}
      />
      <div className="transaction-items">
        {items?.map((item, index) => (
          <div className="transaction-item" key={index}>
            <section className="img-section">
              <img src={GalleryIcon} />
            </section>
            <section className="text-section">
              <div className="remarks-amount-container">
                <span className="remarks">{item.remarks}</span>
                <span className="amount">{item.amount}</span>
              </div>
              <div className="date-status-container">
                <span className="transaction-date">August 20,2022 </span>
                <span className="transaction-status">Completed</span>
              </div>
            </section>
          </div>
        ))}
      </div>
    </Card>
  );
};
