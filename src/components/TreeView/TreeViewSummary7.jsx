/**
 * @typedef {object} TreeViewSummary7Props 
 * @property {React.ReactNode} [children] 
 */

/**
 * "summary" element.
 * @param {TreeViewSummary7Props | React.Component<"summary">} props 
 * @returns {React.ReactNode}
 */
export function TreeViewSummary7({ children, ...props }) {
    return (
        <summary {...props}>
            {children}
        </summary>
    )
}