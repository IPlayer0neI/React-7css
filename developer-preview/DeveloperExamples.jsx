import { Ballon7 } from "../src/components/Balloon/Ballon7";
import { Button7 } from "../src/components/Button/Button7";
import { CheckBox7 } from "../src/components/CheckBox/CheckBox7";
import { Collapse7 } from "../src/components/Collapse/Collapse7";
import { CollapseSummary7 } from "../src/components/Collapse/CollapseSummary7";
import { ComboBox7 } from "../src/components/ComboBox/ComboBox7";
import { ComboBoxButton7 } from "../src/components/ComboBox/ComboBoxButon7";
import { ComboBoxInput7 } from "../src/components/ComboBox/ComboBoxInput7";
import { ComboBoxOption7 } from "../src/components/ComboBox/ComboBoxOption7";
import { ComboBoxSelected7 } from "../src/components/ComboBox/ComboBoxSelected7";
import { Dropdown7 } from "../src/components/Dropdown/Dropdown7";
import { DropdownOption7 } from "../src/components/Dropdown/DropdownOption7";
import { FieldRow7 } from "../src/components/FieldRow/FieldRow7";
import { GroupBox7 } from "../src/components/GroupBox/GroupBox7";
import { GroupBoxLegend7 } from "../src/components/GroupBox/GroupBoxLegend7";
import { GroupBoxRadio7 } from "../src/components/GroupBox/GroupBoxRadio7";
import { ListBox7 } from "../src/components/ListBox/ListBox7";
import { ListBoxComplex7 } from "../src/components/ListBox/ListBoxComplex7";
import { Menu7 } from "../src/components/Navigation/Menu7";
import { MenuBar7 } from "../src/components/Navigation/MenuBar7";
import { MenuBarItem7 } from "../src/components/Navigation/MenuBarItem7";
import { MenuItem7 } from "../src/components/Navigation/MenuItem7";
import { MenuItemInput7 } from "../src/components/Navigation/MenuItemInput";
import { MenuItemText7 } from "../src/components/Navigation/MenuItemText7";
import { ProgressBar } from "../src/components/ProgressBar/ProgressBar";
import { ProgressBarError } from "../src/components/ProgressBar/ProgressBarError";
import { ProgressBarMarquee } from "../src/components/ProgressBar/ProgressBarMarquee";
import { ProgressBarPaused } from "../src/components/ProgressBar/ProgressBarPaused";
import { SearchBox7 } from "../src/components/SearchBox/SearchBox7";
import { Slider7 } from "../src/components/Slider/Slider7";
import { SliderVertical7 } from "../src/components/Slider/SliderVertical7";
import { Spinner7 } from "../src/components/Spinner/Spinner7";
import { TabMenu7 } from "../src/components/Tabs/TabMenu7";
import { TabMenuItem7 } from "../src/components/Tabs/TabMenuItem7";
import { TabPanel7 } from "../src/components/Tabs/TabPanel7";
import { Tabs7 } from "../src/components/Tabs/Tabs7";
import { TextArea7 } from "../src/components/TextBox/TextArea7";
import { TextBox7 } from "../src/components/TextBox/TextBox7";
import { TreeView7 } from "../src/components/TreeView/TreeView7";
import { TreeViewNode7 } from "../src/components/TreeView/TreeViewNode7";
import { TreeViewSummary7 } from "../src/components/TreeView/TreeViewSummary7";
import { Close7 } from "../src/components/Window/Controls/Close7";
import { Maximize7 } from "../src/components/Window/Controls/Maximize7";
import { Minimize7 } from "../src/components/Window/Controls/Minimize7";
import { StatusBar7 } from "../src/components/Window/StatusBar7";
import { StatusBarField7 } from "../src/components/Window/StatusBarField7";
import { TitleBar7 } from "../src/components/Window/TitleBar7";
import { TitleBarControls7 } from "../src/components/Window/TitleBarControls7";
import { Window7 } from "../src/components/Window/Window7";
import { WindowBody7 } from "../src/components/Window/WindowBody7";

function Spacer() {
    return (
        <div style={{ height: "20px" }}>

        </div>
    )
}

export default function App() {
    return (
        <div style={{ paddingLeft: "10px" }}>
            <h1>Ballon</h1>
            <Spacer />
            <Ballon7 vertical="bottom">
                A balloon is better known as tooltip in web development.
            </Ballon7>
            <Spacer />
            <Ballon7 vertical="bottom">
                This balloon is positioned bottom right of the source control (default behavior).
            </Ballon7>
            <Spacer />
            <Ballon7 vertical="bottom" horizontal="left">
                This balloon is positioned bottom left of the source control.
            </Ballon7>
            <Spacer />
            <Ballon7 horizontal="left">
                This balloon is positioned bottom left of the source control.
            </Ballon7>
            <Spacer />
            <Ballon7>
                This balloon is positioned bottom left of the source control.
            </Ballon7>
            <Spacer />
            <h1>Button</h1>
            <Button7>Click me</Button7>
            <Spacer />
            <Button7 disabled>I cannot be clicked</Button7>
            <Spacer />
            <Button7 classDefault>I cannot be clicked</Button7>
            <h1>CheckBox</h1>
            <Spacer />
            <CheckBox7 field={false}>
                This is a checkbox
            </CheckBox7>
            <Spacer />

            <CheckBox7 checked={true}>
                I am inactive
            </CheckBox7>
            <Spacer />

            <CheckBox7 disabled={true}>
                I am inactive but still checked
            </CheckBox7>
            <Spacer />

            <CheckBox7 checked={true} disabled={true}>
                I am inactive but still checked
            </CheckBox7>
            <h1>Collapse</h1>
            <Collapse7 summary="Expand me to see something interesting">
                <p>
                    🎉 Tadah!
                </p>
            </Collapse7>
            <Spacer />
            <Collapse7 open>
                <CollapseSummary7>
                    I open myself willingly
                </CollapseSummary7>
                <ul>
                    <li>This is my family</li>
                    <li>This is my house</li>
                    <li>This is my car</li>
                </ul>
            </Collapse7>
            <h1>ComboBox</h1>
            <ComboBox7 id="company" button list={["Facebook", "Amazon", "Apple", "Netflix", "Google"]} />
            <Spacer />
            <ComboBox7 input={false} button={false}>
                <ComboBoxInput7 />
                <ComboBoxButton7 />
                <ComboBoxSelected7>
                    <ComboBoxOption7>
                        Facebook
                    </ComboBoxOption7>
                    <ComboBoxOption7>
                        Amazon
                    </ComboBoxOption7>
                    <ComboBoxOption7>
                        Apple
                    </ComboBoxOption7>
                    <ComboBoxOption7>
                        Netflix
                    </ComboBoxOption7>
                    <ComboBoxOption7>
                        Googles
                    </ComboBoxOption7>
                </ComboBoxSelected7>
            </ComboBox7>
            <h1>Dropdown</h1>
            <Dropdown7 list={["5 - Incredible!", "4 -  Great!", "3 - Pretty good", "2 - Not so great", "1  - Unfortunate"]} />
            <Spacer />
            <Dropdown7>
                <DropdownOption7>
                    5 - Incredible!
                </DropdownOption7>
                <DropdownOption7>
                    4 -  Great!
                </DropdownOption7>
                <DropdownOption7>
                    3 - Pretty good
                </DropdownOption7>
                <DropdownOption7>
                    2 - Not so great
                </DropdownOption7>
                <DropdownOption7>
                    1  - Unfortunate
                </DropdownOption7>
            </Dropdown7>
            <h1>GroupBox</h1>
            <GroupBox7 name="fieldset-example" title="Select one:" list={["Diners", "Drive-Ins", "Dives"]} />
            <Spacer />
            <GroupBox7 name="fieldset-example2" legend="Today's mood" title="Select one:" list={["Diners2", "Drive-Ins2", "Dives2"]} />
            <Spacer />
            <GroupBox7>
                <GroupBoxLegend7>
                    Today's mood
                </GroupBoxLegend7>
                <GroupBoxRadio7 id="radio1" name="fieldset3">
                    Claire Saffitz
                </GroupBoxRadio7>
                <GroupBoxRadio7 id="radio2" name="fieldset3">
                    Brad Leone
                </GroupBoxRadio7>
                <GroupBoxRadio7 id="radio3" name="fieldset3">
                    Chris Morocco
                </GroupBoxRadio7>
                <GroupBoxRadio7 id="radio4" name="fieldset3">
                    Carla Lalli Music
                </GroupBoxRadio7>
            </GroupBox7>
            <h1>ListBox</h1>
            <ListBox7 multiple list={["5 - Incredible!", "4 -  Great!", "3 - Pretty good", "2 - Not so great", "1  - Unfortunate"]}></ListBox7>
            <Spacer />
            <ListBoxComplex7 hover={false} list={["Facebook", ["Amazon", "selected"], "Apple", "Netflix", "Google"]} />
            <Spacer />
            <ListBoxComplex7 list={["Facebook", "Amazon", "Apple", "Netflix", "Google"]} />
            <h1>Navigtion</h1>
            <h1>Menu</h1>
            <div style={{ width: "200px" }}>
                <Menu7 >
                    <MenuItem7 ariaHaspopup>
                        View
                    </MenuItem7>
                    <MenuItem7 ariaHaspopup>
                        Sort by
                        <Menu7 >
                            <MenuItem7>
                                <MenuItemText7>
                                    Name
                                </MenuItemText7>
                            </MenuItem7>
                            <MenuItem7>
                                <MenuItemText7>
                                    Size
                                </MenuItemText7>
                            </MenuItem7>
                            <MenuItem7>
                                <MenuItemText7>
                                    Item type
                                </MenuItemText7>
                            </MenuItem7>
                            <MenuItem7>
                                <MenuItemText7>
                                    Date modified
                                </MenuItemText7>
                            </MenuItem7>
                        </Menu7>
                    </MenuItem7>
                    <MenuItem7 divider>
                        <MenuItemText7 href="">
                            Refresh
                        </MenuItemText7>
                    </MenuItem7>
                    <MenuItem7 ariaDisabled>
                        <MenuItemText7>
                            Paste
                        </MenuItemText7>
                    </MenuItem7>
                    <MenuItem7 ariaDisabled divider>
                        <MenuItemText7>
                            Paste shortcut
                        </MenuItemText7>
                    </MenuItem7>
                    <MenuItem7>
                        <MenuItemText7>
                            screen resolution
                        </MenuItemText7>
                    </MenuItem7>
                    <MenuItem7>
                        <MenuItemText7>
                            Gadgets
                        </MenuItemText7>
                    </MenuItem7>
                    <MenuItem7>
                        <MenuItemText7>
                            Personalize
                        </MenuItemText7>
                    </MenuItem7>
                </Menu7>
                <Spacer />
                <Menu7>
                    <MenuItem7>
                        <MenuItemInput7 id="car1" name="poder" type="radio">
                            Large
                        </MenuItemInput7>
                    </MenuItem7>
                    <MenuItem7>
                        <MenuItemInput7 id="car2" name="poder" type="radio">
                            Medium icons
                        </MenuItemInput7>
                    </MenuItem7>
                    <MenuItem7 divider>
                        <MenuItemInput7 id="car3" name="poder" type="radio">
                            Small icons
                        </MenuItemInput7>
                    </MenuItem7>
                    <MenuItem7>
                        <MenuItemInput7 id="arrange" type="checkbox">
                            Auto arrange icons
                        </MenuItemInput7>
                    </MenuItem7>
                    <MenuItem7 >
                        <MenuItemInput7 id="align" type="checkbox">
                            Align icons to grid
                        </MenuItemInput7>
                    </MenuItem7>
                </Menu7>
            </div>
            <h1>MenuBar</h1>
            <MenuBar7 list={["File", "Edit", "View", "Help"]} />
            <Spacer />
            <MenuBar7>
                <MenuBarItem7 >
                    File
                    <Menu7>
                        <MenuItem7>
                            <MenuItemText7>
                                Open <span>Ctrl+O</span>
                            </MenuItemText7>
                        </MenuItem7>
                        <MenuItem7>
                            <MenuItemText7>
                                Save <span>Ctrl+S</span>
                            </MenuItemText7>
                        </MenuItem7>
                        <MenuItem7 divider>
                            <MenuItemText7>
                                Save As... <span>Ctrl+Shift+S</span>
                            </MenuItemText7>
                        </MenuItem7>
                        <MenuItem7>
                            <MenuItemText7>
                                Exit
                            </MenuItemText7>
                        </MenuItem7>
                    </Menu7>
                </MenuBarItem7>
                <MenuBarItem7>
                    Edit
                    <Menu7>
                        <MenuItem7>
                            <MenuItemText7>
                                Undo
                            </MenuItemText7>
                        </MenuItem7>
                        <MenuItem7>
                            <MenuItemText7>
                                Copy
                            </MenuItemText7>
                        </MenuItem7>
                        <MenuItem7>
                            <MenuItemText7>
                                Cut
                            </MenuItemText7>
                        </MenuItem7>
                        <MenuItem7 divider>
                            <MenuItemText7>
                                Paste
                            </MenuItemText7>
                        </MenuItem7>
                        <MenuItem7>
                            <MenuItemText7>
                                Delete
                            </MenuItemText7>
                        </MenuItem7>
                        <MenuItem7>
                            <MenuItemText7>
                                Find...
                            </MenuItemText7>
                        </MenuItem7>
                        <MenuItem7>
                            <MenuItemText7>
                                Replace...
                            </MenuItemText7>
                        </MenuItem7>
                        <MenuItem7>
                            <MenuItemText7>
                                Go to...
                            </MenuItemText7>
                        </MenuItem7>
                    </Menu7>
                </MenuBarItem7>
                <MenuBarItem7>
                    View
                    <Menu7>
                        <MenuItem7 ariaHaspopup>
                            Zoom
                            <Menu7>
                                <MenuItem7>
                                    <MenuItemText7>
                                        Zoom In
                                    </MenuItemText7>
                                </MenuItem7>
                                <MenuItem7>
                                    <MenuItemText7>
                                        Zoom Out
                                    </MenuItemText7>
                                </MenuItem7>
                            </Menu7>
                        </MenuItem7>
                        <MenuItem7>
                            <MenuItemText7>
                                Status Bar
                            </MenuItemText7>
                        </MenuItem7>
                    </Menu7>
                </MenuBarItem7>
                <MenuBarItem7>
                    Help
                    <Menu7>
                        <MenuItem7>
                            <MenuItemText7>
                                View Help
                            </MenuItemText7>
                        </MenuItem7>
                        <MenuItem7>
                            <MenuItemText7>
                                About
                            </MenuItemText7>
                        </MenuItem7>
                    </Menu7>
                </MenuBarItem7>
            </MenuBar7>
            <h1>OptionButton</h1>
            <GroupBoxRadio7 id="arg1" name="argfield">
                Yes
            </GroupBoxRadio7>
            <GroupBoxRadio7 id="arg2" name="argfield">
                No
            </GroupBoxRadio7>
            <Spacer />
            <GroupBoxRadio7 id="argu1" name="argfield2">
                Peanut butter should be smooth
            </GroupBoxRadio7>
            <GroupBoxRadio7 disabled id="argu2" name="argfield2" checked>
                I understand why people like crunchy peanut butter
            </GroupBoxRadio7>
            <GroupBoxRadio7 disabled id="argu3" name="argfield2">
                Crunchy peanut butter is good
            </GroupBoxRadio7>
            <h1>ProgressBar</h1>
            <ProgressBar ariaValuemin={0} ariaValuemax={100} ariaValuenow={80} />
            <Spacer />
            <ProgressBarPaused ariaValuemin={0} ariaValuemax={100} ariaValuenow={50} />
            <Spacer />
            <ProgressBarError ariaValuemin={0} ariaValuemax={100} ariaValuenow={30} />
            <Spacer />
            <ProgressBar animate ariaValuemin={0} ariaValuemax={100} ariaValuenow={30} />
            <Spacer />
            <ProgressBarMarquee />
            <h1>SearchBox</h1>
            <SearchBox7 placeholder="Search" />
            <Spacer />
            <SearchBox7 placeholder="Search" button />
            <h1>Slider</h1>
            <FieldRow7>
                Volume: Low<Slider7 />High
            </FieldRow7>
            <FieldRow7>
                Cowbell <SliderVertical7 />
            </FieldRow7>
            <h1>Spinner</h1>
            <Spinner7 />
            <Spinner7 />
            <Spinner7 animate />
            <h1>Tabs</h1>
            <Tabs7>
                <TabMenu7>
                    <TabMenuItem7 controls="tab1">
                        Instruction
                    </TabMenuItem7>
                    <TabMenuItem7 controls="tab2" selected>
                        Example
                    </TabMenuItem7>
                    <TabMenuItem7 controls="tab3">
                        More instruction
                    </TabMenuItem7>
                    <TabMenuItem7 disabled controls="tab4">
                        Disabled Tab
                    </TabMenuItem7>
                </TabMenu7>
                <TabPanel7 id="tab1">
                    <h3>Creating tabs</h3>
                    <p>
                        To create a tab, use a <code>menu</code> element with <code>role="tablist"</code>.
                        Then for the tab titles, use a <code>button</code> with <code>role="tab"</code>, and set the <code>aria-controls</code> attribute to
                        the corresponding id of the element with <code>role="tabpanel"</code>.
                    </p>
                    <p>
                        Read more at <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Tab_Role"
                            target="_blank">MDN Web docs - ARIA: tab role</a>
                    </p>
                </TabPanel7>
                <TabPanel7 hidden={false} id="tab2">
                    <h3>More...</h3>
                    <p>This tab contains a GroupBox</p>
                    <GroupBox7>
                        <GroupBoxLegend7>
                            Today's mood
                        </GroupBoxLegend7>
                        <GroupBoxRadio7 id="mood1" name="mood">
                            Claire Saffitz
                        </GroupBoxRadio7>
                        <GroupBoxRadio7 id="mood2" name="mood">
                            Brad Leone
                        </GroupBoxRadio7>
                        <GroupBoxRadio7 id="mood3" name="mood">
                            Chris Morocco
                        </GroupBoxRadio7>
                        <GroupBoxRadio7 id="mood4" name="mood">
                            Carla Lalli Music
                        </GroupBoxRadio7>
                    </GroupBox7>
                </TabPanel7>
                <TabPanel7 id="tab3">
                    <h3>Disabling tabs</h3>
                    <p>Simply add a <code>disabled</code> attribute on the tab.</p>
                    <h3>Justified tabs</h3>
                    <p>Add the <code>justified</code> class to the <code>tablist</code> menu to make the tabs, well, justified.</p>
                </TabPanel7>
            </Tabs7>
            <Spacer />
            <Tabs7>
                <TabMenu7>
                    <TabMenuItem7 controls="tabA">
                        Tab A
                    </TabMenuItem7>
                    <TabMenuItem7 controls="tab2" selected>
                        Tab B
                    </TabMenuItem7>
                    <TabMenuItem7 controls="tab3">
                        Tab C
                    </TabMenuItem7>
                    <TabMenuItem7 disabled controls="tab4">
                        Tab D
                    </TabMenuItem7>
                </TabMenu7 >
                <TabPanel7 id="tabA">
                    Tab A is active
                </TabPanel7>
                <TabPanel7 hidden={false} id="tabB">
                    Tab B is active
                </TabPanel7>
                <TabPanel7 id="tabC">
                    Tab C is active
                </TabPanel7>
                <TabPanel7 id="tabD">
                    Tab D is active
                </TabPanel7>
            </Tabs7 >
            <h1>TextBox</h1>
            <TextBox7 id="textbox">
                Occupation
            </TextBox7>
            <Spacer />
            <TextBox7 id="textbox2" stacked={true}>
                Address (Line 1)
            </TextBox7>
            <Spacer />
            <TextArea7 stacked>
                Additional notes
            </TextArea7>
            <h1>TreeView7</h1>
            <TreeView7 container root>
                <TreeViewNode7>
                    We can put
                </TreeViewNode7>
                <TreeViewNode7>
                    <strong style={{ color: "purple" }}>✨ Whatever ✨</strong>
                </TreeViewNode7>
                <TreeViewNode7>
                    We want in her
                </TreeViewNode7>
            </TreeView7>
            <Spacer />
            <TreeView7 container root>
                <TreeViewNode7>
                    Table of Contents
                </TreeViewNode7>
                <TreeViewNode7>
                    What is web development?
                </TreeViewNode7>
                <TreeViewNode7>
                    Css
                    <TreeView7>
                        <TreeViewNode7>
                            Selectors
                        </TreeViewNode7>
                        <TreeViewNode7>
                            Specificity
                        </TreeViewNode7>
                        <TreeViewNode7>
                            Properties
                        </TreeViewNode7>
                    </TreeView7>
                </TreeViewNode7>
                <TreeViewNode7 details>
                    <TreeViewSummary7>
                        JavaScript
                    </TreeViewSummary7>
                    <TreeView7>
                        <TreeViewNode7>
                            Avoid at all costs
                        </TreeViewNode7>
                        <TreeViewNode7 details>
                            <TreeViewSummary7>
                                Unless
                            </TreeViewSummary7>
                            <TreeView7>
                                <TreeViewNode7>
                                    Avoid
                                </TreeViewNode7>
                                <TreeViewNode7 details>
                                    <TreeViewSummary7>
                                        At
                                    </TreeViewSummary7>
                                    <TreeView7>
                                        <TreeViewNode7>
                                            Avoid
                                        </TreeViewNode7>
                                        <TreeViewNode7>
                                            At
                                        </TreeViewNode7>
                                        <TreeViewNode7>
                                            All
                                        </TreeViewNode7>
                                        <TreeViewNode7>
                                            Cost
                                        </TreeViewNode7>
                                    </TreeView7>
                                </TreeViewNode7>
                                <TreeViewNode7>
                                    All
                                </TreeViewNode7>
                                <TreeViewNode7>
                                    Cost
                                </TreeViewNode7>
                            </TreeView7>
                        </TreeViewNode7>
                    </TreeView7>
                </TreeViewNode7>
                <TreeViewNode7>
                    HTML
                </TreeViewNode7>
                <TreeViewNode7>
                    Special Thanks
                </TreeViewNode7>
            </TreeView7>
            <Spacer />
            <TreeView7 container root connector collapse>
                <TreeViewNode7 details>
                    <TreeViewSummary7>
                        JavaScript
                    </TreeViewSummary7>
                    <TreeView7>
                        <TreeViewNode7>
                            Avoid at all costs
                        </TreeViewNode7>
                        <TreeViewNode7 details>
                            <TreeViewSummary7>
                                Unless
                            </TreeViewSummary7>
                            <TreeView7>
                                <TreeViewNode7>
                                    Avoid
                                </TreeViewNode7>
                                <TreeViewNode7 details>
                                    <TreeViewSummary7>
                                        At
                                    </TreeViewSummary7>
                                    <TreeView7>
                                        <TreeViewNode7>
                                            Avoid
                                        </TreeViewNode7>
                                        <TreeViewNode7>
                                            At
                                        </TreeViewNode7>
                                        <TreeViewNode7>
                                            All
                                        </TreeViewNode7>
                                        <TreeViewNode7>
                                            Cost
                                        </TreeViewNode7>
                                    </TreeView7>
                                </TreeViewNode7>
                                <TreeViewNode7>
                                    All
                                </TreeViewNode7>
                                <TreeViewNode7>
                                    Cost
                                </TreeViewNode7>
                            </TreeView7>
                        </TreeViewNode7>
                    </TreeView7>
                </TreeViewNode7>
            </TreeView7>
            <h1>Window</h1>
            <h1>Title Bar</h1>
            <TitleBar7 label="A Title Bar">
                <TitleBarControls7>
                    <Minimize7 />
                    <Maximize7 />
                    <Close7 />
                </TitleBarControls7>
            </TitleBar7>
            <Spacer />
            <Window7>
                <TitleBar7 label="A complete window7">
                    <TitleBarControls7>
                        <Minimize7 />
                        <Maximize7 disabled />
                        <Close7 />
                    </TitleBarControls7>
                </TitleBar7>
            </Window7>
            <Spacer />
            <h1>Window7 body</h1>
            <Window7>
                <TitleBar7 label="A window7 with contents">
                    <TitleBarControls7>
                        <Minimize7 />
                        <Maximize7 />
                        <Close7 />
                    </TitleBarControls7>
                </TitleBar7>
                <WindowBody7 space>
                    <p>There's so much room for activities!</p>
                </WindowBody7>
            </Window7>
            <Spacer />
            <Window7>
                <TitleBar7 label="A window7 with contents">
                    <TitleBarControls7>
                        <Minimize7 />
                        <Maximize7 />
                        <Close7 />
                    </TitleBarControls7>
                </TitleBar7>
                <WindowBody7 space>
                    <p>There's so much room for activities!</p>
                </WindowBody7>
            </Window7>
            <h1>Status Bar</h1>
            <Window7>
                <TitleBar7 label="A Window7 With A Status Bar">
                    <TitleBarControls7>
                        <Minimize7 />
                        <Maximize7 />
                        <Close7 />
                    </TitleBarControls7>
                </TitleBar7>
                <WindowBody7 space>
                    <p> There are just so many possibilities:</p>
                    <ul>
                        <li>A Task Manager</li>
                        <li>A Notepad</li>
                        <li>Or even a File Explorer!</li>
                    </ul>
                </WindowBody7>
                <StatusBar7>
                    <StatusBarField7>
                        Press F1 for help
                    </StatusBarField7>
                    <StatusBarField7>
                        Slide 1
                    </StatusBarField7>
                    <StatusBarField7>
                        CPU Usage: 14%
                    </StatusBarField7>
                </StatusBar7>
            </Window7>
        </div >
    )
}