import QuestionMark from "../../assets/question.tsx";
import Bar from "../../assets/bar.tsx";
import Setting from "../../assets/setting.tsx";

import { tempii } from "../../temp.ts";

function Titlebar() {
  return (
    <>
      <div className={tempii}>
        <QuestionMark />
        <h1> WORDLE TR</h1>
        <Bar />
        <Setting />
      </div>
    </>
  );
}

export default Titlebar;
