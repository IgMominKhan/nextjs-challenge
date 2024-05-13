import { getLocalData } from "@/utils/localdata";
import { cookies } from "next/headers";

export async function GET(request: Request) {
// const cookieStore = cookies();
// const token = cookieStore.get("token");

const { templates } = await getLocalData();

return new Response(JSON.stringify(templates), {
status: 200,
// headers: { "Set-Cookie": `token=${token.value}` },
});
}
