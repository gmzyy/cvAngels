type Props = {
  children: React.ReactNode
}

export default function Title({ children }: Props) {
  return (
    <h2 className="text-2xl font-bold tracking-tight">
      {children}
    </h2>
  )
}
