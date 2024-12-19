const GridWrapper = ({children}) => {
  return (
    <div className="w-full h-auto self-stretch justify-center sm:justify-start items-stretch flex flex-wrap gap-8">
      {children}
    </div>
  )
}

export default GridWrapper;