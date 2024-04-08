"use client";
import { createContainerNode, deleteNodeById, deleteNodeByPath, deleteParentNodeById, generateRandomNode, getNodeById, randomTree, updateNodeById } from "@/services/tree_action";
import Image from "next/image";
import { root } from "postcss";
import { useEffect ,useState} from "react";

export default function Home() {
  let [rootTree, setRoot] = useState(JSON.stringify(randomTree));
  const treeUpdateHandler = (e: Event) => {
    const evt = e as CustomEvent;
    console.log(evt.detail.tree)
    setRoot(JSON.stringify(global.Tree));
  };
  useEffect(() => {
    window.addEventListener("treeUpdate",treeUpdateHandler)
    return () => {
      window.removeEventListener("treeUpdate",treeUpdateHandler)
    }
  }, [])
  useEffect(() => {
    console.log("rootTree")
    console.log(rootTree)
  } , [rootTree])
  return (
    <main className="bg-base-100 ">
      {rootTree}
      <button onClick={() => {  updateNodeById(randomTree, "l930ka", { isComponent: true, type: "text" ,name:"hii" });} }>update</button>
    
    </main>
  );
}
