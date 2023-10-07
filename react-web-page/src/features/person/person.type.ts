// The interface has its own file to have one source of truth, since it
// will be called from external files.
interface IPerson {
  Name: string;
  "Favorite Food": string;
  "Favorite Movie": string;
  Status: string;
  [key: string]: any;
}

export type { IPerson };
