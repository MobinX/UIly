export interface Node {
    id: string
    type: "container" | "text"
    name: string
    path: string[]
    isComponent: boolean
    children?: Node[]
    text?: string
    propaties: Propaties
    beforeContent?: Propaties
    afterContent?: Propaties
}

export interface Propaties{
    //dimentions
    basis?: TailwindNumValues | TailwindFractionValues | "full" | string
    grow?: boolean
    shrink?: boolean
    order?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "first" | "last" | string
    flexStyle?: FlexStyle
    gridStyle?: GridStyle
    width?: Width
    height?: Height
    padding?: Padding
    margin?: Margin
    spaceBetween?: SpaceBetween
    position?: "static" | "fixed" | "absolute" | "relative" | "sticky"
    //background
    background?: Background
    border?: Border
    //effects
    filter?: FilterValues
    backdrop?: FilterValues
    shadow?: Shadow
    transform?: Transform
    textStyle?: TextStlye


}


//Tailwind values
export type TailwindNumValues = "0" | "1" | "1.5" | "2" | "2.5" | "3" | "3.5" | "4" | "5" | "6" |
    "7" | "8" | "9" | "10" | "11" | "12" | "14" | "16" | "20" | "24" |
    "28" | "32" | "36" | "40" | "44" | "48" | "52" | "56" | "60" | "64" |
    "72" | "80" | "96";
export type TailwindFractionValues = "1/2" | "1/3" | "2/3" | "1/4" | "2/4" |
    "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" |
    "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" |
    "8/12" | "9/12" | "10/12" | "11/12";
export type TailwindStrValues = "auto" | "full" | "screen" | "svw" | "lvw" |
    "dvw" | "min" | "max" | "fit";
export type TailwindRelativeValue = "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
export type TailwindAllRelativeValue = "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl";
export type TailwindRangeValues = "0" | "50" | "75" | "90" | "95" | "100" | "105" | "110" | "125" | "150"

//export interface for tailwind width
export interface Width {
    w: TailwindNumValues | TailwindFractionValues | TailwindStrValues | string
    max_w?: TailwindNumValues | TailwindFractionValues | TailwindStrValues | string
    min_w?: TailwindNumValues | TailwindFractionValues | TailwindStrValues | string
}

//export interface for tailwind height
export interface Height {
    h: TailwindNumValues | TailwindFractionValues | TailwindStrValues | string
    max_h?: TailwindNumValues | TailwindFractionValues | TailwindStrValues | string
    min_h?: TailwindNumValues | TailwindFractionValues | TailwindStrValues | string
}

//export interface for tailwind padding
export interface Padding {
    p: {
        all?: TailwindNumValues | string
        x?: TailwindNumValues | string
        y?: TailwindNumValues | string
        l?: TailwindNumValues | string
        r?: TailwindNumValues | string
        t?: TailwindNumValues | string
        b?: TailwindNumValues | string
    }
}
//export interface for tailwind margin
export interface Margin {
    m: {
        all?: TailwindNumValues | string
        x?: TailwindNumValues | string
        y?: TailwindNumValues | string
        l?: TailwindNumValues | string
        r?: TailwindNumValues | string
        t?: TailwindNumValues | string
        b?: TailwindNumValues | string
    }
}
//export interface for tailwind space between 
export interface SpaceBetween {
    gap: {
        x?: TailwindNumValues | string
        y?: TailwindNumValues | string
    }
}

//export interface for tailwind color
export type TailwindColor =
    "slate-50" | "slate-100" | "slate-200" | "slate-300" | "slate-400" | "slate-500" | "slate-600" | "slate-700" | "slate-800" | "slate-900" | "slate-950" |
    "gray-50" | "gray-100" | "gray-200" | "gray-300" | "gray-400" | "gray-500" | "gray-600" | "gray-700" | "gray-800" | "gray-900" | "gray-950" |
    "zinc-50" | "zinc-100" | "zinc-200" | "zinc-300" | "zinc-400" | "zinc-500" | "zinc-600" | "zinc-700" | "zinc-800" | "zinc-900" | "zinc-950" |
    "neutral-50" | "neutral-100" | "neutral-200" | "neutral-300" | "neutral-400" | "neutral-500" | "neutral-600" | "neutral-700" | "neutral-800" | "neutral-900" | "neutral-950" |
    "stone-50" | "stone-100" | "stone-200" | "stone-300" | "stone-400" | "stone-500" | "stone-600" | "stone-700" | "stone-800" | "stone-900" | "stone-950" |
    "red-50" | "red-100" | "red-200" | "red-300" | "red-400" | "red-500" | "red-600" | "red-700" | "red-800" | "red-900" | "red-950" |
    "orange-50" | "orange-100" | "orange-200" | "orange-300" | "orange-400" | "orange-500" | "orange-600" | "orange-700" | "orange-800" | "orange-900" | "orange-950" |
    "amber-50" | "amber-100" | "amber-200" | "amber-300" | "amber-400" | "amber-500" | "amber-600" | "amber-700" | "amber-800" | "amber-900" | "amber-950" |
    "yellow-50" | "yellow-100" | "yellow-200" | "yellow-300" | "yellow-400" | "yellow-500" | "yellow-600" | "yellow-700" | "yellow-800" | "yellow-900" | "yellow-950" |
    "lime-50" | "lime-100" | "lime-200" | "lime-300" | "lime-400" | "lime-500" | "lime-600" | "lime-700" | "lime-800" | "lime-900" | "lime-950" |
    "green-50" | "green-100" | "green-200" | "green-300" | "green-400" | "green-500" | "green-600" | "green-700" | "green-800" | "green-900" | "green-950" |
    "emerald-50" | "emerald-100" | "emerald-200" | "emerald-300" | "emerald-400" | "emerald-500" | "emerald-600" | "emerald-700" | "emerald-800" | "emerald-900" | "emerald-950" |
    "teal-50" | "teal-100" | "teal-200" | "teal-300" | "teal-400" | "teal-500" | "teal-600" | "teal-700" | "teal-800" | "teal-900" | "teal-950" |
    "cyan-50" | "cyan-100" | "cyan-200" | "cyan-300" | "cyan-400" | "cyan-500" | "cyan-600" | "cyan-700" | "cyan-800" | "cyan-900" | "cyan-950" |
    "sky-50" | "sky-100" | "sky-200" | "sky-300" | "sky-400" | "sky-500" | "sky-600" | "sky-700" | "sky-800" | "sky-900" | "sky-950" |
    "blue-50" | "blue-100" | "blue-200" | "blue-300" | "blue-400" | "blue-500" | "blue-600" | "blue-700" | "blue-800" | "blue-900" | "blue-950" |
    "indigo-50" | "indigo-100" | "indigo-200" | "indigo-300" | "indigo-400" | "indigo-500" | "indigo-600" | "indigo-700" | "indigo-800" | "indigo-900" | "indigo-950" |
    "violet-50" | "violet-100" | "violet-200" | "violet-300" | "violet-400" | "violet-500" | "violet-600" | "violet-700" | "violet-800" | "violet-900" | "violet-950" |
    "purple-50" | "purple-100" | "purple-200" | "purple-300" | "purple-400" | "purple-500" | "purple-600" | "purple-700" | "purple-800" | "purple-900" | "purple-950" |
    "fuchsia-50" | "fuchsia-100" | "fuchsia-200" | "fuchsia-300" | "fuchsia-400" | "fuchsia-500" | "fuchsia-600" | "fuchsia-700" | "fuchsia-800" | "fuchsia-900" | "fuchsia-950" |
    "pink-50" | "pink-100" | "pink-200" | "pink-300" | "pink-400" | "pink-500" | "pink-600" | "pink-700" | "pink-800" | "pink-900" | "pink-950" |
    "rose-50" | "rose-100" | "rose-200" | "rose-300" | "rose-400" | "rose-500" | "rose-600" | "rose-700" | "rose-800" | "rose-900" | "rose-950";

export type OpacityNumbers = 0 | 5 | 10 | 15 | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 80 | 85 | 90 | 95 | 100;


//export interface for tailwind background
export interface Background {
    bg: {
        color?: TailwindColor | string
        img?: {
            src?: string
            position?: "top" | "center" | "bottom"
            size?: "auto" | "cover" | "contain"
            repeat?: "no-repeat" | "repeat-x" | "repeat-y" | "repeat"
            origin?: "border" | "content" | "padding"

        }
        gradient?: {
            direction?: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl"
            from?: TailwindColor | string
            via?: TailwindColor | string
            to?: TailwindColor | string
        }
    }

    opacity?: OpacityNumbers | number
}

//export interface for tailwind border
export interface Border {
    border: {
        color?: TailwindColor | string
        width?: {
            x?: "2" | "4" | "8" | "0" | string
            y?: "2" | "4" | "8" | "0" | string
            t?: "2" | "4" | "8" | "0" | string
            r?: "2" | "4" | "8" | "0" | string
            b?: "2" | "4" | "8" | "0" | string
            l?: "2" | "4" | "8" | "0" | string
        }
        style?: "solid" | "dashed" | "dotted" | "double" | "none"
        radius?: {
            tl?: TailwindRelativeValue | string | "raw"
            tr?: TailwindRelativeValue | string | "raw"
            br?: TailwindRelativeValue | string | "raw"
            bl?: TailwindRelativeValue | string | "raw"
            t: TailwindRelativeValue | string | "raw"
            r: TailwindRelativeValue | string | "raw"
            b: TailwindRelativeValue | string | "raw"
            l: TailwindRelativeValue | string | "raw"

        }
    }
}
//export interface for tailwind shadow
export interface Shadow {
    shadow: {
        x?: number
        y?: number
        blur?: number
        spread?: number
        color?: TailwindColor | string
        size?: TailwindRelativeValue | string | "raw"
    }
}
//export interface for tailwind transform
export interface Transform {

    scale?: {
        all?: TailwindRangeValues | string
        x?: TailwindRangeValues | string
        y?: TailwindRangeValues | string
    }
    rotate?: "0" | "1" | "2" | "3" | "6" | "45" | "90" | "180" | string
    translate?: {
        x?: TailwindNumValues | TailwindFractionValues | "full" | string
        y?: TailwindNumValues | TailwindFractionValues | "full" | string
    }
    skew?: {
        x?: "0" | "1" | "2" | "3" | "6" | "12" | "string"
        y?: "0" | "1" | "2" | "3" | "6" | "12" | "string"
    }
    origin?: "center" | "top" | "right" | "bottom" | "left" | "top-right" | "top-left" | "bottom-right" | "bottom-left"


}
//export interface for tailwind filter
export interface FilterValues {

    blur?: TailwindRelativeValue | string
    brightness?: TailwindRangeValues | "200" | string
    contrast?: "0" | "50" | "75" | "100" | "125" | "150" | "200" | string
    dropShadow?: {
        x?: TailwindNumValues | string
        y?: TailwindNumValues | string
        blur?: TailwindNumValues | string
        spread?: TailwindNumValues | string
        color?: TailwindColor | string
        size?: TailwindRelativeValue | string | "raw"
    }
    grayscale?: "0" | "raw" | string
    hueRotate?: "0" | "15" | "30" | "60" | "90" | "180" | string
    invert?: "0" | "raw" | string
    saturate?: "0" | "50" | "100" | "150" | "200" | string
    sepia?: "0" | "raw" | string

}

//export interface for tailwind font
export interface TextStlye {

    size?: TailwindAllRelativeValue | string
    weight?: "thin" | "extralight" | "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold" | "black" | string
    style?: "not-italic" | "italic"
    variant?: "normal" | "small-caps"
    lineHeight?: "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "none" | "tight" | "snug" | "normal" | "relaxed" | "loose" | string
    letterSpacing?: "tight" | "tighter" | "normal" | "wide" | "wider" | "widest" | string
    family?: string

    color?: TailwindColor | string
    align?: "left" | "center" | "right" | "justify"
    decoration?: {
        type?: "none" | "underline" | "line-through" | "no-underline" | "overline" | string
        color?: TailwindColor | string
        style?: "solid" | "double" | "dotted" | "dashed" | "wavy" | "none" | string
        thickness?: "1" | "2" | "4" | "8" | "0" | string
        offset?: "1" | "2" | "4" | "8" | "0" | string | "auto"
    }
    transform?: "none" | "uppercase" | "lowercase" | "capitalize"
    spacing?: "normal" | "wide" | "wider" | "widest" | "tigh" | "tighter" | "tightest"
    break?: "words" | "all" | "normal"
    overflow?: "truncate" | "ellipsis" | "clip"
    wrap?: "nowrap" | "wrap" | "balance" | "pretty"
    placeholder?: {
        color?: TailwindColor | string
        opacity?: OpacityNumbers | number
    }
}

//export interface for tailwind flexcontainer
export interface FlexStyle {
    direction?: "row" | "row-reverse" | "col" | "col-reverse"
    wrap?: "wrap" | "wrap-reverse" | "nowrap"
    justify?: "start" | "end" | "center" | "between" | "around" | "evenly"
    align?: "start" | "end" | "center" | "baseline" | "stretch"

}
//export interface for tailwind gridcontainer
export interface GridStyle {
    cols?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "none" | string
    rows?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "none" | string
    gap?: {
        all?: TailwindNumValues | string
        x?: TailwindNumValues | string
        y?: TailwindNumValues | string
    }
    auto?: boolean
    flow?: "row" | "col" | "row-dense" | "col-dense"
    place?: {
        content?: "start" | "end" | "center" | "stretch"
        items?: "start" | "end" | "center" | "stretch"
        self?: "start" | "end" | "center" | "stretch"
    }
}