import React, { useState } from "react";

/** Form for creating a new colored box to add to the page.
 *
 * Has state for the height/width and color of the item; 
 * on submission, sends {height, width, color} to fn rec'd from parent.
 * 
 */

const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = { height: "", width: "", color: "" }
    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    /**Send {height, width, color} to parent and clear form */

    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE);
    }

    return (
        <form className="NewBoxForm" onSubmit={handleSubmit}>
            <label htmlFor="height" >Height </label>
            <input
                id="height"
                type="text"
                name="height"
                placeholder="100"
                value={formData.height}
                onChange={handleChange} />
            
            <label htmlFor="height" >Width </label>
            <input
                id="width"
                type="text"
                name="width"
                placeholder="100"
                value={formData.width}
                onChange={handleChange} />
            
            <label htmlFor="color" >Color </label>
            <input
                id="color"
                type="color"
                name="color"
                // placeholder="100"
                value={formData.color}
                onChange={handleChange} />
            
            <button>Add</button>
        </form>
    )

}

export default NewBoxForm;