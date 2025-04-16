/**
 * @typedef {object} ListBoxComplexOption7Props
 * @property {React.ReactNode} [children]
 */

/**
 * "li" element with role="option".
 * @param {ListBoxComplexOption7Props | React.Component<"li">}
 * @returns {React.ReactNode}
 */
export function ListBoxComplexOption7({ children, ...props }) {
    return (
        <li role="option"  {...props}>
            {children}
        </li>
    )
}