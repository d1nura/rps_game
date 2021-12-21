import { ReactChild } from "react";
import "./MainTemplate.scss";

export const MainTemplate = ({ children }: { children: ReactChild[] }) => {
  console.log("children :>> ", children);
  return (
    <div className="MainTemplate">
      {children[0]}
      <div style={{ padding: 24, height: "100%" }}>
        {children.map((element, index) => index > 0 && element)}
      </div>
    </div>
  );
};
