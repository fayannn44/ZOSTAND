import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset error & success setiap kali submit
    const newErrors = { username: "", password: "" };
    setSuccess(false);

    let hasError = false;

    // 1. Validasi Username Kosong
    if (!username.trim()) {
      newErrors.username = "Username wajib diisi!";
      hasError = true;
    } else if (!username.toLowerCase().endsWith("@student.abudzar.sch.id")) {
      newErrors.username = "Username harus diakhiri '@student.abudzar.sch.id'";
      hasError = true;
    }

    // 2. Validasi Password Kosong & Panjang
    if (!password) {
      newErrors.password = "Password wajib diisi!";
      hasError = true;
    } else if (password.length < 5) {
      newErrors.password = "Password minimal harus 5 karakter!";
      hasError = true;
    }

    // Jika ada error (salah satu atau kedua field kosong/salah), hentikan proses
    if (hasError) {
      setError(newErrors);
      return;
    }

    setIsLoading(true);

    const payload = {
      username: username,
      password: password,
    };

    console.log("Login payload:", payload);

    setTimeout(() => {
      setUsername("");
      setPassword("");
      setSuccess(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form
        className="w-80 space-y-4 rounded-lg bg-white p-6 shadow-md"
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="text-center text-2xl font-bold">Login</h1>

        {/* Input Username */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-600">
            Username <span className="text-red-500">*</span>
          </label>
          <input
            className={`w-full rounded border p-2 ${
              error.username ? "border-red-500" : "border-gray-300"
            }`}
            type="text"
            placeholder="nama@student.abudzar.sch.id"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              if (error.username) {
                setError((prev) => ({ ...prev, username: "" }));
              }
            }}
          />
          {error.username && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {error.username}
            </p>
          )}
        </div>

        {/* Input Password */}
        <div>
          <label className="mb-1 block text-xs font-semibold text-gray-600">
            Password <span className="text-red-500">*</span>
          </label>
          <input
            className={`w-full rounded border p-2 ${
              error.password ? "border-red-500" : "border-gray-300"
            }`}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error.password) {
                setError((prev) => ({ ...prev, password: "" }));
              }
            }}
          />

          {error.password && (
            <p className="mt-1 text-xs font-medium text-red-500">
              {error.password}
            </p>
          )}

          {success && (
            <p className="mt-1 text-xs font-medium text-green-500">
              Login berhasil
            </p>
          )}
        </div>

        <button
          className="flex w-full items-center justify-center gap-2 rounded bg-black p-2 text-white disabled:opacity-50"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
              Loading...
            </>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;