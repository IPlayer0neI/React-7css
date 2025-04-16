/**
 * "div" element with role="progressbar" and class "marquee".
 * @param {React.Component<"div">} props 
 * @returns {React.ReactNode}
 */
export function ProgressBarMarquee({ ...props }) {
    return (
        <div
            className="marquee"
            role="progressbar"
            {...props}
        >
        </div>
    )
}