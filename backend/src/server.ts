import 'colors';
import app from './app';
import env from './util/validateEnv';
import mongoose from 'mongoose';

const port = env.PORT;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log('Mongoose Connected'.magenta);
    app.listen(port, () => {
      console.log(('Server running on port:' + port).cyan);
    });
  })
  .catch(console.error);
