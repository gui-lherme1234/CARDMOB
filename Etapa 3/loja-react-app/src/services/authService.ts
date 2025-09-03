import Config from "react-native-config";

// const API_URL = Config.API_URL;
const API_URL = "http://10.0.2.2:5000"; // 👉 muda conforme teu ambiente

export async function fakeLogin(email: string, password: string): Promise<string> {
  if (email === "teste@example.com" && password === "123") {
    return "fake-jwt-token";
  }
  throw new Error("Credenciais inválidas");
}

export async function requestLogin(email: string, password: string): Promise<string> {
  try {
    console.log("➡️ Fazendo login em:", `${API_URL}/api/users/login`);

    const response = await fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    console.log("📡 Status da resposta:", response.status);

    let data: any = {};
    try {
      data = await response.json();
    } catch (err) {
      console.log("⚠️ Não consegui parsear o JSON:", err);
    }

    console.log("📦 Resposta do servidor:", data);

    if (!response.ok) {
      throw new Error(data?.message || "Erro no login");
    }

    const jwt = data?.accessToken || data?.token; // tenta os dois formatos
    if (!jwt) {
      throw new Error("Token não recebido do servidor");
    }

    console.log("✅ Token recebido:", jwt);
    return jwt;
  } catch (error) {
    console.error("❌ Erro no requestLogin:", error);
    throw error;
  }
}
