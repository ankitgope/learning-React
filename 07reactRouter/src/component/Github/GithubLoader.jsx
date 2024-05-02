import React from "react";
import { useLoaderData } from "react-router-dom";
function GithubLoader() {
  const data = useLoaderData()
  return (
    <div
      className="
    bg-yellow-500 w-screen h-screen"
    >
      {/* we need to study api in console log for this {data.name} data  */}
      <h4>This the optimized way to fetch the data from API and using LOADER and useLoader Hooks </h4>
      Github Name:{data.name}
      <br />
      Github Followers:{data.followers}
      <br />
      Github ID:{data.id}
      <img src={data.avatar_url} alt="git picture" width={300} />
    </div>
  );
}

export default GithubLoader;

export const githubLoaderInfo = async () => {
  const response = await fetch('https://api.github.com/users/ankit-gope')
  return response.json() // converting to jason as javascript makes it a  string file
};
