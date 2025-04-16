/**
 * @typedef {object} MenuItemText7Props 
 * @property {React.ReactNode} [children]
 */

/**
 * "a" element.
 * @param {MenuItemText7Props | React.Component<"a">} props 
 * @returns {React.ReactNode}
 */
export function MenuItemText7({ children, ...props }) {
    return (
        <a {...props}>{children}</a>
    )
}