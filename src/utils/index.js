const debounce = (func, wait) => {
  let timeout
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      func.apply(context, args)
    }, wait)
  }
}

// 复制文本内容方法
const copyToClipboard = (textToCopy) => {  
  return new Promise((resolve, reject) => {  
    // 尝试使用 navigator.clipboard API  
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {  
      navigator.clipboard.writeText(textToCopy).then(() => {  
        resolve();  
      }).catch(err => {  
        reject(err);  
      });  
    } else {  
      // 回退到使用 document.execCommand  
      const textArea = document.createElement('textarea');  
      textArea.value = textToCopy;  
      textArea.style.position = 'fixed'; // 不在视口内  
      textArea.style.opacity = '0'; // 不可见  
      textArea.style.left = '-999999px';  
      textArea.style.top = '-999999px';  
      document.body.appendChild(textArea);  
  
      textArea.focus();  
      textArea.select();  
  
      try {  
        const successful = document.execCommand('copy');  
        const msg = successful ? '成功' : '失败';  
        console.log(`复制文本到剪贴板 ${msg}`);  
  
        if (successful) {  
          resolve();  
        } else {  
          reject(new Error('复制失败，可能是因为浏览器不支持该操作。'));  
        }  
      } catch (err) {  
        reject(err);  
      }  
  
      textArea.remove();  
    }  
  });  
};  

export { debounce,copyToClipboard }
