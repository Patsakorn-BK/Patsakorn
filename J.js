function changeText() {
      const messages = [
        "ยินดีต้อนรับ"
      ];
      let random = Math.floor(Math.random() * messages.length);
      document.getElementById("text").innerText = messages[random];
    }