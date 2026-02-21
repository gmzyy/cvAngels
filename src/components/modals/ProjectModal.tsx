type Props = {
  open: boolean
  onClose: () => void
}

export default function ProjectModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className="
          bg-white p-6 rounded-lg w-full max-w-lg
          animate-fadeIn
        "
      >
        <h3 className="text-xl font-bold mb-2">
          Proyecto Destacado
        </h3>

        <p className="text-gray-600 mb-4">
          Plataforma empresarial con roles, permisos y APIs REST.
        </p>

        <button
          onClick={onClose}
          className="text-blue-600 underline"
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}
