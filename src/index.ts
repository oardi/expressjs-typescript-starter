import type { Application, Request, Response } from 'express';
import express from 'express';
import helmet from 'helmet';
import { logger } from './middleware/logger';

// Mock Data
import type { IPost } from './data/posts';
import { posts } from './data/posts';

const app: Application = express();
const PORT: string | number = process.env.PORT || 8080;

app.use(helmet());
app.use(express.json());
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response<string>) => {
	res.send('hello expressjs typescript starter');
});

app.get('/posts', (req: Request, res: Response) => {
	res.json(posts);
});

app.get('/posts/:id', (req: Request, res: Response) => {
	const id: number = +req.params.id;
	const post: IPost | undefined = posts.find(p => p.id === id);
	res.json(post);
});

app.post('/posts', (req: Request, res: Response) => {
	res.send(req.body);
});

app.delete('/posts/:id', (req: Request, res: Response) => {
	const id: number = +req.params.id;
	res.status(200).send(id.toString());
});

// 404
app.use((req, res) => {
	res.status(404).send('Not found!');
});

app.use((err: Error, req: Request, res: Response) => {
	// eslint-disable-next-line no-console
	console.error(err);
	res.status(500).send('Something broke!');
});

// start server
app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Listening on port ${PORT}`);
});
