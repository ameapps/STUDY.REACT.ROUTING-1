import { useContext, useMemo, useState } from "react";
import { ColorContext } from "../../context/color-context";
import { colors } from "../../consts/colors";

export function ColorInput() {
  const firstColor = useMemo(() => {
    return colors.at(0);
  }, [colors]);
  const [stateColor, setStateColor] = useState({ name: firstColor.name, hex: firstColor.hex });
  const { color, setColor } = useContext(ColorContext);

  /**Funzione per l'insemento in input */
  const onInputChange = (event) => {
    const value = event.target.value;
    setStateColor(value);
    const found = colors.find((row) => row.hex === value || row.name === value);
    if (found) {
        setStateColor({ name: found.name, hex: found.hex });
        setColor({ name: found.name, hex: found.hex });
    }
  };

  /**Imposto il colore selezionato */
  const setSelectedColor = (hex) => {
    const found = colors.find((row) => row.hex === hex);
    if (found) {
        setStateColor({ name: found.name, hex: found.hex });
        setColor({ name: found.name, hex: found.hex });
    }
  };

  return (
    <div className="color-in-container">
      <div className="flex-row">
        <input
          placeholder={stateColor.name}
          value={stateColor.name}
          onChange={(event) => onInputChange(event)}
        />
        <span className="color">testo scritto: {stateColor.name}</span>
      </div>
      <div className="flex-row">
        <select
          name="color-sel"
          value={stateColor.hex}
          id="color-sel"
          onChange={(e) => setSelectedColor(e.target.value)}
        >
          {colors.map((color) => (
            <option key={color.hex} value={color.hex}>
              {color.name}
            </option>
          ))}
        </select>
        <p className="color">colore selez. {stateColor.name}</p>
      </div>
    </div>
  );
}