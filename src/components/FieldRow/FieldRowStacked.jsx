/**
 * "div" element with class "field-row-stacked".
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 */
export function FieldRowStacked7({ children, ...props }) {
    return (
        <div className="field-row-stacked" {...props}>
            {children}
        </div>
    )
}