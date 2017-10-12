import Home from '../Components/Home'
import About from '../Components/About'
import Queues from '../Components/Queues'
import QueueDetails from '../Components/Queues/Details'

export default function() {
  return [
    Home,
    Queues,
    About,
    
    QueueDetails
  ].filter(c => c.route);
}