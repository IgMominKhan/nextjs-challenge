import { ITemplate } from "@/types/ITemplate.Interface";
import { getLocalData } from "@/utils/localdata";

export async function GET(
request: Request,
{ params }: { params: { id: string } },
) {
const id = params.id;

const { templates } = await getLocalData();

const template = templates.find((template: ITemplate) => template.id === id);

return new Response(JSON.stringify(template), {
status: 200,
});
}
