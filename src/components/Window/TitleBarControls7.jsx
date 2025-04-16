/**
 * @typedef {object} TitleBarControls7Props 
 * @property {React.ReactNode} [children]
 */

/**
 * "p" element with class "title-bar-controls".
 * @param {TitleBarControls7Props | React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
 */
export function TitleBarControls7({ children, ...props }) {
    return (
        <div className="title-bar-controls" {...props}>
            {children}
        </div>
    )
}