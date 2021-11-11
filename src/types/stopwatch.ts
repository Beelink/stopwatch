export type Stopwatch = {
  id: number;
  value: number;
  play: boolean;
  description: string;
  start: number | null;
  finish: number | null;
};
