export default function groupApiEvents(webhookEvents) {
  const groups = {};
  for (let i = 0; i < webhookEvents.length; i++) {
    const event = webhookEvents[i];
    const eventResource = event.split('.')[0];
    if (!groups[eventResource]) {
      groups[eventResource] = [];
    }
    if (event.includes(eventResource)) {
      groups[eventResource].push(event);
    }
  }
  return groups;
}
