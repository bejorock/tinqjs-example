import { HttpParams, IHttpContext } from "@tinqjs/tinqjs-boot";

export async function get({ query, params }: IHttpContext) {
  return `Hello user of ${params.id} with name ${params.name} and age ${query.age}`;
}
