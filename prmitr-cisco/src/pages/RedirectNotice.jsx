import React, { useEffect } from 'react';

const RedirectNotice = () => {
  const enteredDomain = window.location.hostname;

  useEffect(() => {
    console.log("User entered site:", enteredDomain);

    const timer = setTimeout(() => {
      window.location.href = 'https://academy.prmitr.in';
    }, 5000);

    return () => clearTimeout(timer);
  }, [enteredDomain]);

  return (
    <div >
      <h1>Site Updated !</h1>
      <h1>"<a href="https://academy.prmitr.in">academy.prmitr.in</a>"</h1>
      {/* <p>You accessed this site using: <strong>{enteredDomain}</strong></p> */}
      <p>Redirecting to <a href="https://academy.prmitr.in">academy.prmitr.in</a> in 8 seconds...</p>
      
    </div>
  );
};

export default RedirectNotice;
