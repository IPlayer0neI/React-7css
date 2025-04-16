/**
 * @typedef {object} ComboBoxSelected7Props 
 * @property {React.ReactNode} [props.children]
 */

/**
 * "ul" element with role="listbox".
 * @param {ComboBoxSelected7Props | React.ComponentProps.<"ul">}
 * @returns {React.ReactNode}
 */
export function ComboBoxSelected7({ children, ...props }) {
    return (
        <ul role="listbox" {...props} >
            {children}
        </ul>
    )
}