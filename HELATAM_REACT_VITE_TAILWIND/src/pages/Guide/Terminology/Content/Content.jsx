import { Aside } from "../../../../constant/Aside/Aside";

export const Content = () => {
    return (
        <section className="min-w-[1280px] max-w-[1920px] w-full mx-auto my-0 relative pb-24">
            <div className="w-[1280px] mx-auto my-0">
                <div className="py-[10%]">
                    <section className="relative float-left w-8/12 mx-7 text-[#bbcace] bg-[#0f2b55] p-8 border-t-8 border-t-[#420398] ">
                        <h1 className="leading-10 text-white text-4xl font-bold uppercase">
                            HEROES EVOLVED TERMINOLOGY
                        </h1>
                        <p className="text-[#9d9d9d] py-5">08/23/2021</p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Top Laner:
                        </h2>
                        <p className="pb-6">
                            Top laner se refiere al héroe que defiende el carril
                            superior por su cuenta. A diferencia de algunos
                            juegos MOBA para PC, Heroes Evolved tiene los
                            carriles superior e inferior invertidos para los dos
                            bandos, lo que hace que tu carril superior juegue
                            contra el ADC enemigo y el soporte en su carril
                            inferior. Por lo tanto, los carrileros superiores
                            deben tener una alta capacidad de supervivencia y
                            resistencia.
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Mid Laner:
                        </h2>
                        <p className="pb-6">
                            Es el héroe, generalmente un mago, que protege el
                            carril central por su cuenta. Los mid laners pueden
                            desarrollarse más rápido farmeando un carril de
                            tropas enemigas y se espera que contribuyan
                            significativamente a las peleas en equipo al final
                            del juego.
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Last Hit:
                        </h2>
                        <p className="pb-6">
                            Matar tropas otorga oro y experiencia. “Last hit”
                            significa dar el golpe final a las tropas enemigas
                            para obtener mayores recompensas de bonificación
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Buff:
                        </h2>
                        <p className="pb-6">
                            Es un efecto positivo aplicado a un héroe y
                            generalmente obtenido de monstruos como Zakar en
                            Heroes Evolved.
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Counter Jungle:
                        </h2>
                        <p className="pb-6">
                            Matar monstruos de la jungla enemiga para privar al
                            oponente de beneficios, oro y experiencia.
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Counter Kill:
                        </h2>
                        <p className="pb-6">
                            Cuando un héroe con ventajas sobre su enemigo es
                            asesinado inesperadamente por éste mismo.
                        </p>
                        <h2 className="text-lg text-[#e9b012] font-semibold">
                            Growth:
                        </h2>
                        <p className="pb-6">
                            Recolectar oro y experiencia matando monstruos de la
                            jungla y tropas enemigas. Mejorar a tu héroe es lo
                            más importante antes de construir un conjunto de
                            ítems de máximo nivel, así como la clave para ganar
                            en las peleas de equipo.
                        </p>
                    </section>
                    <Aside />
                </div>
            </div>
        </section>
    );
};
