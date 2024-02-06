import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import {useNavigate} from "react-router-dom";

export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (_user) => {
      if (_user) setUser(_user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if(!loading && !user)  navigate('/login',{replace:true})
  },[loading, navigate, user]);

  return { user, loading };
}
