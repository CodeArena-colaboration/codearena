// app/(auth)/layout.tsx
import Image from "next/image";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-gradient-to-br from-[#080808] via-[#262424] to-[#323131]   justify-center items-center  bg-cover min-h-screen  flex ">
      <div className="w-[100%] h-[100%] ml-96 flex items-center justify-center">
        <Image
          src="/CodeArena_Logo 5.png"
          width={600}
          height={500}
          alt="codearena logo"
          className="mt-2 mr-10"
        ></Image>
         <div className="w-[98%] h-[95%] z-40 -ml-[1005px]  bg-cover bg-center bg-[url('/Rectangle_48.svg')]  backdrop-blur shadow-xl border border-white/30  p-6 flex items-center justify-center flex-col">
        
        {children}
        
      </div>
      
      </div>
     
    </section>
  );
}
