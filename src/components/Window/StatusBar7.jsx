/**
 * A status bar is a special area within a window, typically the bottom, that displays information about the current state of what is being viewed in the window or any other contextual information, such as keyboard state.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 */
export function StatusBar7({ children, ...props }){
    return (
        <div className="status-bar" {...props}>
            {children}
        </div>
    )
}