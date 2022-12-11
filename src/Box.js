import React from "react"

const Box = ({ id, height, width, color }) => {
    return (
        <span classname="Box">
            <div
                className="Box-colored"
                style={{
                    backgroundColor: { color },
                    height: `${ height }px`,
                    width: `${ width }px`,
                }}>
            </div>
        </span>
    )
}

export default Box;