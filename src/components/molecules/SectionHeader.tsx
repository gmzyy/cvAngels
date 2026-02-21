import Title from "../atoms/Title"
import Divider from "../atoms/Divider"

type Props = {
  title: string
}

export default function SectionHeader({ title }: Props) {
  return (
    <div className="mb-6">
      <Title>{title}</Title>
      <Divider />
    </div>
  )
}
