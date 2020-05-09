// rename
import React from "react";

interface IProps {
  width?: string;
}

const Logo: React.FC<IProps> = ({ width }) => (
  <div>
    <img src="title.png" alt="logo" style={{ width }} />
  </div>
);

export default Logo;
