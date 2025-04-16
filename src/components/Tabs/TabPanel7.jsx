/**
 * @typedef {object} TabPanel7Props 
 * @property {React.ReactNode} [props.children]
 */

/**
 * "article" element with role="tabpanel".
 * @param {TabPanel7Props | React.ComponentProps.<"article">} props 
 * @returns {React.ReactNode}
 */
export function TabPanel7({ children,  ...props }) {
    return (
        <article role="tabpanel" {...props}>
            {children}
        </article>
    )
}