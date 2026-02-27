function basePrint(color, msg) {
  console.log(`${color}%s\x1B[0m`, msg)
  wxpusher(msg)
}

function printRed(msg) {
  basePrint("\x1B[31m", msg)
}

function printGreen(msg) {
  basePrint("\x1B[32m", msg)
}

function printYellow(msg) {
  basePrint("\x1B[33m", msg)
}

function printBlue(msg) {
  basePrint("\x1B[34m", msg)
}

function printMagenta(msg) {
  basePrint("\x1B[35m", msg)
}

function printGrey(msg) {
  basePrint("\x1B[2m", msg)
}

async function wxpusher(message) {
  try {
    const ouWxpusherKey = process.env.OUWXPUSHERKEY
    console.log('message:' + message)
    const response = await fetch('https://wxpusher.zjiecode.com/api/send/message/' + ouWxpusherKey + '/' + message);
    // 检查响应状态
    const data = await response.json();
    //console.log('基本 GET 请求结果:', data);
  } catch (error) {
    console.error('GET 请求失败:', error);
  }
}

export {
  printGreen, printBlue, printRed, printYellow, printMagenta, printGrey
}
