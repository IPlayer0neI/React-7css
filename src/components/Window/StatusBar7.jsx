/**
 * @typedef {object} StatusBar7Props 
 * @property {React.ReactNode} [children]
 */

/**
 * A status bar is a special area within a window, typically the bottom, that displays information about the current state of what is being viewed in the window or any other contextual information, such as keyboard state.
 * @param {StatusBar7Props | React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
 */
export function StatusBar7({ children, className = "", ...props }) {
    return (
        <div className={`status-bar ${className}`} {...props}>
            {children}
        </div>
    )
}