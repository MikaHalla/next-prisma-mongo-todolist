import Link from 'next/link';
import { prisma } from '../db';

async function createTodo(data: FormData) {
  'use server';
  const todo = data.get('new-todo')?.valueOf();

  if (typeof todo !== 'string' || todo.length === 0) return;

  await prisma.todo.create({ data: { title: todo, checked: false } });
}

export default function NewTodo() {
  return (
    <form action={createTodo} className="flex flex-col">
      <input type="text" name="new-todo" autoFocus className="p-4" />
      <div className="flex justify-end">
        <button type="submit">Add</button>
        <Link href={'..'}>Back</Link>
      </div>
    </form>
  );
}
