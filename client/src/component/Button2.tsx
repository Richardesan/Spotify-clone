
const Button2 = ({name, slim}: {name: string, slim: boolean}) => {
  return (
    <button className={`${slim ? "px-4 py-1.5 text-sm": "py-3 px-8 text-base"} active:scale-95 active:filter active:brightness-50 duration-200
     text-black font-bold bg-white min-w-0 rounded-full hover:scale-105 hover:filter hover:brightness-95 transition-all 
     cursor-pointer`}>
      {name}
     </button>
  )
}

export default Button2