import { TreeItem } from '../treeItem/TreeItem';

export const TreeList = ({
  list,
  childIndexes,
  addChildTree
}) => {
  if (!list.length) {
    return <div className="tree__empty"></div>
  }

  return (
    <div className="tree__list">
      {list.map((item, index) => {
        return (
          <TreeItem
            key={item.id}
            item={item}
            childIndexes={[...childIndexes, index]}
            addChildTree={addChildTree}
          />
        );
      })}
    </div>
  );
};