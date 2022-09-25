import MainHeader from "../../components/Main/MainHeader";

export default function Dashboard() {
  return (
    <>
      <MainHeader title="Dashboard" />
      <section>
        <p className="max-w-[90ch] mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic cum vero
          explicabo itaque dolore? Corrupti ea id voluptate magni minus itaque
          optio, perferendis iusto accusantium vel necessitatibus reiciendis
          odit iste. Et fuga cum excepturi ipsum iure recusandae perferendis
          illum ea.
        </p>

        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="https://kikin.dev/react-kanban" target="_blank">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Kanban App
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Check my new app.
          </p>
          <a
            href="https://kikin.dev/react-kanban"
            target="_blank"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Click here
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
