import Link from 'next/link'

export default function Home() {
  return (
    <div className=" w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className=" w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The best Journal app, period.</h1>
        <p className=" text-2xl mb-4 text-white/60">
          This is the best app for tracking your mood throughout your life, all
          you have to do is be honest.
        </p>
        <div>
          <Link href="/journal">
            <button className=" bg-blue-600 px-4 py-2 rounded">
              get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
