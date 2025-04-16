import { CollapseSummary7 } from "./CollapseSummary7";

/**
 * @typedef {object} Collapse7Props 
 * @property {React.ReactNode} [children] 
 * @property {string} [summary] Automatically puts text in the "summary".
 */

/**
 * Users can show or hide additional information including data, options, or commands.
 * @param {Collapse7Props | React.Component<"details">} props
 * @returns {React.ReactNode}
 */
export function Collapse7({ children, summary, ...props }) {
    return (
        <details {...props}>
            {
                summary && (
                    <CollapseSummary7>
                        {summary}
                    </CollapseSummary7>
                )
            }
            {children}
        </details>
    )
}