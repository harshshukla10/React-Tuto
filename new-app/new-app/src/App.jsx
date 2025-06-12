import { useState } from 'react';
import Navbar from './component/navbar.jsx';
import Footer from './component/footer.jsx';
import Card from './component/card.jsx';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Footer></Footer>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      <Card
        title="Wedding Event"
        description="Plan and manage beautiful weddings with ease."
        image="https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-768x512.jpg"
      />
      <Card
        title="Corporate Meeting"
        description="Efficient tools to organize business meetings."
        image="https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-768x512.jpg"
      />
      <Card
        title="Birthday Bash"
        description="Celebrate birthdays in a unique way!"
        image="https://www.teachhub.com/wp-content/uploads/2020/05/Classroom-Management-for-an-Effective-Learning-Environment-768x512.jpg"
      />
    </div>
    </div>
  );
}

export default App;
