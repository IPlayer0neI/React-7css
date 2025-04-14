import { conditionString, dieTernary } from "../../utils/ternaryDie";

/**
 * "li" element.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {string} [props.imgLink] Place a link to place an image on the left side.
 * @param {boolean} [props.divider] Use a divider value to make a horizontal line after the menu item.
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