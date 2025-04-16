/**
 * @typedef {object} ListBoxOption7Props
 * @property {React.ReactNode} [props.children]
 */

/**
 * "option" element.
 * @param {ListBoxOption7Props}
 * @returns {React.ReactNode}
 */
export function ListBoxOption7({ children, ...props }) {
    return (
        <option {...props}>
            {children}
        </option>
    )
}