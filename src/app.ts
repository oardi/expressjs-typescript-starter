import express, { Application, Request, Response, NextFunction } from 'express';
import { logger } from './middleware/logger';
import helmet from "helmet";

// Mock Data
import posts from './data/posts.json';


const app: Application = express();
const PORT = process.env.PORT || 8080;

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
	const id = +req.params.id;
	const post = posts.find(p => p.id === id);
	res.json(post);
});

app.post('/posts', (req: Request, res: Response) => {
	res.send(req.body);
});

app.delete('/posts/:id', (req: Request, res: Response) => {
	const id = +req.params.id;
	res.status(200).send(id.toString());
});

// 404
app.use((req, res, next) => {
	res.status(404).send('Not found!')
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
	console.error(err);
	res.status(500).send('Something broke!');
});

// start server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
