import { CollapseSummary7 } from "./CollapseSummary7";

/**
 * Users can show or hide additional information including data, options, or commands.
 * @param {object} props 
 * @param {React.ReactNode} [props.children] 
 * @param {string} [props.summary] Automatically puts text in the "summary".
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