import React, { useState } from "react";
import "./style.css";

const SuggestionsInput = ({ suggestions, onSelect }) => {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <ul>
      {suggestions.map((suggestion) => (
        <li key={suggestion} onClick={() => onSelect(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

const AutoCompleteForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const allSuggestions = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if(value.length>0){
    const filtered = allSuggestions.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
    }
    else{
        setSuggestions([]);
    }
  };

  const handleSelectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setSelectedSuggestion(suggestion);
    setSuggestions([]);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div>
          What is your favourite fruit?
          <div>Try Apple 😉</div>
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Start typing..."
        />
        <SuggestionsInput
          suggestions={suggestions}
          onSelect={handleSelectSuggestion}
        />
        {selectedSuggestion && (
          <div className="selected-suggestion">
            Selected Suggestion: <strong>{selectedSuggestion}</strong>
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoCompleteForm;
