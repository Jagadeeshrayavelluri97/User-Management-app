import './styles/App.css';
import UserList from './UserList';
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <h1>User Management</h1>
        <UserList />
      </div>
    </ErrorBoundary>
  );
}

export default App;
