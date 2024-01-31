import cors from 'cors';
import type { Application, Request, Response } from 'express';
import express from 'express';
import helmet from 'helmet';
import { posts } from './data';
import type { IPost } from './interfaces';
import { logger } from './middleware';

const app: Application = express();
const PORT: string | number = process.env.PORT || 8080;

app.use(helmet());
app.use(express.json());
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// get home route - commonly used to check if API is running
app.get('/', (req: Request, res: Response<string>) => {
	res.json('hello expressjs typescript starter');
});

// get all posts
app.get('/posts', (req: Request, res: Response) => {
	res.json(posts);
});

// get a single post by URL Param ID
app.get('/posts/:id', (req: Request, res: Response) => {
	const id: string = req.params.id;
	const post: IPost | undefined = posts.find(p => p.id === id);
	if (post) {
		res.json(post);
	} else {
		res.status(404).send(`Post with id ${id} not found`);
	}
});

// creat a single post by Label inside Request Body
app.post('/posts', (req: Request, res: Response) => {
	const { label } = req.body;
	const newPost: IPost = {
		id: Math.random().toString(16).slice(2),
		label: label,
	};
	posts.push(newPost);
	res.json(newPost);
});

// update a single post by URL Param ID and Label inside Request Body
app.put('/posts/:id', (req: Request, res: Response) => {
	const id: string = req.params.id;
	const { label } = req.body;
	const postToUpdate: IPost | undefined = posts.find(p => p.id === id);
	if (postToUpdate) {
		postToUpdate.label = label;
		res.send(postToUpdate);
	} else {
		res.status(404).send(`Post with id ${id} not found`);
	}
});

// delete a single post by ID
app.delete('/posts/:id', (req: Request, res: Response) => {
	const id: string = req.params.id;
	const index: number = posts.findIndex(p => p.id === id);
	if (index >= 0) {
		posts.splice(index, 1);
		res.status(200).send(`Post with ID ${id} deleted`);
	} else {
		res.status(404).send(`Post with id ${id} not found`);
	}
});

// default 404 route
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
