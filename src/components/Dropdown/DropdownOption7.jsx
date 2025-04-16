/**
 * @typedef {object} DropdownOption7Props 
 * @property {React.ReactNode} [children] 
 */

/**
 * "option" element
 * @param {DropdownOption7Props | React.Component<"option">} props
 * @returns {React.ReactNode}
 */
export function DropdownOption7({ children, ...props }) {
    return (
        <option {...props}>
            {children}
        </option>
    )
}