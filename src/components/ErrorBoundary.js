import React, { Component } from 'react';
import './styles/ErrorBoundary.css';

class ErrorBoundary extends Component {
  state = { hasError: false, errorMessage: '' };

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMessage: error.message };
  }

  componentDidCatch(error, info) {
    console.error('Error caught in boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong: {this.state.errorMessage}</h2>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
