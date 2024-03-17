import { CardWrapper } from "@/components/auth/card-wrapper";
import { LoginForm } from "@/components/auth/login-form";

export default function Login() {
  return (
    <CardWrapper
      headerLabel="Welcomeback"
      backButtonLabel="Don't have an account"
      backButtonHref="/auth/signup"
      showSocial
    >
      <LoginForm />
    </CardWrapper>
  );
}
