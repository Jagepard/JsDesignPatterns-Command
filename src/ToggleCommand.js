/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

import CommandInterface from './CommandInterface';
import TurnOnCommand from './TurnOnCommand';
import TurnOffCommand from './TurnOffCommand';

class ToggleCommand extends CommandInterface{
    constructor(){
        super();
        this.toggle = 1;
    }

    execute(){
        let command = (this.toggle % 2) ? new TurnOnCommand() : new TurnOffCommand();
        this.toggle++;
        command.execute();
    }
}

export default ToggleCommand;
