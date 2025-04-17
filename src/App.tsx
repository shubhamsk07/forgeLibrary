import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Installation from './pages/docs/Installation';
import Introduction from './pages/docs/Introduction';
import MarginDocs from './pages/docs/MarginDocs';
import PaddingDocs from './pages/docs/PaddingDocs';
import HorizontalVerticalSpacingDocs from './pages/docs/HorizontalAndVerticalDocs';
import FontSizeDocs from './pages/docs/FontSizeDocs';
import FontWeightDocs from './pages/docs/FontWeightDocs';
import TextUtilitiesDocs from './pages/docs/TextUtilitsDocs';
import FlexDocs from './pages/docs/FlexDocs';
import GridDocs from './pages/docs/GridDocs';
import ButtonPage from './pages/components/ButtonComp';
import InputPage from './pages/components/InputComp';
import LetterSpacingDocs from './pages/docs/LetterSpacing';
import Docs from './pages/UtilsDocs';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/docs/installation" element={<Installation />} />
      <Route path="/docs/introduction" element={<Introduction />} />
      <Route path="/docs/utils" element={<Docs />} />
      <Route path="/docs/margin" element={<MarginDocs />} />
      <Route path="/docs/padding" element={<PaddingDocs />} />
      <Route path="/docs/horizontalandverticalSpacing" element={<HorizontalVerticalSpacingDocs />} />
      <Route path="/docs/fontsize" element={<FontSizeDocs/>} />
      <Route path='/docs/fontweight' element={<FontWeightDocs />} />
      <Route path="/docs/textutilites" element={<TextUtilitiesDocs />} />
      <Route path="/docs/letterspacing" element={<LetterSpacingDocs />} />
      <Route path="/docs/flex" element={<FlexDocs  />}  />
      <Route path='/docs/grid' element={<GridDocs />} />
      <Route path='/components/button' element={<ButtonPage/>} />
      <Route path='/components/input' element={<InputPage/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
