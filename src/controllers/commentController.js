import {Comment} from "../models/index.js";

export const createComment = async (req, res) => {
    const comment = await Comment.create({
        ...req.body,
        userId: req.user.id,
    });
    res.json(comment);
};




