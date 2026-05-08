// src/data/topics-helpers.js
// Re-exports topics + filtered longtail array. Keeps index.astro decoupled from data shape.
import { topics } from './topics.js';

export { topics };
export const longtailTopics = topics.filter(t => t.kind === 'longtail');
