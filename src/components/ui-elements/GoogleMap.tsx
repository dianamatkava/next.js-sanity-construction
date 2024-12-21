const GoogleMap = ({addressUrl= '', className='', allowFullScreen=false}) => {
  return (
    <iframe
      src={`${addressUrl}`}
      className={`rounded-[30px] ${className}`} allowFullScreen={allowFullScreen} loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
}

export default GoogleMap;