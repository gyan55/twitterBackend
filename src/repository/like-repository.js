import CrudRepository from "./crud-repository";
import Like from "../models/like";

class likeRepository extends CrudRepository {
constructor(){
    super(Like);
}
}

export default likeRepository;