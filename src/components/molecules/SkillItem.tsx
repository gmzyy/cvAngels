type Props = {
  name: string
  // Opcional: si quieres agregar ícono por skill en el futuro
  // icon?: React.ComponentType<{ className?: string }>
}

export default function SkillItem({ name }: Props) {
  return (
    <div
      className="
        group relative px-5 py-3 rounded-xl text-sm font-medium text-center
        bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900
        text-gray-800 dark:text-gray-200
        border border-gray-200/50 dark:border-gray-700/50
        shadow-sm hover:shadow-lg hover:shadow-indigo-500/20
        hover:-translate-y-1 hover:scale-[1.03]
        transition-all duration-300 ease-out
        cursor-default select-none
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
      "
      tabIndex={0} // Para que sea focusable con teclado
      aria-label={`Habilidad: ${name}`}
    >
      {/* Gradiente sutil en hover */}
      <div className="
        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20
        bg-gradient-to-r from-indigo-500/10 to-purple-500/10
        transition-opacity duration-300
      " />

      {/* Contenido principal */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {/* Si quieres ícono dinámico en el futuro, aquí iría */}
        {/* {icon && <icon className="w-4 h-4 opacity-80 group-hover:opacity-100 transition-opacity" />} */}
        {name}
      </span>
    </div>
  )
}