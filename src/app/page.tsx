import Link from 'next/link';

export default function Home() {
  return (
    <>
      <header className="flex justify-between items-center">
        <h1 className="text-3xl">Todos</h1>
        <Link href={'/new-todo'}>Add</Link>
      </header>
    </>
  );
}

