/**
 * "article" element with role="tabpanel".
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 */
export function TabPanel7({ children,  ...props }) {
    return (
        <article role="tabpanel" {...props}>
            {children}
        </article>
    )
}