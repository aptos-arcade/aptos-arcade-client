import {ReactNode} from "react";

export interface Controls {
    title: string
    keys: Key[][]
}

export interface Key {
    name: string
    key: ReactNode
}
