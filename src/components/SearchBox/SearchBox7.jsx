import { SearchInput7 } from "./SearchInput7";
import { SearchButton7 } from "./SearchButton7";

/**
 * @typedef {object} SearchBox7Props 
 * @property {React.ReactNode} [children]
 * @property {boolean} [input=true] Automatically place an "input".
 * @property {boolean} [button=false] Automatically places a "button".
 * @property {string} [placeholder]  Placeholder property for "input".
 */

/**
 * With a Search box, users can quickly locate specific objects or text within a large set of data by filtering or highlighting matches.
 * @param {SearchBox7Props | React.ComponentProps<"div">} props 
 * @returns {React.ReactNode}
 */
export function SearchBox7({ children, input = true, button = false, placeholder, className = "", ...props }) {
    return (
        <div className={`searchbox ${className}`} {...props}>
            {children}
            {input && <SearchInput7 placeholder={placeholder} />}
            {button && <SearchButton7 />}
        </div>
    )
}