import { useState } from 'react';
import { DataService } from '../../API/DataService';
import closedFolderIcon from '../../assets/folder-closed.png'
import openFolderIcon from '../../assets/folder-open.png'
import arrowIcon from '../../assets/arrow.svg';
import { useFetching } from '../../hooks/useFetching';
import { TreeList } from '../treeList/TreeList';
import { getUrlImgByDocFormat } from '../../utils';

export const TreeItem = ({
  item,
  addChildTree,
  childIndexes
}) => {
  const [isOpenFolder, setIsOpenFolder] = useState(false);
  const isChildren = !!item.children;
  const [, , dataFetching] = useFetching(async (id) => {
    const { data } = await DataService.getAllById(id);

    addChildTree(data.children, childIndexes);
  });

  const handleClick = () => {
    if (!item.children.length) {
      dataFetching(item.id);
    }

    setIsOpenFolder(!isOpenFolder);
  }

  const getUrlImg = () => {
    const arrayTitle = item.title.split(".");
    const format = arrayTitle[arrayTitle.length - 1];
    let urlImg =  isOpenFolder ? openFolderIcon : closedFolderIcon;

    if (arrayTitle.length === 1) {
      return urlImg;
    }

    return getUrlImgByDocFormat(format);
  }

  return (
    <div className="tree">
      <div
        className="tree__item"
        onClick={isChildren ? handleClick : null}
      >
        <div className={["arraw__icon", isOpenFolder ? "arraw__icon-open" : ""].join(" ")}>
          {isChildren
            ? <img
                src={arrowIcon}
                alt="toggle filder"
              />
            : null
          }
        </div>
        <div className="tree__img" >
          <img
            src={getUrlImg()}
            alt={item.title}
          />
        </div>
        <div className="tree__title">
          {item.title}
        </div>
      </div>
      <div className="tree__child">
        {childIndexes.length ? <div key={Math.random()} className="tree_indent"></div> : null}
        {isOpenFolder && isChildren
          ? <TreeList
              list={item.children}
              childIndexes={childIndexes}
              addChildTree={addChildTree}
            />
          : null
        }
      </div>
    </div>
  );
};