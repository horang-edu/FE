import React from 'react'
import Message from "../components/learning/Message";
import Level from "../components/learning/Level";

function Learning() {
  return (
    <div className="w-full flex justify-center items-center h-screen">
    <div>
        <Message/>
        <Level/>
    </div>
    </div>
  )
}

export default Learning