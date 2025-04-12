/**
 * "button" element with role="tab".
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 */
export function TabMenuItem7({ children, ...props }) {
    return (
        <button role="tab" {...props}>
            {children}
        </button>
    )
}