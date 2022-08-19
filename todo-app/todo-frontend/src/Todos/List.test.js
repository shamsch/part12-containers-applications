import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./List";

describe("TodoList", () => {
    it("renders a list of todos", () => {
        const deleteFn = jest.fn();
        const completeFn = jest.fn();

        const todos = [
        {
            id: 1,
            text: "Buy milk",
            done: false,
        },
        {
            id: 2,
            text: "Buy eggs",
            done: false,
        },
        ];
    
        render(<TodoList todos={todos} deleteTodo={deleteFn} completeTodo={completeFn} />);

        expect(screen.getByText("Buy milk")).toBeInTheDocument();
        expect(screen.getByText("Buy eggs")).toBeInTheDocument();

    });
});