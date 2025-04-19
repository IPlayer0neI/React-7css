/**
 * @typedef {object} FieldRow7Props
 * @property {React.ReactNode} [children]
 */

/**
 * "div" element with class "field-row".
 * @param {FieldRow7Props | React.ComponentProps<"div">}
 * @returns {React.ReactNode}
 */
export function FieldRow7({ children, className = "", ...props }) {
    return (
        <div className={`field-row ${className}`} {...props}>
            {children}
        </div>
    )
}