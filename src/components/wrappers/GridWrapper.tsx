const GridWrapper = ({children}) => {
  return (
    <div className="self-stretch justify-between items-start flex grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {children}
    </div>
  )
}

export default GridWrapper;