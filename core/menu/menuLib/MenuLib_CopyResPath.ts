import { EditorUtils } from "../../utils/EditorUtils";
import { MenuBase_Lib } from "../MenuBase_Lib";
export class MenuLib_CopyResPath extends MenuBase_Lib {

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



















