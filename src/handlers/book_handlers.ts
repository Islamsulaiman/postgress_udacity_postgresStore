//import SQL methods class to destructure it later and the type
import { Book, Book_handlers } from '../models/books';

//import express;
import express, { Request, Response } from 'express';

//create an instance of Book_handlers class
let book = new Book_handlers();

//create a route for index() method;
//this route takes an argument id
const index = async (_req: Request, res: Response): Promise<void> => {
  //add _ before req, because we are not going to use it here.
  try {
    const result: object = await book.index();
    res.json(result);
  } catch (error) {
    console.log(`Error from INDEX ${error}`);
  }
};

//create a route for show() method;
//this route takes an argument id
const show = async (req: Request, res: Response): Promise<void> => {
  try {
    const result: object = await book.show(req.body.id);
    res.json(result);
  } catch (error) {
    console.log(`Error from SHOW ${error}`);
  }
};

//create a route for delete() method;
//this route takes an argument id
const destroy = async (req: Request, res: Response): Promise<void> => {
  try {
    const result: object = await book.delete(req.body.id);
    res.json(result);
  } catch (error) {
    console.log(`Error from DELETE ${error}`);
  }
};

//create a route for create() method;
//this route takes an argument id
const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const result: object = await book.create(req.body.id);
    res.json(result);
  } catch (error) {
    console.log(`Error from CREATE ${error}`);
  }
};

export const index_route = (app: express.Application): void => {
  app.get('/book', index);
};
