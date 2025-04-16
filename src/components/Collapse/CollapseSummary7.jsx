/**
 * @typedef {object} CollaspSummary7Props 
 * @property {React.ReactNode} [children]
 */

/**
 * "summary" element
 * @param {CollaspSummary7Props | React.ComponentProps<"summary">}
 * @returns {React.ReactNode}
 */
export function CollapseSummary7({ children, ...props }) {
    return (
        <summary {...props}>
            {children}
        </summary>
    )
}