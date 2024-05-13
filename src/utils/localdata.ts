import path from "path";
import fsPromises from "fs/promises";

export async function getLocalData() {
const filePath = path.join(process.cwd(), "json-server/db.json");
const jsonData = await fsPromises.readFile(filePath);
return JSON.parse(jsonData.toString());
}
