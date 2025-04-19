/**
 * @typedef {object} FieldRowStacked7Props
 * @property {React.ReactNode} [children]
 */

/**
 * "div" element with class "field-row-stacked".
 * @param {FieldRowStacked7Props | React.ComponentProps<"div">}
 * @returns {React.ReactNode}
 */
export function FieldRowStacked7({ children, className = "", ...props }) {
    return (
        <div className={`field-row-stacked ${className}`} {...props}>
            {children}
        </div>
    )
}