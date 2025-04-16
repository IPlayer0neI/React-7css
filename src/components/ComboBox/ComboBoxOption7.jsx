/**
 * @typedef {object} ComboBoxOption7Props 
 * @property {React.ReactNode} [children]
 */

/**
 * "div" element with role="option".
 * @param {ComboBoxOption7Props | React.ComponentProps<"div">}
 * @returns {React.ReactNode}
 */
export function ComboBoxOption7({ children, ...props }) {
    return (
        <div role="option" {...props}>
            {children}
        </div>
    )
}