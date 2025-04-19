/**
 * @typedef {object} StatusBarField7Props 
 * @property {React.ReactNode} [children]
 */

/**
 * "p" element with class "status-bar-field".
 * @param {StatusBarField7Props | React.ComponentProps<"p">} props 
 * @returns {React.ReactNode}
 */
export function StatusBarField7({ children, className = "", ...props }) {
    return (
        <p className={`status-bar-field ${className}`} {...props}>
            {children}
        </p>
    )
}