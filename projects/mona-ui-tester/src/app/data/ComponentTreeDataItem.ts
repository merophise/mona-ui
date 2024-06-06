import { WritableSignal } from "@angular/core";

export interface Category {
    name: string;
    open: WritableSignal<boolean>;
    widgets: Widget[];
}

export interface Widget {
    name: string;
    path: string;
}
