// Placed the interface in its own file to have one source of truth and as it
// was going to be called from multiple files
interface IPerson {
  Name: string;
  "Favorite Food": string;
  "Favorite Movie": string;
  Status: string;
  [key: string]: any;
}

export type { IPerson };
