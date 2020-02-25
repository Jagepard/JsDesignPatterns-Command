/**
 * @author  : Jagepard <jagepard@yandex.ru>
 * @license https://mit-license.org/ MIT
 */

import Lamp from './Lamp';
import TurnOnCommand from './TurnOnCommand';
import TurnOffCommand from './TurnOffCommand';
import ToggleCommand from './ToggleCommand';

const device = new Lamp();

try {
    device.setCommand('on', new TurnOnCommand());
    device.setCommand('off', new TurnOffCommand())
    device.setCommand('toggle', new ToggleCommand());
    device.execute('on');
    device.execute('off');
    device.execute('toggle');
    device.execute('toggle');
} catch (e) {
    console.error(e);
}
