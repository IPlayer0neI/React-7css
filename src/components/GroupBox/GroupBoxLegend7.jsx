/**
 * @typedef {object} GroupBoxLegend7Props
 * @property {React.ReactNode} [children]
 */

/**
 * "legend" element.
 * @param {GroupBoxLegend7Props | React.ComponentProps<"legend">}
 * @returns {React.ReactNode}
 */
export function GroupBoxLegend7({ children, ...props }){
    return (
        <legend {...props}>
            {children}
        </legend>
    )
}