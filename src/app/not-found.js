// app/not-found.js
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-neon-blue">404</h1>
      <h2 className="text-2xl mt-4 mb-2">Parece que você se perdeu no código...</h2>
      <p className="text-dark-text mb-6">A página que você está procurando não foi encontrada.</p>
      <Link href="/" className="px-6 py-2 bg-neon-purple text-white font-semibold rounded-lg hover:opacity-90">
        Voltar para a Home
      </Link>
    </div>
  )
}