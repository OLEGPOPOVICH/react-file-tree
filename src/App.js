// http://164.90.161.80:3000/docs - сваггер с докой
// http://164.90.161.80:3000/api/content - единственный и неповторимый эндпоинт куда ходить за данными
// http://164.90.161.80/ - ui - референс куда смотреть если по заданию не ясно что и как делать

import { useEffect } from "react";
import { DataService } from "./API/DataService";
import { TreeList } from "./components/treeList/TreeList";
import { useFetching } from "./hooks/useFetching";
import { useTree } from "./hooks/useTree";
import "./styles/App.css"

function App() {
  const [tree, initTree, addChildTree] = useTree();
  const [isLoading, error, dataFetching] = useFetching(async () => {
    const { data } = await DataService.getAll();
    initTree(data.children);
  });

  useEffect(() => {
    dataFetching();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <div className="App">
      <TreeList
        list={tree}
        childIndexes={[]}
        addChildTree={addChildTree}
      />
    </div>
  );
}

export default App;
