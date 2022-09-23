interface SidebarHeaderProps {
  appTitle?: string;
  greeting?: string;
  userName?: string;
  image?: string;
}

export default function SidebarHeader({
  appTitle = "TW React",
  greeting = "Welcome Back!",
  userName = "Username",
  image = "https://avatars.githubusercontent.com/u/5817946?v=4",
}: SidebarHeaderProps) {
  return (
    <header>
      <div className="flex justify-center items-center mb-8">
        <img src="vite.svg" alt="Logo" />
        <h2 className="text-gray-700 font-bold">{appTitle}</h2>
      </div>

      <section className="flex flex-col items-center text-center">
        <div className="text-center relative max-w-[96px] w-full aspect-square mb-2 overflow-hidden rounded-full">
          <img
            className="w-full absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4"
            src={image}
            alt={`${userName} profile picture`}
          />
        </div>
        <span className="text-gray-500">{greeting}</span>
        <h2 className="font-bold text-gray-600">{userName}</h2>
      </section>
    </header>
  );
}
