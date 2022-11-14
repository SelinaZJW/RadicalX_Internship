import LoginView from "../../src/views/LoginView/LoginView";
import AuthProvider from "../../src/firebase/AuthContext";

export default function Login () {
  return (
    <AuthProvider>
      <LoginView />
    </AuthProvider>
  )
}