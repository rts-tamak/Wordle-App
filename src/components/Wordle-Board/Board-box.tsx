import { board } from "../../temp";
import Titlebar from "../Header/header";
import Keys from "../Keyboard/keys";
import Grid from "../Keyboard/play-box";


function WordlebBoard()
{
    return(
    <>
        <div className={board}>
            <Titlebar/>
            <Grid/>
            <Keys/>
        </div>
    </>
    );
}

export default WordlebBoard;