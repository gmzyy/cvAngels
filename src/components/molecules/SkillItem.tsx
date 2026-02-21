type Props = {
  name: string
}

export default function SkillItem({ name }: Props) {
  return (
    <div
      className="
        px-4 py-2 rounded-lg text-sm font-medium text-center
        bg-gray-100 text-gray-700
        dark:bg-gray-800 dark:text-gray-300
        border border-transparent dark:border-gray-700/50
        hover:bg-indigo-600 hover:text-white
        dark:hover:bg-indigo-500 dark:hover:text-white
        hover:shadow-md hover:-translate-y-1
        transition-all duration-300 ease-out
        cursor-default
      "
    >
      {name}
    </div>
  )
}