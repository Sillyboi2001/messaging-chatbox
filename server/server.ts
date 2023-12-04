import express from 'express';
import { config } from 'dotenv';

config()
const app = express()

app.listen({ port: process.env.PORT })