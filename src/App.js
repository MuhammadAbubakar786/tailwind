import Card from "./Card";
import CardUiDesign from "./CardUiDesign";
import Login from "./login";
import LoginUiDesign from "./LoginUiDesign";
function App() {
  return (
    <>
      <Card />
      <CardUiDesign />
      <LoginUiDesign />
      <Login />

      <div className="bg-zinc-700 h-screen flex justify-center items-center">
        {/* //Card and Flex */}
        <div className=" mx-6 p-2 bg-zinc-800 rounded-2xl flex-col md:flex-row flex">
          {/* Image Flex Item */}
          <img
            src="image.jpg"
            alt=""
            className="object-fill h-80 md:h-64 rounded-xl md:rounded-l-xl md:rounded-r-none transition hover:scale-105 duration-200 hover:rounded-xl"
          />
          {/* Content Flex_item */}

          <div className="p-6 md:p-12">
            <h1 className="text-center text-white font-serif text-xl font-medium md:text-left">
              Get diet and fitness tips in your inbox
            </h1>
            <p className="max-w-xs text-white text-xs text-center my-4 leading-5 tracking-wide md:text-left">
              Eat better and exercise better. Sign up for the Diet&Fitness
              newsletter.
            </p>
            {/* Form Flex */}
            <div className="flex flex-col mt-5 space-y-4 md:flex-row md:space-x-3 md:space-y-0">
              <input
                placeholder="Enter your email address"
                className="placeholder:text-xs p-2 px-4 py-2  bg-zinc-800 text-white placeholder:text-center text-center md:text-left placeholder:md:text-left focus:outline-none border border-zinc-600"
              />
              <button className="px-5 py-3 bg-lime-500 text-zinc-800 rounded-md text-xs hover:bg-lime-600 hover:text-white duration-500 ">
                Subcribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
