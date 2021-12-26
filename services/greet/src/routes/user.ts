import { HttpParams, IHttpContext } from "@tinqjs/tinqjs-boot";

export async function get({ query }: IHttpContext) {
  return "Hello si " + query.name;
}
