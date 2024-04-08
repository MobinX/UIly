import { Height, Margin, Padding, Width } from "@/interfaces/ui_tree";
import { updateNodeById } from "./tree_action";
let focusNodeid = global.focusedNode.id;
export const updateWidth = (width: Width["w"]) => {
    updateNodeById(global.Tree, focusNodeid, { propeties: { width: { w: width } } })
}
export const updateMaxWidth = (width: Width["max_w"]) => {
    updateNodeById(global.Tree, focusNodeid, { propeties: { width: { max_w: width } } })
}
export const updateMinWidth = (width: Width["min_w"]) => {
    updateNodeById(global.Tree, focusNodeid, { propeties: { width: { min_w: width } } })
}
export const updateHeight = (height: Height["h"]) => {
    updateNodeById(global.Tree, focusNodeid, { propeties: { height: { h: height } } })
}
export const updateMaxHeight = (height: Height["max_h"]) => {
    updateNodeById(global.Tree, focusNodeid, { propeties: { height: { max_h: height } } })
}
export const updateMinHeight = (height: Height["min_h"]) => {
    updateNodeById(global.Tree, focusNodeid, { propeties: { height: { min_h: height } } })
}
export const updateMargin = (margin: Margin) => {
    updateNodeById(global.Tree, focusNodeid, { propeties: { margin: margin } })
}
export const updatePadding = (padding: Padding) => {
    updateNodeById(global.Tree, focusNodeid, { propeties: { padding: padding } })
}
