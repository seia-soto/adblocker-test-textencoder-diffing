import { FiltersEngine } from '@ghostery/adblocker';
import * as trackerdb from '../trackerdb.json' assert { type: 'json' }

const name = process.argv.slice(2)[0];
const engine = FiltersEngine.fromTrackerDB(trackerdb);
console.time(name);
const bytes = new Uint8Array(engine.getSerializedSize())
engine.serialize(bytes);
console.timeEnd(name);
console.log(`[size]
Reserved bytes: ${bytes.length}B (~${bytes.length / 1024} kB)
Consumed bytes: ${bytes.byteLength}B (~${bytes.byteLength / 1024} kB)`);
