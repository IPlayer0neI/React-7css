/**
 * "p" element with class "title-bar-controls".
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 */
export function TitleBarControls7({ children, ...props }) {
    return (
        <div className="title-bar-controls" {...props}>
            {children}
        </div>
    )
}