export interface ItemParam {
    id: number;
    name: string;
    className?: string;
}

export interface ItemParamModel {
    id: string;
    name: string;
}

export interface ItemCount extends ItemParam {
    count: number;
}

export interface ItemLink {
    id?: number;
    text: string;
    to: string;
    icon?: 'PLUS' | 'DOWNLOAD' | 'SEND';
    fnCallBack?: {
        actionMenu: (id: number) => void;
    };
}

export interface ItemId {
    id: number;
}

export interface ItemIds {
    ids: number[] | string[];
}

export interface ItemChecked {
    id: number;
    checked: boolean;
}

export interface ItemFile {
    id?: number;
    name: string;
    url: string;
    mineType?: string;
    fileSize?: number;
}

export interface FileParam {
    fileName: string;
    fileUrl: string;
    fileSize: number;
    mimeType: string;
}

export interface SelectOption {
    value: number;
    label: string;
}

export enum TrueFalse {
    ALL = 0,
    FALSE = 1,
    TRUE = 2,
}

export enum FileTypeParam {
    ARTICLE = 'article',
    USER = 'user',
    EXCEL = 'excel',
    CHAT = 'chat',
    ORDER = 'order',
}

export enum Language {
    EN = 'en',
    JP = 'jp',
    CN = 'cn',
}

export enum ItemStatus {
    //ALL = 0,
    INACTIVE = 1,
    ACTIVE = 2,
    WAIT = 3,
    CANCEL = 4,
}

export enum ItemParamType {
    GROUP = 'group',
}

// export const ItemStatusNames: ItemParam[] = [
//     { id: ItemStatus.INACTIVE, name: 'Không được duyệt', className: 'badge badge-glow bg-danger' },
//     { id: ItemStatus.ACTIVE, name: 'Đã duyệt', className: 'badge badge-glow bg-success' },
//     { id: ItemStatus.WAIT, name: 'Chờ duyệt', className: 'badge badge-glow bg-warning' },
//     { id: ItemStatus.CANCEL, name: 'Huỷ', className: 'badge badge-glow bg-dark' },
// ];

// export const ItemParamTypeNames = [
//     { id: ItemParamType.WAREHOUSE, name: 'Kho' },
//     { id: ItemParamType.MONEY_SOURCE, name: 'Nguồn tiền' },
//     { id: ItemParamType.BANK_ACCOUNT, name: 'Tài khoản ngân hàng' },
//     { id: ItemParamType.ORDER_ACCOUNT, name: 'Tài khoản đặt hàng' },
//     { id: ItemParamType.TRANSPORT_USER, name: 'Nhân viên giao hàng' },
// ];
