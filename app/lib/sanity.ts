import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "qrryk2m2",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});
