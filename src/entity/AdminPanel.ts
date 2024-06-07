import React from "react";

export interface AdminPanel{
    name: string
    email: string
    permissions: string[]
    image?: string
}
export interface ISelect {
    menu: SelectMenu
    setSelectItem: React.Dispatch<React.SetStateAction<string[]>>;
    selectItem: string[];
}

export interface IDropDown {
    menu: PropsMenu
    children: React.ReactNode
    setSelectItem: React.Dispatch<React.SetStateAction<{ label: string; key: string }[]>>;
}
interface PropsMenu{
    items: ItemsDropDown[]
     selectable: boolean
    defaultSelectedKeys?: number[]
    key?: string

}
interface SelectMenu  extends PropsMenu{
    placeholder: string
    activeSelect?: string[]
}

interface ItemsDropDown {
    key: number
    label: string
    links?: string
    icon?: React.ReactComponentElement<any>
    component?: React.ComponentType<any>;
}

