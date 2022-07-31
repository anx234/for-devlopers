import Link from 'next/link'

export default function TagList({ tags }) {
  return (
    <div className='w-full p-5 bg-white rounded-lg mt-6 border-l-4 border-indigo-500'>
      <h3 className='text-2xl p-3 rounded'>
        Tag
      </h3>
      <ul className='divide-y divide-gray-300 flex flex-wrap'>
        {tags.map((tag, index) => (
          <Link key={index} href={`/blog/tag/${tag.toLowerCase()}`}>
            <li className='p-4 cursor-pointer hover:bg-gray-50'>#{tag}</li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
