export function getMessages(messages): any[] {
    const totalMessagesLength = messages.length;
    let randomNumber = Math.floor(Math.random() * totalMessagesLength);
  
    if (randomNumber > totalMessagesLength) randomNumber = totalMessagesLength;
    if (randomNumber === 1) randomNumber = 2; // so we always have atleast 1-2 messages.
  
    return messages.slice(0, randomNumber);
  }