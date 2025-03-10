export default function FlippableCard() {

  return (
    <div className="flip-card h-[1200px] w-[900px] flex justify-center relative">
      <div className="flip-card-inner h-full w-full rounded-[60px] border-8 border-white shadow-2xl absolute">
        <div className="flip-card-front h-full w-full flex justify-center items-center text-[80px] text-white bg-green-400 absolute">
          <h1>Front</h1>
        </div>
        <div className="flip-card-back h-full w-full flex justify-center items-center text-[80px] text-white bg-blue-400 absolute">
          <h1>Back</h1>
        </div>
      </div>
    </div>
  );
}