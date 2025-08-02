import { ReactNode } from 'react'

interface TimelineItemProps {
  title: string
  date?: string
  subtitle?: string
  children: ReactNode
  isLast?: boolean
}

const TimelineItem = ({ title, date, subtitle, children, isLast = false }: TimelineItemProps) => {
  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {!isLast && (
        <div className="absolute left-2 top-6 bottom-0 w-0.5 bg-primary"></div>
      )}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-primary bg-white"></div>
      <div className="timeline-content">
        <h4 className="text-lg font-bold text-text-primary mb-1 uppercase tracking-wide">
          {title}
        </h4>
        {date && (
          <div className="text-sm font-semibold text-text-secondary mb-2 bg-light-bg inline-block px-3 py-1 rounded">
            {date}
          </div>
        )}
        {subtitle && (
          <div className="text-text-secondary italic mb-3 font-medium">
            {subtitle}
          </div>
        )}
        <div className="text-text-secondary leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  )
}
export default TimelineItem