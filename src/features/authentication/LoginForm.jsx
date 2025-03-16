import { useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { login } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("example1@gmail.com");
  const [password, setPassword] = useState("Ahtnbk04?");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    setLoading(true);
    setError("");

    try {
      console.log("Submitting login:", { email, password });

      const res = await login(email, password);
      console.log("Login response:", res);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login request error:", error);
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRow label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormRow>
      <FormRow label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormRow>

      {error && (
        <FormRow>
          <p className="text-sm text-red-500">{error}</p>
        </FormRow>
      )}

      <FormRow>
        <Button size="large" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Log in"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default LoginForm;
