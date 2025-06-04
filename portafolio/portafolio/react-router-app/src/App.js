import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Introduction from './components/Introduction';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import RecommendationsSection from './components/RecommendationsSection';
import LeaveRecommendationForm from './components/LeaveRecommendationForm';
import ScrollToTopButton from './components/ScrollToTopButton';

function App() {
  return (
    <>
      <Header />
      <div className="container mt-5">
        <Introduction />
    
        
      </div>
      <ScrollToTopButton />
    </>
  );
}

export default App;
