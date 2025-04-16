import { conditionString } from "../../utils/ternaryDie";
import { TreeViewNode7 } from "./TreeViewNode7";

/**
 * @typedef {object} TreeView7Props 
 * @property {?React.ReactNode} [children]
 * @property {boolean} [collapse=false] The has-collapse-button class can be used to change the expand/collapse cursors for buttons.
 * @property {boolean} [connector=false] The connector value may be used to render a dotted border to illustrate the structure more clearly.
 * @property {boolean} [container=true] Adds the "has-container" class.
 * @property {boolean} [root=false] Adds the "tree-view" class.
 * @property {string[]} [list] A list of "div" elements with role="option".
 */

/**
 * A tree view control is a special list box control that displays a set of objects as an indented outline based on their logical hierarchical relationship.
 * @param {TreeView7Props | React.Component<"ul">} props 
 * @returns {React.ReactNode}
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
                list && list.map(function (treeViewNode) {
                    return (
                        <TreeViewNode7 key={treeViewNode}>
                            {treeViewNode}
                        </TreeViewNode7>
                    )
                })
            }
            {children}
        </ul>
    )
}