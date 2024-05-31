import { TData } from "./types";

export interface IStoreContext {
  product: TData[];
  index: number;
  handleTab: (num: number) => void;
  handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
}
