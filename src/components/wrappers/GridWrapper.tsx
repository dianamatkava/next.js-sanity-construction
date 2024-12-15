const GridWrapper = ({children}) => {
  return (
    <div className="w-full self-stretch justify-center items-center grid ms:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:items-start">
      {children}
    </div>
  )
}

export default GridWrapper;