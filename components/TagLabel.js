import Link from 'next/link'

export default function TagLabel({ children }) {


  return (
  //   <div
  //   className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
  // >
    <ul
      className={`py-1 pr-4 mb-2`}
    >
      <Link href={`/blog/tag/${children.toLowerCase()}`}>
        <li># {children}</li>
       </Link>
    </ul>
  )
}
