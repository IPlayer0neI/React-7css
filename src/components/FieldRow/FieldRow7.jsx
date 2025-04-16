/**
 * @typedef {object} FieldRow7Props
 * @property {React.ReactNode} [children]
 */

/**
 * "div" element with class "field-row".
 * @param {FieldRow7Props | React.Component<"div">}
 * @returns {React.ReactNode}
 */
export function FieldRow7({ children, ...props }) {
    return (
        <div className="field-row" {...props}>
            {children}
        </div>
    )
}