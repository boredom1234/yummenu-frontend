import { useAuth0 } from "@auth0/auth0-react";
import { useCreateMyUser } from "@/api/MyUserApi";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreated = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreated.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreated.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);
  return <>Loading...</>;
};

export default AuthCallbackPage;
