import { useState } from 'react';

export default function LoadingInvite({ children }) {
  const [loading, setLoading] = useState(true);
  const [explode, setExplode] = useState(false);

  const handleStart = () => {
    // Explosión visual
    setExplode(true);

    // Iniciar música si existe el audio
    const audio = document.getElementById('myAudio');
    if (audio) {
      audio.play().catch(err => {
        console.log("Autoplay bloqueado, el usuario debe interactuar:", err);
      });
      playPauseBtn.textContent = "🔊";
    }

    // Esperar animación y mostrar contenido
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  if (loading) {
    return (
      
        <section className="items-center justify-center h-screen w-screen flex flex-col text-center relative overflow-hidden">
            <div
                className={`text-6xl transition-transform duration-700 ease-out z-0 ${
                    explode ? 'scale-[10] opacity-0' : 'scale-100 opacity-100'
                }`}
            >
                
                    
                <div className="flex flex-col items-center justify-center text-center animate-ping [animation-duration:3s] w-screen h-32">
                    <img src="src/images/mis18.webp" alt="Mis!8" className="object-cover h-32" />
                    <img src="src/images/year.webp" alt="Mis!8" className="object-cover h-32" />
                </div>
                

            </div>
            
            {!explode && (
                <button
                    id="playPauseBtn"
                    onClick={handleStart}
                    className="z-10 mt-28 px-6 py-3 text-white bg-[#1E2D42] font-serif rounded-2xl animate-blue-glow hover:scale-105 transition-all duration-300"
                >
                    Ver invitación
                </button>
            )}
            

            <style jsx>{`
                @keyframes blue-glow {
                    0%, 100% {
                    box-shadow: 0 0 10px #4d010f, 0 0 20px #4d010f, 0 0 30px #4d010f;
                    }
                    50% {
                    box-shadow: 0 0 20px #1E2D42, 0 0 40px #1E2D42, 0 0 60px #1E2D42;
                    }
                }
                .animate-blue-glow {
                    animation: blue-glow 2s infinite;
                }
            `}</style>
        </section>

    );
  }

  return (
    <section className="flex flex-wrap h-screen animate-fadeIn">
      {children}
    </section>
  );
}
