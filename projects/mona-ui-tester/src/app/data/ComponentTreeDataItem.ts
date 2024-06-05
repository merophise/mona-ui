export interface Category {
    name: string;
    open: boolean;
    widgets: Widget[];
}

export interface Widget {
    name: string;
    path: string;
}
