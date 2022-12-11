import React from "react"
import "./Box.css"

const Box = ({ id, height, width, color }) => {
    return (
        <div classname="Box">
            <div
                className="Box-colored"
                style={{
                    backgroundColor: color,
                    height: `${ height }px`,
                    width: `${ width }px`,
                }}>
            </div>
        </div>
    )
}

export default Box;