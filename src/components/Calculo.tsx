// components/TaxReturnCalculator.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  id: number;
  title: string;
  description: string;
}

const steps: Option[][] = [
  [
    { id: 1, title: "Lucro Presumido", description: "Empresas com regime tributário de Lucro Presumido" },
    { id: 2, title: "Lucro Real", description: "Empresas com regime tributário de Lucro Real" },
    { id: 3, title: "Simples Nacional", description: "Empresas optantes pelo Simples Nacional" },
    { id: 4, title: "Outro", description: "Outro tipo de regime" },
  ],
  [
    { id: 5, title: "Faturamento até R$1 mi", description: "Pequeno porte" },
    { id: 6, title: "Faturamento até R$5 mi", description: "Médio porte" },
    { id: 7, title: "Faturamento acima de R$5 mi", description: "Grande porte" },
    { id: 8, title: "Não sei informar", description: "Estimativa aproximada" },
  ],
  [
    { id: 9, title: "Menos de 5 anos", description: "Empresa mais nova" },
    { id: 10, title: "5 a 10 anos", description: "Tempo médio de mercado" },
    { id: 11, title: "Mais de 10 anos", description: "Empresa consolidada" },
    { id: 12, title: "Iniciando agora", description: "Empresa em abertura" },
  ],
  [
    { id: 13, title: "Até 10 funcionários", description: "Pequena equipe" },
    { id: 14, title: "11 a 50 funcionários", description: "Equipe média" },
    { id: 15, title: "Mais de 50 funcionários", description: "Grande equipe" },
    { id: 16, title: "Autônomo/Individual", description: "Sem funcionários" },
  ],
  [
    { id: 17, title: "Sim", description: "Já auditou os impostos" },
    { id: 18, title: "Não", description: "Nunca auditou os impostos" },
    { id: 19, title: "Não sei responder", description: "Informação indisponível" },
    { id: 20, title: "Prefiro não informar", description: "Dados reservados" },
  ],
];

export default function TaxReturnCalculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (id: number) => {
    const updated = [...selectedOptions];
    updated[currentStep] = id;
    setSelectedOptions(updated);

    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setSelectedOptions([]);
    setCurrentStep(0);
    setShowResult(false);
  };

  // Simulação de cálculo
  const calculatedReturn = selectedOptions.length * 15000;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 p-6 text-white">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center mb-8">
          Calculadora de Retorno de Impostos
        </h1>

        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {steps[currentStep].map((option) => (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg hover:bg-white/20 transition-all"
                  >
                    <h2 className="text-xl font-semibold">{option.title}</h2>
                    <p className="text-sm opacity-80">{option.description}</p>
                  </motion.button>
                ))}
              </div>

              {currentStep > 0 && (
                <button
                  onClick={handleBack}
                  className="mt-6 px-6 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition"
                >
                  Voltar
                </button>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-10 text-center shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4">Resultado Estimado</h2>
              <p className="text-lg">
                Em média, podemos retornar cerca de{" "}
                <span className="font-bold text-green-400">
                  R$ {calculatedReturn.toLocaleString("pt-BR")}
                </span>{" "}
                para sua empresa, se realizar o processo conosco.
              </p>
              <button
                onClick={handleRestart}
                className="mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                Refazer cálculo
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
