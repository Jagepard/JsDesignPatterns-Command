/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

class AbstractDevice{
    constructor() {
        this.commands = {};
    }

    setCommand(commandName, command) {
        if (commandName in this.commands) {
            throw "Command already exists";
        }

        this.commands[commandName] = command;
    }

    execute(commandName) {
        if (!commandName in this.commands) {
            throw "Command does not exist in the registry";
        }

        this.commands[commandName].execute();
    }
}

export default AbstractDevice;