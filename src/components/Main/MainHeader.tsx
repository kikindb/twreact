interface MainHeaderProps {
  title?: string;
}
export default function MainHeader({ title = "" }: MainHeaderProps) {
  return (
    <header className="mb-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </header>
  );
}
