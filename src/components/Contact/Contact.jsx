import css from "./Contact.module.css";
import { CgProfile } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";
const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={css.container}>
        <div className={css.text}>
      <p className={css.name}><CgProfile  size="20"/>{name}</p>
      <p className={css.number}><BsTelephoneFill size="20" />{number}</p>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
      
    </div>
  );
};

export default Contact;
