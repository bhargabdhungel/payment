import { useRecoilValue, useSetRecoilState } from "recoil";
import { currentFriendAtom, userDataAtom } from "../store/user";
import FriendCard from "./FriendCard";

export default function Friends() {
  const user = useRecoilValue(userDataAtom);
  const friends = user.friends;
  const setCurrentFriend = useSetRecoilState(currentFriendAtom);
  return (
    <div className="w-full grow flex">
      <div className="w-1/4 h-[90vh] overflow-y-auto px-8 py-4 bg-black">
        <h5 className="text-3xl p-4 leading-none text-gray-300 dark:text-white">
          Friends
        </h5>
        <ul
          role="list"
          className="divide-y divide-gray-200 dark:divide-gray-600"
        >
          {friends.map((friend, index) => {
            const shortName = friend.name
              .split(" ")
              .map((word) => word[0])
              .join("")
              .toUpperCase();

            return (
              <div
                key={index}
                className="py-3 sm:py-4 cursor-pointer"
                onClick={() => {
                  setCurrentFriend({
                    name: friend.name,
                    username: friend.username,
                  });
                }}
              >
                <div className="flex items-center">
                  <div className="relative cursor-pointer inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                    <span className="font-medium text-gray-600 dark:text-gray-300">
                      {shortName}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {friend.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {friend.username}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="grow flex justify-center items-center">
        <FriendCard />
      </div>
    </div>
  );
}
