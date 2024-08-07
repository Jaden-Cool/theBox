export function makeDraggable(el) {  
    let active = false;  
    let currentX;  
    let currentY;  
    let initialX;  
    let initialY;  
    let xOffset = 0;  
    let yOffset = 0;  
    
    el.addEventListener('touchstart', dragStart, { passive: false });  
    el.addEventListener('touchend', dragEnd, { passive: true });  
    el.addEventListener('touchmove', drag, { passive: false });  
    el.addEventListener('mousedown', dragStart);  
    el.addEventListener('mouseup', dragEnd);  
    el.addEventListener('mousemove', drag);  
    
    function dragStart(e) {  
      if (e.type === 'touchstart') {  
        initialX = e.touches[0].clientX - xOffset;  
        initialY = e.touches[0].clientY - yOffset;  
      } else {  
        initialX = e.clientX - xOffset;  
        initialY = e.clientY - yOffset;  
      }  
    
      if (e.target === el) {  
        active = true;  
      }  
    }  
    
    function dragEnd(e) {  
      initialX = currentX;  
      initialY = currentY;  
      active = false;  
    }  
    
    function drag(e) {  
      if (active) {  
        e.preventDefault();  
    
        if (e.type === 'touchmove') {  
          currentX = e.touches[0].clientX - initialX;  
          currentY = e.touches[0].clientY - initialY;  
        } else {  
          currentX = e.clientX - initialX;  
          currentY = e.clientY - initialY;  
        }  
    
        xOffset = currentX;  
        yOffset = currentY;  
    
        setTranslate(currentX, currentY, el.style.transform);  
      }  
    }  
    
    function setTranslate(xPos, yPos, transform) {  
      el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)${transform ? ' ' + transform : ''}`;  
    }  
  }