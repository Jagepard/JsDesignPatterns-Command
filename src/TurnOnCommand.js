/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

import CommandInterface from './CommandInterface';

class TurnOnCommand extends CommandInterface{
    execute(){
        console.log("The Light turns on \n");
    }
}

export default TurnOnCommand;
