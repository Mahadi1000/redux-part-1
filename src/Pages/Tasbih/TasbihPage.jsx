import { useDispatch, useSelector } from "react-redux";
import { increment, reset } from "../../Redux/features/tasbihSlice";


const TasbihPage = () => {
 const counters = useSelector((state) => state.tasbih);
 const dispatch = useDispatch();

  return (
    <main className="lg:m-10 m-5">
      <div className="title-container">
        <h1 className="mb-4 text-3xl text-center lg:mt-20 font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Digital Tasbih
          </span>
        </h1>
      </div>

      <section className="container grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full mt-5 lg:mt-20 lg:grid-cols-3 gap-3 lg:gap-5 max-w-7xl">
        {counters.map((counter) => (
          <div
            key={counter.id}
            className="relative flex w-full text-center flex-col rounded-xl bg-teal-300 bg-clip-border text-gray-700 shadow-md"
          >
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {counter.id === "subhanAllah"
                  ? "Subhan Allah"
                  : counter.id === "alhamdulillah"
                  ? "Alhamdulilah"
                  : "Allahu Akbar"}
              </h5>
              <p className="block text-4xl font-sans font-light leading-relaxed text-inherit antialiased">
                {counter.value}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                onClick={() => dispatch(increment(counter.id))}
                className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Increment
              </button>
              <button
                onClick={() => dispatch(decrement(counter.id))}
                className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
              >
                Decrement
              </button>
            </div>
          </div>
        ))}
      </section>

      <div className="resetContainer lg:mt-10 mt-5 flex justify-center">
        <button
          onClick={() => dispatch(reset())}
          className="select-none rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Reset All Tasbih
        </button>
      </div>
    </main>
  );
}

export default TasbihPage