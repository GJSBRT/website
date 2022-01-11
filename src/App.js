import './App.css';

function App() {
  return (
    <div className="App" class="bg-neutral-50">
      <header class="w-full h-screen bg-center bg-no-repeat bg-cover">
        <div class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
          <div class="mx-4 text-center text-white">
            <h2 class="font-bold text-3xl mb-4">Hello, my name is</h2>
            <h1 class="font-bold text-8xl mb-12">Gijsbert</h1>
            <div>
              <a href="https://discord.com/users/702501824762216478"><i class="fab fa-discord text-4xl mx-2"></i></a>
              <a href="https://github.com/gjsbrt"><i class="fab fa-github text-4xl mx-2"></i></a>
              <a href="https://www.linkedin.com/in/gijsbert-van-gemert-145bb9130/"><i class="fab fa-linkedin text-4xl mx-2"></i></a>
            </div>
          </div>
        </div>
      </header>
      <main class="mx-auto w-[60%] pb-32">
        <h2 class="text-6xl text-center mb-4 mt-16">Projects</h2>
        <div class="grid grid-cols-3 gap-4">
          <a href="https://www.fivem2go.nl/package/4882039">
            <div class="py-6">
              <div class="flex max-w-md h-40 bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="w-1/3 bg-cover suggestionbot"></div> 
                <div class="w-2/3 p-4">
                  <h1 class="font-bold text-2xl">Suggestion Bot</h1>
                  <p class="mt-2 opacity-75 text-sm">A Suggestion bot with multiple channels and feedback/reactions with explaination.</p>
                  <div class="flex item-center justify-between mt-3">
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="https://dutchis.net">
            <div class="py-6">
              <div class="flex max-w-md h-40 bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="w-1/3 bg-cover deepslate"></div> 
                <div class="w-2/3 p-4">
                  <h1 class="font-bold text-2xl">Deepslate</h1>
                  <p class="mt-2 opacity-75 text-sm">Deepslate is an all in one hosting platform. Deepslate combines all the nessicary tools and programs required to run a hosting company and more.</p>
                  <div class="flex item-center justify-between mt-3">
                  </div>
                </div>
              </div>
            </div>
          </a>

          <a href="https://github.com/GJSBRT/GCPhone-Dark">
            <div class="py-6">
              <div class="flex max-w-md h-40 bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="w-1/3 bg-cover gcphone"></div> 
                <div class="w-2/3 p-4">
                  <h1 class="font-bold text-2xl">Dark Mode GCPhone</h1>
                  <p class="mt-2 opacity-75 text-sm">A Darkmode version of the populair phone in FiveM GCPhone.</p>
                  <div class="flex item-center justify-between mt-3">
                  </div>
                </div>
              </div>
            </div>
          </a>

        </div>
      </main>
    </div>
  );
}

export default App;
