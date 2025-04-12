/**
 * "div" element with role="progressbar" and class "error"
 * @param {object} props
 * @param {number} [props.ariaValuemin]
 * @param {number} [props.ariaValuemax] 
 * @param {number} [props.ariaValuenow]
 */
export function ProgressBarError({
    ariaValuemin = 0,
    ariaValuemax = 100,
    ariaValuenow = 100,
    ...props
}) {
    return (
        <div
            className="error"
            role="progressbar"
            aria-valuemin={ariaValuemin}
            aria-valuemax={ariaValuemax}
            aria-valuenow={ariaValuenow}
            {...props}
        >
            <div style={{ width: ariaValuenow + "%" }}></div>
        </div>
    )
}