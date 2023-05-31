'use client';

interface Todo {
  id: string;
  title: string;
  checked: boolean;
  toggleTodo: (id: string, checked: boolean) => void;
  deleteTodo: (id: string) => void;
}

export default function TodoItem({
  id,
  title,
  checked,
  toggleTodo,
  deleteTodo,
}: Todo) {
  return (
    <li className="mb-2 flex items-center gap-4">
      <input
        type="checkbox"
        className="peer h-4 w-4"
        name={id}
        id={id}
        defaultChecked={checked}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-checked:text-slate-300 peer-checked:line-through"
      >
        {title}
      </label>
      <span
        className="hidden text-red-600 peer-checked:flex"
        onClick={() => deleteTodo(id)}
      >
        delete?
      </span>
    </li>
  );
}
