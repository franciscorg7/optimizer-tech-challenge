import React, { useState, useEffect } from 'react';
import './styles.scss';

interface SearchbarProps {
  onDebounce: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ onDebounce }) => {
  const [query, setQuery] = useState('');
  const [hasTyped, setHasTyped] = useState(false);

  // Debounce the query input to avoid excessive API calls and list re-renders
  useEffect(() => {
    if (!hasTyped) return;

    const handler = setTimeout(() => {
      onDebounce(query);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  /**
   * Handles the input change event and sets the current string query.
   *
   * @param event - The event triggered by the input change.
   */
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setHasTyped(true);
  };

  return (
    <div className='searchbar'>
      <input
        type='text'
        value={query}
        onChange={handleInputChange}
        placeholder='Search by product name...'
        className='searchbar__input'
      />
    </div>
  );
};

export default Searchbar;
