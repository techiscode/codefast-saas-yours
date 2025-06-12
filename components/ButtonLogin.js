import Link from "next/link";
const ButtonLogin = ({ isLoggedIn, name }) => {
  console.log("isLoggedIn is :", isLoggedIn);
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome {name}. Go to Dashboard
      </Link>
    );
  } else {
    return <button>Login</button>;
  }
};

export default ButtonLogin;
