import { onAuthStateChanged } from "@firebase/auth";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { useRecoilState } from "recoil";
import { userAtom } from "../store/user";
import { useNavigate } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";

export default function useAuth() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useRecoilState(userAtom);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (_user) => {
      if (_user) {
        setUser({
          uid: _user.uid,
          email: _user.email,
          metadata: _user.metadata,
          name: _user.displayName,
          profilePic: _user.photoURL,
        });
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [setUser]);

  useEffect(() => {
    if (!user.uid) return;
    const unsubscribe = onSnapshot(doc(db, "users", user.uid), (snap) => {
      if (snap.exists()) {
        setUser((prev) => ({ ...prev, username: snap.data().username }));
        if (!snap.data().username) {
          navigate("setUsername", { replace: true });
        }
      } else {
        console.log("No such document!");
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setUser, user.uid, user.username, navigate]);

  return { loading };
}
