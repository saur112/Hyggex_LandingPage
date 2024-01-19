
import * as React from "react";
// import './App.css'
import Drop from "./drop";
import ReactCardFlip from 'react-card-flip';


function App(){
  
    const [isFlipped, setIsFlipped] = React.useState(false);
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };

  
  const heading = [
    "Can education flashcards be used for all age groups?",
    "How do education flashcards work?",
    "Can education flashcards be used for test preparation?",
  ];
  const value = [
    "Yes, education flashcards can be tailored to different age groups and learning levels. There are flashcards designed for preschoolers, elementary school students, high school students, and even for college-level and adult learners.",
    "Education flashcards work by presenting a question or prompt on one side and the corresponding answer or information on the other. Users can review the cards repeatedly, reinforcing their memory and enhancing learning through repetition.",
    "Absolutely. Flashcards are an excellent tool for test preparation, allowing students to review key concepts, terms, and facts. They provide a quick and focused way to reinforce knowledge before exams",
  ];
  return (
    <div className="bg-stone-50 d- flex flex-col pt-7 pb-12 px-16 max-md:px-5">
      <span className="flex flex-col mb-48 mx-11 max-md:max-w-full max-md:mr-2.5 max-md:mb-10">
        <div className=" flex w-full items-center justify-between gap-5 px-0.5 max-md:max-w-full max-md:flex-wrap">
          <img
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=522a927c726c4104a37405ff517e8117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=522a927c726c4104a37405ff517e8117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=522a927c726c4104a37405ff517e8117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=522a927c726c4104a37405ff517e8117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=522a927c726c4104a37405ff517e8117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=522a927c726c4104a37405ff517e8117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=522a927c726c4104a37405ff517e8117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/7a3310196855bfc2c31c18bd95afb0f19f1c916ba3df57c7d4d6eb2f78561233?apiKey=522a927c726c4104a37405ff517e8117&"
            className="aspect-[4.9] object-contain object-center w-[191px] overflow-hidden shrink-0 max-w-full my-auto"
          />
          <span className="  flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <span className=" self-center flex justify-between gap-5 my-auto">
              <div className="text-neutral-700 text-lg">Home</div>
              <div className="text-neutral-700 text-lg">Flashcard</div>
              <div className="text-neutral-700 text-lg">Contact</div>
            </span>
            <div className="text-neutral-700 text-lg self-center my-auto">
              FAQ
            </div>
            <span className=" bg-gradient-to-t from-[#164DBF] to-[#06286E] text-white text-lg font-medium  justify-center  px-10 py-3.5 rounded-[32px] max-md:px-5">
              Login
            </span>
          </span>
        </div>
        <div className=" flex gap-0 mt-16 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <span className=" flex gap-0">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa79f2a6be98768deb6946ac9a8bde734d9a286b6cb87cdfcb46e0678efec65b?apiKey=522a927c726c4104a37405ff517e8117&"
              className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b2a1d01218a1978c48b354696e34b2e896845efcefceae26d0436a1a5ac18a2a?apiKey=522a927c726c4104a37405ff517e8117&"
              className="aspect-square object-contain object-center w-6 overflow-hidden self-center shrink-0 max-w-full my-auto"
            />
            <div className="text-zinc-500 text-center text-lg font-medium self-center grow  my-auto">
              Flashcard
            </div>
          </span>
          <span className="self-center flex gap-0 my-auto items-start">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a030871d5b9379c6b8c17539b316003547b190b396f1930c15789d3925f0f3?apiKey=522a927c726c4104a37405ff517e8117&"
              className="aspect-square object-contain object-center w-6 overflow-hidden  shrink-0 max-w-full"
            />
            <div className="text-zinc-500 text-center text-lg font-medium">
              Mathematics
            </div>
            <span className="  flex justify-between gap-0">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20a030871d5b9379c6b8c17539b316003547b190b396f1930c15789d3925f0f3?apiKey=522a927c726c4104a37405ff517e8117&"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-blue-950 text-center text-lg font-semibold grow  self-start">
                Relation and Function
              </div>
            </span>
          </span>
        </div>
        <div className="text-center text-3xl font-bold bg-clip-text  mt-16 max-md:max-w-full max-md:mt-10">
          Relations and Functions ( Mathematics )
        </div>
        <div className="justify-between  self-center flex gap-5 mt-14 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <span className="text-blue-950 text-xl font-bold   pb-3.5 px-3">
            Study
          </span>
          <span className="text-zinc-500 text-xl font-medium    pb-3.5 px-3">
            Quiz
          </span>
          <span className="text-zinc-500 text-xl font-medium   pb-3.5 px-3">
            Test
          </span>
          <span className="text-zinc-500 text-xl font-medium   pb-3.5 px-3">
            Game
          </span>
          <span className="text-zinc-500 text-xl font-medium  pb-3.5 px-3">
            Others
          </span>
        </div>
        <div className="self-center cursor-pointer">
        <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
    >
        <div onClick={handleClick} className=" front bg-gradient-to-tr from-[#1F81EC] via-[#1258b3] to-[#051A91] flex self-center w-[712px] max-w-full flex-col  mt-8 px-9 py-11 rounded-[42.507px] max-md:px-5">
          <div className="d- flex  justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a6a4b4493da0ff50a0eebdd0942e02c1bebcfb3c1c4720fe5a7543918af5a5?apiKey=522a927c726c4104a37405ff517e8117&"
              className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a92c9cd2dceabeef4344c06ed585e8984fb1aed52d7801b90f9d83818eb8f94b?apiKey=522a927c726c4104a37405ff517e8117&"
              className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="text-white text-center text-4xl  font-bold r self-center  mt-20 mb-24 max-md:my-10">
            9 + 6 + 7x - 2x - 3
          </div>
        </div>
        <span onClick={handleClick} className=" back bg-gradient-to-tr from-[#2d87b6] via-[#194d7b] to-[#0d2854] flex self-center w-[712px] max-w-full flex-col  mt-8 px-9 py-11 rounded-[42.507px] max-md:px-5">
          <div className="d- flex  justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a6a4b4493da0ff50a0eebdd0942e02c1bebcfb3c1c4720fe5a7543918af5a5?apiKey=522a927c726c4104a37405ff517e8117&"
              className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a92c9cd2dceabeef4344c06ed585e8984fb1aed52d7801b90f9d83818eb8f94b?apiKey=522a927c726c4104a37405ff517e8117&"
              className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
            />
          </div>
          <div className="text-white text-center text-4xl  font-bold  self-center  mt-20 mb-24 max-md:my-10">
           5x + 12
          </div>
        </span>
        </ReactCardFlip>
        </div>
        <div className=" self-center flex w-[612px] max-w-full justify-between gap-5 mt-8 max-md:flex-wrap">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c144e1cddfb65cd0b5b12bc170d6f636d2a5f8ef6591a538a35cf81666ed80b9?apiKey=522a927c726c4104a37405ff517e8117&"
            className="aspect-square object-contain object-center w-[30px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
          <span className="items-center flex justify-between gap-5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fd96f7b354d6eb1063a27adb2c027f33eb19ea39c3b05b50d8fa541df35bbf2?apiKey=522a927c726c4104a37405ff517e8117&"
              className="aspect-square object-contain object-center w-[60px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden  shrink-0 max-w-full"
            />
            <div className="text-gray-800 text-2xl font-bold my-auto">
              01/10
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/525f7bbf765a9194f7b4a975c79ef4478296d1d5cbddc4f29cad81e8e1f5d9b1?apiKey=522a927c726c4104a37405ff517e8117&"
              className="aspect-square object-contain object-center w-[60px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden  shrink-0 max-w-full"
            />
          </span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/668a537dd30e9afeb0a31e4871d8991e18cb4ba560d3fa8681f899ddb1962bef?apiKey=522a927c726c4104a37405ff517e8117&"
            className="aspect-square object-contain object-center w-[30px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div>
        <div className=" flex w-full  justify-between gap-5 mt-20 px-0.5 max-md:max-w-full max-md:flex-wrap max-md:mt-10">
          <div className=" flex justify-between gap-5">
            <img
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/75865a6600062646d276bf71235a4fcdf3a97550ff4bfe7a0de8f66ca413aa21?apiKey=522a927c726c4104a37405ff517e8117&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/75865a6600062646d276bf71235a4fcdf3a97550ff4bfe7a0de8f66ca413aa21?apiKey=522a927c726c4104a37405ff517e8117&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75865a6600062646d276bf71235a4fcdf3a97550ff4bfe7a0de8f66ca413aa21?apiKey=522a927c726c4104a37405ff517e8117&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/75865a6600062646d276bf71235a4fcdf3a97550ff4bfe7a0de8f66ca413aa21?apiKey=522a927c726c4104a37405ff517e8117&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/75865a6600062646d276bf71235a4fcdf3a97550ff4bfe7a0de8f66ca413aa21?apiKey=522a927c726c4104a37405ff517e8117&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/75865a6600062646d276bf71235a4fcdf3a97550ff4bfe7a0de8f66ca413aa21?apiKey=522a927c726c4104a37405ff517e8117&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/75865a6600062646d276bf71235a4fcdf3a97550ff4bfe7a0de8f66ca413aa21?apiKey=522a927c726c4104a37405ff517e8117&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/75865a6600062646d276bf71235a4fcdf3a97550ff4bfe7a0de8f66ca413aa21?apiKey=522a927c726c4104a37405ff517e8117&"
              className="aspect-square object-contain object-center w-[81px] overflow-hidden shrink-0 max-w-full rounded-full shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
            />
            <span className="justify-center  flex grow basis-[0%] flex-col self-start">
              <div className="text-zinc-500 text-xs font-bold">
                Published by
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/02fb4ad4a76d997f4b9073c5c39df6810a74e6155727b614b3ed775b635eb9de?apiKey=522a927c726c4104a37405ff517e8117&"
                className="aspect-[3.38] object-contain object-center w-[115px] overflow-hidden self-center mt-3"
              />
            </span>
          </div>
          <span className=" self-center flex gap-2 my-auto">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/95c59588471b8d9b63490dd0b19cf3b828d5cbea675e4b720325df86d8ff847a?apiKey=522a927c726c4104a37405ff517e8117&"
              className="aspect-square object-contain object-center w-[60px] overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-3xl font-semibold bg-clip-text self-center   my-auto">
              Create Flashcard
            </div>
          </span>
        </div>
        <div className="text-5xl bg-gradient-to-t from-[#1067ca] to-[#051A91]  font-bold bg-clip-text text-transparent mt-20 max-md:max-w-full max-md:text-4xl max-md:mt-10">
          FAQ
        </div>
        <Drop heading={heading[0]} value={value[0]}/>
        <Drop heading={heading[1]} value={value[1]}/>
        <Drop heading={heading[2]} value={value[2]} />
      </span>
    </div>
  );
}

export default App;
