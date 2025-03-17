import { useState } from "react";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { signup } from "../../api/auth";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password || !username) return;

    setLoading(true);
    setError("");

    try {
      console.log("Submitting signup:", { email, password, username });

      const res = await signup(email, password);
      console.log("Signup response:", res);
      navigate("/dashboard");
    } catch (error) {
      console.error("Signup request error:", error);
      setError(error.message || "Signup failed. Please try again.");
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormRow>
      <FormRow label="Username">
        <Input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
          {loading ? "Signing up..." : "Sign up"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
