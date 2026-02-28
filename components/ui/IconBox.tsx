import { type LucideIcon } from 'lucide-react'

interface IconBoxProps {
  icon: LucideIcon
  size?: number
}

export default function IconBox({ icon: Icon, size = 18 }: IconBoxProps) {
  return (
    <div
      style={{
        width: '36px',
        height: '36px',
        borderRadius: '8px',
        background: 'linear-gradient(135deg, #ede9fe, #dbeafe)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Icon size={size} color="#4338ca" />
    </div>
  )
}
