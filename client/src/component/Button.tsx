const Button = ({ name }: { name: string }) => {
  return (
    <button className="bg-spotify-green text-spotify-black font-bold w-full py-3 px-6 text-base rounded-full hover:filter hover:brightness-110 transition-all">
      {name}
    </button>
  );
};

export default Button;
