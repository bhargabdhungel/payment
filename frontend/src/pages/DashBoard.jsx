import { useNavigate } from "react-router-dom";
import useLoggedIn from "../hooks/useLoggedIn";
import { useEffect } from "react";
import LoadingCard from "../components/LoadingCard";

export default function Dashboard() {
  const navigate = useNavigate();
  const {loggedIn, loading} = useLoggedIn();

  useEffect(() => {
    if(!loading && !loggedIn) navigate("/login", { replace: true });
  }, [loggedIn,loading,navigate]);

  if(loading) return <LoadingCard/>
  return (
    <h1>hi</h1>
  );
}