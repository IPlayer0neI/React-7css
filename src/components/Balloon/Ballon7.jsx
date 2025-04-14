/**
 * @property {object} Vertical
 * @property {"is-top"} top
 * @property {"is-bottom"} bottom
 */
const Vertical = {
    "top": "is-top",
    "bottom": "is-bottom"
}

/**
 * @property {object} Vertical
 * @property {"is-left"} left
 * @property {"is-right"} right
 */
const Horizontal = {
    "left": "is-left",
    "right": "is-right"
}

/**
 * A balloon is a small pop-up window that informs users of a non-critical problem or special condition in a control.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {("top" | "bottom")} [props.vertical="top"] To change the position of the balloon, which subsequently changes the positioning of its tail, combine the respective vertical values.
 * @param {("left" | "right")} [props.horizontal="right"] To change the position of the balloon, which subsequently changes the positioning of its tail, combine the respective horizontal values.
 */
export function Ballon7({ children, vertical = "top", horizontal = "right", ...props }) {
    return (
        <div role="tooltip"
            className={`
        ${Vertical[vertical]}
        ${Horizontal[horizontal]}   
        `}
            {...props}
        >
            {children}
        </div>
    )
}
