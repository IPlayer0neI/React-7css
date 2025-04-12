/**
 * "li" element with role="option".
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 */
export function ListBoxComplexOption7({ children, ...props }) {
    return (
        <li role="option"  {...props}>
            {children}
        </li>
    )
}