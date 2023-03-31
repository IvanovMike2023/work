import React, {useState} from "react";
// типом `names` является `string[]`
const [names, setNames] = useState<string[]>([]);
setNames(["Pat", "Lisa"]);

