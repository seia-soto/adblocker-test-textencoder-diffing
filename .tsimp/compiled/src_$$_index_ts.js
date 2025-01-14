import { FiltersEngine } from '@ghostery/adblocker';
import * as trackerdb from '../trackerdb.json' assert { type: 'json' };
const name = process.argv.slice(2)[0];
console.log(`Running ${name}...`);
console.time(name);
const engine = FiltersEngine.fromTrackerDB(trackerdb);
const bytes = new Uint8Array(engine.getSerializedSize());
engine.serialize(bytes);
console.timeEnd(name);
console.log(`[size]
Reserved bytes: ${bytes.length}
Consumed bytes: ${bytes.byteLength}`);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2FhL2xvY2FsL3RlbXAwLyIsInNvdXJjZXMiOlsic3JjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNwRCxPQUFPLEtBQUssU0FBUyxNQUFNLG1CQUFtQixDQUFDLFNBQVMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFBO0FBRXRFLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxDQUFBO0FBQ2pDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbkIsTUFBTSxNQUFNLEdBQUcsYUFBYSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN0RCxNQUFNLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDO0FBQ3pELE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDeEIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDO2tCQUNNLEtBQUssQ0FBQyxNQUFNO2tCQUNaLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDIn0=