/**
 * @typedef {object} ComboBoxButton7Props 
 * @property {React.ReactNode} [children]
 */

/**
 * "button" element.
 * @param {ComboBoxButton7Props | React.Component<"button">}
 * @returns {React.ReactNode}
 */
export function ComboBoxButton7({ children, ...props }) {
    return <button {...props}>{children}</button>
}