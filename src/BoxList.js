import React, { useState } from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
    const INITIAL_STATE = [
        { id: uuid(), height: 100, width: 100, color: "#5AADBF" },
        { id: uuid(), height: 200, width: 200, color: "#F2BC1B" },
        { id: uuid(), height: 150, width: 150, color: "#A60D61" }
    ]
    const [boxes, setBoxes] = useState(INITIAL_STATE);
    const addBox = (newBox) => {
        //make a new array with the original boxes and adds an object containing the new box
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }]);
    };

    return (
        <div>
            <h1>Color Box Maker</h1>
            <NewBoxForm addBox={addBox} />

            <div>
                {boxes.map(({ id, height, width, color }) =>
                    <Box
                        id={id}
                        key={id}
                        height={height}
                        width={width}
                        color={color}
                    />)}
            </div>
        </div>
    )
};

export default BoxList;