import type { NextFunction, Request, Response } from 'express';

export const logger = (req: Request, res: Response, next: NextFunction): void => {
	// eslint-disable-next-line no-console
	console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
	next();
};
