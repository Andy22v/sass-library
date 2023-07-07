import React, { useEffect, useState } from "react";

import { FaCheck } from "react-icons/fa6";

import styles from "./InputCheckbox.module.scss";

const InputCheckbox = (checked) => {
  //   const { checked } = props || null;
  const [isChecked, setIsChecked] = useState(checked);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    setIsChecked(isChecked);
  }, [isChecked]);

  return (
    <label className={styles.InputCheckbox}>
      <input
        className={`${styles.input} ${isChecked ? styles.activeInput : ""}`}
        type="checkbox"
        defaultChecked={isChecked}
        onClick={() => toggleCheckbox()}
      />
      <span
        className={`${styles.checked} ${isChecked ? styles.activeChecked : ""}`}
      >
        <FaCheck />
      </span>
    </label>
  );
};

export default InputCheckbox;
