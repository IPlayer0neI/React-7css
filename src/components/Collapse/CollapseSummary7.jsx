/**
 * "summary" element
 * @param {object} props 
 * @param {React.ReactNode} [props.children]
 */
export function CollapseSummary7({ children, ...props }){
    return (
        <summary {...props}>
            {children}
        </summary>
    )
}