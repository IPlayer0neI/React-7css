/**
 * "option" element
 * @param {object} props 
 * @param {React.ReactNode} [props.children] 
 */
export function DropdownOption7({ children, ...props }) {
    return (
        <option {...props}>
            {children}
        </option>
    )
}