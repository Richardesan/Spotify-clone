
const SocialButton = ({icon, text}: {icon: JSX.Element, text: string}) => {
  return (
    <div className="flex gap-10 items-center py-3 px-7 border border-spotify-gray hover:border-[#ffff] rounded-full transition-all duration-200 cursor-pointer">
        <p className="text-2xl">{icon}</p>
        <p className="text-center  w-[67%] text-base font-semibold">{text}</p>
    </div>
  )
}

export default SocialButton