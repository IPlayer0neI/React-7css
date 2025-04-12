/**
 * "ul" element with role="listbox".
 * @param {object} props 
 * @param {React.ReactNode} [props.children]
 */
export function ComboBoxSelected7({ children, ...props }) {
    return (
        <ul role="listbox" {...props} >
            {children}
        </ul>
    )
}