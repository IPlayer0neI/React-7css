import { conditionString, dieTernary } from "../../utils/ternaryDie";

/**
 * @typedef {object} MenuItem7Props 
 * @property {React.ReactNode} [props.children]
 * @property {string} [props.imgLink] Place a link to place an image on the left side.
 * @property {boolean} [props.divider] Use a divider value to make a horizontal line after the menu item.
 */

/**
 * "li" element.
 * @param {MenuItem7Props | React.ComponentProps.<"li">} props 
 * @returns {React.ReactNode}
 */
export function MenuItem7({ children, imgLink, divider, ...props }) {
    return (
        <li
            className={conditionString(divider, "has-divider")}
            role="menuitem"
            {...props}
        >
            {
                dieTernary(
                    imgLink,
                    <img src={imgLink} ></img>
                )
            }
            {children}
        </li >
    )
}