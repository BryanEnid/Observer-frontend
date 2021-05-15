import { rest } from 'msw';

export default [
  rest.get('http://localhost:8080/posts', (req, res, ctx) => res(ctx.json({ success: true }))),
  rest.post('http://localhost:8080/posts', (req, res, ctx) => res(ctx.json({ success: true }))),
];
