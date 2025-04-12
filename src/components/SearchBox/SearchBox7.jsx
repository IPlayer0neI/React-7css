import { SearchInput7 } from "./SearchInput7"
import { SearchButton7 } from "./SearchButton7"

/**
 * With a Search box, users can quickly locate specific objects or text within a large set of data by filtering or highlighting matches.
 * @param {object} props
 * @param {React.ReactNode} [props.children]
 * @param {boolean} [props.input=true] Automatically place an "input".
 * @param {boolean} [props.button=false] Automatically places a "button".
 * @param {string} [props.placeholder]  Placeholder property for "input".
 */
export function SearchBox7({ children, input = true, button = false, placeholder, ...props }) {
    return (
        <div className="searchbox" {...props}>
            {children}
            {input && <SearchInput7 placeholder={placeholder} />}
            {button && <SearchButton7 />}
        </div>
    )
}