/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

import CommandInterface from './CommandInterface';

class TurnOffCommand extends CommandInterface{
    execute(){
        console.log("The Light turns off \n");
    }
}

export default TurnOffCommand;
