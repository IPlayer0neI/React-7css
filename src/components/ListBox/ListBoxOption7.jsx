/**
 * "option" element.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 */
export function ListBoxOption7({ children, ...props }) {
    return (
        <option {...props}>
            {children}
        </option>
    )
}