// import React from 'react'
import {BiEdit} from "react-icons/bi";
import {MdDelete} from "react-icons/md";

const Comments = () => {
  return (
    <div>
       <div className="px-2 py-2 bg-gray-200 rounded-lg my-3">
        <div className="flex items-center justify-center space-between">
          <h3 className="font-bold text-gray-600">@AmanMishra</h3>
          <div className="flex justify-center items-center space-x-40">
            <p className="text-gray-500 text-sm"> 12/02/2024</p>
            {/* <p className="text-gray-500 text-sm">5:00</p> */}
            <div className="flex items-center justify-center space-x-2">
        {/* onClick={()=>navigate("/edit/"+postId)} */}
        <p className="cursor-pointer"  ><BiEdit/></p>
            <p className="cursor-pointer" ><MdDelete/></p>
            {/* onClick={handleDeletePost} */}
        </div>
          </div>

        </div>
        <p className="mx-4 pt-4">Nice information!!</p>

      </div>
    </div>
  )
}

export default Comments
