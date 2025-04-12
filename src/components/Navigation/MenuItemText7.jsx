import React from "react";

/**
 * "a" element.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 */
export function MenuItemText7({ children, ...props }){
    return (
        <a {...props}>{children}</a>
    )
}