import CrudRepository from "./crud-repository.js";
import Like from "../models/like.js";

class likeRepository extends CrudRepository {
constructor(){
    super(Like);
}
async findByUserAndLikeable(data){
    try {
        const like  = await Like.findOne(data);
        return like;
    } catch (error) {
        console.log(error);
    }
}

}

export default likeRepository;