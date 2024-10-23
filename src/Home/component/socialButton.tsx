
const SocialButton = ({icon, text}: {icon?: JSX.Element, text: string}) => {
  return (
    <div className={`flex gap-10 items-center py-3 px-6 border border-spotify-gray hover:border-[#ffff] rounded-full transition-all duration-200 cursor-pointer`}>
       {icon && <p className="text-2xl">{icon}</p>}
        <p className={`text-center text-base font-semibold ${icon ? "w-[67%]": "w-full"}`}>{text}</p>
    </div>
  )
}

export default SocialButton