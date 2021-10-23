import { RestHandler } from 'msw';
import { setupServer } from 'msw/node';

// remove this and import from handler files
const handlers: RestHandler[] = [];

export const server = setupServer(...handlers);
