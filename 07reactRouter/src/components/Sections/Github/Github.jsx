import { useLoaderData } from "react-router-dom";

const githubURL = "https://api.github.com/users/Vivek-aDev";

const Github = () => {
    const  data = useLoaderData()
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     fetch(githubURL)
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

  if (!data) {
    return (
      <div className="max-w-md mx-auto text-center text-gray-500">
        Loading GitHub Profile...
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
      <div className="flex items-center px-6 py-6">
        <img
          src={data.avatar_url}
          alt={data.name}
          className="w-20 h-20 rounded-full border-4 border-gray-200"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold text-gray-800">{data.name}</h2>
          <p className="text-sm text-gray-500">@{data.login}</p>
        </div>
      </div>

      <div className="px-6 pb-6">
        <p className="text-gray-700 mb-4">{data.bio}</p>

        <div className="flex justify-between text-center mb-4">
          <div>
            <p className="text-lg font-semibold">{data.public_repos}</p>
            <p className="text-sm text-gray-500">Repos</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{data.followers}</p>
            <p className="text-sm text-gray-500">Followers</p>
          </div>
          <div>
            <p className="text-lg font-semibold">{data.following}</p>
            <p className="text-sm text-gray-500">Following</p>
          </div>
        </div>

        <div className="space-y-2 text-sm text-gray-600">
          {data.blog && (
            <p>
              🌐 Portfolio:{" "}
              <a
                href={data.blog}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {data.blog}
              </a>
            </p>
          )}
          {data.twitter_username && (
            <p>
              🐦 Twitter:{" "}
              <a
                href={`https://twitter.com/${data.twitter_username}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                @{data.twitter_username}
              </a>
            </p>
          )}
          <p>
            🔗 GitHub:{" "}
            <a
              href={data.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:underline"
            >
              {data.html_url}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`${githubURL}`);
  return response.json();
};
