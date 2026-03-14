import {Post} from "../models/index.js";

export const createPost = async (req, res) => {
    const post = await Post.create({
        ...req.body,
        userId: req.user.id,
    });
    res.json(post);
};

export const getPosts = async (req, res) => {
    const posts = await Post.findAll();
    res.json(posts);
};

export const updatePost = async (req,res) => {
    const post = await Post.findByPk(req.params.id);

    if (post.userId !== req.user.id && req.user.role !== "admin") {
        return res.status(403).json({message: "forbidden"});

    }

    await post.update(req.body);
    res.json(post);
};

export const deletePost = async (req,res) => {
    const post = await Post.findByPk(req.params.id);

    if(post.userId !== req.user.id && req.user.role !=="admin") {
        return res.status(403).json({message: "forbidden"});
    }

    await post.destroy();
    res.json({message: "deleted"});
};
