declare interface Menu {
    subMenus: SubMenu[];
}

interface SubMenu {
    code: string;
    name: string;
    media: Media[];
    sections: MenuSection[];
}

interface MenuSection {
    code: string;
    name: string;
    media: Media[];
    items: any[];
}

interface Media {
    name: string;
    content: string;
}