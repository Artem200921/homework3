
import  styles  from "./styles.module.scss";
import { array } from "../user.json";
import { Info } from "./components/Info";

function App() {
  return (
    <div className="App">
      {array.map((item, index) => (
        <Info {...item} styles={styles} key={index} />
      ))}
    </div>
  );
}

export default App;
