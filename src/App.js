import style from "./styles.module.scss";
import obj from "./data/user.json";
import data from "./data/data.json";
import friends from "./data/friends.json";
import trans from "./data/transactions.json";
import { Info } from "./components/Task1";
import { Statistics } from "./components/Task2";
import { FriendList } from "./components/Task3";
import { TransactionHistory } from "./components/Task4";

function App() {
  return (
    <div className="App">
      <div className={style.first_wrap}>
        {obj.map((item, index) => (
          <Info {...item} styles={style} key={index} />
        ))}
      </div>
      <div className={style.second_wrap}>
        <Statistics title="Hello" props={data} styles={style} />
      </div>
      <div className={style.third_wrap}>
        <FriendList props={friends} styles={style} />
      </div>
      <div className={style.fourth_wrap}>
        <TransactionHistory props={trans} styles={style} />
      </div>
    </div>
  );
}

export default App;
