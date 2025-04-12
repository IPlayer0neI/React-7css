
/**
 * "div" element with role="option".
 * @param {object} props 
 * @param {React.ReactNode} [props.children]
 */
export function ComboBoxOption7({ children, ...props }) {
    return (
        <div role="option" {...props}>
            {children}
        </div>
    )
}
const h = <ComboBoxOption7/>