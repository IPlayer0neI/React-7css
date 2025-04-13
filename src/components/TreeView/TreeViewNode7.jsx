import { conditionObject } from "../../utils/ternaryDie"
import { TreeView7 } from "./TreeView7"

/**
 * "li" element.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.details=false] To create collapsible sections, add the "detials" value to wrap child lists inside detail elements.
 * @param {boolean} [props.open=false] Open property for "details".
 * @param {string} [props.summary] Automatically places the text inside the "summary" element.
 * @param {string[]} [props.list] A list of "li" element.
*/
export function TreeViewNode7({ children, details = false, open = false, list, summary, ...props }) {
    if (!details) {
        return (
            <li {...props}>
                {children}
            </li>
        )
    }

    return (
        <li {...props}>
            <details {...conditionObject({ open: open })}>
                {
                    summary && (
                        <summary>
                            {summary}
                        </summary>
                    )
                }
                {children}
                {
                    list && (
                        <TreeView7>
                            {
                                list.map(function(treeViewNode){
                                    return (
                                        <TreeViewNode7 key={treeViewNode}>
                                            {treeViewNode}
                                        </TreeViewNode7>
                                    )
                                })
                            }
                        </TreeView7>
                    )
                }
            </details>
        </li>
    )
}