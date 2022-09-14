import { createAuth } from '@keystone-next/auth';
import 'dotenv/config';
import{config, createSchema} from '@keystone-next/keystone/schema';
import { User } from './schemas/User';
import {withItemData, statelessSessions} from '@keystone-next/keystone/session'
import { Product } from './schemas/Product';
import { ProductImage } from './schemas/ProductImage';


const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-reciclare-team2';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 30,
  secret: process.env.COOKIE_SECRET,
};

const { withAuth } = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    initFirstItem: {
      fields: ['name', 'email', 'password'],
      // TODO: Add in inital roles here
    },
  });

export default withAuth(
  config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true,
    },
  },
  db: {
    adapter: 'mongoose',
    url: databaseURL,
  },
  lists: createSchema({
    // to add
    User,
    Product,
    ProductImage,
  }),
  ui: {
    // show the ui just for the people 
    isAccessAllowed: ({ session }) =>
        // console.log(session);
        !!session?.data,
  },
  session: withItemData(statelessSessions(sessionConfig), {
    // GraphQL Query
    User: 'id name email',
  }),
})
);
