import './App.css';
import { CatList } from './components/CatList';
import { SortBar } from './components/SortBar';

function App() {
  return (
    <div className='w-full flex flex-col max-w-[1440px] mx-auto px-[24px]'>
      <SortBar />
      <CatList />
    </div>
  );
}

export default App;
