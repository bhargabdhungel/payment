import { useNavigate } from "react-router-dom";
import useLoggedIn from "../hooks/useLoggedIn";
import { useEffect } from "react";
import LoadingCard from "../components/LoadingCard";
import SearchResultsCard from "../components/SearchResultsCard";
import { useRecoilValue } from "recoil";
import { searchResultsAtom} from "../store/user";
import Friends from "../components/Friends";

export default function Dashboard() {
  const navigate = useNavigate();
  const { loggedIn, loading } = useLoggedIn();
  const results = useRecoilValue(searchResultsAtom);

  useEffect(() => {
    if (!loading && !loggedIn) navigate("/login", { replace: true });
  }, [loggedIn, loading, navigate]);


  if (loading) return <LoadingCard />;

  return(
    <>
      {results.length > 0 && <SearchResultsCard />}
      <Friends />
    </>

  )
}
