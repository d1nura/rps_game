import { Button } from "@material-ui/core";
import "./ButtonSetContainer.scss";

export const ButtonSetContainer = () => {
  const buttonArray = [
    {
      name: "Rock",
    },
    {
      name: "Paper",
    },
    {
      name: "Scissor",
    },
  ];
  return (
    <div className="ButtonSetContainer">
      {buttonArray.map((button) => {
        return <Button variant="outlined">{button.name}</Button>;
      })}
    </div>
  );
};
