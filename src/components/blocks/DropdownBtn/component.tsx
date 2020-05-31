import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import classNames from "classnames";
import { useClickOutside } from "./hooks";

import useStyles from "./styles";
import { color_white } from "theme/variables";

interface IProps {
  avatarURL: string;
  fullName: string;
  balance: number;
  isVisible: boolean;
  buttonRef: any;
  handleToggle: () => void;
  handleClose: () => void;
}

const DropdownBtn: React.FC<IProps> = ({
  avatarURL,
  fullName,
  balance,
  isVisible,
  buttonRef,
  handleToggle,
  handleClose,
}) => {
  const styles = useStyles();
  useClickOutside(buttonRef, handleClose);

  return (
    <>
      <button
        type="button"
        className={classNames(styles.button, isVisible ? styles.active : null)}
        onClick={handleToggle}
        ref={buttonRef}
      >
        <img src={avatarURL} alt="avatar" className={styles.avatar} />
        <div className={styles.info}>
          <p className={styles.name}>{fullName}</p>
          <p className={styles.balance}>
            <AccountBalanceWalletIcon
              style={{
                fontSize: "1rem",
                marginRight: "5px",
                color: color_white,
              }}
              className={styles.icon}
            />
            Balance: {balance}$
          </p>
        </div>
        <ArrowDropDownIcon style={{ color: color_white }} />
      </button>
    </>
  );
};

export default DropdownBtn;
