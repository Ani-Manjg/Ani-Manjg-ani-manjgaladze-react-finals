import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { CartProvider } from './contexts/cartcontext';
import { AvailabilityProvider } from './contexts/AvailabilityContext';
import { ThemeProvider } from './contexts/ThemeContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetailPage from './Pages/ProductDetailPage';
import { Toaster } from 'react-hot-toast';
import { 
  ShoppingCart, 
  Home, 
  Moon, 
  Sun, 
  List,
  Facebook,
  Twitter,
  Instagram,
  Github 
} from 'lucide-react';


const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      
        <Link 
          to="/" 
          className="flex items-center text-2xl font-bold text-blue-600 dark:text-blue-400"
        >
          <List className="mr-2" /> SHOP.GE
        </Link>

        
        <div className="flex items-center space-x-4">
          <NavLink 
            to="/" 
            className={({ isActive }) => `
              flex items-center space-x-1 
              ${isActive 
                ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'}
            `}
          >
            <Home size={20} />
            <span>მთავარი</span>
          </NavLink>

          <NavLink 
            to="/cart" 
            className={({ isActive }) => `
              flex items-center space-x-1 
              ${isActive 
                ? 'text-blue-600 dark:text-blue-400 font-semibold' 
                : 'text-gray-600 dark:text-gray-300 hover:text-blue-500'}
            `}
          >
            <ShoppingCart size={20} />
            <span>კალათა</span>
          </NavLink>

        
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};


const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = ThemeProvider.useTheme();

  return (
    <button 
      onClick={toggleTheme} 
      className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};


const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">SHOP.GE</h3>
            <p className="text-gray-600 dark:text-gray-400">
              საუკეთესო ხარისხისს პროდუქცია ყველაზე დაბალ ფასად
            </p>
          </div>
          

          
          <div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">სწრაფი ნავიგაცია</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">მთავარი</Link></li>
              <li><Link to="/cart" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">კალათა</Link></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">ჩვენს შესახებ</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">კონტაქტი</a></li>
            </ul>
          </div>

        
          <div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">მომხმარებლის სერვისი</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">შიპინგი</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">დაბრუნება</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">ხშირად დასმული კითხვები</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">მხარდაჭერა</a></li>
            </ul>
          </div>

          
          <div>
            <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">კონტაქტი</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                <Github size={24} />
              </a>
            </div>
          </div>
        </div>

        
        <div className="mt-8 pt-6 border-t dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} SHOP.GE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AvailabilityProvider>
          <Router>
            <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          
              <Toaster
                position="top-center"
                toastOptions={{
                  duration: 2000,
                  style: {
                    background: '#333',
                    color: '#fff',
                    padding: '16px',
                    borderRadius: '8px',
                  },
                  success: {
                    style: {
                      background: '#10B981',
                      color: 'white',
                    },
                  },
                  error: {
                    style: {
                      background: '#EF4444',
                      color: 'white',
                    },
                  },
                }}
              />
              
              
              <Navbar />
              
              
              <main className="flex-grow container mx-auto px-4 py-8">
                <Routes>
                  <Route path="/" element={<ProductList />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </main>
              
            
              <Footer />
            </div>
          </Router>
        </AvailabilityProvider>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;