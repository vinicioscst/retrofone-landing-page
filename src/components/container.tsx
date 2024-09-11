export default function Container({ children }: { children: React.ReactNode }) {
  return <div className='w-full max-w-[1100px] px-5 mx-auto'>{children}</div>
}
