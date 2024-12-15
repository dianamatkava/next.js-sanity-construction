const GridWrapper = ({children}) => {
  return (
    <div className="self-stretch justify-between items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </div>
  )
}

export default GridWrapper;