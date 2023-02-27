let updateTime = () => {
    postMessage(new Date().toString());
};
setInterval(updateTime,1000);