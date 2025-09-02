import { MenuBase } from "./MenuBase";

/** 以 “资源库菜单” 做父菜单的菜单，继承该类的菜单都会出现在 “资源库菜单” 选项中 */
export abstract class MenuBase_LibFolder extends MenuBase {
    private static atIndex = 0;

    constructor() {
        super(CS.FairyEditor.App.libView.contextMenu_Folder);
        this.menuData.atIndex = MenuBase_LibFolder.atIndex++;
    }

    static AddSeperator() {
        CS.FairyEditor.App.libView.contextMenu_Folder.AddSeperator(MenuBase_LibFolder.atIndex);
    }
}