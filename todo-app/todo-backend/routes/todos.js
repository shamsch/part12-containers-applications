const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();
const redis = require("../redis/index");

/* GET todos listing. */
router.get("/", async (_, res) => {
	const todos = await Todo.find({});
	res.send(todos);
});

router.get("/statistics", async (_, res) => {
	const totalTodoCount = await redis.getAsync("addedTodo");

	res.send({
		added_todos: totalTodoCount,
	});
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
	const todo = await Todo.create({
		text: req.body.text,
		done: false,
	});
	res.send(todo);
	const addedTodo = await redis.getAsync("addedTodo");
	if (addedTodo) {
		await redis.setAsync("addedTodo", Number(addedTodo) + 1);
	} else {
		await redis.setAsync("addedTodo", 1);
	}
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
	const { id } = req.params;
	req.todo = await Todo.findById(id);
	if (!req.todo) return res.sendStatus(404);

	next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
	await req.todo.delete();
	res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
	res.sendStatus(405); // Implement this
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
	res.sendStatus(405); // Implement this
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
