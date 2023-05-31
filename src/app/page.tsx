import Link from 'next/link';
import { prisma } from './db';
import TodoItem from '@/components/TodoItem';
import { revalidatePath } from 'next/cache';

async function toggleTodo(id: string, checked: boolean) {
  'use server';
  await prisma.todo.update({
    where: { id },
    data: { checked: checked },
  });
}

async function deleteTodo(id: string) {
  'use server';
  await prisma.todo.delete({ where: { id } });
  revalidatePath('/');
}

export default async function Home() {
  const todos = await prisma.todo.findMany();

  return (
    <>
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-3xl">Todo</h1>
        <Link
          href={'/new-todo'}
          className="flex items-center justify-center rounded-md border border-green-600 bg-green-600 px-5 py-3 outline-none hover:bg-green-500 focus-visible:bg-green-500"
        >
          Add
        </Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
}

