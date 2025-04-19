/**
 * @typedef {object} TitleBarText7Props 
 * @property {React.ReactNode} [children]
 */

/**
 * "div" element with class "title-bar-text"
 * @param {TitleBarText7Props | React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
 */
export function TitleBarText7({ children, label, className = "", ...props }) {
    return (
        <div className={`title-bar-text ${className}`} {...props}>
            {label || children}
        </div>
    )
}