
/**
 * @typedef {object} MenuItemInput7Props 
 * @property {React.ReactNode} [props.children]
 * @property {string} [props.id] Automatically puts the "id" in the "input" and "label"
 * @property {string} [props.legend] You can provide your group with a label by placing a legend value.
 * @property {"radio"|"checkbox"} [props.type="radio"] "Type" property with only two values.
 */

/**
 * "input" and "label" elements.
 * @param {MenuItemInput7Props | React.ComponentProps.<"input">} props 
 * @returns {React.ReactNode}
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