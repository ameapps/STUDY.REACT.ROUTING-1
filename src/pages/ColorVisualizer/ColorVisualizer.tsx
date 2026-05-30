import { ColorInput } from "./ColorInput";
import { ColorShower } from "./ColorShower";

export function ColorVisualizer() {
    return (
        <div className="color-container">
            <ColorInput />
            <ColorShower />
        </div>
    );
}