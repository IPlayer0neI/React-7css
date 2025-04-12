import React from "react";

/**
 * "input" and "label" elements.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.id] Automatically puts the "id" in the "input" and "label"
 * @param {string} [props.legend] You can provide your group with a label by placing a legend value.
 * @param {"radio"|"checkbox"} [props.type="radio"] "Type" property with only two values.
 */
export function MenuItemInput7({ id, legend, type = "radio", children, ...props }) {
    const label = legend || children;

    return (
        <>
            <input id={id} type={type}  {...props} />
            <label htmlFor={id}>
                {label}
            </label>
        </>
    )
}