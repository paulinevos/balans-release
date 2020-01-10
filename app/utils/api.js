export function createSubscriber(email) {
  return fetch(`./createSubscriber.php?email=${email}`, {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then((res) => res.json())
  .then((data) => {
    if (data.status === 200 || data.status === "subscribed" || data.title === "Member Exists") {
      return true
    } else {
      return false;
    }
  })
}