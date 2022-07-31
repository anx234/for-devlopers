import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'sky',
    Python: 'green',
    PHP: 'purple',
    Ruby: 'red',
  }

  return (
  //   <div
  //   className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
  // >
    <div
      className={`py-1 px-2 mb-2 rounded bg-black text-white border-${colorKey[children]}-500 border-l-4 p-2 my-4 border-solid`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}
