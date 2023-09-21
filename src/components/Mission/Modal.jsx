import React, { useState } from 'react'

function Modal() {
    const [activeTab, setActiveTab] = useState(1);
  
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
        <div className="flex pl-[1.4375rem]"> 
          {['출석 체크', '일간 미션', '주간 미션'].map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index + 1)}
              className={`h-[2.6875rem] w-[5.8125rem] p-10 rounded-t-[10px] ${activeTab === index + 1 ? 'text-color6 font-semibold shadow-select bg-white' : 'text-gray font-medium bg-unselect'} focus:outline-none`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="w-500 h-500 bg-white rounded-custom shadow-custom p-4">
          {activeTab === 1 && <p>Content for Tab 1</p>}
          {activeTab === 2 && <p>Content for Tab 2</p>}
          {activeTab === 3 && <p>Content for Tab 3</p>}
        </div>
      </div>
    );
  }
  

export default Modal