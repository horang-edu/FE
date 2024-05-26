import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import cat from "../../assets/img/cat.png";
import myprofile from "../../assets/img/myprofile.png";
import chatclose from "../../assets/img/chatclose.png"; 

function Chat() {
  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const chatContainerRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 사용자 메시지를 채팅 히스토리에 추가
      setChatHistory((prevChatHistory) => [...prevChatHistory, { role: 'user', content: inputMessage }]);

      // API 요청 보내기
      const response = await axios.post('http://3.34.10.94:8080/api/chat', {
        prompt: inputMessage,
      });

      // API 응답 처리
      const responseData = response.data.data.choices[0].message.content;

      // 챗봇 답변을 채팅 히스토리에 추가
      setChatHistory((prevChatHistory) => [...prevChatHistory, { role: 'assistant', content: responseData }]);
      setInputMessage('');
    } catch (error) {
      console.error('Error sending chat request:', error);
    }
  };

  useEffect(() => {
    // 매번 채팅이 업데이트될 때 스크롤을 맨 아래로 이동
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // 클라이언트에서 OPTIONS 요청에 대한 응답을 처리
  useEffect(() => {
    const handleOptionsResponse = async () => {
      try {
        await axios.options('http://3.34.10.94:8080/api/chat');
      } catch (error) {
        console.error('Error handling OPTIONS request:', error);
      }
    };

    handleOptionsResponse();
  }, []);

  const handleClose = () => {
    setIsOpen(false); // 채팅 창 닫기
  };

  if (!isOpen) return null; // 채팅 창이 닫히면 아무것도 렌더링하지 않음

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.5)', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
      <div style={{ width: '415px', height: '588px', margin: '65px', display: 'flex', flexDirection: 'column', backgroundColor: '#FFF8EF', borderRadius: '20px', position: 'relative' }}>
        <div style={{ backgroundColor: '#FFFCF8', fontSize: '20px', color: '#F99363', padding: '24px', textAlign: 'left', boxShadow: '0 5px 5px rgba(249, 147, 99, 0.05)', borderRadius: '20px 20px 0px 0px', position: 'relative' }}>
          야옹이에게 질문하기
        </div>
        <div
          ref={chatContainerRef}
          style={{ flex: 1, overflowY: 'scroll', padding: '10px' }}
        >
          {chatHistory.map((message, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                flexDirection: message.role === 'user' ? 'row-reverse' : 'row',
                alignItems: 'flex-end',
                marginBottom: '16px',
              }}
            >
              <img
                src={message.role === 'user' ? myprofile : cat}
                alt={`${message.role} profile`}
                style={{ width: '40px', height: '40px', borderRadius: '10px', margin: '0 10px' }}
              />
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: message.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '4px', color: '#97705E' }}>
                  {message.role === 'user' ? '나' : '야옹이'}
                </div>
                <div
                  style={{
                    maxWidth: '280px',
                    backgroundColor: message.role === 'user' ? '#FFF3E6' : '#ffffff',
                    padding: '16px',
                    borderRadius: '10px',
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} style={{ display: 'flex', padding: '10px' }}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="무엇이든 질문하세요!"
            style={{ flex: 1, padding: '10px', border: '1px solid #F99363', borderRadius: '10px', marginRight: '10px', backgroundColor: '#FFFCF8' }}
          />
          <button type="submit" style={{ fontSize: '16px', padding: '16px', backgroundColor: '#F99363', color: '#fff', border: 'none', borderRadius: '10px' }}>
            전송
          </button>
        </form>
        <button onClick={handleClose} style={{ position: 'absolute', top: '-48px', right: '0px', width: '36px', height: '36px', backgroundColor: '#FFD7C3', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          <img src={chatclose} alt="Close" style={{ width: '20px', height: '20px' }} />
        </button>
      </div>
    </div>
  );
}

export default Chat;
