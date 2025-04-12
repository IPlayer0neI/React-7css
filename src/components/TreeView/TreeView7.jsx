import { conditionString } from "../../utils/ternaryDie"
import { TreeViewNode7 } from "./TreeViewNode7"

/**
 * A tree view control is a special list box control that displays a set of objects as an indented outline based on their logical hierarchical relationship.
 * @param {object} props
 * @param {?React.ReactNode} [props.children]
 * @param {boolean} [props.collapse=false] The has-collapse-button class can be used to change the expand/collapse cursors for buttons.
 * @param {boolean} [props.connector=false] The connector value may be used to render a dotted border to illustrate the structure more clearly.
 * @param {boolean} [props.container=true] Adds the "has-container" class.
 * @param {boolean} [props.root=false] Adds the "tree-view" class.
 * @param {string[]} [props.list] A list of "div" elements with role="option".
*/
export function TreeView7({ children, collapse = false, connector = false, container = true, list, root = false, ...props }) {
    return (
        <ul className={
            `
            ${conditionString(root, "tree-view")} 
            ${conditionString(container, "has-container")} 
            ${conditionString(collapse, "has-collapse-button")} 
            ${conditionString(connector, "has-connector")}
            `}
            {...props}
        >
            {
                list && list.map(function(treeViewNode){
                    return (
                        <TreeViewNode7>
                            {treeViewNode}
                        </TreeViewNode7>
                    )
                })
            }
            {children}
        </ul>
    )
}