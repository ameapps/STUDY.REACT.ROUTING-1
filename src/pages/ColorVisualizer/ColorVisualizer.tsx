import { ColorInput } from "./ColorInput";
import { ColorShower } from "./ColorShower";
import { SoundVisualilzer } from "./SoundVisualizer";

export function ColorVisualizer() {
    return (
        <>
            <div className="color-container">
                <ColorInput />
                <ColorShower />
            </div>
            <div className="sound-container">
                <SoundVisualilzer />
            </div>
        </>
    );
}