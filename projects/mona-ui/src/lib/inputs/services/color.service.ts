import { Injectable } from "@angular/core";
import { PaletteType } from "../modules/color-palette/models/PaletteType";
import { ColorScheme } from "../models/ColorScheme";

@Injectable()
export class ColorService {
    public constructor() {}
    public static readonly FlatColorScheme: ColorScheme = {
        name: "flat",
        columns: 20,
        colors: [
            "#F9EBEA",
            "#FDEDEC",
            "#F5EEF8",
            "#F4ECF7",
            "#EAF2F8",
            "#EBF5FB",
            "#E8F8F5",
            "#E8F6F3",
            "#E9F7EF",
            "#EAFAF1",
            "#FEF9E7",
            "#FEF5E7",
            "#FDF2E9",
            "#FBEEE6",
            "#FDFEFE",
            "#F8F9F9",
            "#F4F6F6",
            "#F2F4F4",
            "#EBEDEF",
            "#EAECEE",
            "#F2D7D5",
            "#FADBD8",
            "#EBDEF0",
            "#E8DAEF",
            "#D4E6F1",
            "#D6EAF8",
            "#D1F2EB",
            "#D0ECE7",
            "#D4EFDF",
            "#D5F5E3",
            "#FCF3CF",
            "#FDEBD0",
            "#FAE5D3",
            "#F6DDCC",
            "#FBFCFC",
            "#F2F3F4",
            "#EAEDED",
            "#E5E8E8",
            "#D6DBDF",
            "#D5D8DC",
            "#E6B0AA",
            "#F5B7B1",
            "#D7BDE2",
            "#D2B4DE",
            "#A9CCE3",
            "#AED6F1",
            "#A3E4D7",
            "#A2D9CE",
            "#A9DFBF",
            "#ABEBC6",
            "#F9E79F",
            "#FAD7A0",
            "#F5CBA7",
            "#EDBB99",
            "#F7F9F9",
            "#E5E7E9",
            "#D5DBDB",
            "#CCD1D1",
            "#AEB6BF",
            "#ABB2B9",
            "#D98880",
            "#F1948A",
            "#C39BD3",
            "#BB8FCE",
            "#7FB3D5",
            "#85C1E9",
            "#76D7C4",
            "#73C6B6",
            "#7DCEA0",
            "#82E0AA",
            "#F7DC6F",
            "#F8C471",
            "#F0B27A",
            "#E59866",
            "#F4F6F7",
            "#D7DBDD",
            "#BFC9CA",
            "#B2BABB",
            "#85929E",
            "#808B96",
            "#CD6155",
            "#EC7063",
            "#AF7AC5",
            "#A569BD",
            "#5499C7",
            "#5DADE2",
            "#48C9B0",
            "#45B39D",
            "#52BE80",
            "#58D68D",
            "#F4D03F",
            "#F5B041",
            "#EB984E",
            "#DC7633",
            "#F0F3F4",
            "#CACFD2",
            "#AAB7B8",
            "#99A3A4",
            "#5D6D7E",
            "#566573",
            "#C0392B",
            "#E74C3C",
            "#9B59B6",
            "#8E44AD",
            "#2980B9",
            "#3498DB",
            "#1ABC9C",
            "#16A085",
            "#27AE60",
            "#2ECC71",
            "#F1C40F",
            "#F39C12",
            "#E67E22",
            "#D35400",
            "#ECF0F1",
            "#BDC3C7",
            "#95A5A6",
            "#7F8C8D",
            "#34495E",
            "#2C3E50",
            "#A93226",
            "#CB4335",
            "#884EA0",
            "#7D3C98",
            "#2471A3",
            "#2E86C1",
            "#17A589",
            "#138D75",
            "#229954",
            "#28B463",
            "#D4AC0D",
            "#D68910",
            "#CA6F1E",
            "#BA4A00",
            "#D0D3D4",
            "#A6ACAF",
            "#839192",
            "#707B7C",
            "#2E4053",
            "#273746",
            "#922B21",
            "#B03A2E",
            "#76448A",
            "#6C3483",
            "#1F618D",
            "#2874A6",
            "#148F77",
            "#117A65",
            "#1E8449",
            "#239B56",
            "#B7950B",
            "#B9770E",
            "#AF601A",
            "#A04000",
            "#B3B6B7",
            "#909497",
            "#717D7E",
            "#616A6B",
            "#283747",
            "#212F3D",
            "#7B241C",
            "#943126",
            "#633974",
            "#5B2C6F",
            "#1A5276",
            "#21618C",
            "#117864",
            "#0E6655",
            "#196F3D",
            "#1D8348",
            "#9A7D0A",
            "#9C640C",
            "#935116",
            "#873600",
            "#979A9A",
            "#797D7F",
            "#5F6A6A",
            "#515A5A",
            "#212F3C",
            "#1C2833",
            "#641E16",
            "#78281F",
            "#512E5F",
            "#4A235A",
            "#154360",
            "#1B4F72",
            "#0E6251",
            "#0B5345",
            "#145A32",
            "#186A3B",
            "#7D6608",
            "#7E5109",
            "#784212",
            "#6E2C00",
            "#7B7D7D",
            "#626567",
            "#4D5656",
            "#424949",
            "#1B2631",
            "#17202A"
        ]
    };

    public static readonly MaterialColorScheme: ColorScheme = {
        name: "material",
        columns: 19,
        colors: [
            "#FFEBEE",
            "#FCE4EC",
            "#F3E5F5",
            "#EDE7F6",
            "#E8EAF6",
            "#E3F2FD",
            "#E1F5FE",
            "#E0F7FA",
            "#E0F2F1",
            "#E8F5E9",
            "#F1F8E9",
            "#F9FBE7",
            "#FFFDE7",
            "#FFF8E1",
            "#FFF3E0",
            "#FBE9E7",
            "#EFEBE9",
            "#FAFAFA",
            "#ECEFF1",
            "#FFCDD2",
            "#F8BBD0",
            "#E1BEE7",
            "#D1C4E9",
            "#C5CAE9",
            "#BBDEFB",
            "#B3E5FC",
            "#B2EBF2",
            "#B2DFDB",
            "#C8E6C9",
            "#DCEDC8",
            "#F0F4C3",
            "#FFF9C4",
            "#FFECB3",
            "#FFE0B2",
            "#FFCCBC",
            "#D7CCC8",
            "#F5F5F5",
            "#CFD8DC",
            "#EF9A9A",
            "#F48FB1",
            "#CE93D8",
            "#B39DDB",
            "#9FA8DA",
            "#90CAF9",
            "#81D4FA",
            "#80DEEA",
            "#80CBC4",
            "#A5D6A7",
            "#C5E1A5",
            "#E6EE9C",
            "#FFF59D",
            "#FFE082",
            "#FFCC80",
            "#FFAB91",
            "#BCAAA4",
            "#EEEEEE",
            "#B0BEC5",
            "#E57373",
            "#F06292",
            "#BA68C8",
            "#9575CD",
            "#7986CB",
            "#64B5F6",
            "#4FC3F7",
            "#4DD0E1",
            "#4DB6AC",
            "#81C784",
            "#AED581",
            "#DCE775",
            "#FFF176",
            "#FFD54F",
            "#FFB74D",
            "#FF8A65",
            "#A1887F",
            "#E0E0E0",
            "#90A4AE",
            "#EF5350",
            "#EC407A",
            "#AB47BC",
            "#7E57C2",
            "#5C6BC0",
            "#42A5F5",
            "#29B6F6",
            "#26C6DA",
            "#26A69A",
            "#66BB6A",
            "#9CCC65",
            "#D4E157",
            "#FFEE58",
            "#FFCA28",
            "#FFA726",
            "#FF7043",
            "#8D6E63",
            "#BDBDBD",
            "#78909C",
            "#F44336",
            "#E91E63",
            "#9C27B0",
            "#673AB7",
            "#3F51B5",
            "#2196F3",
            "#03A9F4",
            "#00BCD4",
            "#009688",
            "#4CAF50",
            "#8BC34A",
            "#CDDC39",
            "#FFEB3B",
            "#FFC107",
            "#FF9800",
            "#FF5722",
            "#795548",
            "#9E9E9E",
            "#607D8B",
            "#E53935",
            "#D81B60",
            "#8E24AA",
            "#5E35B1",
            "#3949AB",
            "#1E88E5",
            "#039BE5",
            "#00ACC1",
            "#00897B",
            "#43A047",
            "#7CB342",
            "#C0CA33",
            "#FDD835",
            "#FFB300",
            "#FB8C00",
            "#F4511E",
            "#6D4C41",
            "#757575",
            "#546E7A",
            "#D32F2F",
            "#C2185B",
            "#7B1FA2",
            "#512DA8",
            "#303F9F",
            "#1976D2",
            "#0288D1",
            "#0097A7",
            "#00796B",
            "#388E3C",
            "#689F38",
            "#AFB42B",
            "#FBC02D",
            "#FFA000",
            "#F57C00",
            "#E64A19",
            "#5D4037",
            "#616161",
            "#455A64",
            "#C62828",
            "#AD1457",
            "#6A1B9A",
            "#4527A0",
            "#283593",
            "#1565C0",
            "#0277BD",
            "#00838F",
            "#00695C",
            "#2E7D32",
            "#558B2F",
            "#9E9D24",
            "#F9A825",
            "#FF8F00",
            "#EF6C00",
            "#D84315",
            "#4E342E",
            "#424242",
            "#37474F",
            "#B71C1C",
            "#880E4F",
            "#4A148C",
            "#311B92",
            "#1A237E",
            "#0D47A1",
            "#01579B",
            "#006064",
            "#004D40",
            "#1B5E20",
            "#33691E",
            "#827717",
            "#F57F17",
            "#FF6F00",
            "#E65100",
            "#BF360C",
            "#3E2723",
            "#212121",
            "#263238"
        ]
    };

    public static readonly WebSafeColorScheme: ColorScheme = {
        name: "websafe",
        columns: 18,
        colors: [
            "#CCFF00",
            "#CCCC00",
            "#CC9900",
            "#CC6600",
            "#CC3300",
            "#CC0000",
            "#660000",
            "#663300",
            "#666600",
            "#669900",
            "#66CC00",
            "#66FF00",
            "#00FF00",
            "#00CC00",
            "#009900",
            "#006600",
            "#003300",
            "#000000",
            "#CCFF33",
            "#CCCC33",
            "#CC9933",
            "#CC6633",
            "#CC3333",
            "#CC0033",
            "#660033",
            "#663333",
            "#666633",
            "#669933",
            "#66CC33",
            "#66FF33",
            "#00FF33",
            "#00CC33",
            "#009933",
            "#006633",
            "#003333",
            "#000033",
            "#CCFF66",
            "#CCCC66",
            "#CC9966",
            "#CC6666",
            "#CC3366",
            "#CC0066",
            "#660066",
            "#663366",
            "#666666",
            "#669966",
            "#66CC66",
            "#66FF66",
            "#00FF66",
            "#00CC66",
            "#009966",
            "#006666",
            "#003366",
            "#000066",
            "#CCFF99",
            "#CCCC99",
            "#CC9999",
            "#CC6699",
            "#CC3399",
            "#CC0099",
            "#660099",
            "#663399",
            "#666699",
            "#669999",
            "#66CC99",
            "#66FF99",
            "#00FF99",
            "#00CC99",
            "#009999",
            "#006699",
            "#003399",
            "#000099",
            "#CCFFCC",
            "#CCCCCC",
            "#CC99CC",
            "#CC66CC",
            "#CC33CC",
            "#CC00CC",
            "#6600CC",
            "#6633CC",
            "#6666CC",
            "#6699CC",
            "#66CCCC",
            "#66FFCC",
            "#00FFCC",
            "#00CCCC",
            "#0099CC",
            "#0066CC",
            "#0033CC",
            "#0000CC",
            "#CCFFFF",
            "#CCCCFF",
            "#CC99FF",
            "#CC66FF",
            "#CC33FF",
            "#CC00FF",
            "#6600FF",
            "#6633FF",
            "#6666FF",
            "#6699FF",
            "#66CCFF",
            "#66FFFF",
            "#00FFFF",
            "#00CCFF",
            "#0099FF",
            "#0066FF",
            "#0033FF",
            "#0000FF",
            "#FFFFFF",
            "#FFCCFF",
            "#FF99FF",
            "#FF66FF",
            "#FF33FF",
            "#FF00FF",
            "#9900FF",
            "#9933FF",
            "#9966FF",
            "#9999FF",
            "#99CCFF",
            "#99FFFF",
            "#33FFFF",
            "#33CCFF",
            "#3399FF",
            "#3366FF",
            "#3333FF",
            "#3300FF",
            "#FFFFCC",
            "#FFCCCC",
            "#FF99CC",
            "#FF66CC",
            "#FF33CC",
            "#FF00CC",
            "#9900CC",
            "#9933CC",
            "#9966CC",
            "#9999CC",
            "#99CCCC",
            "#99FFCC",
            "#33FFCC",
            "#33CCCC",
            "#3399CC",
            "#3366CC",
            "#3333CC",
            "#3300CC",
            "#FFFF99",
            "#FFCC99",
            "#FF9999",
            "#FF6699",
            "#FF3399",
            "#FF0099",
            "#990099",
            "#993399",
            "#996699",
            "#999999",
            "#99CC99",
            "#99FF99",
            "#33FF99",
            "#33CC99",
            "#339999",
            "#336699",
            "#333399",
            "#330099",
            "#FFFF66",
            "#FFCC66",
            "#FF9966",
            "#FF6666",
            "#FF3366",
            "#FF0066",
            "#990066",
            "#993366",
            "#996666",
            "#999966",
            "#99CC66",
            "#99FF66",
            "#33FF66",
            "#33CC66",
            "#339966",
            "#336666",
            "#333366",
            "#330066",
            "#FFFF33",
            "#FFCC33",
            "#FF9933",
            "#FF6633",
            "#FF3333",
            "#FF0033",
            "#990033",
            "#993333",
            "#996633",
            "#999933",
            "#99CC33",
            "#99FF33",
            "#33FF33",
            "#33CC33",
            "#339933",
            "#336633",
            "#333333",
            "#330033",
            "#FFFF00",
            "#FFCC00",
            "#FF9900",
            "#FF6600",
            "#FF3300",
            "#FF0000",
            "#990000",
            "#993300",
            "#996600",
            "#999900",
            "#99CC00",
            "#99FF00",
            "#33FF00",
            "#33CC00",
            "#339900",
            "#336600",
            "#333300",
            "#330000"
        ]
    };

    public getColorScheme(palette: PaletteType): ColorScheme {
        switch (palette) {
            case "flat":
                return ColorService.FlatColorScheme;
            case "material":
                return ColorService.MaterialColorScheme;
            case "websafe":
                return ColorService.WebSafeColorScheme;
            default:
                return ColorService.FlatColorScheme;
        }
    }
}
