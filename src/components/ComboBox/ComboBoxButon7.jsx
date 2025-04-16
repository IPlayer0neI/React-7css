/**
 * @typedef {object} ComboBoxButton7Props 
 * @property {React.ReactNode} [props.children]
 */

/**
 * "button" element.
 * @param {ComboBoxButton7Props | React.ComponentProps.<"button">}
 * @returns {React.ReactNode}
 */
export function ComboBoxButton7({ children, ...props }) {
    return <button {...props}>{children}</button>
}