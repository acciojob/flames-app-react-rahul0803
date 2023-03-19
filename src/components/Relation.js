import React, { useState } from 'react';


function Relation() {
  const [str1, setStr1] = useState('');
  const [str2, setStr2] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');

  const calculateRelationship = () => {
    if (!str1 || !str2) {
      setRelationshipStatus('Please Enter valid input');
      return;
    }

    const commonChars = new Set([...str1].filter(char => str2.includes(char)));
    const remainingStr1 = [...str1].filter(char => !commonChars.has(char)).join('');
    const remainingStr2 = [...str2].filter(char => !commonChars.has(char)).join('');

    const result = (remainingStr1.length + remainingStr2.length) % 6;

    switch (result) {
      case 1:
        setRelationshipStatus('Friends');
        break;
      case 2:
        setRelationshipStatus('Love');
        break;
      case 3:
        setRelationshipStatus('Affection');
        break;
      case 4:
        setRelationshipStatus('Marriage');
        break;
      case 5:
        setRelationshipStatus('Enemy');
        break;
      case 0:
        setRelationshipStatus('Siblings');
        break;
      default:
        setRelationshipStatus('');
        break;
    }
  }

  const clearInputs = () => {
    setStr1('');
    setStr2('');
    setRelationshipStatus('');
  }

  return (
    <div>
      <input type="text" value={str1} onChange={(e) => setStr1(e.target.value)} />
      <input type="text" value={str2} onChange={(e) => setStr2(e.target.value)} />
      <button onClick={calculateRelationship}>Calculate Relationship Future</button>
      <button onClick={clearInputs}>Clear</button>
      <h3>{relationshipStatus}</h3>
    </div>
  );
}

export default Relation;
