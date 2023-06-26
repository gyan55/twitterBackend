import CrudRepository from "./crud-repository.js";
import User from "../models/user.js";

class userRepository extends CrudRepository {
  constructor(){
    super(User);
  }
}

export default userRepository;