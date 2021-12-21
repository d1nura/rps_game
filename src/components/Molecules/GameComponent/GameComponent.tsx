import { Button } from "@material-ui/core";
import "./GameComponent.scss";
import { PlayerSection } from "./PlayerSection";

export const GameComponent = () => {
  return (
    <div className="GameComponent">
      <div className="GameComponent_PlaySection">
        <Button variant="contained" color="secondary">
          PLAY
        </Button>
      </div>
      <div className="GameComponent_ScoreSection">
        <p>score</p>
      </div>
      <div className="GameComponent_PlayArea">
        <PlayerSection type="left"></PlayerSection>
        <PlayerSection type="right"></PlayerSection>
      </div>
    </div>
  );
};
