import { HttpParams, IHttpContext } from "@tinqjs/tinqjs-boot";

export async function get({ query }: IHttpContext) {
  return "hello id " + query.name;
}
