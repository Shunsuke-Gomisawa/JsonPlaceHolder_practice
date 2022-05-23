import axios from "axios";
import "./styles.css";

export default function App() {
  // ここで関数設定
  const onClickUsers = () => {
    //以下のURLを引っ張ってきて、.then以降に引っ張ってきた後の関数処理を描くことができる
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        //以下の.catchではエラーが出た時の例外処理を描ける
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/3")
      .then((res) => {
        console.log(res.data);
        //以下の.catchではエラーが出た時の例外処理を描ける
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //ここで表示部分を作っている
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のusers</button>
    </div>
  );
}
