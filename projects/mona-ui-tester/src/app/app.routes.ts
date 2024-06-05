import { Routes } from "@angular/router";

export const routes: Routes = [
    {
        path: "button",
        loadComponent: () => import("./components/button-demo/button-demo.component").then(m => m.ButtonDemoComponent),
        data: { title: "Button" }
    }
];
