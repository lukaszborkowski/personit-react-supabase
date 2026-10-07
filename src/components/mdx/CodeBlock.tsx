import { CheckIcon, CopyIcon, FileCodeIcon } from 'lucide-react'
import { useRef, useState, type ComponentProps } from 'react'
import { cn } from '@/lib/utils'

type CodeBlockProps = ComponentProps<'pre'> & { 'data-title'?: string }

export function CodeBlock({ className, 'data-title': title, ...props }: CodeBlockProps) {
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(ref.current?.textContent ?? '')
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="group relative my-6 overflow-hidden rounded-lg border">
      {title && (
        <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-2 font-mono text-xs text-muted-foreground">
          <FileCodeIcon className="size-3.5" />
          {title}
        </div>
      )}
      <pre ref={ref} className={cn('my-0! rounded-none! text-[13px] leading-relaxed', className)} {...props} />
      <button
        type="button"
        onClick={copy}
        aria-label="Kopiuj kod"
        className={cn(
          'absolute right-2 rounded-md border bg-background/80 p-1.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 hover:text-foreground focus-visible:opacity-100',
          title ? 'top-10' : 'top-2',
        )}
      >
        {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
      </button>
    </div>
  )
}
