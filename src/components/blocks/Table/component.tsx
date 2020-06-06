import React from "react";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/DeleteOutline";

import useStyles from "./style";
import { IProps } from "./types";

const Table: React.FC<IProps> = ({
  tableHead,
  tableData,
  withEdit,
  withRemove,
}) => {
  const styles = useStyles();

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {tableHead.map((name) => {
            if (name === "price") {
              return (
                <td key={name} className={styles.th}>
                  {name} ($)
                </td>
              );
            } else {
              return (
                <td key={name} className={styles.th}>
                  {name.split(/(?=[A-Z])/).join(" ")}
                </td>
              );
            }
          })}
          {withEdit || withRemove ? (
            <td key="actions" className={styles.th}>
              actions
            </td>
          ) : null}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row: any) => (
          <tr key={row._id} className={styles.bodyTR}>
            {tableHead.map((headName) => {
              if (headName === "avatar") {
                return (
                  <td key={headName} className={styles.bodyTD}>
                    <img
                      src={row[headName]}
                      alt="avatar"
                      className={styles.avatar}
                    />
                  </td>
                );
              } else {
                return (
                  <td key={headName} className={styles.bodyTD}>
                    <div
                      className={
                        headName === "accountStatus" &&
                        row.accountStatus === "deletion"
                          ? styles.deletionStatus
                          : undefined
                      }
                    >
                      {row[headName]}
                    </div>
                  </td>
                );
              }
            })}
            {withEdit && withRemove ? (
              <td className={styles.bodyTD}>
                <Button
                  variant="outlined"
                  className={classNames(styles.button, styles.buttonEdit)}
                >
                  <EditIcon
                    className={classNames(styles.icon, styles.iconEdit)}
                  />
                </Button>
                <Button
                  variant="outlined"
                  className={classNames(styles.button, styles.buttonRemove)}
                  onClick={() => row.remove(row._id)}
                >
                  <DeleteIcon
                    className={classNames(styles.icon, styles.iconRemove)}
                  />
                </Button>
              </td>
            ) : null}
            {withRemove && !withEdit ? (
              <td className={styles.bodyTD}>
                <Button
                  variant="outlined"
                  className={classNames(styles.button, styles.buttonRemove)}
                  onClick={() => row.remove(row._id)}
                >
                  <DeleteIcon
                    className={classNames(styles.icon, styles.iconRemove)}
                  />
                </Button>
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
