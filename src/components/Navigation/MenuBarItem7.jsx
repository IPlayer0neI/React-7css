import { MenuItem7 } from "./MenuItem7";

/**
 * @typedef {object} MenuBarItem7Props 
 * @property {React.ReactNode} [children]
 */

/**
 * "li" element
 * @param {MenuBarItem7Props | React.Component<"li">} props 
 * @returns {React.ReactNode}
 */
export function MenuBarItem7({ children, ...props }) {
    return (
        <MenuItem7 {...props}>
            {children}
        </MenuItem7>
    )
}