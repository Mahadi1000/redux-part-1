import { useDispatch, useSelector } from "react-redux";


const TasbihPage = () => {
 const counters = useSelector((state) => state.tasbih);
 const dispatch = useDispatch();

  return (
    <main className="lg:m-10 m-5">
      <div className="title-container">
        <h1 className="mb-4 text-3xl text-center lg:mt-20  font-extrabold text-gray-900 dark:text-white md:text-5xl     lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Digital Tasbih
          </span>
        </h1>
      </div>

      <section className="container grid grid-cols-1 md:grid-cols-2 justify-center items-center w-full mt-5 lg:mt-20 lg:grid-cols-3 gap-3 lg:gap-5 max-w-7xl">
        {/* <!-- SubhanallahContainer Start --> */}
        <div className="relative flex w-full text-center flex-col rounded-xl  bg-clip-border text-gray-700 shadow-md bg-teal-300 ">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Subhan Allah
            </h5>
            <p
              id="subhanAllahDisplay"
              className="block text-4xl font-sans font-light leading-relaxed text-inherit antialiased"
            >
              {counters.value}
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              onClick={() => dispatch(increment())}
              id="subhanAllahIncrimentBtn"
              className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Increment
            </button>
            <button
              id="subhanAllahDecrimentBtn"
              className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Decrement
            </button>
          </div>
        </div>
        {/* <!-- SubhanallahContainer End --> */}

        {/* <!-- AlhamdulillahContainer Start --> */}
        <div className="relative flex w-full text-center flex-col rounded-xl bg-emerald-300 bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Alhamdulillah
            </h5>
            <p
              id="alhamdulillahDisplay"
              className="block text-4xl font-sans font-light leading-relaxed text-inherit antialiased"
            >
              0
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              id="alhamdulillahIncrimentBtn"
              className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Increment
            </button>
            <button
              id="alhamdulillahDecrimentBtn"
              className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Decrement
            </button>
          </div>
        </div>
        {/* <!-- AlhamdulillahContainer End --> */}

        {/* <!-- AllahuakberContainer Start --> */}
        <div className="relative flex w-full text-center flex-col rounded-xl bg-sky-300 bg-clip-border text-gray-700 shadow-md">
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Allahuakber
            </h5>
            <p
              id="allahAkberDisplay"
              className="block text-4xl font-sans font-light leading-relaxed text-inherit antialiased"
            >
              0
            </p>
          </div>
          <div className="p-6 pt-0">
            <button
              id="allahAkberIncrimentBtn"
              className="select-none rounded-lg bg-green-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Incriment
            </button>
            <button
              id="allahAkberDecrimentBtn"
              className="select-none rounded-lg bg-red-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Decrement
            </button>
          </div>
        </div>
        {/* <!-- AlhamdulillahContainer End --> */}
      </section>

      {/* <!-- ResetContainer Start --> */}
      <div className="resetContainer lg:mt-10 mt-5 flex justify-center">
        <button
          id="resetBtn"
          className="select-none rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Reset All Tasbih
        </button>
      </div>
      {/* <!-- ResetContainer End --> */}
    </main>
  );
}

export default TasbihPage