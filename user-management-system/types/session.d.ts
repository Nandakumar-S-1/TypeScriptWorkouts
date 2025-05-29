// module augmentation
//Module augmentation allows you to extend or modify the types or behavior of an already existing module
import "express-session";

declare module "express-session"{
  interface SessionData{
    user: any;
  }
}