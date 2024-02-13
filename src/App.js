import logo from './logo.svg';
import './App.css';
import Testimony from './components/Testimony.jsx';

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony 
          name= 'Saddam Ashkar'
          country= 'Pakistan'
          image = 'Marcelo'
          title= 'IT Consultant'
          company= 'TechGenius Consulting'
          testimony= 'I&apos;ve always struggled with learning JavaScript. I&apos;ve taken many courses but freeCodeCamp&apos;s course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'/>
          
        <Testimony 
          name= 'Michaela Sandwich'
          country= 'South Africa'
          image = 'Michaela'
          title= 'IT Manager'
          company= 'Amazon Consulting'
          testimony= 'It&apos;s scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'/>

        <Testimony 
          name= 'Sarah Chima'
          country= 'Nigeria'
          image = 'Sundance'
          title= 'Software Engineer'
          company= 'ChatDesk'
          testimony= 'freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'/> 
      </div>
    </div>
  );
}





export default App;
