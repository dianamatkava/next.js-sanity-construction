const GoogleMap = ({className='', width="250", height="200", allowFullScreen=false}) => {
  return (
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.4146162340885!2d-118.26187252365278!3d34.16131567311602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c04eb2b3b2b3%3A0xfe3bac6e663306f2!2s282%20W%20Dryden%20St%2C%20Glendale%2C%20CA%2091202%2C%20USA!5e0!3m2!1sen!2sde!4v1733685133061!5m2!1sen!2sde"
      className={`rounded-[30px] ${className}`} allowFullScreen={allowFullScreen} loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
  )
}

export default GoogleMap;