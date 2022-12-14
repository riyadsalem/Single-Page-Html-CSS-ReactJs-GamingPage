import "./Card.css";
import { FaDownload, FaStar } from "react-icons/fa";
// import { BsFillBrightnessHighFill } from "react-icons/bs";
const Card = (props) => {
  return (
    <>
      <div className="most-popular-item">
        <div className="card-wrapper">
          <img className="most-popular-image" src={props.image} />
          <div className="most-popular-item-content">
            <h4 className="most-popular-item-title">
              {props.title} <br />
              <span>{props.category}</span>
            </h4>
            <ul>
              <li>
                <span style={{ color: "var(--color--icons)" }}>
                  <FaStar />
                </span>
                &nbsp;
                <span>{props.rate}</span>
              </li>
              <li>
                <span style={{ color: "var(--color--primary)" }}>
                  <FaDownload />
                </span>
                &nbsp;
                <span>{props.download}</span>
              </li>
            </ul>
          </div>
          {/* End:  most-popular-item-content*/}
        </div>
        {/* End: card-wrapper */}
      </div>
      {/* End: most-popular-item */}
    </>
  );
};

export default Card;
