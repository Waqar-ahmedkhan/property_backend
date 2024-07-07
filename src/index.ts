import cors from 'cors';
import express, { Request, Response } from 'express';
import dbConnect from './db/db'; // Adjust the path to where your db.ts is located
import UserRouter from './routes/UserRoutes';
import propertiesRouter from './routes/propertiesRouter';

const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({ extended: true }));


app.use("/api/v1/user", UserRouter )
app.use("/api/v1/properties", propertiesRouter )


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

const startServer = async () => {
  try {
    // Connect to the database before starting the server
    await dbConnect();

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.error('Error starting the server:', err);
    process.exit(1); // Exit the process with failure
  }
};

startServer();
