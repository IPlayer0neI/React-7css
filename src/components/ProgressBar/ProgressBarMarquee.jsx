/**
 * "div" element with role="progressbar" and class "marquee".
 * @param {object} props
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