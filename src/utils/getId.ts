export default (suffix = ''): string => `it__${Math.random().toString().slice(2, 8)}__${suffix}`;
