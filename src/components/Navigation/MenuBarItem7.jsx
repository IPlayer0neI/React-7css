import React from "react";
import { MenuItem7 } from "./MenuItem7";

/**
 * "li" element
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 */
export function MenuBarItem7({ children, ...props }) {
    return (
        <MenuItem7 {...props}>
            {children}
        </MenuItem7>
    )
}