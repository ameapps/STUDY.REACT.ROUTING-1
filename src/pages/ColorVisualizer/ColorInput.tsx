import { useState } from "react";


export function ColorInput() {
    const [color, setColor] = useState({name: '', hex: ''})

    /**Funzione per l'insemento in input */
    const onInputChange = (event) => {
        const value = event.target.value; 
        setColor(value);
        const found = colors.find(row => row.hex === value || row.name === value);
        if (found) setColor({name: found.name, hex: found.hex})
    }

    /**Imposto il colore selezionato */
    const setSelectedColor = (hex) => {
        const found = colors.find(row => row.hex === hex);
        if (found) setColor({name: found.name, hex: found.hex})
    }

    return <div className="color-in-container">
        <div className="flex-row">
            <input value={color.name} onChange={(event) => onInputChange(event)} />
            <span className="color">testo scritto: {color.name}</span>
        </div>
        <div className="flex-row">
            <select name="color-sel" value={color.hex} id="color-sel" onChange={(e) => setSelectedColor(e.target.value)}>
                {colors.map((color) => <option key={color.hex} value={color.hex}>{color.name}</option>)}
            </select>
            <p className="color">colore selez. {color.name}</p>
        </div>
    </div>;
}

export const colors = [
    { name: 'rosso', hex: '#FF0000' },
    { name: 'verde', hex: '#008000' },
    { name: 'blu', hex: '#0000FF' },
    { name: 'giallo', hex: '#FFFF00' },
    { name: 'arancione', hex: '#FFA500' },
    { name: 'viola', hex: '#800080' },
    { name: 'rosa', hex: '#FFC0CB' },
    { name: 'nero', hex: '#000000' },
    { name: 'bianco', hex: '#FFFFFF' },
    { name: 'grigio', hex: '#808080' },
    { name: 'marrone', hex: '#A52A2A' },
    { name: 'beige', hex: '#F5F5DC' },
    { name: 'turchese', hex: '#40E0D0' },
    { name: 'ciano', hex: '#00FFFF' },
    { name: 'magenta', hex: '#FF00FF' },
    { name: 'indaco', hex: '#4B0082' },
    { name: 'lavanda', hex: '#E6E6FA' },
    { name: 'corallo', hex: '#FF7F50' },
    { name: 'salmone', hex: '#FA8072' },
    { name: 'oro', hex: '#FFD700' },
    { name: 'argento', hex: '#C0C0C0' },
    { name: 'bronzo', hex: '#CD7F32' },
    { name: 'cremisi', hex: '#DC143C' },
    { name: 'scarlatto', hex: '#FF2400' },
    { name: 'amaranto', hex: '#E52B50' },
    { name: 'bordeaux', hex: '#800020' },
    { name: 'ruggine', hex: '#B7410E' },
    { name: 'ocra', hex: '#CC7722' },
    { name: 'avorio', hex: '#FFFFF0' },
    { name: 'ebano', hex: '#555D50' },
    { name: 'cobalto', hex: '#0047AB' },
    { name: 'oltremare', hex: '#3F00FF' },
    { name: 'acquamarina', hex: '#7FFFD4' },
    { name: 'smeraldo', hex: '#50C878' },
    { name: 'menta', hex: '#98FF98' },
    { name: 'lime', hex: '#00FF00' },
    { name: 'oliva', hex: '#808000' },
    { name: 'kaki', hex: '#C3B091' },
    { name: 'cioccolato', hex: '#7B3F00' },
    { name: 'caramello', hex: '#C68642' },
    { name: 'pesca', hex: '#FFCBA4' },
    { name: 'albicocca', hex: '#FBCEB1' },
    { name: 'glicine', hex: '#C9A0DC' },
    { name: 'lilla', hex: '#C8A2C8' },
    { name: 'malva', hex: '#E0B0FF' },
    { name: 'fucsia', hex: '#FF00FF' },
    { name: 'amarena', hex: '#9B1B30' },
    { name: 'mattone', hex: '#CB4154' },
    { name: 'sabbia', hex: '#C2B280' },
    { name: 'petrolio', hex: '#008080' },
];