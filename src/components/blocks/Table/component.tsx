import React from "react";
import classNames from "classnames";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/DeleteOutline";

import useStyles from "./style";

interface IProps {
  tableHead: string[];
  tableData: any;
  withEdit?: boolean;
  withRemove?: boolean;
}

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
          {tableHead.map((name) => (
            <td key={name} className={styles.th}>
              {name.split(/(?=[A-Z])/).join(" ")}
            </td>
          ))}
          {withEdit || withRemove ? (
            <td key="actions" className={styles.th}>
              actions
            </td>
          ) : null}
        </tr>
      </thead>
      <tbody>
        {tableData.map((row: any, index: number) => (
          <tr key={row._id} className={styles.bodyTR}>
            {tableHead.map((headName) => (
              <td key={headName} className={styles.bodyTD}>
                <div>{row[headName]}</div>
              </td>
            ))}
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
                >
                  <DeleteIcon
                    className={classNames(styles.icon, styles.iconRemove)}
                  />
                </Button>
              </td>
            ) : (
              <td className={styles.bodyTD}>
                <Button
                  variant="outlined"
                  className={classNames(styles.button, styles.buttonRemove)}
                >
                  <DeleteIcon
                    className={classNames(styles.icon, styles.iconRemove)}
                  />
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
