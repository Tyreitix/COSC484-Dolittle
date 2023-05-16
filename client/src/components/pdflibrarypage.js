import React from 'react';

const pdflibrarypage = () => {
  // Assuming you have an array of file names in your 'library' folder
  const fileNames = ['Anthony J. Hayter - Probability and Statistics for Engineers and Scientists-Duxbury Press (2012).pdf', 'malcom-x.pdf', 'Cracking-the-Coding-Interview-6th-Edition-189-Programming-Questions-and-Solutions.pdf'];

  return (
    <div>
      <h1>PDF Library</h1>
      <ul>
        {fileNames.map((fileName, index) => (
          <li key={index}>
            <a href={`../pdflibrary/${fileName}`} target="_blank" rel="noopener noreferrer">
              {fileName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default pdflibrarypage;
