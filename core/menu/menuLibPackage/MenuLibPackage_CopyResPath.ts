import { EditorUtils } from "../../utils/EditorUtils";
import { MenuBase_Lib_Package } from "../MenuBase_Lib_Package";
export class MenuLibPackage_CopyResPath extends MenuBase_Lib_Package {

    protected InitMenuData() {
        const menuData = this.menuData;
        menuData.text = "复制图片路径";
        menuData.onSelected = () => this.OnSelected();
    }

    protected OnCreate() {

    }

    protected OnDestroy() {

    }

    private OnSelected() {
        // const targetRES = CS.FairyEditor.App.libView.GetSelectedResource();
        // EditorUtils.CopyItemPathes(targetRES.owner.items);
    }

}



















