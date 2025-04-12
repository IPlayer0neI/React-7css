/**
 * "legend" element.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 */
export function GroupBoxLegend7({ children, ...props }){
    return (
        <legend {...props}>
            {children}
        </legend>
    )
}