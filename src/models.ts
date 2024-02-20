export interface ITodoItem {
  id: number;
  text: string;
  completed: boolean;
}

export interface IStats {
  active: number;
  done: number;
}

export enum EAppFilter {
  All = 'All',
  Active = 'Active',
  Done = 'Done',
}
