import { createContainerNode, deleteNodeById, deleteNodeByPath, generateRandomNode, getNodeById, randomTree, updateNode } from "@/services/tree_action";
import Image from "next/image";
import { root } from "postcss";

export default function Home() {
  let rootTree = randomTree
  // let newt = updateNode(rootTree,["vj2ixi","l930ka","6m0r9q","jmh47v","i55c1i","hk7klb"], { isComponent: true,type:"container"});
  // let new2 = createContainerNode(rootTree,["vj2ixi",],"new node",true);
  // let new3 = deleteNodeByPath(rootTree,["vj2ixi","l930ka","6m0r9q","jmh47v","i55c1i","hk7klb"]);
  // let new4 = deleteNodeById(rootTree,"l930ka");
  
  return (
    <main className="bg-base-100 ">
      {JSON.stringify(randomTree)}
    </main>
  );
}
