import Link from 'next/link';

export default function TestList() {
  return (
    <div>
      <h2>Test List</h2>
      <ul>
        <li>
          <Link href={'/1'}>Portfolio Test 1</Link>
        </li>
      </ul>
    </div>
  );
}
