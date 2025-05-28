import Header from '@/components/header'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffdf9] relative">
      <Header showAnimations={true} />
      {children}
    </div>
  )
} 