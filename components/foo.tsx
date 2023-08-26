import { useRouter } from "next/router";

const router = useRouter();
const query = router.query.myQuery;
// query: string | string[]

function manipulateQuery(query: string): string;
function manipulateQuery(query: string[]): string[];
function manipulateQuery(query: string | string[]): string | string[];

function manipulateQuery(query: any): any {
  if (typeof query === "string") return query.toUpperCase();
  return query.map((querry) => querry.toUpperCase());
}

const manipulatedQuery = manipulateQuery(query);
// manipulatedQuery: string | string[]
const manipulatedQuery2 = manipulateQuery("foo");
// manipulatedQuery2: string
const manipulatedQuery3 = manipulateQuery(["foo", "bar"]);
// manipulatedQuery3: string[]
