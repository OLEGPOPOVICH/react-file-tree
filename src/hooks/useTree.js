import { useState } from "react";

// const getChild = (attachmen, treeChilds) => {
//   const childNode = treeChilds[attachmen[0]];

//   if (attachmen.length === 1) {
//     return childNode;
//   }

//   attachmen.shift();

//   return getChild(attachmen, childNode.children)
// }

const getChild = (attachmen, treeChilds) => {
  const copyAttachmen = [...attachmen];
  let childNode = treeChilds[copyAttachmen[0]];

  while (copyAttachmen.length > 1) {
    copyAttachmen.shift()
    childNode = childNode.children[copyAttachmen[0]]
  }

  return childNode;
}

export const useTree = () => {
  const [tree, setTree] = useState([]);

  const initTree = (tree) => {
    setTree(tree);
  }

  const addChildTree = (children, nesting) => {
    const childNode = getChild(nesting, tree);

    if (childNode) {
      childNode.children = [...children];
    }
  }

  return [tree, initTree, addChildTree];
}