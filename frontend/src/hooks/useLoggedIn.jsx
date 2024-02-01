import axios from "axios";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { userDataAtom } from "../store/user";

export default function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const setUserData = useSetRecoilState(userDataAtom);
  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          import.meta.env.VITE_SERVER + "/api/user/verify",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if(response.data.success){
          setLoggedIn(true);
        }
        setUserData(response.data.userData);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }
    verify();
  }, [setUserData]);
  return { loggedIn, loading};
}