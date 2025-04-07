async function checkServerStatus() {
    const serverIp = 'gtnh.trgdy.site';
    const serverPort = '100';
try {
    const response = await fetch(`https://mcapi.us/server/status?ip=${serverIp}&port=${serverPort}`);
    const data = await response.json();

    const statusElement = document.getElementById('status');
    if (data.online) {
        statusElement.textContent = `服务器在线 - 玩家人数: ${data.players.now}/${data.players.max}`;
        statusElement.className = 'online';
    } else {
        statusElement.textContent = '服务器离线';
        statusElement.className = 'offline';
    }
} catch (error) {
    console.error('获取服务器状态失败:', error);
    document.getElementById('status').textContent = '获取服务器状态失败';
    document.getElementById('status').className = 'offline';
}
}
checkServerStatus();
