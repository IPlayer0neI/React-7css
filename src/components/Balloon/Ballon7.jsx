import React from "react"

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
 * @typedef {object} Ballon7Props
 * @property {React.ReactNode} [children]
 * @property {("top" | "bottom")} [vertical="top"] To change the position of the balloon, which subsequently changes the positioning of its tail, combine the respective vertical values.
 * @property {("left" | "right")} [horizontal="right"] To change the position of the balloon, which subsequently changes the positioning of its tail, combine the respective horizontal values.
 */

/**
 * A balloon is a small pop-up window that informs users of a non-critical problem or special condition in a control.
 * @param {Ballon7Props | React.Component<"div">} props
 * @returns {React.ReactNode}
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
<Ballon7 />
