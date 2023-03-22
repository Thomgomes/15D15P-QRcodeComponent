export const QRCode = (props) => {
  return (
    <div className={`bg-[#2c7dfa] overflow-hidden ${props.p}`}>
      <img className='relative rounded-2xl z-10' src={props.img} alt={props.alt} />
      <span className="relative z-[1]
      before:absolute before:bg-[#3685ff] before:h-60 before:w-60 before:rounded-full before:-top-6 before:left-0 before:z-[1]
      after:absolute after:bg-[#3685ff] after:h-72 after:w-72 after:rounded-full after:bottom-16 after:-right-10 after:z-[1]"></span>
    </div>
  )
}