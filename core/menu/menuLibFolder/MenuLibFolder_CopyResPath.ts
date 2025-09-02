import { EditorUtils } from "../../utils/EditorUtils";
import { MenuBase_LibFolder } from "../MenuBase_Lib_Folder";
export class MenuLibFolder_CopyResPath extends MenuBase_LibFolder {

    protected InitMenuData() {
        const menuData = this.menuData;
        menuData.text = "复制路径";
        menuData.onSelected = () => this.OnSelected();
    }

    protected OnCreate() {

    }

    protected OnDestroy() {

    }

    private OnSelected() {
        const items = CS.FairyEditor.App.libView.GetSelectedResource();
        
        CS.FairyEditor.Clipboard.SetText(`"${items.file.replace(/\\/g, "/")}";`);
    }


}



















