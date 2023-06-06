export interface Module {
    module_address: string;
    module_name: string;
}

export interface Struct extends Module {
    struct_name: string;
}