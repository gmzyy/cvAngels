type Props = {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({ children, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="
        px-5 py-2.5 rounded-lg font-medium tracking-wide
        bg-indigo-600 text-white shadow-sm
        hover:bg-indigo-700 hover:shadow-md hover:-translate-y-0.5
        dark:bg-indigo-500 dark:hover:bg-indigo-400
        transition-all duration-200 ease-in-out
        active:scale-95
      "
    >
      {children}
    </button>
  )
}