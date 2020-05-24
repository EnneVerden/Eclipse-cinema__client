import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";

import useStyles from "./styles";
import { color_white } from "theme/variables";

interface IProps {
  avatarURL: string;
  fullName: string;
  balance: number;
  handleToggle: () => void;
}

const DropdownBtn: React.FC<IProps> = ({
  avatarURL,
  fullName,
  balance,
  handleToggle,
}) => {
  const styles = useStyles();

  return (
    <>
      <button type="button" className={styles.button} onClick={handleToggle}>
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
