import { conditionObject } from "../../utils/ternaryDie";
import { TreeView7 } from "./TreeView7";

/**
 * @typedef {object} TreeViewNode7Props 
 * @property {React.ReactNode} [children]
 * @property {boolean} [details=false] To create collapsible sections, add the "detials" value to wrap child lists inside detail elements.
 * @property {boolean} [open=false] Open property for "details".
 * @property {string} [summary] Automatically places the text inside the "summary" element.
 * @property {string[]} [list] A list of "li" element.
 */

/**
 * "li" element.
 * @param {TreeViewNode7Props | React.ComponentProps<"li">} props 
 * @returns {React.ReactNode}
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
                                list.map(function (treeViewNode) {
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