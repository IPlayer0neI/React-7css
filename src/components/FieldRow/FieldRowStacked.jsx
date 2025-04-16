/**
 * @typedef {object} FieldRowStacked7Props
 * @property {React.ReactNode} [children]
 */

/**
 * "div" element with class "field-row-stacked".
 * @param {FieldRowStacked7Props | React.Component<"div">}
 * @returns {React.ReactNode}
 */
export function FieldRowStacked7({ children, ...props }) {
    return (
        <div className="field-row-stacked" {...props}>
            {children}
        </div>
    )
}