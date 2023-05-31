import Link from 'next/link';
import { prisma } from '../db';
import { redirect } from 'next/navigation';

async function createTodo(data: FormData) {
  'use server';
  const todo = data.get('new-todo')?.valueOf();

  if (typeof todo !== 'string' || todo.length === 0) return;

  await prisma.todo.create({ data: { title: todo, checked: false } });

  redirect('/');
}

export default function NewTodo() {
  return (
    <form action={createTodo} className="flex flex-col">
      <input
        type="text"
        name="new-todo"
        autoFocus
        className="rounded-md border bg-transparent p-4 outline-none"
      />
      <div className="mt-8 flex justify-end gap-8">
        <Link
          href={'..'}
          className="flex items-center justify-center rounded-md border px-5 py-3 outline-none hover:bg-slate-700 focus-visible:bg-slate-700"
        >
          Back
        </Link>
        <button
          type="submit"
          className="flex items-center justify-center rounded-md border border-green-600 bg-green-600 px-5 py-3 outline-none hover:bg-green-500 focus-visible:bg-green-500"
        >
          Add
        </button>
      </div>
    </form>
  );
}
