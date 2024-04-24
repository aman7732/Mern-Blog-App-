// import React from 'react'

const ProfilePost = () => {
  return (
    <div className="w-full flex mt-8 space-x-4">
      {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src="https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg" alt=""  className="" />
    </div>
        {/* right */}
    <div className="flex flex-col w-[65%]">
    <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
      10 Uses of Artificial Initelligence in your day to day life
    </h1>
    <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
     <p>@AmanMishra</p>
     <div className="flex space-x-2 text-sm">
      <p>12/02/2024</p>
      <p>5:00</p>
     </div>
    </div>
    <p  className="text-sm md:text-lg">Satoshi Nakamoto created Bitcoin in 2009. The name  is the pseudonym for the person or people who introduced the concept of Bitcoin in a 2008 paper.1 Nakamoto remained active in the creation of Bitcoin and the blockchain until about 2010 but has not been heard from since.</p>
    </div>
    </div>
  )
}

export default ProfilePost
