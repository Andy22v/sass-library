import styles from "./Button.module.scss";
import { FaArrowRight } from "react-icons/fa6";

const Button = (props) => {
  const { icon, label, iconLeft, outline, size } = props || null;

  console.log(size);
  return (
    <div>
      {label && (
        <button
          className={`${styles.Button} 
          ${iconLeft ? styles.iconLeft : ""}
          ${outline ? styles.outline : styles.fill}
          ${size ? styles[size] : styles.md}`}
        >
          label
          {icon && <FaArrowRight />}
        </button>
      )}
    </div>
  );
};

export default Button;
