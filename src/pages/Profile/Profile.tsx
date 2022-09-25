import MainHeader from "../../components/Main/MainHeader";

export default function Profile() {
  return (
    <>
      <MainHeader title="My Profile" />
      <section>
        <p className="max-w-[90ch] mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          dignissimos corrupti dolorum? Animi fugiat, quis aliquam vitae sed
          corporis repellendus.
        </p>

        <div className="flex items-center space-x-4">
          <img
            className="w-10 h-10 rounded-full"
            src="https://avatars.githubusercontent.com/u/5817946?v=4"
            alt="Profile picture"
          />
          <div className="font-medium text-gray">
            <div>Enrique Dick</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Joined in August 2014
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
