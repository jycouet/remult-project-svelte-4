import { remultSveltekit } from "remult/remult-sveltekit";
import { Task } from "../demo/todo/Task";
  
export const api = remultSveltekit({
  admin: true,
  entities: [Task],
});