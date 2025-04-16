/**
 * @typedef {object} DropdownOption7Props 
 * @property {React.ReactNode} [children] 
 */

/**
 * "option" element
 * @param {DropdownOption7Props | React.ComponentProps<"option">} props
 * @returns {React.ReactNode}
 */
export function DropdownOption7({ children, ...props }) {
    return (
        <option {...props}>
            {children}
        </option>
    )
}