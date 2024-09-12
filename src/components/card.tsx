interface CardProps {
  beforeColor: string
  children: React.ReactNode
}
export default function Card({ beforeColor, children }: CardProps) {
  return (
    <div
      className={`relative w-full sm:w-[180px] h-[180px] flex items-center justify-center py-5 px-6 bg-white rounded-3xl border-2 border-neutral-900 before:w-full sm:before:w-[180px] before:h-[180px] before:absolute before:-z-10 before:rounded-3xl before:border-2 before:border-neutral-900 before:top-2 before:right-2 ${beforeColor}`}
    >
      <p className='font-inter text-center text-base tracking-[1px]'>
        {children}
      </p>
    </div>
  )
}
