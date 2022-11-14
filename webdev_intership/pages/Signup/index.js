import SignupView from "../../src/views/SignupView/SignupView";
import AuthProvider from "../../src/firebase/AuthContext";

export default function Login () {
  return (
    <AuthProvider>
       <SignupView />
    </AuthProvider>
  )
}