import List from "./components/List";
import AddList from "./components/AddList";
import './styles/index.scss'

export default function Home() {
  return (
    <main >
      <h1>Todo App</h1>
      <AddList />
      <List />
    </main>
  );
}
