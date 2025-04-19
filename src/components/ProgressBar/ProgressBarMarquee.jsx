/**
 * "div" element with role="progressbar" and class "marquee".
 * @param {React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
 */
export function ProgressBarMarquee({ className = "", ...props }) {
    return (
        <div
            className={`marquee ${className}`}
            role="progressbar"
            {...props}
        >
        </div>
    )
}