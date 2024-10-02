import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");

  const calcularIMC = (e) => {
    e.preventDefault();

    if (!altura || !peso) {
      toast.error("Preencha todos os campos corretamente!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    const imc = (peso / (altura * altura)).toFixed(2);
    
    let mensagem = "";

    if (imc < 18.5) {
      mensagem = `Seu IMC é ${imc} (Abaixo do peso)`;
    } else if (imc >= 18.5 && imc < 24.9) {
      mensagem = `Seu IMC é ${imc} (Peso normal)`;
    } else if (imc >= 25 && imc < 29.9) {
      mensagem = `Seu IMC é ${imc} (Sobrepeso)`;
    } else {
      mensagem = `Seu IMC é ${imc} (Obesidade)`;
    }

    toast.success(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <section className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 w-[100vw] h-[100vh] flex justify-center items-center">
  <ToastContainer />
  <div className="bg-white p-10 flex flex-col border rounded-2xl shadow-black/50 shadow-xl">
    <h1 className="font-bold mb-8 justify-center text-violet-600 text-2xl">Calculadora de IMC</h1>
    <form onSubmit={calcularIMC}>
      <p className="font-semibold text-violet-800 mb-3">Informe sua Altura:</p>
      <input
        type="number"
        placeholder="Altura (m)"
        className="border-transparent w-[100%] mb-5"
        value={altura}
        onChange={(e) => setAltura(e.target.value)}
      />
      <p className="font-semibold text-violet-800 mb-3">Informe seu Peso:</p>
      <input
        type="number"
        placeholder="Peso (kg)"
        className="border-transparent w-[100%] mb-5"
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <button
        className="bg-violet-600 hover:bg-violet-900 text-white p-2 rounded-2xl border-transparent"
        type="submit"
      >
        Calcular IMC
      </button>
    </form>
  </div>
</section>
  );
}

export default App;
