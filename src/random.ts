import seedrandom from 'seedrandom';

export type Random = () => number;

export const create = (seed?: string): Random => seedrandom(seed);
