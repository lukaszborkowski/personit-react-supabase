import { InfoIcon, LightbulbIcon, TriangleAlertIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  info: { icon: InfoIcon, className: 'border-brand-2/40 bg-brand-2/5 [&>svg]:text-brand-2' },
  tip: { icon: LightbulbIcon, className: 'border-brand/40 bg-brand/5 [&>svg]:text-brand' },
  warning: { icon: TriangleAlertIcon, className: 'border-amber-500/40 bg-amber-500/5 [&>svg]:text-amber-500' },
}

type CalloutProps = {
  type?: keyof typeof variants
  title?: string
  children: ReactNode
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  const { icon: Icon, className } = variants[type]

  return (
    <div className={cn('not-prose my-6 flex gap-3 rounded-lg border p-4 text-sm', className)}>
      <Icon className="mt-0.5 size-4 shrink-0" />
      <div className="space-y-1 [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.85em]">
        {title && <p className="font-medium">{title}</p>}
        <div className="leading-relaxed text-foreground/90">{children}</div>
      </div>
    </div>
  )
}
