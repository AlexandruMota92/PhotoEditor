import { modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({
  schemaOptions: {
    collection: 'users',
  },
  options: {
    allowMixed: 0,
  }
})
export default class User {
  readonly _id?: string;

  @prop()
  username: string;

  @prop()
  password: string;
}
