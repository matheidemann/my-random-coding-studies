// é preciso setar no HTML o JS como "type=module" também

// named export
import { people } from "./data/data.js";
// default export
import whateverName from "./data/function.js";

for (const person in people) {
    console.log(people);
}

whateverName(people);
