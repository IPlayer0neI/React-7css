/**
 * "p" element with class "status-bar-field".
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 */
export function StatusBarField7({ children, ...props }){
    return (
        <p className="status-bar-field" {...props}>
            {children}
        </p>
    )
}