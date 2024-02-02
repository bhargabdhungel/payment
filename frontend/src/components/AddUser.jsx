import { FaUserPlus } from "react-icons/fa";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userDataAtom } from "../store/user";
export default function AddUser(props) {
  const setUserData = useSetRecoilState(userDataAtom);
  return (
    <button
      onClick={async () => {
        try {

          const response = await axios.post(
            import.meta.env.VITE_SERVER + "/api/user/addFriend/",
            {
              friendUsername: props.username,
            },
            {
              headers: {
                Authorization: localStorage.getItem("token"),
              },
            }
          );

          if (response.data.success) alert("Added user: " + props.username);
          setUserData((value)=>({...value, friends: [...value.friends, {name : props.name, username: props.username}]}));
        } catch (err) {
          console.error("err :: ", err);
          if (err.response && err.response.data && err.response.data.message) {
            alert(err.response.data.message);
          } else alert("Error adding user: " + props.username);
        }
      }}
    >
      <FaUserPlus className="text-white" />
    </button>
  );
}
