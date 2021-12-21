import { ButtonSetContainer } from "./ButtonSetContainer";
import "./PlayerSection.scss";

export const PlayerSection = ({ type }: { type: "left" | "right" }) => {
  return (
    <div
      className={type === "left" ? "PlayerSection_Left" : "PlayerSection_Right"}
    >
      <ButtonSetContainer></ButtonSetContainer>
      <div className="PlayerSection_Avatar"></div>
    </div>
  );
};
