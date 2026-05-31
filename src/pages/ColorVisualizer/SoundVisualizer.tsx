import { useContext } from "react";
import { ColorContext } from "../../context/color-context";

export function SoundVisualilzer() {
  const { color, setColor } = useContext(ColorContext);
  return (
    <div className="sound-container">
      <p className="sound-presentation">
        Mostro l'audio che meglio si abbina al colore selezionato
      </p>
      <p className="context-value">
        <strong>Color from context: </strong>
        {color.name}
      </p>
    </div>
  );
}
