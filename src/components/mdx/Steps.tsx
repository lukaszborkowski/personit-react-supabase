import type { ReactNode } from 'react'

export function Steps({ children }: { children: ReactNode }) {
  return <ol className="not-prose my-6 [counter-reset:step]">{children}</ol>
}

type StepProps = {
  title: string
  children?: ReactNode
}

export function Step({ title, children }: StepProps) {
  return (
    <li className="group relative flex gap-4 pb-6 last:pb-0 [counter-increment:step]">
      {/* Linia łącząca kroki – bez niej przy ostatnim */}
      <span className="absolute top-8 bottom-0 left-[0.9375rem] w-px bg-border group-last:hidden" />
      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-brand/40 bg-brand/5 text-sm font-semibold text-brand before:content-[counter(step)]" />
      <div className="pt-1 text-sm">
        <p className="font-medium">{title}</p>
        {children && (
          <div className="mt-1 leading-relaxed text-muted-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1 [&_code]:py-0.5 [&_code]:text-[0.85em]">
            {children}
          </div>
        )}
      </div>
    </li>
  )
}
